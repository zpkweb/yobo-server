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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../entity/user/user");
const user_2 = require("../base/user/user");
const identityList_1 = require("./identityList");
let LoginService = class LoginService {
    async validatePassword(payload) {
        console.log("validatePassword", payload);
        const validataPassword = await this.baseUserServer.baseValidatePassword(payload);
        if (validataPassword) {
            return {
                success: true,
                code: 10206
            };
        }
        else {
            return {
                success: false,
                code: 10204
            };
        }
    }
    async login(payload) {
        const user = await this.baseUserServer.baseLoginUser(payload);
        if (!user) {
            return {
                success: false,
                code: 10202
            };
        }
        console.log("login", user);
        const userPassword = await this.validatePassword({
            userId: user.userId,
            password: payload.password
        });
        if (userPassword.success) {
            return {
                data: user,
                success: true,
                code: 10011
            };
        }
        else {
            return userPassword;
        }
    }
    async adminLogin(payload) {
        if (payload.name === this.root.name && payload.password === this.root.password) {
            return {
                data: {
                    name: payload.name
                },
                success: true,
                code: 10011
            };
        }
        const user = await this.baseUserServer.baseLoginAdmin(payload);
        console.log("user", user);
        if (!user) {
            return {
                success: false,
                code: 10202
            };
        }
        const userPassword = await this.validatePassword({
            userId: user.userId,
            password: payload.password
        });
        if (!userPassword.success) {
            return userPassword;
        }
        if (user.identitys && !user.identitys.length) {
            return {
                success: false,
                code: 10207
            };
        }
        let loginAuth = false;
        let authMax = 100;
        for (let item of user.identitys) {
            if (item.index < 5) {
                loginAuth = true;
                if (item.index < authMax) {
                    authMax = item.index;
                }
            }
        }
        if (loginAuth) {
            console.log("user.identitys", user.identitys);
            const menu = await this.identityListService.retrieveIdentityList({
                index: authMax
            });
            if (!menu.success) {
                return menu;
            }
            return {
                data: {
                    ...user,
                    menu: menu.data.menu
                },
                success: true,
                code: 10011
            };
        }
        else {
            return {
                success: false,
                code: 10203
            };
        }
    }
};
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], LoginService.prototype, "userEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_2.BaseUserServer)
], LoginService.prototype, "baseUserServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", identityList_1.IdentityListService)
], LoginService.prototype, "identityListService", void 0);
__decorate([
    decorator_1.Config('root'),
    __metadata("design:type", Object)
], LoginService.prototype, "root", void 0);
LoginService = __decorate([
    decorator_1.Provide()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS91c2VyL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUM5RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGlEQUFrRDtBQUNsRCw0Q0FBbUQ7QUFDbkQsaURBQXFEO0FBR3JELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFvQnZCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDeEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakYsSUFBRyxnQkFBZ0IsRUFBQztZQUNsQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU9ELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTztRQUVqQixNQUFNLElBQUksR0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWpFLElBQUcsQ0FBQyxJQUFJLEVBQUM7WUFFUCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFMUIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdC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