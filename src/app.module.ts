import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DatabaseModule } from './config/database.module';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [
    DatabaseModule,
    VehicleModule,
    UserModule,
    LoanModule,
  ],
  controllers : [AppController]
})
export class AppModule {}
