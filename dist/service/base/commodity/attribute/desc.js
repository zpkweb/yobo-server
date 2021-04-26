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
exports.BaseCommodityDescServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const desc_1 = require("../../../../entity/commodity/attribute/desc");
let BaseCommodityDescServer = class BaseCommodityDescServer {
    async BaseCreate(payload) {
        return await this.commodityDescEntity
            .createQueryBuilder()
            .insert()
            .into(desc_1.CommodityDescEntity)
            .values(payload)
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityDescEntity
            .createQueryBuilder('desc')
            .where('desc.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieve(payload) {
        return await this.commodityDescEntity
            .createQueryBuilder('desc')
            .where('desc.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('desc.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('desc.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('desc.es-es = :eses', { eses: payload['es-es'] })
            .getOne();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityDescEntity
            .createQueryBuilder('desc')
            .where('desc.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityDescEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityDescEntity
            .createQueryBuilder()
            .update(desc_1.CommodityDescEntity)
            .set(setData)
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(commodityId) {
        return await this.commodityDescEntity
            .createQueryBuilder()
            .delete()
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(desc_1.CommodityDescEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityDescServer.prototype, "commodityDescEntity", void 0);
BaseCommodityDescServer = __decorate([
    decorator_1.Provide()
], BaseCommodityDescServer);
exports.BaseCommodityDescServer = BaseCommodityDescServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2F0dHJpYnV0ZS9kZXNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHNFQUEwRTtBQUcxRSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVFsQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDBCQUFtQixDQUFDO2FBUXpCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFNRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDcEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUN0RSxNQUFNLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN2RCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDekQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBRXpELE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN6RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQjthQUNsQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDMUIsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3RFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CO2FBQ2xDLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CO2FBQ2xDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQywwQkFBbUIsQ0FBQzthQU8zQixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2pFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQjthQUNsQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQTlGQztJQURDLHVCQUFpQixDQUFDLDBCQUFtQixDQUFDOzhCQUNsQixvQkFBVTtvRUFBc0I7QUFIMUMsdUJBQXVCO0lBRG5DLG1CQUFPLEVBQUU7R0FDRyx1QkFBdUIsQ0FpR25DO0FBakdZLDBEQUF1QiJ9