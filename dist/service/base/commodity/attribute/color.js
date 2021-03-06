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
exports.BaseCommodityColorService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const color_1 = require("../../../../entity/commodity/attribute/color");
let BaseCommodityColorService = class BaseCommodityColorService {
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
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityColorEntity
            .createQueryBuilder('color')
            .where('color.commodityId = :commodityId', { commodityId: commodityId })
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
    async BaseSearch(payload) {
        return await this.commodityColorEntity
            .createQueryBuilder('color')
            .innerJoinAndSelect('color.commodity', 'commoditys')
            .where('color.startColorValue >= :colors AND color.endColorValue <= :colors', { colors: payload })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(color_1.CommodityColorEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityColorService.prototype, "commodityColorEntity", void 0);
BaseCommodityColorService = __decorate([
    decorator_1.Provide()
], BaseCommodityColorService);
exports.BaseCommodityColorService = BaseCommodityColorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9hdHRyaWJ1dGUvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQTRFO0FBRzVFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBUXBDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNEJBQW9CLENBQUM7YUFDMUIsTUFBTSxDQUFDO1lBQ04sWUFBWSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQ2hDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxlQUFlO1lBQzFDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUM1QixlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWE7U0FDdkMsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVztRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNyQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzNFLE1BQU0sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQU1ELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO1FBQ3ZDLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUMzQixLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDdkUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUMzQixLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9FLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyw0QkFBb0IsQ0FBQzthQUM1QixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2pFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3pFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0Isa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO2FBQ25ELEtBQUssQ0FBQyxxRUFBcUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNqRyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBM0ZDO0lBREMsdUJBQWlCLENBQUMsNEJBQW9CLENBQUM7OEJBQ2xCLG9CQUFVO3VFQUF1QjtBQUg1Qyx5QkFBeUI7SUFEckMsbUJBQU8sRUFBRTtHQUNHLHlCQUF5QixDQThGckM7QUE5RlksOERBQXlCIn0=