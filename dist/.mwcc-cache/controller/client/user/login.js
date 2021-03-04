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
exports.UserLoginController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const login_1 = require("../../../service/user/login");
const register_1 = require("../../../service/user/register");
const user_1 = require("../../../service/user/user");
const seller_1 = require("../../../service/user/seller");
let UserLoginController = class UserLoginController {
    async register(registerBody) {
        console.log("register", registerBody);
        let data = await this.userRegisterService.registerUser(registerBody);
        console.log("register data", data);
        if (data.success) {
            data.data.token = await this.jwt.sign({
                ...data,
                identitys: data.identitys
            }, this.jwtConfig.secret);
        }
        console.log("register data", data);
        return data;
    }
    async apply(applySellerBody) {
        const data = await this.userRegisterService.applySeller(applySellerBody);
        console.log("申请成为艺术家", data);
        return data;
    }
    async login(loginBody) {
        let data = await this.loginService.login(loginBody);
        if (data.success) {
            data.data.token = await this.jwt.sign({
                ...data,
                identitys: data.identitys
            }, this.jwtConfig.secret);
        }
        console.log("login data", data);
        return data;
    }
    async passwordRetrieveCodeSend(codeSendBody) {
        const code = Math.random().toString().slice(-6);
        return await this.userService.passwordRetrieveCodeSend({
            sendMail: {
                title: 'yobo-找回密码的验证码',
                code,
                codeTime: 1000 * 60 * 10,
                codeTimeText: '10分钟内有效',
            },
            ...this.email,
            ...codeSendBody
        });
    }
    async passwordRetrieveCodeVerify(codeVerifyBody) {
        return await this.userService.passwordRetrieveCodeVerify({
            ...codeVerifyBody
        });
    }
    async search(searchQuery) {
        let data = await this.sellerService.searchSeller(searchQuery);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", login_1.LoginService)
], UserLoginController.prototype, "loginService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", register_1.UserRegisterService)
], UserLoginController.prototype, "userRegisterService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], UserLoginController.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], UserLoginController.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], UserLoginController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], UserLoginController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], UserLoginController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], UserLoginController.prototype, "email", void 0);
__decorate([
    decorator_1.Post('/register', { summary: '注册成为普通用户' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "register", null);
__decorate([
    decorator_1.Post('/seller/apply', { summary: '申请成为艺术家' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "apply", null);
__decorate([
    decorator_1.Post('/login', { summary: '登录' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "login", null);
__decorate([
    decorator_1.Post('/password/retrieve/code/send', { summary: '找回密码：发送验证码' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "passwordRetrieveCodeSend", null);
__decorate([
    decorator_1.Post('/password/retrieve/code/verify', { summary: '找回密码：验证验证码' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "passwordRetrieveCodeVerify", null);
__decorate([
    decorator_1.Get('/seller/search', { summary: '搜索商家' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "search", null);
UserLoginController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/user', { tagName: '登录' })
], UserLoginController);
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvdXNlci9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBK0c7QUFFL0csdURBQXNEO0FBQ3RELDZEQUFnRTtBQUNoRSxxREFBb0Q7QUFDcEQseURBQXdEO0FBSXhELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBNEI5QixLQUFLLENBQUMsUUFBUSxDQUFZLFlBQVk7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFDckMsSUFBSSxJQUFJLEdBQVEsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLEdBQUcsSUFBSTtnQkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDNUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDO0lBSUQsS0FBSyxDQUFDLEtBQUssQ0FBWSxlQUFlO1FBQ3BDLE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFD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