import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UserCreateInputObjectZodSchema } from '../../prisma/generated/schemas';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ONE_HOUR } from './constants';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    const user = createUserDto;

    try {
      UserCreateInputObjectZodSchema.parse(user);

      const isModifiedPassword = await this.passwordModifier(user.password);

      const updatedUser = {
        ...user,
        password: isModifiedPassword,
      };

      const newUser = await this.prismaService.user.create({
        data: updatedUser,
      });

      const accessToken = this.jwtService.sign({
        userId: newUser.id,
        email: user.email,
      });

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: ONE_HOUR,
        path: '/',
      });

      return {
        message: 'User created successfully',
        id: newUser.id,
      };
    } catch (error) {
      if (error.name === 'ZodError') {
        throw new BadRequestException('Validation failed');
      }
      if (error.name === 'PrismaClientKnownRequestError') {
        throw new ConflictException('User with this email already exists');
      }
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;

    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const isPasswordCorrect = await compare(password, user.password);

      if (isPasswordCorrect) {
        const accessToken = this.jwtService.sign({
          userId: user?.id,
          email: user?.email,
        });

        res.cookie('accessToken', accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: ONE_HOUR,
        });

        return { message: 'User logged in successfully' };
      } else {
        throw new UnauthorizedException('Invalid email or password');
      }
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to login');
    }
  }

  logout(res: Response) {
    res.clearCookie('accessToken', {
      httpOnly: true,
    });

    return { message: 'User logged out successfully' };
  }

  private async passwordModifier(password: string) {
    try {
      const salt = await genSalt(8);
      password = await hash(password, salt);
      return password;
    } catch (error) {
      throw new InternalServerErrorException('Failed to process password');
    }
  }
}
