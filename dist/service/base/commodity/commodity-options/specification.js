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
exports.BaseCommoditySpecificationServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const specification_1 = require("../../../../entity/commodity/commodity-options/specification");
let BaseCommoditySpecificationServer = class BaseCommoditySpecificationServer {
    async BaseCreate(payload) {
        return await this.CommoditySpecificationEntity
            .createQueryBuilder()
            .insert()
            .into(specification_1.CommoditySpecificationEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommoditySpecificationEntity
            .createQueryBuilder('specification')
            .leftJoinAndSelect('specification.options', 'options')
            .where('specification.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommoditySpecificationEntity
            .createQueryBuilder('specification')
            .leftJoinAndSelect('specification.commoditys', 'commoditys')
            .leftJoinAndSelect('specification.options', 'options')
            .where('specification.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('specification.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommoditySpecificationEntity
            .createQueryBuilder()
            .relation(specification_1.CommoditySpecificationEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(specification_1.CommoditySpecificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommoditySpecificationServer.prototype, "CommoditySpecificationEntity", void 0);
BaseCommoditySpecificationServer = __decorate([
    decorator_1.Provide()
], BaseCommoditySpecificationServer);
exports.BaseCommoditySpecificationServer = BaseCommoditySpecificationServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2NvbW1vZGl0eS1vcHRpb25zL3NwZWNpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsZ0dBQW1HO0FBSW5HLElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBSzNDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLDRCQUE0QjthQUMzQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNENBQTRCLENBQUM7YUFDbEMsTUFBTSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0QsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFdBQVc7UUFDdkMsT0FBTyxNQUFNLElBQUksQ0FBQyw0QkFBNEI7YUFDM0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDO2FBRW5DLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQzthQUNyRCxLQUFLLENBQUMsMENBQTBDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDL0UsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsNEJBQTRCO2FBQzNDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQzthQUNuQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7YUFDM0QsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxDQUFDO2FBQ3JELEtBQUssQ0FBQywwQ0FBMEMsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkYsUUFBUSxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM5RSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsTUFBTSxJQUFJLENBQUMsNEJBQTRCO2FBQ3BDLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyw0Q0FBNEIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3BELEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBR0YsQ0FBQTtBQTNDQztJQURDLHVCQUFpQixDQUFDLDRDQUE0QixDQUFDOzhCQUNsQixvQkFBVTtzRkFBK0I7QUFINUQsZ0NBQWdDO0lBRDVDLG1CQUFPLEVBQUU7R0FDRyxnQ0FBZ0MsQ0E4QzVDO0FBOUNZLDRFQUFnQyJ9