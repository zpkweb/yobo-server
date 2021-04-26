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
exports.BaseCommodityStyleServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const style_1 = require("../../../../entity/commodity/commodity-options/style");
let BaseCommodityStyleServer = class BaseCommodityStyleServer {
    async BaseCreate(payload) {
        return await this.CommodityStyleEntity
            .createQueryBuilder()
            .insert()
            .into(style_1.CommodityStyleEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityStyleEntity
            .createQueryBuilder('style')
            .leftJoinAndSelect('style.options', 'options')
            .where('style.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityStyleEntity
            .createQueryBuilder('style')
            .leftJoinAndSelect('style.commoditys', 'commoditys')
            .leftJoinAndSelect('style.options', 'options')
            .where('style.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('style.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityStyleEntity
            .createQueryBuilder()
            .relation(style_1.CommodityStyleEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(style_1.CommodityStyleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityStyleServer.prototype, "CommodityStyleEntity", void 0);
BaseCommodityStyleServer = __decorate([
    decorator_1.Provide()
], BaseCommodityStyleServer);
exports.BaseCommodityStyleServer = BaseCommodityStyleServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxnRkFBbUY7QUFJbkYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFLbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw0QkFBb0IsQ0FBQzthQUMxQixNQUFNLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFFM0IsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzthQUM3QyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDdkUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUMzQixpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUM7YUFDbkQsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzthQUM3QyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQy9FLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdEUsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUM1QixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsNEJBQW9CLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM1QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUdGLENBQUE7QUEzQ0M7SUFEQyx1QkFBaUIsQ0FBQyw0QkFBb0IsQ0FBQzs4QkFDbEIsb0JBQVU7c0VBQXVCO0FBSDVDLHdCQUF3QjtJQURwQyxtQkFBTyxFQUFFO0dBQ0csd0JBQXdCLENBOENwQztBQTlDWSw0REFBd0IifQ==