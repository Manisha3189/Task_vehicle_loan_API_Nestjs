"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
const common_1 = require("@nestjs/common");
const loan_service_1 = require("./loan.service");
const loan_entity_1 = require("./loan.entity");
let LoanController = class LoanController {
    constructor(loanService) {
        this.loanService = loanService;
    }
    async LoanEligible(loanData) {
        let phonenumber = loanData?.applicantPhoneNumber;
        let loanExistCheck = await this.loanService.LoanEligible(phonenumber);
        if (loanExistCheck) {
            return { messsage: "loan not eligibility for applicant", statusCode: 401 };
        }
        else {
            return { messsage: "loan eligibility for applicant", statusCode: 401 };
        }
    }
    async submitLoan(loanData) {
        try {
            let phonenumber = loanData?.applicantPhoneNumber;
            let Vin = loanData?.vehicleId;
            if (!phonenumber || !Vin) {
                return { messsage: "invalid data request", statusCode: 401 };
            }
            let vehicleInValid = await this.loanService.VehicleValid(Vin);
            if (!vehicleInValid) {
                return { messsage: "invalid vehicle data", statusCode: 401 };
            }
            let loanExistCheck = await this.loanService.LoanEligible(phonenumber);
            if (loanExistCheck) {
                return { messsage: "loan not eligibility for applicant", statusCode: 401 };
            }
            const result = await this.loanService.submitLoan(loanData);
            return { messsage: "Your loan submitt successfully", statusCode: 201 };
        }
        catch (error) {
            return { messsage: "something went wrong", statusCode: 403 };
        }
    }
    async getLoanStatus(id) {
        try {
            console.log("rrrrr", id);
            const result = await this.loanService.getLoanStatus(+id);
            return { data: result,
                statusCode: 200,
            };
        }
        catch (error) {
            return { messsage: "something went wrong", statusCode: 500, status: 'error' };
        }
    }
    async updateLoanStatus(id, response) {
        try {
            const updateData = await this.loanService.update(+id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: 'Loan status has been successfully updated'
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 500, message: "Error: Loan can't updated" });
        }
    }
    async getAllLoans(response) {
        try {
            const result = await this.loanService.getAllLoans();
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                data: result
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 500, message: "something went wrong" });
        }
    }
};
exports.LoanController = LoanController;
__decorate([
    (0, common_1.Post)('eligible'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_entity_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "LoanEligible", null);
__decorate([
    (0, common_1.Post)('submission'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_entity_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "submitLoan", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "getLoanStatus", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "updateLoanStatus", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoanController.prototype, "getAllLoans", null);
exports.LoanController = LoanController = __decorate([
    (0, common_1.Controller)('loans'),
    __metadata("design:paramtypes", [loan_service_1.LoanService])
], LoanController);
//# sourceMappingURL=loan.controller.js.map