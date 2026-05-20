import { Controller, Post, Body, Patch, Param, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserCreateInputObjectZodSchema } from '../../prisma/generated/schemas';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly PrismaService: PrismaService,
  ) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = createUserDto;

    try {
      UserCreateInputObjectZodSchema.parse(user);

      const newUser = await this.PrismaService.user.create({
        data: user,
      });

      return newUser.id;
    } catch (error) {
      console.log(error);
      if (error.name === 'ZodError') {
        return {
          statusCode: 400,
          message: 'Validation failed',
        };
      }
      if (error.name === 'PrismaClientKnownRequestError') {
        return {
          statusCode: 400,
          message: 'User with this email already exists',
        };
      }
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
}
