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
exports.MessageController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/message/index");
let MessageController = class MessageController {
    async postBanner(body) {
        const data = await this.message.create(body);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], MessageController.prototype, "message", void 0);
__decorate([
    decorator_1.Post('/', { summary: '发送消息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "postBanner", null);
MessageController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/message', { tagName: '消息' })
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2NsaWVudC9tZXNzYWdlL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1GO0FBQ25GLDBEQUF5QztBQUl6QyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQU01QixLQUFLLENBQUMsVUFBVSxDQUFZLElBQUk7UUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FJRixDQUFBO0FBVkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNBLGVBQU87a0RBQUM7QUFHakI7SUFEQyxnQkFBSSxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztJQUNULFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OzttREFHMUI7QUFUVSxpQkFBaUI7SUFGN0IsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDO0dBQzlCLGlCQUFpQixDQWE3QjtBQWJZLDhDQUFpQiJ9