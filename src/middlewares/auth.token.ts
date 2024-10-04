import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { sign,verify } from 'jsonwebtoken';
import { logger } from 'src/config/logger';

@Injectable()
export class AuthToken implements CanActivate {

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const tokenKey = request.headers;

    if (tokenKey && tokenKey.access_token) {
        let tokenValid : any = verify(tokenKey.access_token,'secret');
        const currentTime : number = Math.floor(Date.now() / 1000); 
        if( tokenValid && tokenValid?.exp && Number(tokenValid.exp) > currentTime){
            //valid Token
            logger.info("valid Auth Token");
            request.user = tokenValid;
            return true;
        }
        logger.info("invalid Auth Token")
        return false;
    }
    return false;
  }
}