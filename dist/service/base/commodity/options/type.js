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
exports.BaseCommodityOptionsTypeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const type_1 = require("../../../../entity/commodity/options/type");
let BaseCommodityOptionsTypeService = class BaseCommodityOptionsTypeService {
    async BaseCreate(payload) {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder()
            .insert()
            .into(type_1.CommodityOptionsTypeEntity)
            .values({
            'img': payload.img,
            'zh-cn': payload.zhcn,
            'en-us': payload.enus,
            'ja-jp': payload.jajp,
            'es-es': payload.eses
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder('type')
            .where('type.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('type.en-us = :enus', { enus: payload.enus })
            .orWhere('type.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('type.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(id) {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder('type')
            .where('type.id = :id', { id: id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder()
            .update(type_1.CommodityOptionsTypeEntity)
            .set({
            'img': payload.img,
            'zh-cn': payload.zhcn,
            'en-us': payload.enus,
            'ja-jp': payload.jajp,
            'es-es': payload.eses
        })
            .where("id = :id", { id: payload.id })
            .execute();
    }
    async BaseDelete(id) {
        return await this.commodityOptionsTypeEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(type_1.CommodityOptionsTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsTypeService.prototype, "commodityOptionsTypeEntity", void 0);
BaseCommodityOptionsTypeService = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsTypeService);
exports.BaseCommodityOptionsTypeService = BaseCommodityOptionsTypeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L29wdGlvbnMvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxvRUFBK0U7QUFHL0UsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFRMUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxpQ0FBMEIsQ0FBQzthQUNoQyxNQUFNLENBQUM7WUFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQywwQkFBMEI7YUFDekMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyRCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JELE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzthQUMxQixLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ2xDLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtBLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLDBCQUEwQjthQUN6QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsaUNBQTBCLENBQUM7YUFDbEMsR0FBRyxDQUFDO1lBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDckMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBbEZDO0lBREMsdUJBQWlCLENBQUMsaUNBQTBCLENBQUM7OEJBQ2xCLG9CQUFVO21GQUE2QjtBQUh4RCwrQkFBK0I7SUFEM0MsbUJBQU8sRUFBRTtHQUNHLCtCQUErQixDQXFGM0M7QUFyRlksMEVBQStCIn0=