import { Repository } from 'typeorm';
import { Loan } from './loan.entity';
import { Vehicle } from 'src/vehicle/vehicle.entity';
export declare class LoanService {
    private loanRepository;
    private vahicleRep;
    constructor(loanRepository: Repository<Loan>, vahicleRep: Repository<Vehicle>);
    LoanEligible(applicantPhoneNumber: any): Promise<boolean>;
    VehicleValid(VIN: any): Promise<boolean>;
    submitLoan(loanData: Loan): Promise<any>;
    update(id: number): Promise<any>;
    getLoanStatus(id: any): Promise<any>;
    getAllLoans(): Promise<Loan[]>;
}
