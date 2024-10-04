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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(response, reqBody) {
        try {
            let createData = await this.userService.signUp(reqBody);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                data: createData
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: 'Bad Request'
            });
        }
    }
    async getUsers(response, payload) {
        try {
            const getData = await this.userService.signIn(payload);
            return response.set({ 'access_token': getData.token }).status(common_1.HttpStatus.OK).json({
                message: 'login success', data: getData
            });
        }
        catch (error) {
            return response.json({ statusCode: 401, message: 'Invalid credentials' });
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map