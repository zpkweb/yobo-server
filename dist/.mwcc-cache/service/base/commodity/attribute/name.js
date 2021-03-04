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
exports.BaseCommodityNameServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const name_1 = require("../../../../entity/commodity/attribute/name");
let BaseCommodityNameServer = class BaseCommodityNameServer {
    async BaseCreate(payload) {
        return await this.commodityNameEntity
            .createQueryBuilder()
            .insert()
            .into(name_1.CommodityNameEntity)
            .values(payload)
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityNameEntity
            .createQueryBuilder('commodity')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieve(payload) {
        return await this.commodityNameEntity
            .createQueryBuilder('name')
            .where('name.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityNameEntity
            .createQueryBuilder('name')
            .where('name.commodityId = :commodityId', { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityNameEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
        const { commodityId, ...setData } = payload;
        return await this.commodityNameEntity
            .createQueryBuilder()
            .update(name_1.CommodityNameEntity)
            .set(setData)
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(commodityId) {
        return await this.commodityNameEntity
            .createQueryBuilder()
            .delete()
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(name_1.CommodityNameEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityNameServer.prototype, "commodityNameEntity", void 0);
BaseCommodityNameServer = __decorate([
    decorator_1.Provide()
], BaseCommodityNameServer);
exports.BaseCommodityNameServer = BaseCommodityNameServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2F0dHJpYnV0ZS9uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHNFQUEwRTtBQUcxRSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVFsQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDBCQUFtQixDQUFDO2FBUXpCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFNRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDcEMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2FBQy9CLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUMzRSxNQUFNLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUt2RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUUsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDBCQUFtQixDQUFDO2FBTzNCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CO2FBQ2xDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNqRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBL0ZDO0lBREMsdUJBQWlCLENBQUMsMEJBQW1CLENBQUM7OEJBQ2xCLG9CQUFVO29FQUFzQjtBQUgxQyx1QkFBdUI7SUFEbkMsbUJBQU8sRUFBRTtHQUNHLHVCQUF1QixDQWtHbkM7QUFsR1ksMERBQXVCIn0=