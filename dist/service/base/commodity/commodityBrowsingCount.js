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
exports.BaseCommodityBrowsingCountService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodityBrowsingCount_1 = require("../../../entity/commodity/commodityBrowsingCount");
let BaseCommodityBrowsingCountService = class BaseCommodityBrowsingCountService {
    async BaseCreate(commodityId) {
        return await this.commodityBrowsingCountEntity
            .createQueryBuilder()
            .insert()
            .into(commodityBrowsingCount_1.CommodityBrowsingCountEntity)
            .values({
            count: 1,
            commodityId: commodityId
        })
            .execute();
    }
    async BaseRetrieve(commodityId) {
        return await this.commodityBrowsingCountEntity
            .createQueryBuilder('browsingCount')
            .where("browsingCount.commodityId = :commodityId", { commodityId: commodityId })
            .getOne();
    }
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityBrowsingCountEntity
            .createQueryBuilder()
            .update(commodityBrowsingCount_1.CommodityBrowsingCountEntity)
            .set(setData)
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
    async BaseRelation(payload) {
        await this.commodityBrowsingCountEntity
            .createQueryBuilder()
            .relation(commodityBrowsingCount_1.CommodityBrowsingCountEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(commodityBrowsingCount_1.CommodityBrowsingCountEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityBrowsingCountService.prototype, "commodityBrowsingCountEntity", void 0);
BaseCommodityBrowsingCountService = __decorate([
    decorator_1.Provide()
], BaseCommodityBrowsingCountService);
exports.BaseCommodityBrowsingCountService = BaseCommodityBrowsingCountService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5QnJvd3NpbmdDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2NvbW1vZGl0eUJyb3dzaW5nQ291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsNkZBQTJGO0FBSTNGLElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBUzVDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLDRCQUE0QjthQUMzQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMscURBQTRCLENBQUM7YUFDbEMsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBUUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXO1FBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsNEJBQTRCO2FBQzNDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQzthQUVuQyxLQUFLLENBQUMsMENBQTBDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDL0UsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBTUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsT0FBTyxNQUFNLElBQUksQ0FBQyw0QkFBNEI7YUFDM0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLHFEQUE0QixDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLDRCQUE0QjthQUNwQyxrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMscURBQTRCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNwRCxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUdGLENBQUE7QUExREM7SUFEQyx1QkFBaUIsQ0FBQyxxREFBNEIsQ0FBQzs4QkFDbEIsb0JBQVU7dUZBQStCO0FBSDVELGlDQUFpQztJQUQ3QyxtQkFBTyxFQUFFO0dBQ0csaUNBQWlDLENBNkQ3QztBQTdEWSw4RUFBaUMifQ==