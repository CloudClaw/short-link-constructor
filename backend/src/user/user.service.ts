import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ONE_HOUR } from './constants';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import NotAuthorizedError from '../errors/not-authorized-error';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto, res: Response) {
    try {
      const hashedPassword = await this.hashPassword(createUserDto.password);

      const updatedUser = {
        ...createUserDto,
        password: hashedPassword,
      };

      const newUser = await this.prismaService.user.create({
        data: updatedUser,
      });

      const accessToken = this.jwtService.sign({
        userId: newUser.id,
        email: newUser.email,
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
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
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

      if (!isPasswordCorrect) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const accessToken = this.jwtService.sign({
        userId: user.id,
        email: user.email,
      });

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: ONE_HOUR,
      });

      return { message: 'User logged in successfully' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new NotAuthorizedError();
      }
      throw new InternalServerErrorException('Failed to login');
    }
  }

  logout(res: Response): void {
    res.clearCookie('accessToken', {
      httpOnly: true,
    });
  }

  private async hashPassword(password: string) {
    try {
      const salt = await genSalt(8);
      return await hash(password, salt);
    } catch {
      throw new InternalServerErrorException('Failed to process password');
    }
  }
}
