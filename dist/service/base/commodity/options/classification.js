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
exports.BaseCommodityOptionsClassificationServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const classification_1 = require("../../../../entity/commodity/options/classification");
let BaseCommodityOptionsClassificationServer = class BaseCommodityOptionsClassificationServer {
    async BaseCreate(payload) {
        console.log("BaseCommodityOptionsClassificationServer payload", payload);
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .insert()
            .into(classification_1.CommodityOptionsClassificationEntity)
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
        console.log("BaseCommodityOptionsClassificationServer BaseRetrieve", payload);
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder('classification')
            .where('classification.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('classification.en-us = :enus', { enus: payload.enus })
            .orWhere('classification.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('classification.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder('classification')
            .where('classification.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .update(classification_1.CommodityOptionsClassificationEntity)
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
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(classification_1.CommodityOptionsClassificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsClassificationServer.prototype, "commodityOptionsClassificationEntity", void 0);
BaseCommodityOptionsClassificationServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsClassificationServer);
exports.BaseCommodityOptionsClassificationServer = BaseCommodityOptionsClassificationServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL2NsYXNzaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHdGQUFtRztBQUduRyxJQUFhLHdDQUF3QyxHQUFyRCxNQUFhLHdDQUF3QztJQVFuRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN4RSxPQUFPLE1BQU0sSUFBSSxDQUFDLG9DQUFvQzthQUNuRCxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMscURBQW9DLENBQUM7YUFDMUMsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBT0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDN0UsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3RCxPQUFPLENBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9ELE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0QsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvRCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNwRCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9DQUFvQzthQUNuRCxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLHFEQUFvQyxDQUFDO2FBQzVDLEdBQUcsQ0FBQztZQUNILEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3JDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9DQUFvQzthQUNuRCxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDekIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQXBGQztJQURDLHVCQUFpQixDQUFDLHFEQUFvQyxDQUFDOzhCQUNsQixvQkFBVTtzR0FBdUM7QUFINUUsd0NBQXdDO0lBRHBELG1CQUFPLEVBQUU7R0FDRyx3Q0FBd0MsQ0F1RnBEO0FBdkZZLDRGQUF3QyJ9