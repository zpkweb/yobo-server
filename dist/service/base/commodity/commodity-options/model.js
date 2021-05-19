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
exports.BaseCommodityModelServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const model_1 = require("../../../../entity/commodity/commodity-options/model");
let BaseCommodityModelServer = class BaseCommodityModelServer {
    async BaseCreate(payload) {
        return await this.CommodityModelEntity
            .createQueryBuilder()
            .insert()
            .into(model_1.CommodityModelEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityModelEntity
            .createQueryBuilder('model')
            .innerJoinAndSelect('model.options', 'options')
            .where('model.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityModelEntity
            .createQueryBuilder('model')
            .innerJoinAndSelect('model.options', 'options')
            .where('model.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('model.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityModelEntity
            .createQueryBuilder()
            .relation(model_1.CommodityModelEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(model_1.CommodityModelEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityModelServer.prototype, "CommodityModelEntity", void 0);
BaseCommodityModelServer = __decorate([
    decorator_1.Provide()
], BaseCommodityModelServer);
exports.BaseCommodityModelServer = BaseCommodityModelServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnRkFBbUY7QUFJbkYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFLbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw0QkFBb0IsQ0FBQzthQUMxQixNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFFM0Isa0JBQWtCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzthQUM5QyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDdkUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUUzQixrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDO2FBQzlDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDL0UsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0RSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQzVCLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyw0QkFBb0IsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBR0YsQ0FBQTtBQTNDQztJQURDLHVCQUFpQixDQUFDLDRCQUFvQixDQUFDOzhCQUNsQixvQkFBVTtzRUFBdUI7QUFINUMsd0JBQXdCO0lBRHBDLG1CQUFPLEVBQUU7R0FDRyx3QkFBd0IsQ0E4Q3BDO0FBOUNZLDREQUF3QiJ9