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
exports.BaseMyLikeCommodityServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const likeCommodity_1 = require("../../../entity/my/likeCommodity");
const price_1 = require("../../../entity/commodity/attribute/price");
const photo_1 = require("../../../entity/commodity/attribute/photo");
const name_1 = require("../../../entity/commodity/attribute/name");
const desc_1 = require("../../../entity/commodity/attribute/desc");
const seller_1 = require("../../../entity/user/seller/seller");
let BaseMyLikeCommodityServer = class BaseMyLikeCommodityServer {
    async BaseCreate(payload) {
        return await this.myLikeCommodityEntity
            .createQueryBuilder()
            .insert()
            .into(likeCommodity_1.MyLikeCommodityEntity)
            .values({
            userName: payload.userName,
            userId: payload.userId,
            'zh-cn': payload['zh-cn'] || '',
            'en-us': payload['en-us'] || '',
            'ja-jp': payload['ja-jp'] || '',
            'fr-fr': payload['fr-fr'] || '',
            'es-es': payload['es-es'] || '',
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
            .leftJoinAndSelect('myLikeCommodity.commodity', 'commodity')
            .leftJoinAndMapOne('myLikeCommodity.name', name_1.CommodityNameEntity, "commodityName", "commodityName.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myLikeCommodity.desc', desc_1.CommodityDescEntity, "commodityDesc", "commodityDesc.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myLikeCommodity.price', price_1.CommodityPriceEntity, "commodityPrice", "commodityPrice.commodityId = commodity.commodityId")
            .leftJoinAndMapMany('myLikeCommodity.photos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commodity.commodityId")
            .leftJoinAndMapOne('myLikeCommodity.seller', seller_1.UserSellerEntity, "commoditySeller", "commoditySeller.sellerId = commodity.sellerId")
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
], BaseMyLikeCommodityServer.prototype, "myLikeCommodityEntity", void 0);
BaseMyLikeCommodityServer = __decorate([
    decorator_1.Provide()
], BaseMyLikeCommodityServer);
exports.BaseMyLikeCommodityServer = BaseMyLikeCommodityServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZUNvbW1vZGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbXkvbGlrZUNvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxvRUFBb0U7QUFDcEUscUVBQTRFO0FBQzVFLHFFQUE0RTtBQUM1RSxtRUFBMEU7QUFDMUUsbUVBQTBFO0FBQzFFLCtEQUFpRTtBQUdqRSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVdwQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxxQkFBcUI7YUFDcEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHFDQUFxQixDQUFDO2FBQzNCLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFD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