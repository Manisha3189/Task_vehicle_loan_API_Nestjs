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
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vehicle_entity_1 = require("./vehicle.entity");
let VehicleService = class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async findAll() {
        try {
            const result = await this.vehicleRepository.find();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const result = await this.vehicleRepository.findOneBy({ id });
            if (!result) {
                throw new Error("Vahicle data not found");
            }
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async create(vehicleDto) {
        try {
            const vehicle = this.vehicleRepository.save(vehicleDto);
            return vehicle;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, vehicleDto) {
        try {
            await this.vehicleRepository.update(id, vehicleDto);
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const result = await this.vehicleRepository.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.VehicleService = VehicleService;
exports.VehicleService = VehicleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VehicleService);
//# sourceMappingURL=vehicle.service.js.map