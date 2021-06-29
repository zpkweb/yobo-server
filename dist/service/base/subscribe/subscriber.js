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
exports.BaseSubscriberService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const subscriber_1 = require("../../../entity/subscribe/subscriber");
let BaseSubscriberService = class BaseSubscriberService {
    async BaseCreate({ email = '', userName = '', userEmail = '', userPhone = '' } = {}) {
        return await this.subscriberEntity
            .createQueryBuilder()
            .insert()
            .into(subscriber_1.SubscriberEntity)
            .values({
            email,
            userName,
            userEmail,
            userPhone
        })
            .execute();
    }
    async BaseRetrieveEmail(email) {
        return await this.subscriberEntity
            .createQueryBuilder('subscriber')
            .where("subscriber.email = :email", { email })
            .getOne();
    }
    async BaseRetrieveUserId(userId) {
        return await this.subscriberEntity
            .createQueryBuilder('subscriber')
            .where("subscriber.userId = :userId", { userId })
            .getMany();
    }
    async BaseRetrieveEmailUserId(payload) {
        return await this.subscriberEntity
            .createQueryBuilder('subscriber')
            .where("subscriber.email = :email", { email: payload.email })
            .andWhere("subscriber.userId = :userId", { userId: payload.userId })
            .getMany();
    }
    async BaseRetrieve() {
        return await this.subscriberEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseDeleteEmail(email) {
        return await this.subscriberEntity
            .createQueryBuilder('subscriber')
            .delete()
            .where("subscriber.email = :email", { email })
            .execute();
    }
    async BaseDeleteUserId(userId) {
        return await this.subscriberEntity
            .createQueryBuilder("subscriber")
            .delete()
            .where("subscriber.userId = :userId", { userId })
            .execute();
    }
    async BaseDelete() {
        return await this.subscriberEntity
            .createQueryBuilder()
            .delete()
            .execute();
    }
    async BaseRelationSet(payload) {
        await this.subscriberEntity
            .createQueryBuilder()
            .relation(subscriber_1.SubscriberEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(subscriber_1.SubscriberEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSubscriberService.prototype, "subscriberEntity", void 0);
BaseSubscriberService = __decorate([
    decorator_1.Provide()
], BaseSubscriberService);
exports.BaseSubscriberService = BaseSubscriberService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2Uvc3Vic2NyaWJlL3N1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMscUVBQWtFO0FBR2xFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBV2hDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixLQUFLLEdBQUcsRUFBRSxFQUNWLFFBQVEsR0FBRyxFQUFFLEVBQ2IsU0FBUyxHQUFHLEVBQUUsRUFDZCxTQUFTLEdBQUcsRUFBRSxFQUNmLEdBQUcsRUFBRTtRQUNKLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixLQUFLO1lBQ0wsUUFBUTtZQUNSLFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLO1FBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixDQUFDLFlBQVksQ0FBQzthQUNoQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUM3QyxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTTtRQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxZQUFZLENBQUM7YUFDaEMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDaEQsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLE9BQU87UUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ2hDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUQsUUFBUSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNuRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNoQixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUs7UUFDekIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ2hDLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzdDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO1FBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixDQUFDLFlBQVksQ0FBQzthQUNoQyxNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNoRCxPQUFPLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNkLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLE9BQU8sRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDeEIsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLDZCQUFnQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDeEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FFRixDQUFBO0FBeEZDO0lBREMsdUJBQWlCLENBQUMsNkJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOytEQUFtQjtBQUhwQyxxQkFBcUI7SUFEakMsbUJBQU8sRUFBRTtHQUNHLHFCQUFxQixDQTJGakM7QUEzRlksc0RBQXFCIn0=