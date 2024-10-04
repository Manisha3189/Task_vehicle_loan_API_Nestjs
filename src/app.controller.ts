import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  // api health-check
  @Get('health-check')
  async healthCheck() {
    return { statusCode : 200, status : "OK"}
  }

}
