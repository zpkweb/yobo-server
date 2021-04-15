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
exports.BaseCommodityUseServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const use_1 = require("../../../../entity/commodity/commodity-options/use");
let BaseCommodityUseServer = class BaseCommodityUseServer {
    async BaseCreate(payload) {
        return await this.CommodityUseEntity
            .createQueryBuilder()
            .insert()
            .into(use_1.CommodityUseEntity)
            .values({
            commodityId: payload.commodityId,
            optionId: payload.optionId,
        })
            .execute();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.CommodityUseEntity
            .createQueryBuilder('use')
            .leftJoinAndSelect('use.commoditys', 'commoditys')
            .leftJoinAndSelect('use.options', 'options')
            .where('use.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieveID(payload) {
        return await this.CommodityUseEntity
            .createQueryBuilder('use')
            .leftJoinAndSelect('use.commoditys', 'commoditys')
            .leftJoinAndSelect('use.options', 'options')
            .where('use.commodityId = :commodityId', { commodityId: payload.commodityId })
            .andWhere('use.optionId = :optionId', { optionId: payload.optionId })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityUseEntity
            .createQueryBuilder()
            .relation(use_1.CommodityUseEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(use_1.CommodityUseEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityUseServer.prototype, "CommodityUseEntity", void 0);
BaseCommodityUseServer = __decorate([
    decorator_1.Provide()
], BaseCommodityUseServer);
exports.BaseCommodityUseServer = BaseCommodityUseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRFQUErRTtBQUkvRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUtqQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHdCQUFrQixDQUFDO2FBQ3hCLE1BQU0sQ0FBQztZQUNOLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO1FBQ3ZDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixDQUFDLEtBQUssQ0FBQzthQUN6QixpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7YUFDakQsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzthQUMzQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDckUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixDQUFDLEtBQUssQ0FBQzthQUN6QixpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7YUFDakQsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzthQUMzQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzdFLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEUsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUMxQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsd0JBQWtCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUdGLENBQUE7QUEzQ0M7SUFEQyx1QkFBaUIsQ0FBQyx3QkFBa0IsQ0FBQzs4QkFDbEIsb0JBQVU7a0VBQXFCO0FBSHhDLHNCQUFzQjtJQURsQyxtQkFBTyxFQUFFO0dBQ0csc0JBQXNCLENBOENsQztBQTlDWSx3REFBc0IifQ==