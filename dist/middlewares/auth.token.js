"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const logger_1 = require("../config/logger");
let AuthToken = class AuthToken {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const tokenKey = request.headers;
        if (tokenKey && tokenKey.access_token) {
            let tokenValid = (0, jsonwebtoken_1.verify)(tokenKey.access_token, 'secret');
            const currentTime = Math.floor(Date.now() / 1000);
            if (tokenValid && tokenValid?.exp && Number(tokenValid.exp) > currentTime) {
                logger_1.logger.info("valid Auth Token");
                request.user = tokenValid;
                return true;
            }
            logger_1.logger.info("invalid Auth Token");
            return false;
        }
        return false;
    }
};
exports.AuthToken = AuthToken;
exports.AuthToken = AuthToken = __decorate([
    (0, common_1.Injectable)()
], AuthToken);
//# sourceMappingURL=auth.token.js.map