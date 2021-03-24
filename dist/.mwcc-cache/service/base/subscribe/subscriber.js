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
exports.BaseSubscriberServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const subscriber_1 = require("../../../entity/subscribe/subscriber");
let BaseSubscriberServer = class BaseSubscriberServer {
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
        console.log("BaseRetrieveEmail", email);
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
], BaseSubscriberServer.prototype, "subscriberEntity", void 0);
BaseSubscriberServer = __decorate([
    decorator_1.Provide()
], BaseSubscriberServer);
exports.BaseSubscriberServer = BaseSubscriberServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2Uvc3Vic2NyaWJlL3N1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMscUVBQWtFO0FBR2xFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBVy9CLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixLQUFLLEdBQUcsRUFBRSxFQUNWLFFBQVEsR0FBRyxFQUFFLEVBQ2IsU0FBUyxHQUFHLEVBQUUsRUFDZCxTQUFTLEdBQUcsRUFBRSxFQUNmLEdBQUcsRUFBRTtRQUNKLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw2QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixLQUFLO1lBQ0wsUUFBUTtZQUNSLFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ2hDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzdDLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO1FBQzdCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixDQUFDLFlBQVksQ0FBQzthQUNoQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNoRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsT0FBTztRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxZQUFZLENBQUM7YUFDaEMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1RCxRQUFRLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ25FLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSztRQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxZQUFZLENBQUM7YUFDaEMsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDN0MsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU07UUFDM0IsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ2hDLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2hELE9BQU8sRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVO1FBQ2QsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsT0FBTyxFQUFFLENBQUM7SUFFZixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUN4QixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsNkJBQWdCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGLENBQUE7QUF6RkM7SUFEQyx1QkFBaUIsQ0FBQyw2QkFBZ0IsQ0FBQzs4QkFDbEIsb0JBQVU7OERBQW1CO0FBSHBDLG9CQUFvQjtJQURoQyxtQkFBTyxFQUFFO0dBQ0csb0JBQW9CLENBNEZoQztBQTVGWSxvREFBb0IifQ==