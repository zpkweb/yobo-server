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
exports.EmailController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/email/index");
let EmailController = class EmailController {
    async send(body) {
        return await this.emailService.send(body);
    }
    async bid(body) {
        return await this.emailService.bid(body);
    }
};
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], EmailController.prototype, "email", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], EmailController.prototype, "emailService", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], EmailController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], EmailController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Post('/send', { summary: '直接联系' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "send", null);
__decorate([
    decorator_1.Post('/bid', { summary: '出价' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "bid", null);
EmailController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/email', { tagName: '前端-发送邮件' })
], EmailController);
exports.EmailController = EmailController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvZW1haWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1HO0FBQ25HLHdEQUE2QztBQUk3QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBbUIxQixLQUFLLENBQUMsSUFBSSxDQUFZLElBQUk7UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFPRCxLQUFLLENBQUMsR0FBRyxDQUFZLElBQUk7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7Q0FDRixDQUFBO0FBNUJDO0lBREMsa0JBQU0sQ0FBQyxPQUFPLENBQUM7OzhDQUNWO0FBR047SUFEQyxrQkFBTSxFQUFFOzhCQUNLLGVBQVk7cURBQUM7QUFHM0I7SUFEQyxrQkFBTSxFQUFFOzs0Q0FDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7O2tEQUNKO0FBT1Y7SUFEQyxnQkFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUNyQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7MkNBRXBCO0FBT0Q7SUFEQyxnQkFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNuQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7MENBRW5CO0FBOUJVLGVBQWU7SUFGM0IsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsWUFBWSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxDQUFDO0dBQ2xDLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIn0=