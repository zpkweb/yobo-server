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
exports.BaseCommodityBrowsingCountServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodityBrowsingCount_1 = require("../../../entity/commodity/commodityBrowsingCount");
let BaseCommodityBrowsingCountServer = class BaseCommodityBrowsingCountServer {
    async BaseCreate() {
        return await this.commodityBrowsingCountEntity
            .createQueryBuilder()
            .insert()
            .into(commodityBrowsingCount_1.CommodityBrowsingCountEntity)
            .values({
            count: 1
        })
            .execute();
    }
    async BaseRetrieve(commodityId) {
        console.log("BaseRetrieve", commodityId);
        return await this.commodityBrowsingCountEntity
            .createQueryBuilder('browsingCount')
            .leftJoinAndSelect("browsingCount.commodity", "commodity")
            .where("commodity.commodityId = :commodityId", { commodityId: commodityId })
            .getOne();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
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
], BaseCommodityBrowsingCountServer.prototype, "commodityBrowsingCountEntity", void 0);
BaseCommodityBrowsingCountServer = __decorate([
    decorator_1.Provide()
], BaseCommodityBrowsingCountServer);
exports.BaseCommodityBrowsingCountServer = BaseCommodityBrowsingCountServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5QnJvd3NpbmdDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2NvbW1vZGl0eUJyb3dzaW5nQ291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsNkZBQTJGO0FBSTNGLElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBUzNDLEtBQUssQ0FBQyxVQUFVO1FBQ2QsT0FBTyxNQUFNLElBQUksQ0FBQyw0QkFBNEI7YUFDM0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHFEQUE0QixDQUFDO2FBQ2xDLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQVFELEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN4QyxPQUFPLE1BQU0sSUFBSSxDQUFDLDRCQUE0QjthQUMzQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7YUFDbkMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsV0FBVyxDQUFDO2FBQ3pELEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUMzRSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFNRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QyxPQUFPLE1BQU0sSUFBSSxDQUFDLDRCQUE0QjthQUMzQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMscURBQTRCLENBQUM7YUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxJQUFJLENBQUMsNEJBQTRCO2FBQ3BDLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyxxREFBNEIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3BELEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBR0YsQ0FBQTtBQTNEQztJQURDLHVCQUFpQixDQUFDLHFEQUE0QixDQUFDOzhCQUNsQixvQkFBVTtzRkFBK0I7QUFINUQsZ0NBQWdDO0lBRDVDLG1CQUFPLEVBQUU7R0FDRyxnQ0FBZ0MsQ0E4RDVDO0FBOURZLDRFQUFnQyJ9