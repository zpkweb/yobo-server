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
        console.log("BaseRetrieve", payload.userId);
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
        console.log("basehas", payload);
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder('myBrowsingHistory')
            .leftJoinAndSelect("myBrowsingHistory.user", "user")
            .leftJoinAndSelect("myBrowsingHistory.commodity", "commodity")
            .where("user.userId = :userId", { userId: payload.userId })
            .andWhere("commodity.commodityId = :commodityId", { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9teS9icm93c2luZ0hpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQXdFO0FBQ3hFLG1FQUFpRTtBQUNqRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLG1FQUEwRTtBQUMxRSxtRUFBMEU7QUFDMUUsK0RBQWlFO0FBR2pFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBWXBDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMseUNBQXVCLENBQUM7YUFDN0IsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFRRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLE9BQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCO2FBQ3RDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO2FBQ3ZDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQzthQUNuRCxpQkFBaUIsQ0FBQyw2QkFBNkIsRUFBRSxXQUFXLENBQUM7YUFDN0QsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsMEJBQW1CLEVBQUUsZUFBZSxFQUFFLG1EQUFtRCxDQUFDO2FBQ3RJLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLDBC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