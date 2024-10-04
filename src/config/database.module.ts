import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/vehicle/vehicle.entity';
import { UserModel } from 'src/user/user.entity';
import { Loan } from 'src/loan/loan.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'vehicles.DB',
        entities: [UserModel,Vehicle, Loan],
        synchronize: true, 
      }),
    ],
    exports: [TypeOrmModule],
})
  
export class DatabaseModule {}
