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
exports.BaseCommodityTechniqueServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const technique_1 = require("../../../../entity/commodity/commodity-options/technique");
let BaseCommodityTechniqueServer = class BaseCommodityTechniqueServer {
    async BaseCreate(payload) {
        return await this.CommodityTechniqueEntity
            .createQueryBuilder()
            .insert()
            .into(technique_1.CommodityTechniqueEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityTechniqueEntity
            .createQueryBuilder('technique')
            .leftJoinAndSelect('technique.commoditys', 'commoditys')
            .leftJoinAndSelect('technique.options', 'options')
            .where('technique.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityTechniqueEntity
            .createQueryBuilder('technique')
            .leftJoinAndSelect('technique.commoditys', 'commoditys')
            .leftJoinAndSelect('technique.options', 'options')
            .where('technique.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('technique.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityTechniqueEntity
            .createQueryBuilder()
            .relation(technique_1.CommodityTechniqueEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(technique_1.CommodityTechniqueEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityTechniqueServer.prototype, "CommodityTechniqueEntity", void 0);
BaseCommodityTechniqueServer = __decorate([
    decorator_1.Provide()
], BaseCommodityTechniqueServer);
exports.BaseCommodityTechniqueServer = BaseCommodityTechniqueServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdGVjaG5pcXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHdGQUEyRjtBQUkzRixJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUt2QyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG9DQUF3QixDQUFDO2FBQzlCLE1BQU0sQ0FBQztZQUNOLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO1FBQ3ZDLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ3ZDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzthQUMvQixpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7YUFDdkQsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO2FBQ2pELEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUMzRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2FBQy9CLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQzthQUN2RCxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUM7YUFDakQsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuRixRQUFRLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDaEMsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLG9DQUF3QixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDaEQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBM0NDO0lBREMsdUJBQWlCLENBQUMsb0NBQXdCLENBQUM7OEJBQ2xCLG9CQUFVOzhFQUEyQjtBQUhwRCw0QkFBNEI7SUFEeEMsbUJBQU8sRUFBRTtHQUNHLDRCQUE0QixDQThDeEM7QUE5Q1ksb0VBQTRCIn0=