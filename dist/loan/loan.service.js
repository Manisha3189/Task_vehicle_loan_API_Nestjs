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
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const loan_entity_1 = require("./loan.entity");
const vehicle_entity_1 = require("../vehicle/vehicle.entity");
let LoanService = class LoanService {
    constructor(loanRepository, vahicleRep) {
        this.loanRepository = loanRepository;
        this.vahicleRep = vahicleRep;
    }
    async LoanEligible(applicantPhoneNumber) {
        try {
            let result = await this.loanRepository.findOneBy({ applicantPhoneNumber });
            return result ? true : false;
        }
        catch (error) {
            throw error;
        }
    }
    async VehicleValid(VIN) {
        try {
            let result = await this.vahicleRep.findOneBy({ VIN });
            return result ? true : false;
        }
        catch (error) {
            throw error;
        }
    }
    async submitLoan(loanData) {
        try {
            let result = await this.loanRepository.save(loanData);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id) {
        try {
            return await this.loanRepository.update(id, { status: 'approved' });
        }
        catch (error) {
            throw error;
        }
    }
    async getLoanStatus(id) {
        try {
            return await this.loanRepository.findOneBy({ id });
        }
        catch (error) {
            throw error;
        }
    }
    async getAllLoans() {
        try {
            return await this.loanRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
};
exports.LoanService = LoanService;
exports.LoanService = LoanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loan_entity_1.Loan)),
    __param(1, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LoanService);
//# sourceMappingURL=loan.service.js.map