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
exports.AdminEmailController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/email/index");
let AdminEmailController = class AdminEmailController {
    async send(body) {
        return await this.emailService.send(body);
    }
};
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], AdminEmailController.prototype, "email", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], AdminEmailController.prototype, "emailService", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AdminEmailController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AdminEmailController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Post('/send', { summary: '直接联系' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminEmailController.prototype, "send", null);
AdminEmailController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/email', { tagName: '后台-发送邮件' })
], AdminEmailController);
exports.AdminEmailController = AdminEmailController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvZW1haWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1HO0FBQ25HLHdEQUE2QztBQUk3QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW1CL0IsS0FBSyxDQUFDLElBQUksQ0FBWSxJQUFJO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0NBR0YsQ0FBQTtBQXJCQztJQURDLGtCQUFNLENBQUMsT0FBTyxDQUFDOzttREFDVjtBQUdOO0lBREMsa0JBQU0sRUFBRTs4QkFDSyxlQUFZOzBEQUFDO0FBRzNCO0lBREMsa0JBQU0sRUFBRTs7aURBQ0w7QUFHSjtJQURDLGtCQUFNLENBQUMsS0FBSyxDQUFDOzt1REFDSjtBQU9WO0lBREMsZ0JBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFDckIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dEQUVwQjtBQXJCVSxvQkFBb0I7SUFGaEMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUM7R0FDeEMsb0JBQW9CLENBd0JoQztBQXhCWSxvREFBb0IifQ==