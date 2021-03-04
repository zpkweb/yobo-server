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
exports.BaseMyLikeSellerServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const likeSeller_1 = require("../../../entity/my/likeSeller");
const user_1 = require("../../../entity/user/user");
let BaseMyLikeSellerServer = class BaseMyLikeSellerServer {
    async BaseCreate(payload) {
        return await this.myLikeSellerEntity
            .createQueryBuilder()
            .insert()
            .into(likeSeller_1.MyLikeSellerEntity)
            .values({
            userName: payload.userName,
            userId: payload.userId,
            sellerName: payload.sellerName,
            sellerId: payload.sellerId
        })
            .execute();
    }
    async BaseHas(payload) {
        console.log("basehas", payload);
        return await this.myLikeSellerEntity
            .createQueryBuilder('myLikeSeller')
            .where("myLikeSeller.userId = :userId", { userId: payload.userId })
            .andWhere("myLikeSeller.sellerId = :sellerId", { sellerId: payload.sellerId })
            .getOne();
    }
    async BaseRetrieve(userId) {
        console.log("BaseRetrieve", userId);
        return await this.myLikeSellerEntity
            .createQueryBuilder('myLikeSeller')
            .leftJoinAndSelect('myLikeSeller.seller', 'seller')
            .leftJoinAndMapOne('myLikeSeller.user', user_1.UserEntity, "user", "user.userId = seller.userId")
            .where("myLikeSeller.userId = :userId", { userId: userId })
            .getMany();
    }
    async BaseRelation(payload) {
        await this.myLikeSellerEntity
            .createQueryBuilder()
            .relation(likeSeller_1.MyLikeSellerEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseDelete(payload) {
        return await this.myLikeSellerEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: payload.userId })
            .andWhere("sellerId = :sellerId", { sellerId: payload.sellerId })
            .execute();
    }
    async BaseDeleteAll(userId) {
        return await this.myLikeSellerEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: userId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(likeSeller_1.MyLikeSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseMyLikeSellerServer.prototype, "myLikeSellerEntity", void 0);
BaseMyLikeSellerServer = __decorate([
    decorator_1.Provide()
], BaseMyLikeSellerServer);
exports.BaseMyLikeSellerServer = BaseMyLikeSellerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbXkvbGlrZVNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyw4REFBOEQ7QUFDOUQsb0RBQWtEO0FBR2xELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBU2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsK0JBQWtCLENBQUM7YUFDeEIsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2FBQ2xDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDbEUsUUFBUSxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM3RSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFNQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2FBQ2xDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQzthQUNsRCxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBVSxFQUFFLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQzthQUN6RixLQUFLLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDMUQsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBSUgsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUMxQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsK0JBQWtCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM3QyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FFRixDQUFBO0FBL0VDO0lBREMsdUJBQWlCLENBQUMsK0JBQWtCLENBQUM7OEJBQ2xCLG9CQUFVO2tFQUFxQjtBQUh4QyxzQkFBc0I7SUFEbEMsbUJBQU8sRUFBRTtHQUNHLHNCQUFzQixDQWtGbEM7QUFsRlksd0RBQXNCIn0=