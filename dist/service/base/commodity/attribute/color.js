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
exports.BaseCommodityColorServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const color_1 = require("../../../../entity/commodity/attribute/color");
let BaseCommodityColorServer = class BaseCommodityColorServer {
    async BaseCreate(payload) {
        return await this.commodityColorEntity
            .createQueryBuilder()
            .insert()
            .into(color_1.CommodityColorEntity)
            .values({
            'startColor': payload.startColor,
            'startColorValue': payload.startColorValue,
            'endColor': payload.endColor,
            'endColorValue': payload.endColorValue,
        })
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityColorEntity
            .createQueryBuilder('commodity')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieveCommodityId(payload) {
        return await this.commodityColorEntity
            .createQueryBuilder('color')
            .where('color.commodityId = :commodityId', { commodityId: payload.commodityId })
            .getMany();
    }
    async BaseRetrieve(payload) {
        return await this.commodityColorEntity
            .createQueryBuilder('color')
            .where('color.commodityId = :commodityId', { commodityId: payload.commodityId })
            .getMany();
    }
    async BaseRetrieveAll() {
        return await this.commodityColorEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
        const { commodityId, ...setData } = payload;
        return await this.commodityColorEntity
            .createQueryBuilder()
            .update(color_1.CommodityColorEntity)
            .set(setData)
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(payload) {
        return await this.commodityColorEntity
            .createQueryBuilder()
            .delete()
            .where('commodityId = :commodityId', { commodityId: payload.commodityId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(color_1.CommodityColorEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityColorServer.prototype, "commodityColorEntity", void 0);
BaseCommodityColorServer = __decorate([
    decorator_1.Provide()
], BaseCommodityColorServer);
exports.BaseCommodityColorServer = BaseCommodityColorServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9hdHRyaWJ1dGUvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQTRFO0FBRzVFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBUW5DLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNEJBQW9CLENBQUM7YUFDMUIsTUFBTSxDQUFDO1lBQ04sWUFBWSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQ2hDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxlQUFlO1lBQzFDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUM1QixlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWE7U0FDdkMsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVztRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNyQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzNFLE1BQU0sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQU1ELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPO1FBQ25DLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUMzQixLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9FLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMvRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsNEJBQW9CLENBQUM7YUFDNUIsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDbkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN6RSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBcEZDO0lBREMsdUJBQWlCLENBQUMsNEJBQW9CLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF1QjtBQUg1Qyx3QkFBd0I7SUFEcEMsbUJBQU8sRUFBRTtHQUNHLHdCQUF3QixDQXVGcEM7QUF2RlksNERBQXdCIn0=