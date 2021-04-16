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
exports.AdminUserLoginController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const login_1 = require("../../../service/user/login");
const login_2 = require("../../../dto/user/login");
let AdminUserLoginController = class AdminUserLoginController {
    async login(loginBody) {
        let data = await this.loginService.adminLogin(loginBody);
        if (data.success) {
            data.data.token = await this.jwt.sign({
                ...data
            }, this.jwtConfig.secret);
        }
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", login_1.LoginService)
], AdminUserLoginController.prototype, "loginService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], AdminUserLoginController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AdminUserLoginController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AdminUserLoginController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Post('/login', { summary: '登录' }),
    decorator_1.Validate(),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_2.AdminUserLoginDTO]),
    __metadata("design:returntype", Promise)
], AdminUserLoginController.prototype, "login", null);
AdminUserLoginController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/user', { tagName: '后台管理-登录' })
], AdminUserLoginController);
exports.AdminUserLoginController = AdminUserLoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvdXNlci9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBNkc7QUFFN0csdURBQXNEO0FBQ3RELG1EQUF1RDtBQUl2RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQWlCbkMsS0FBSyxDQUFDLEtBQUssQ0FBWSxTQUE0QjtRQUNqRCxJQUFJLElBQUksR0FBUSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLEdBQUcsSUFBSTthQUNSLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQztDQUlGLENBQUE7QUEzQkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNLLG9CQUFZOzhEQUFDO0FBRzNCO0lBREMsa0JBQU0sRUFBRTs7cURBQ0k7QUFHYjtJQURDLGtCQUFNLEVBQUU7O3FEQUNMO0FBR0o7SUFEQyxrQkFBTSxDQUFDLEtBQUssQ0FBQzs7MkRBQ0o7QUFLVjtJQUZDLGdCQUFJLENBQUMsUUFBUSxFQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDO0lBQzdCLG9CQUFRLEVBQUU7SUFDRSxXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7O3FDQUFZLHlCQUFpQjs7cURBU2xEO0FBMUJVLHdCQUF3QjtJQUZwQyxtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztHQUN6Qyx3QkFBd0IsQ0E4QnBDO0FBOUJZLDREQUF3QiJ9