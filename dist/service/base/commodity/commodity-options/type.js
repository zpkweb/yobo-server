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
exports.BaseCommodityTypeServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const type_1 = require("../../../../entity/commodity/commodity-options/type");
let BaseCommodityTypeServer = class BaseCommodityTypeServer {
    async BaseCreate(payload) {
        return await this.CommodityTypeEntity
            .createQueryBuilder()
            .insert()
            .into(type_1.CommodityTypeEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityTypeEntity
            .createQueryBuilder('type')
            .leftJoinAndSelect('type.options', 'options')
            .where('type.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityTypeEntity
            .createQueryBuilder('type')
            .leftJoinAndSelect('type.commoditys', 'commoditys')
            .leftJoinAndSelect('type.options', 'options')
            .where('type.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('type.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityTypeEntity
            .createQueryBuilder()
            .relation(type_1.CommodityTypeEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(type_1.CommodityTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityTypeServer.prototype, "CommodityTypeEntity", void 0);
BaseCommodityTypeServer = __decorate([
    decorator_1.Provide()
], BaseCommodityTypeServer);
exports.BaseCommodityTypeServer = BaseCommodityTypeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2NvbW1vZGl0eS1vcHRpb25zL3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsOEVBQWlGO0FBSWpGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBS2xDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQjthQUNsQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsMEJBQW1CLENBQUM7YUFDekIsTUFBTSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0QsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFdBQVc7UUFDdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBRTFCLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7YUFDNUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3RFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQjthQUNsQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDMUIsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO2FBQ2xELGlCQUFpQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7YUFDNUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM5RSxRQUFRLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDM0Isa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLDBCQUFtQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDM0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBM0NDO0lBREMsdUJBQWlCLENBQUMsMEJBQW1CLENBQUM7OEJBQ2xCLG9CQUFVO29FQUFzQjtBQUgxQyx1QkFBdUI7SUFEbkMsbUJBQU8sRUFBRTtHQUNHLHVCQUF1QixDQThDbkM7QUE5Q1ksMERBQXVCIn0=