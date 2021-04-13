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
            commodityName: payload.commodityName,
            classificationName: payload.classificationName,
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.CommodityClassificationEntity
            .createQueryBuilder('category')
            .where('category.commodityName = :commodityName', { commodityName: payload.commodityName })
            .orWhere('category.classificationName = :classificationName', { classificationName: payload.classificationName })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityClassificationEntity
            .createQueryBuilder()
            .relation(classification_1.CommodityClassificationEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9jbGFzc2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxrR0FBcUc7QUFJckcsSUFBYSxpQ0FBaUMsR0FBOUMsTUFBYSxpQ0FBaUM7SUFLNUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsNkJBQTZCO2FBQzVDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw4Q0FBNkIsQ0FBQzthQUNuQyxNQUFNLENBQUM7WUFDTixhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7WUFDcEMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjtTQUMvQyxDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsNkJBQTZCO2FBQzVDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzthQUM5QixLQUFLLENBQUMseUNBQXlDLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFGLE9BQU8sQ0FBQyxtREFBbUQsRUFBRSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2hILE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyw2QkFBNkI7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLDhDQUE2QixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBaENDO0lBREMsdUJBQWlCLENBQUMsOENBQTZCLENBQUM7OEJBQ2xCLG9CQUFVO3dGQUFnQztBQUg5RCxpQ0FBaUM7SUFEN0MsbUJBQU8sRUFBRTtHQUNHLGlDQUFpQyxDQW1DN0M7QUFuQ1ksOEVBQWlDIn0=