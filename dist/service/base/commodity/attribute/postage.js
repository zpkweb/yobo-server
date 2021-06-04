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
exports.BaseCommodityPostageServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const postage_1 = require("../../../../entity/commodity/attribute/postage");
let BaseCommodityPostageServer = class BaseCommodityPostageServer {
    async BaseCreate(payload) {
        return await this.commodityPostageEntity
            .createQueryBuilder()
            .insert()
            .into(postage_1.CommodityPostageEntity)
            .values(payload)
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityPostageEntity
            .createQueryBuilder('postage')
            .where('postage.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieve(payload) {
        return await this.commodityPostageEntity
            .createQueryBuilder('postage')
            .where('postage.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('postage.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('postage.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('postage.es-es = :eses', { eses: payload['es-es'] })
            .getOne();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityPostageEntity
            .createQueryBuilder('postage')
            .where('postage.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityPostageEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityPostageEntity
            .createQueryBuilder()
            .update(postage_1.CommodityPostageEntity)
            .set(setData)
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(commodityId) {
        return await this.commodityPostageEntity
            .createQueryBuilder()
            .delete()
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseSearch(payload) {
        return await this.commodityPostageEntity
            .createQueryBuilder('postage')
            .innerJoinAndSelect('postage.commodity', 'commoditys')
            .where('postage.zh-cn like :zhcn', { zhcn: `%${payload}%` })
            .getMany();
    }
};
__decorate([
    orm_1.InjectEntityModel(postage_1.CommodityPostageEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityPostageServer.prototype, "commodityPostageEntity", void 0);
BaseCommodityPostageServer = __decorate([
    decorator_1.Provide()
], BaseCommodityPostageServer);
exports.BaseCommodityPostageServer = BaseCommodityPostageServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L2F0dHJpYnV0ZS9wb3N0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRFQUFnRjtBQUdoRixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVFyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLGdDQUFzQixDQUFDO2FBUTVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFNRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDdkMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQzdCLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUN6RSxNQUFNLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQzdCLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDNUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBRTVELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsV0FBVztRQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDN0IsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3pFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3JDLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3JDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxnQ0FBc0IsQ0FBQzthQU85QixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2pFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDakUsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3JDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzthQUM3QixrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7YUFDckQsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUMzRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FFRixDQUFBO0FBdkdDO0lBREMsdUJBQWlCLENBQUMsZ0NBQXNCLENBQUM7OEJBQ2xCLG9CQUFVOzBFQUF5QjtBQUhoRCwwQkFBMEI7SUFEdEMsbUJBQU8sRUFBRTtHQUNHLDBCQUEwQixDQTBHdEM7QUExR1ksZ0VBQTBCIn0=