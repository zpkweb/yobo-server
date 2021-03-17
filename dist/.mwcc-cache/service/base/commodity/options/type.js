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
exports.BaseCommodityOptionsTypeServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const type_1 = require("../../../../entity/commodity/options/type");
let BaseCommodityOptionsTypeServer = class BaseCommodityOptionsTypeServer {
    async BaseCreate(payload) {
        return await this.CommodityOptionsTypeEntity
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
        return await this.CommodityOptionsTypeEntity
            .createQueryBuilder('type')
            .where('type.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('type.en-us = :enus', { enus: payload.enus })
            .orWhere('type.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('type.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.CommodityOptionsTypeEntity
            .createQueryBuilder('type')
            .where('type.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.CommodityOptionsTypeEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { id, ...setData } = payload;
        return await this.CommodityOptionsTypeEntity
            .createQueryBuilder()
            .update(type_1.CommodityOptionsTypeEntity)
            .set(setData)
            .where("id = :id", { id })
            .execute();
    }
    async BaseDelete(id) {
        return await this.CommodityOptionsTypeEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(type_1.CommodityOptionsTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsTypeServer.prototype, "CommodityOptionsTypeEntity", void 0);
BaseCommodityOptionsTypeServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsTypeServer);
exports.BaseCommodityOptionsTypeServer = BaseCommodityOptionsTypeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L29wdGlvbnMvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxvRUFBK0U7QUFHL0UsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFRekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxpQ0FBMEIsQ0FBQzthQUNoQyxNQUFNLENBQUM7WUFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQywwQkFBMEI7YUFDekMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyRCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JELE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzthQUMxQixLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUMxQyxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLDBCQUEwQjthQUN6QyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLDBCQUEwQjthQUN6QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsaUNBQTBCLENBQUM7YUFDbEMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQywwQkFBMEI7YUFDekMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUE3RUM7SUFEQyx1QkFBaUIsQ0FBQyxpQ0FBMEIsQ0FBQzs4QkFDbEIsb0JBQVU7a0ZBQTZCO0FBSHhELDhCQUE4QjtJQUQxQyxtQkFBTyxFQUFFO0dBQ0csOEJBQThCLENBZ0YxQztBQWhGWSx3RUFBOEIifQ==