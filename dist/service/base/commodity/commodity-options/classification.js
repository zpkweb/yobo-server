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
exports.BaseCommodityClassificationServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const classification_1 = require("../../../../entity/commodity/commodity-options/classification");
let BaseCommodityClassificationServer = class BaseCommodityClassificationServer {
    async BaseCreate(payload) {
        return await this.CommodityClassificationEntity
            .createQueryBuilder()
            .insert()
            .into(classification_1.CommodityClassificationEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityClassificationEntity
            .createQueryBuilder('classification')
            .innerJoinAndSelect('classification.options', 'options')
            .where('classification.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityClassificationEntity
            .createQueryBuilder('classification')
            .innerJoinAndSelect('classification.options', 'options')
            .where('classification.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('classification.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityClassificationEntity
            .createQueryBuilder()
            .relation(classification_1.CommodityClassificationEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseSearch(payload) {
        return await this.CommodityClassificationEntity
            .createQueryBuilder('search')
            .where('search.optionsId IN (:...searchs)', { searchs: payload })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(classification_1.CommodityClassificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityClassificationServer.prototype, "CommodityClassificationEntity", void 0);
BaseCommodityClassificationServer = __decorate([
    decorator_1.Provide()
], BaseCommodityClassificationServer);
exports.BaseCommodityClassificationServer = BaseCommodityClassificationServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9jbGFzc2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxrR0FBcUc7QUFJckcsSUFBYSxpQ0FBaUMsR0FBOUMsTUFBYSxpQ0FBaUM7SUFLNUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsNkJBQTZCO2FBQzVDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw4Q0FBNkIsQ0FBQzthQUNuQyxNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLDZCQUE2QjthQUM1QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUVwQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7YUFDdkQsS0FBSyxDQUFDLDJDQUEyQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2hGLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLDZCQUE2QjthQUM1QyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUVwQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7YUFDdkQsS0FBSyxDQUFDLDJDQUEyQyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4RixRQUFRLENBQUMscUNBQXFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9FLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyw2QkFBNkI7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLDhDQUE2QixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyw2QkFBNkI7YUFDNUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBRTVCLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNoRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FHRixDQUFBO0FBbERDO0lBREMsdUJBQWlCLENBQUMsOENBQTZCLENBQUM7OEJBQ2xCLG9CQUFVO3dGQUFnQztBQUg5RCxpQ0FBaUM7SUFEN0MsbUJBQU8sRUFBRTtHQUNHLGlDQUFpQyxDQXFEN0M7QUFyRFksOEVBQWlDIn0=