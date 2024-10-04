import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './loan.entity';
import { Vehicle } from 'src/vehicle/vehicle.entity';

@Injectable()
export class LoanService {
    constructor(
        @InjectRepository(Loan)
        private loanRepository: Repository<Loan>,
        @InjectRepository(Vehicle)
        private vahicleRep: Repository<Vehicle>,

      ) {}
    
  async LoanEligible(applicantPhoneNumber){
    try{
        let result = await this.loanRepository.findOneBy({ applicantPhoneNumber});
        return result ? true : false;
    }catch(error){
        throw error;
    }
  }

  async VehicleValid(VIN){
    try{
        let result = await this.vahicleRep.findOneBy({ VIN});
        return result ? true : false;
    }catch(error){
        throw error;
    }
  }


  async submitLoan(loanData: Loan): Promise<any> {
    try{
        let result = await this.loanRepository.save(loanData);
        return result
    }catch(error){
        throw error;
    }
  }

  async update(id: number, loanData : { status : string}): Promise<any> {
    try{
         return await this.loanRepository.update(id, loanData);
    }catch(error){
        throw error;
    }
  }


  async getLoanStatus(id: any): Promise<any> {
    try{
        return await this.loanRepository.findOneBy({ id });

    }catch(error){
        throw error;
    }
  }

  async getAllLoans(): Promise<Loan[]> {
    try{
        return await this.loanRepository.find();
    }catch(error){
        throw error;
    }
  }


}
