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
exports.BaseCommodityPriceServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const price_1 = require("../../../../entity/commodity/attribute/price");
let BaseCommodityPriceServer = class BaseCommodityPriceServer {
    async BaseCreate(payload) {
        return await this.commodityPriceEntity
            .createQueryBuilder()
            .insert()
            .into(price_1.CommodityPriceEntity)
            .values({
            'zh-cn': payload['zh-cn'],
            'en-us': payload['en-us'],
            'ja-jp': payload['ja-jp'],
            'fr-fr': payload['fr-fr'],
            'es-es': payload['es-es']
        })
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityPriceEntity
            .createQueryBuilder('commodity')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieve(payload) {
        return await this.commodityPriceEntity
            .createQueryBuilder('price')
            .where('price.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('price.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('price.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('price.es-es = :eses', { eses: payload['es-es'] })
            .getOne();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityPriceEntity
            .createQueryBuilder('price')
            .where('price.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityPriceEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityPriceEntity
            .createQueryBuilder()
            .update(price_1.CommodityPriceEntity)
            .set(setData)
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(commodityId) {
        return await this.commodityPriceEntity
            .createQueryBuilder()
            .delete()
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(price_1.CommodityPriceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityPriceServer.prototype, "commodityPriceEntity", void 0);
BaseCommodityPriceServer = __decorate([
    decorator_1.Provide()
], BaseCommodityPriceServer);
exports.BaseCommodityPriceServer = BaseCommodityPriceServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9hdHRyaWJ1dGUvcHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQTRFO0FBRzVFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBUW5DLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNEJBQW9CLENBQUM7YUFDMUIsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVztRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNyQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzNFLE1BQU0sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUtELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ3hELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMxRCxPQUFPLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDMUQsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzFELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO1FBQ3ZDLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUMzQixLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDdkUsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDbkMsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDbkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDRCQUFvQixDQUFDO2FBTzVCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBNUZDO0lBREMsdUJBQWlCLENBQUMsNEJBQW9CLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF1QjtBQUg1Qyx3QkFBd0I7SUFEcEMsbUJBQU8sRUFBRTtHQUNHLHdCQUF3QixDQStGcEM7QUEvRlksNERBQXdCIn0=