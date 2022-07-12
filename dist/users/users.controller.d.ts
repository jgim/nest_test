import { CreateUserDto } from './dto/createUser.dto';
import { VerifyEmailDto } from './dto/verifyEmail.dto';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserInfo } from "./userInfo";
export declare class UsersController {
    createUser(dto: CreateUserDto): Promise<void>;
    verifyEmail(dto: VerifyEmailDto): Promise<string>;
    login(dto: UserLoginDto): Promise<string>;
    getUserInfo(userId: string): Promise<UserInfo>;
}
