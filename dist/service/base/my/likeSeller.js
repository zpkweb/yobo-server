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
exports.BaseMyLikeSellerService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const likeSeller_1 = require("../../../entity/my/likeSeller");
let BaseMyLikeSellerService = class BaseMyLikeSellerService {
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
], BaseMyLikeSellerService.prototype, "myLikeSellerEntity", void 0);
BaseMyLikeSellerService = __decorate([
    decorator_1.Provide()
], BaseMyLikeSellerService);
exports.BaseMyLikeSellerService = BaseMyLikeSellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbXkvbGlrZVNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyw4REFBOEQ7QUFJOUQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFTbEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQywrQkFBa0IsQ0FBQzthQUN4QixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7YUFDbEMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsRSxRQUFRLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzdFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQU1DLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7YUFHbEMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzFELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRO1FBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQU1ILEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDMUIsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLCtCQUFrQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyRCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2hFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTTtRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0MsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBRUYsQ0FBQTtBQW5GQztJQURDLHVCQUFpQixDQUFDLCtCQUFrQixDQUFDOzhCQUNsQixvQkFBVTttRUFBcUI7QUFIeEMsdUJBQXVCO0lBRG5DLG1CQUFPLEVBQUU7R0FDRyx1QkFBdUIsQ0FzRm5DO0FBdEZZLDBEQUF1QiJ9