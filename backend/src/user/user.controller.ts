import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import type { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @HttpCode(201)
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.create(createUserDto, res);
  }

  @Post('login')
  @HttpCode(201)
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.login(loginUserDto, res);
  }

  @Post('logout')
  @HttpCode(204)
  logOutUser(@Res({ passthrough: true }) res: Response) {
    this.userService.logout(res);
  }
}
