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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const user_entity_1 = require("./user.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signUp(user) {
        try {
            console.log("kkkkkkkkkkkkkkkkkkkkk", user);
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const result = await this.userModel.save({ ...user, password: hashedPassword });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async signIn(user) {
        try {
            const { email, password } = user;
            const findUser = await this.userModel.findOneBy({ email });
            if (!findUser) {
                throw new Error("user not found");
            }
            let passwordCheck = await bcrypt.compare(password, findUser.password);
            if (!passwordCheck) {
                throw new Error("Invalid password");
            }
            let payload = { id: findUser.id, name: findUser.name, email: findUser.email };
            let token = (0, jsonwebtoken_1.sign)(payload, 'secret', { expiresIn: '1h' });
            console.log("token------------", token);
            return { token: token };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map