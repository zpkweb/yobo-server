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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS91c2VyL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUM5RCx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGlEQUFrRDtBQUNsRCw0Q0FBbUQ7QUFDbkQsaURBQXFEO0FBR3JELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFvQnZCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpGLElBQUcsZ0JBQWdCLEVBQUM7WUFDbEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFPRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU87UUFFakIsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUVqRSxJQUFHLENBQUMsSUFBSSxFQUFDO1lBRVAsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRTFCLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQy9DLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUs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