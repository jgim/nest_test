import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { VerifyEmailDto } from './dto/verifyEmail.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserInfo } from "./userInfo";

@Controller('users')
export class UsersController {

	@Post()
	async createUser(@Body() dto: CreateUserDto): Promise<void> {
		console.log(dto);
	}

	@Post('/email-verify')
	async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
		console.log(dto);
		return ;
	}

	@Post('/login')
	async login(@Body() dto: UserLoginDto): Promise<string> {
		console.log(dto);
    return;
	}

	@Get('/:id')
	async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }

}
