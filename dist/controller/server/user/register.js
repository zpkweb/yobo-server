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
exports.AdminUserRegisterController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const register_1 = require("../../../service/user/register");
let AdminUserRegisterController = class AdminUserRegisterController {
    async register(registerBody) {
        return await this.userRegisterService.adminRegister(registerBody);
    }
    async adminRegister(registerBody) {
        return await this.userRegisterService.createAdmin(registerBody);
    }
    async customerServiceRegister(registerBody) {
        let data = await this.userRegisterService.createCustomerService(registerBody);
        if (!data.code) {
            data.token = await this.jwt.sign({
                ...data
            }, this.jwtConfig.secret);
        }
        return data;
    }
    async apply(applySellerBody) {
        const data = await this.userRegisterService.applySeller(applySellerBody);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", register_1.UserRegisterService)
], AdminUserRegisterController.prototype, "userRegisterService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], AdminUserRegisterController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AdminUserRegisterController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AdminUserRegisterController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Post('/register', { summary: '注册用户' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserRegisterController.prototype, "register", null);
__decorate([
    decorator_1.Post('/admin/register', { summary: '添加管理员' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserRegisterController.prototype, "adminRegister", null);
__decorate([
    decorator_1.Post('/customerService/register', { summary: '添加客服' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserRegisterController.prototype, "customerServiceRegister", null);
__decorate([
    decorator_1.Post('/seller/apply', { summary: '申请成为艺术家' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserRegisterController.prototype, "apply", null);
AdminUserRegisterController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/user', { tagName: '后台管理-注册' })
], AdminUserRegisterController);
exports.AdminUserRegisterController = AdminUserRegisterController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvdXNlci9yZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUc7QUFFbkcsNkRBQWdFO0FBSWhFLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBaUJ0QyxLQUFLLENBQUMsUUFBUSxDQUFZLFlBQVk7UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFPcEUsQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhLENBQVksWUFBWTtRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQVFsRSxDQUFDO0lBSUQsS0FBSyxDQUFDLHVCQUF1QixDQUFZLFlBQVk7UUFDbkQsSUFBSSxJQUFJLEdBQVEsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkYsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLEdBQUcsSUFBSTthQUNWLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUlELEtBQUssQ0FBQyxLQUFLLENBQVksZUFBZTtRQUNwQyxNQUFNLElBQUksR0FBSSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDO0NBSUYsQ0FBQTtBQTVEQztJQURDLGtCQUFNLEVBQUU7OEJBQ1ksOEJBQW1CO3dFQUFDO0FBR3pDO0lBREMsa0JBQU0sRUFBRTs7d0RBQ0k7QUFHYjtJQURDLGtCQUFNLEVBQUU7O3dEQUNMO0FBR0o7SUFEQyxrQkFBTSxDQUFDLEtBQUssQ0FBQzs7OERBQ0o7QUFLVjtJQUZDLGdCQUFJLENBQUMsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0lBRW5CLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzsyREFReEI7QUFJRDtJQURDLGdCQUFJLENBQUMsaUJBQWlCLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7SUFDckIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dFQVM3QjtBQUlEO0lBREMsZ0JBQUksQ0FBQywyQkFBMkIsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNwQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7MEVBU3ZDO0FBSUQ7SUFEQyxnQkFBSSxDQUFDLGVBQWUsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQztJQUM3QixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7d0RBSXJCO0FBM0RVLDJCQUEyQjtJQUZ2QyxtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxpQkFBaUIsRUFBQyxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQztHQUNyQywyQkFBMkIsQ0ErRHZDO0FBL0RZLGtFQUEyQiJ9