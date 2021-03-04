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
exports.BaseCommodityOptionsThemeServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const theme_1 = require("../../../../entity/commodity/options/theme");
let BaseCommodityOptionsThemeServer = class BaseCommodityOptionsThemeServer {
    async BaseCreate(payload) {
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder()
            .insert()
            .into(theme_1.CommodityOptionsThemeEntity)
            .values(payload)
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder('theme')
            .where('theme.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('theme.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('theme.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('theme.es-es = :eses', { eses: payload['es-es'] })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder('theme')
            .where('theme.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { id, ...setData } = payload;
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder()
            .update(theme_1.CommodityOptionsThemeEntity)
            .set(setData)
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(payload) {
        return await this.commodityOptionsThemeEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id: payload.id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(theme_1.CommodityOptionsThemeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsThemeServer.prototype, "commodityOptionsThemeEntity", void 0);
BaseCommodityOptionsThemeServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsThemeServer);
exports.BaseCommodityOptionsThemeServer = BaseCommodityOptionsThemeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL3RoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHNFQUFpRjtBQUdqRixJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQVExQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG1DQUEyQixDQUFDO2FBU2pDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN4RCxPQUFPLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDMUQsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBRTFELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMxRCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDM0MsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQywyQkFBMkI7YUFDMUMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLG1DQUEyQixDQUFDO2FBT25DLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzdCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLDJCQUEyQjthQUMxQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBcEZDO0lBREMsdUJBQWlCLENBQUMsbUNBQTJCLENBQUM7OEJBQ2xCLG9CQUFVO29GQUE4QjtBQUgxRCwrQkFBK0I7SUFEM0MsbUJBQU8sRUFBRTtHQUNHLCtCQUErQixDQXVGM0M7QUF2RlksMEVBQStCIn0=