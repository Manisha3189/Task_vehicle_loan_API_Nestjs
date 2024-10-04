import { Module } from '@nestjs/common';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './loan.entity';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { Vehicle } from 'src/vehicle/vehicle.entity';

@Module({
  imports : [ TypeOrmModule.forFeature([Loan, Vehicle])],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
