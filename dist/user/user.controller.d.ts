import { UserService } from './user.service';
import { UserModel } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(response: any, reqBody: any): Promise<any>;
    getUsers(response: any, payload: UserModel): Promise<any>;
}
