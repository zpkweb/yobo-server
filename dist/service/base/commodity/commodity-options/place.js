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
exports.BaseCommodityPlaceServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const place_1 = require("../../../../entity/commodity/commodity-options/place");
let BaseCommodityPlaceServer = class BaseCommodityPlaceServer {
    async BaseCreate(payload) {
        return await this.CommodityPlaceEntity
            .createQueryBuilder()
            .insert()
            .into(place_1.CommodityPlaceEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityPlaceEntity
            .createQueryBuilder('place')
            .leftJoinAndSelect('place.commoditys', 'commoditys')
            .leftJoinAndSelect('place.options', 'options')
            .where('place.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityPlaceEntity
            .createQueryBuilder('place')
            .leftJoinAndSelect('place.commoditys', 'commoditys')
            .leftJoinAndSelect('place.options', 'options')
            .where('place.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('place.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityPlaceEntity
            .createQueryBuilder()
            .relation(place_1.CommodityPlaceEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(place_1.CommodityPlaceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityPlaceServer.prototype, "CommodityPlaceEntity", void 0);
BaseCommodityPlaceServer = __decorate([
    decorator_1.Provide()
], BaseCommodityPlaceServer);
exports.BaseCommodityPlaceServer = BaseCommodityPlaceServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnRkFBbUY7QUFJbkYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFLbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw0QkFBb0IsQ0FBQzthQUMxQixNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO2FBQ25ELGlCQUFpQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7YUFDN0MsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3ZFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO2FBQ25ELGlCQUFpQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7YUFDN0MsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMvRSxRQUFRLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3RFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDNUIsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLDRCQUFvQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDNUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBM0NDO0lBREMsdUJBQWlCLENBQUMsNEJBQW9CLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF1QjtBQUg1Qyx3QkFBd0I7SUFEcEMsbUJBQU8sRUFBRTtHQUNHLHdCQUF3QixDQThDcEM7QUE5Q1ksNERBQXdCIn0=