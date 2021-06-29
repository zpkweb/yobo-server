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
exports.BaseMyLikeCommodityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const likeCommodity_1 = require("../../../entity/my/likeCommodity");
let BaseMyLikeCommodityService = class BaseMyLikeCommodityService {
    async BaseCreate(payload) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder()
            .insert()
            .into(likeCommodity_1.MyLikeCommodityEntity)
            .values({
            userId: payload.userId,
            commodityId: payload.commodityId
        })
            .execute();
    }
    async BaseHas(payload) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder('myLikeCommodity')
            .where("myLikeCommodity.userId = :userId", { userId: payload.userId })
            .andWhere("myLikeCommodity.commodityId = :commodityId", { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseRetrieve(userId) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder('myLikeCommodity')
            .where("myLikeCommodity.userId = :userId", { userId: userId })
            .getMany();
    }
    async BaseRelation(payload) {
        await this.myLikeCommodityEntity
            .createQueryBuilder()
            .relation(likeCommodity_1.MyLikeCommodityEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseDelete(payload) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: payload.userId })
            .andWhere("commodityId = :commodityId", { commodityId: payload.commodityId })
            .execute();
    }
    async BaseDeleteAll(userId) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: userId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(likeCommodity_1.MyLikeCommodityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseMyLikeCommodityService.prototype, "myLikeCommodityEntity", void 0);
BaseMyLikeCommodityService = __decorate([
    decorator_1.Provide()
], BaseMyLikeCommodityService);
exports.BaseMyLikeCommodityService = BaseMyLikeCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZUNvbW1vZGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbXkvbGlrZUNvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxvRUFBb0U7QUFRcEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFXckMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMscUJBQXFCO2FBQ3BDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxxQ0FBcUIsQ0FBQzthQUMzQixNQUFNLENBQUM7WUFDTixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxxQkFBcUI7YUFDcEMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7YUFDckMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyRSxRQUFRLENBQUMsNENBQTRDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzVGLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQU1DLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLHFCQUFxQjthQUNwQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQzthQU9yQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBSUgsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLHFCQUFxQjthQUM3QixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMscUNBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM3QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLHFCQUFxQjthQUNwQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JELFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDNUUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMscUJBQXFCO2FBQ3BDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM3QyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FFRixDQUFBO0FBakZDO0lBREMsdUJBQWlCLENBQUMscUNBQXFCLENBQUM7OEJBQ2xCLG9CQUFVO3lFQUF3QjtBQUg5QywwQkFBMEI7SUFEdEMsbUJBQU8sRUFBRTtHQUNHLDBCQUEwQixDQW9GdEM7QUFwRlksZ0VBQTBCIn0=