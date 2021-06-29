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
exports.SubscriberController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const subscriber_1 = require("../../../service/subscribe/subscriber");
let SubscriberController = class SubscriberController {
    async create(createBody) {
        const result = await this.subscriberService.create({
            email: createBody.email,
            userId: createBody.userId
        });
        return result;
    }
    async find(findQuery) {
        const result = await this.subscriberService.retrieve({
            email: findQuery.email,
            userId: findQuery.userId
        });
        return result;
    }
    async delete(deleteBody) {
        const result = await this.subscriberService.delete({
            email: deleteBody.email,
            userId: deleteBody.userId
        });
        return result;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", subscriber_1.SubscriberService)
], SubscriberController.prototype, "subscriberService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], SubscriberController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Post(),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "create", null);
__decorate([
    decorator_1.Get(),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "find", null);
__decorate([
    decorator_1.Del(),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriberController.prototype, "delete", null);
SubscriberController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/subscriber', { tagName: '订阅' })
], SubscriberController);
exports.SubscriberController = SubscriberController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2NsaWVudC9zdWJzY3JpYmUvc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBb0c7QUFFcEcsc0VBQXFFO0FBS3JFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUy9CLEtBQUssQ0FBQyxNQUFNLENBQVksVUFBVTtRQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFDakQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtTQUMxQixDQUFDLENBQUE7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUksQ0FBYSxTQUFTO1FBQzlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUNuRCxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxLQUFLLENBQUMsTUFBTSxDQUFZLFVBQVU7UUFDaEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1lBQ2pELEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztZQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUdGLENBQUE7QUFqQ0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNVLDhCQUFpQjsrREFBQztBQUdyQztJQURDLGtCQUFNLEVBQUU7O2lEQUNJO0FBR2I7SUFEQyxnQkFBSSxFQUFFO0lBQ08sV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2tEQU10QjtBQUdEO0lBREMsZUFBRyxFQUFFO0lBQ00sV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2dEQU1yQjtBQUdEO0lBREMsZUFBRyxFQUFFO0lBQ1EsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O2tEQU10QjtBQWpDVSxvQkFBb0I7SUFIaEMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FFcEMsb0JBQW9CLENBb0NoQztBQXBDWSxvREFBb0IifQ==