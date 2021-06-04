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
exports.AdminMessageController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/message/index");
let AdminMessageController = class AdminMessageController {
    async findAll(queryAll) {
        const data = await this.message.findAll(queryAll);
        return data;
    }
    async search(queryAll) {
        const data = await this.message.search(queryAll);
        return data;
    }
    async delete(messageId) {
        const data = await this.message.delete(messageId);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], AdminMessageController.prototype, "message", void 0);
__decorate([
    decorator_1.Get('/', { summary: '获取所有消息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminMessageController.prototype, "findAll", null);
__decorate([
    decorator_1.Get('/search', { summary: '获取所有消息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminMessageController.prototype, "search", null);
__decorate([
    decorator_1.Post('/delete', { summary: '删除消息' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminMessageController.prototype, "delete", null);
AdminMessageController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/message', { tagName: '后台-消息' })
], AdminMessageController);
exports.AdminMessageController = AdminMessageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL3NlcnZlci9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStGO0FBQy9GLDBEQUF5QztBQUl6QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQU1qQyxLQUFLLENBQUMsT0FBTyxDQUFhLFFBQVE7UUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxLQUFLLENBQUMsTUFBTSxDQUFhLFFBQVE7UUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFNRCxLQUFLLENBQUMsTUFBTSxDQUFTLFNBQVM7UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FFRixDQUFBO0FBdkJDO0lBREMsa0JBQU0sRUFBRTs4QkFDQSxlQUFPO3VEQUFDO0FBR2pCO0lBREMsZUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNkLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztxREFHeEI7QUFHRDtJQURDLGVBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDckIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O29EQUd2QjtBQU1EO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7SUFDbkIsV0FBQSxnQkFBSSxFQUFFLENBQUE7Ozs7b0RBR25CO0FBeEJVLHNCQUFzQjtJQUZsQyxtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQztHQUN2QyxzQkFBc0IsQ0EwQmxDO0FBMUJZLHdEQUFzQiJ9