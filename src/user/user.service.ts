import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserModel } from './user.entity';
import { sign,verify } from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserModel)
        private userModel: Repository<UserModel>,
      ) {}
    

    async signUp(user: any) : Promise<any>{
        try{
            console.log("kkkkkkkkkkkkkkkkkkkkk",user)
            const hashedPassword = await bcrypt.hash(user.password, 10);        
            const result = await this.userModel.save({ ...user, password: hashedPassword })
            return result;
        }catch(error){
            throw error;
        }
      }
    
      async signIn(user : UserModel) : Promise<{ token : string}>{
        try{
        const { email, password} = user;
        const findUser = await this.userModel.findOneBy({ email });
    
        if( !findUser){
           throw new Error("user not found");
        }
         let passwordCheck = await bcrypt.compare(password, findUser.password);
         if( !passwordCheck){
           throw new Error("Invalid password");
         }
         let payload = { id: findUser.id, name : findUser.name, email : findUser.email };
          let token  = sign(payload,'secret',{ expiresIn : '1h'});
         console.log("token------------",token)
         return { token : token}
    
        }catch(error){
          throw error;
        }
      }
    
}
