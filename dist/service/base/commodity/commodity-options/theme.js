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
exports.BaseCommodityThemeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const theme_1 = require("../../../../entity/commodity/commodity-options/theme");
let BaseCommodityThemeService = class BaseCommodityThemeService {
    async BaseCreate(payload) {
        return await this.CommodityThemeEntity
            .createQueryBuilder()
            .insert()
            .into(theme_1.CommodityThemeEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityThemeEntity
            .createQueryBuilder('theme')
            .innerJoinAndSelect('theme.options', 'options')
            .where('theme.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityThemeEntity
            .createQueryBuilder('theme')
            .innerJoinAndSelect('theme.options', 'options')
            .where('theme.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('theme.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityThemeEntity
            .createQueryBuilder()
            .relation(theme_1.CommodityThemeEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseSearch(payload) {
        return await this.CommodityThemeEntity
            .createQueryBuilder('search')
            .where('search.optionsId IN (:...searchs)', { searchs: payload })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(theme_1.CommodityThemeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityThemeService.prototype, "CommodityThemeEntity", void 0);
BaseCommodityThemeService = __decorate([
    decorator_1.Provide()
], BaseCommodityThemeService);
exports.BaseCommodityThemeService = BaseCommodityThemeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnRkFBbUY7QUFJbkYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFLcEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw0QkFBb0IsQ0FBQzthQUMxQixNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFFM0Isa0JBQWtCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzthQUM5QyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDdkUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUUzQixrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDO2FBQzlDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDL0UsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0RSxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQzVCLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyw0QkFBb0IsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ3JDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUU1QixLQUFLLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDaEUsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDO0NBR0YsQ0FBQTtBQW5EQztJQURDLHVCQUFpQixDQUFDLDRCQUFvQixDQUFDOzhCQUNsQixvQkFBVTt1RUFBdUI7QUFINUMseUJBQXlCO0lBRHJDLG1CQUFPLEVBQUU7R0FDRyx5QkFBeUIsQ0FzRHJDO0FBdERZLDhEQUF5QiJ9