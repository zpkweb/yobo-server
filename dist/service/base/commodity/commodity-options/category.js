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
exports.BaseCommodityCategoryServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const category_1 = require("../../../../entity/commodity/commodity-options/category");
let BaseCommodityCategoryServer = class BaseCommodityCategoryServer {
    async BaseCreate(payload) {
        return await this.commodityCategoryEntity
            .createQueryBuilder()
            .insert()
            .into(category_1.CommodityCategoryEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityCategoryEntity
            .createQueryBuilder('category')
            .innerJoinAndSelect('category.options', 'options')
            .where('category.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.commodityCategoryEntity
            .createQueryBuilder('category')
            .innerJoinAndSelect('category.options', 'options')
            .where('category.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('category.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.commodityCategoryEntity
            .createQueryBuilder()
            .relation(category_1.CommodityCategoryEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseSearch(payload) {
        return await this.commodityCategoryEntity
            .createQueryBuilder('search')
            .where('search.optionsId IN (:...searchs)', { searchs: payload })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(category_1.CommodityCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityCategoryServer.prototype, "commodityCategoryEntity", void 0);
BaseCommodityCategoryServer = __decorate([
    decorator_1.Provide()
], BaseCommodityCategoryServer);
exports.BaseCommodityCategoryServer = BaseCommodityCategoryServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxzRkFBeUY7QUFJekYsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFLdEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCO2FBQ3RDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxrQ0FBdUIsQ0FBQzthQUM3QixNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFFOUIsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO2FBQ2pELEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUMxRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDdEMsa0JBQWtCLENBQUMsVUFBVSxDQUFDO2FBRTlCLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQzthQUNqRCxLQUFLLENBQUMscUNBQXFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2xGLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekUsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBSUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsa0NBQXVCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMvQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFFNUIsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2hFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUdGLENBQUE7QUFwREM7SUFEQyx1QkFBaUIsQ0FBQyxrQ0FBdUIsQ0FBQzs4QkFDbEIsb0JBQVU7NEVBQTBCO0FBSGxELDJCQUEyQjtJQUR2QyxtQkFBTyxFQUFFO0dBQ0csMkJBQTJCLENBdUR2QztBQXZEWSxrRUFBMkIifQ==