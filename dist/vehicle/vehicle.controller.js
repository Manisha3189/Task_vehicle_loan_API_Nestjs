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
exports.VehicleController = void 0;
const common_1 = require("@nestjs/common");
const vehicle_service_1 = require("./vehicle.service");
const vehicle_dto_1 = require("./vehicle.dto");
let VehicleController = class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    async findAll(response) {
        try {
            const getData = await this.vehicleService.findAll();
            return response.status(common_1.HttpStatus.OK).json({ message: 'get vehicle data found successfully', statusCode: 200, data: getData });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 404,
                message: 'Error: vehicle data not found!',
                error: 'Bad Request'
            });
        }
    }
    async findOne(id, response) {
        try {
            let getData = await this.vehicleService.findOne(+id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'get Vehicle data found successfully', statusCode: 200, data: getData
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 404, message: 'Error: Vahicle data not found' });
        }
    }
    async create(vehicleDto, response) {
        try {
            const createData = await this.vehicleService.create(vehicleDto);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 201,
                message: 'Vehicle has been created successfully',
                data: createData
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 500, message: 'Error: vehicle not created' });
        }
    }
    async update(id, vehicleDto, response) {
        try {
            const updateData = await this.vehicleService.update(+id, vehicleDto);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: 'Vehicle has been successfully updated',
                data: updateData
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 500, message: "Error: vehicle can't updated" });
        }
    }
    async remove(id, response) {
        try {
            const deleteData = await this.vehicleService.remove(+id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 204,
                message: 'Vehicle deleted successfully',
                data: deleteData
            });
        }
        catch (error) {
            return response.status(500).json({ status: 'error', statusCode: 500, message: "Error: vehicle can't deleted" });
        }
    }
};
exports.VehicleController = VehicleController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vehicle_dto_1.VehicleDto, Object]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VehicleController.prototype, "remove", null);
exports.VehicleController = VehicleController = __decorate([
    (0, common_1.Controller)('vehicles'),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], VehicleController);
//# sourceMappingURL=vehicle.controller.js.map