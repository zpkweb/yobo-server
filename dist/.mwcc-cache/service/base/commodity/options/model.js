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
exports.BaseCommodityOptionsModelServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const model_1 = require("../../../../entity/commodity/options/model");
let BaseCommodityOptionsModelServer = class BaseCommodityOptionsModelServer {
    async BaseCreate(payload) {
        return await this.commodityOptionsModelEntity
            .createQueryBuilder()
            .insert()
            .into(model_1.CommodityOptionsModelEntity)
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
        return await this.commodityOptionsModelEntity
            .createQueryBuilder('model')
            .where('model.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('model.en-us = :enus', { enus: payload.enus })
            .orWhere('model.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('model.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityOptionsModelEntity
            .createQueryBuilder('model')
            .where('model.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsModelEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsModelEntity
            .createQueryBuilder()
            .update(model_1.CommodityOptionsModelEntity)
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
        return await this.commodityOptionsModelEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(model_1.CommodityOptionsModelEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsModelServer.prototype, "commodityOptionsModelEntity", void 0);
BaseCommodityOptionsModelServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsModelServer);
exports.BaseCommodityOptionsModelServer = BaseCommodityOptionsModelServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHNFQUFpRjtBQUdqRixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQVExQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG1DQUEyQixDQUFDO2FBQ2pDLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU9ELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLDJCQUEyQjthQUMxQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwRCxPQUFPLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEQsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDM0MsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsMkJBQTJCO2FBQzFDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxtQ0FBMkIsQ0FBQzthQUNuQyxHQUFHLENBQUM7WUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUFsRkM7SUFEQyx1QkFBaUIsQ0FBQyxtQ0FBMkIsQ0FBQzs4QkFDbEIsb0JBQVU7b0ZBQThCO0FBSDFELCtCQUErQjtJQUQzQyxtQkFBTyxFQUFFO0dBQ0csK0JBQStCLENBcUYzQztBQXJGWSwwRUFBK0IifQ==