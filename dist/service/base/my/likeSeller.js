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
        return await this.myLikeSellerEntity
            .createQueryBuilder('myLikeSeller')
            .where("myLikeSeller.userId = :userId", { userId: payload.userId })
            .andWhere("myLikeSeller.sellerId = :sellerId", { sellerId: payload.sellerId })
            .getOne();
    }
    async BaseRetrieve(userId) {
        return await this.myLikeSellerEntity
            .createQueryBuilder('myLikeSeller')
            .leftJoinAndSelect('myLikeSeller.seller', 'seller')
            .where("myLikeSeller.userId = :userId", { userId: userId })
            .getMany();
    }
    async BaseRetrieveFollow(sellerId) {
        return await this.myLikeSellerEntity.count({ sellerId: sellerId });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbXkvbGlrZVNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyw4REFBOEQ7QUFJOUQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFTakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQywrQkFBa0IsQ0FBQzthQUN4QixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7YUFDbEMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsRSxRQUFRLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzdFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQU1DLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7YUFDbEMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDO2FBRWxELEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUMxRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUTtRQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFNSCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQzFCLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQywrQkFBa0IsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckQsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNoRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU07UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzdDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUVGLENBQUE7QUFuRkM7SUFEQyx1QkFBaUIsQ0FBQywrQkFBa0IsQ0FBQzs4QkFDbEIsb0JBQVU7a0VBQXFCO0FBSHhDLHNCQUFzQjtJQURsQyxtQkFBTyxFQUFFO0dBQ0csc0JBQXNCLENBc0ZsQztBQXRGWSx3REFBc0IifQ==