import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.entity';

@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async signUp(@Res() response , @Body() reqBody: any) {
      try{
           let createData = await this.userService.signUp(reqBody);
           return response.status(HttpStatus.CREATED).json({
              message: 'User has been created successfully',
               data : createData});
      }catch(error){
          return response.status(HttpStatus.BAD_REQUEST).json({
              statusCode: 400,
              message: 'Error: User not created!',
              error: 'Bad Request'
          });
      }
    }
  
    @Post('login')
    async getUsers(@Res() response , @Body() payload: UserModel) {
      try{
             const getData = await this.userService.signIn(payload);
             return response.set({ 'access_token': getData.token }).status(HttpStatus.OK).json({
             message: 'login success', data : getData });
      }catch(error){
          return response.json({ statusCode : 401, message : 'Invalid credentials'});
      }
    }
  
}
