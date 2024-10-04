import { Repository } from 'typeorm';
import { UserModel } from './user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: Repository<UserModel>);
    signUp(user: any): Promise<any>;
    signIn(user: UserModel): Promise<{
        token: string;
    }>;
}
