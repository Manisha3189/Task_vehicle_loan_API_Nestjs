import { LoanService } from './loan.service';
import { Loan } from './loan.entity';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    LoanEligible(loanData: Loan): Promise<{
        messsage: string;
        statusCode: number;
    }>;
    submitLoan(loanData: Loan): Promise<{
        messsage: string;
        statusCode: number;
    }>;
    getLoanStatus(id: string): Promise<{
        data: any;
        statusCode: number;
        messsage?: undefined;
        status?: undefined;
    } | {
        messsage: string;
        statusCode: number;
        status: string;
        data?: undefined;
    }>;
    updateLoanStatus(id: string, response: any): Promise<any>;
    getAllLoans(response: any): Promise<any>;
}
