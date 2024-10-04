import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './loan.entity';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService
  ) {}

  @Post('eligible')
  async LoanEligible(@Body() loanData: Loan) {
    let phonenumber = loanData?.applicantPhoneNumber;
    let loanExistCheck = await this.loanService.LoanEligible(phonenumber);
    if( loanExistCheck){
        return { messsage : "loan not eligibility for applicant", statusCode : 401}
    }else{
        return { messsage : "loan eligibility for applicant", statusCode : 401}
    }

  }

  @Post('submission')
  async submitLoan(@Body() loanData: Loan) {
    try{
        let phonenumber = loanData?.applicantPhoneNumber;
        let Vin = loanData?.vehicleId;
        if(!phonenumber || !Vin ){
            return { messsage : "invalid data request", statusCode : 401}
        }

        // valid for vahicle data
        let vehicleInValid = await this.loanService.VehicleValid(Vin);
        if( !vehicleInValid){
            return { messsage : "invalid vehicle data", statusCode : 401}
        }
        // check for loan eligibility
        let loanExistCheck = await this.loanService.LoanEligible(phonenumber);
        if( loanExistCheck){
            return { messsage : "loan not eligibility for applicant", statusCode : 400}
        }
        const result = await this.loanService.submitLoan(loanData);
        return { messsage : "Your loan submitt successfully", statusCode : 201}
    
    }catch(error){
        return { messsage : "something went wrong", statusCode : 500}

    }
  }

  @Get(':id')
  async getLoanStatus(@Param('id') id: string) {
    try{
        console.log("rrrrr",id)
        const result =  await this.loanService.getLoanStatus(+id);
        return { data : result,
            statusCode : 200,
            }

    }catch(error){
        return { messsage : "something went wrong", statusCode : 500, status : 'error'}

    }
  }

  @Put(':id')

  async updateLoanStatus(@Param('id') id: string,@Body() loanData: { status : string}, @Res() response){
    try{
        const updateData = await this.loanService.update(+id, loanData);
        return response.status(HttpStatus.OK).json({
            statusCode : 200,
            message: 'Loan status has been successfully updated'
            });

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : "Error: Loan can't updated"}); 
    }
    
  }

  @Get()
  async getAllLoans(@Res() response) {
    try{
        const result = await  this.loanService.getAllLoans();
        return response.status(HttpStatus.OK).json({
            statusCode : 200,
            data : result
            });

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : "something went wrong"}); 

    }
  }
}
