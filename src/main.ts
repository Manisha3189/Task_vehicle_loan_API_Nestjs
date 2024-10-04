import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
const morgan = require("morgan")
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
import { logger } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;

  app.use(helmet());   
  // ====== security purpose used in prod env ======
  // app.enableCors({
  //   origin: (origin, callback) => {
  //     console.log('CORS Origin:', origin); 
  //     const allowedOrigins = ['http://localhost:4200']; 
  //     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   optionsSuccessStatus: 204,
  //   exposedHeaders: [
  //     "Content-type",
  //     "Accept",
  //     "X-Access-Token",
  //     "x-auth-token",
  //     "Authorization"
  //   ],
  //   allowedHeaders: [
  //     "Content-type",
  //     "Accept",
  //     "X-Access-Token",
  //     "x-auth-token",
  //     "Authorization"
  //   ],  
  //   credentials: true,
  // });
  app.enableCors();

  //Logger Configuration
  logger.stream = {
    write: function (message, encoding) {
      logger.info(message);
    }
  };
  app.use(morgan("dev", { stream: logger.stream }));
  
  app.setGlobalPrefix('api');

  await app.listen(port,()=>{
    logger.info(`Server listening on port ${port}`);
  });
}

bootstrap();
