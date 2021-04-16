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
exports.BaseBrowsingHistoryServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const browsingHistory_1 = require("../../../entity/my/browsingHistory");
const commodity_1 = require("../../../entity/commodity/commodity");
const price_1 = require("../../../entity/commodity/attribute/price");
const photo_1 = require("../../../entity/commodity/attribute/photo");
const name_1 = require("../../../entity/commodity/attribute/name");
const desc_1 = require("../../../entity/commodity/attribute/desc");
const seller_1 = require("../../../entity/user/seller/seller");
let BaseBrowsingHistoryServer = class BaseBrowsingHistoryServer {
    async BaseCreate(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .insert()
            .into(browsingHistory_1.MyBrowsingHistoryEntity)
            .values({
            count: payload.count
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder('myBrowsingHistory')
            .leftJoinAndSelect("myBrowsingHistory.user", "user")
            .leftJoinAndSelect('myBrowsingHistory.commodity', 'commodity')
            .leftJoinAndMapOne('myBrowsingHistory.name', name_1.CommodityNameEntity, "commodityName", "commodityName.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myBrowsingHistory.desc', desc_1.CommodityDescEntity, "commodityDesc", "commodityDesc.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myBrowsingHistory.price', price_1.CommodityPriceEntity, "commodityPrice", "commodityPrice.commodityId = commodity.commodityId")
            .leftJoinAndMapMany('myBrowsingHistory.photos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myBrowsingHistory.seller', seller_1.UserSellerEntity, "commoditySeller", "commoditySeller.sellerId = commodity.sellerId")
            .where("user.userId = :userId", { userId: payload.userId })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseHas(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder('myBrowsingHistory')
            .leftJoinAndSelect("myBrowsingHistory.user", "user")
            .leftJoinAndSelect("myBrowsingHistory.commodity", "commodity")
            .where("user.userId = :userId", { userId: payload.userId })
            .andWhere("commodity.commodityId = :commodityId", { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseUpdate(payload) {
        const { userId, commodityId, ...setData } = payload;
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .update(browsingHistory_1.MyBrowsingHistoryEntity)
            .set(setData)
            .where("user.userId = :userId", { userId: payload.userId })
            .andWhere("commodity.commodityId = :commodityId", { commodityId: payload.commodityId })
            .execute();
    }
    async BaseRelation(payload) {
        await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .relation(browsingHistory_1.MyBrowsingHistoryEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(browsingHistory_1.MyBrowsingHistoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseBrowsingHistoryServer.prototype, "myBrowsingHistoryEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(commodity_1.CommodityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseBrowsingHistoryServer.prototype, "commodityEntity", void 0);
BaseBrowsingHistoryServer = __decorate([
    decorator_1.Provide()
], BaseBrowsingHistoryServer);
exports.BaseBrowsingHistoryServer = BaseBrowsingHistoryServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9teS9icm93c2luZ0hpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQXdFO0FBQ3hFLG1FQUFpRTtBQUNqRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLG1FQUEwRTtBQUMxRSxtRUFBMEU7QUFDMUUsK0RBQWlFO0FBR2pFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBWXBDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMseUNBQXVCLENBQUM7YUFDN0IsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFRRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDdEMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7YUFDdkMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDO2FBQ25ELGlCQUFpQixDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQzthQUM3RCxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSwwQkFBbUIsRUFBRSxlQUFlLEVBQUUsbURBQW1ELENBQUM7YUFDdEksaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsMEJBQW1CLEVBQUUsZUFBZSxFQUFFLG1EQUFtRCxDQUFDO2FBQ3RJLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLDRCQUFvQixFQUFFLGdCQUFnQixFQUFFLG9EQUFvRCxDQUFDO2FBQzFJLGtCQUFrQixDQUFDLDBCQUEwQixFQUFFLDRCQUFvQixFQUFFLGdCQUFnQixFQUFFLG9EQUFvRCxDQUFDO2FBQzVJLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLHlCQUFnQixFQUFFLGlCQUFpQixFQUFFLCtDQUErQyxDQUFDO2FBQ25JLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFTMUQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ3RCLGVBQWUsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFLRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDdEMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7YUFDdkMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDO2FBQ25ELGlCQUFpQixDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQzthQUM3RCxLQUFLLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzFELFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEYsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBTUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCO2FBQ3RDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyx5Q0FBdUIsQ0FBQzthQUMvQixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMxRCxRQUFRLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RGLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLHlDQUF1QixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDL0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBMUZDO0lBREMsdUJBQWlCLENBQUMseUNBQXVCLENBQUM7OEJBQ2xCLG9CQUFVOzBFQUEwQjtBQUc3RDtJQURDLHVCQUFpQixDQUFDLDJCQUFlLENBQUM7OEJBQ2xCLG9CQUFVO2tFQUFrQjtBQU5sQyx5QkFBeUI7SUFEckMsbUJBQU8sRUFBRTtHQUNHLHlCQUF5QixDQTZGckM7QUE3RlksOERBQXlCIn0=