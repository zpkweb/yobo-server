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
exports.BaseCommodityTechniqueService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const technique_1 = require("../../../../entity/commodity/commodity-options/technique");
let BaseCommodityTechniqueService = class BaseCommodityTechniqueService {
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
            .innerJoinAndSelect('technique.options', 'options')
            .where('technique.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityTechniqueEntity
            .createQueryBuilder('technique')
            .innerJoinAndSelect('technique.options', 'options')
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
    async BaseSearch(payload) {
        return await this.CommodityTechniqueEntity
            .createQueryBuilder('search')
            .where('search.optionsId IN (:...searchs)', { searchs: payload })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(technique_1.CommodityTechniqueEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityTechniqueService.prototype, "CommodityTechniqueEntity", void 0);
BaseCommodityTechniqueService = __decorate([
    decorator_1.Provide()
], BaseCommodityTechniqueService);
exports.BaseCommodityTechniqueService = BaseCommodityTechniqueService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdGVjaG5pcXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHdGQUEyRjtBQUkzRixJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQUt4QyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG9DQUF3QixDQUFDO2FBQzlCLE1BQU0sQ0FBQztZQUNOLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO1FBQ3ZDLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ3ZDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzthQUUvQixrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUM7YUFDbEQsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzNFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QjthQUN2QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFFL0Isa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDO2FBQ2xELEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkYsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMxRSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ2hDLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyxvQ0FBd0IsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2hELEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBR0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ3pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUU1QixLQUFLLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDaEUsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDO0NBR0YsQ0FBQTtBQXBEQztJQURDLHVCQUFpQixDQUFDLG9DQUF3QixDQUFDOzhCQUNsQixvQkFBVTsrRUFBMkI7QUFIcEQsNkJBQTZCO0lBRHpDLG1CQUFPLEVBQUU7R0FDRyw2QkFBNkIsQ0F1RHpDO0FBdkRZLHNFQUE2QiJ9