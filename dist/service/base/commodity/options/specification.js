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
exports.BaseCommodityOptionsSpecificationServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const specification_1 = require("../../../../entity/commodity/options/specification");
let BaseCommodityOptionsSpecificationServer = class BaseCommodityOptionsSpecificationServer {
    async BaseCreate(payload) {
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder()
            .insert()
            .into(specification_1.CommodityOptionsSpecificationEntity)
            .values({
            'img': payload.img,
            'zh-cn': payload.zhcn,
            'en-us': payload.enus,
            'ja-jp': payload.jajp,
            'es-es': payload.eses
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder('specification')
            .where('specification.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('specification.en-us = :enus', { enus: payload.enus })
            .orWhere('specification.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('specification.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder('specification')
            .where('specification.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { id, ...setData } = payload;
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder()
            .update(specification_1.CommodityOptionsSpecificationEntity)
            .set(setData)
            .where("id = :id", { id })
            .execute();
    }
    async BaseDelete(id) {
        return await this.CommodityOptionsSpecificationEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(specification_1.CommodityOptionsSpecificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsSpecificationServer.prototype, "CommodityOptionsSpecificationEntity", void 0);
BaseCommodityOptionsSpecificationServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsSpecificationServer);
exports.BaseCommodityOptionsSpecificationServer = BaseCommodityOptionsSpecificationServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvY29tbW9kaXR5L29wdGlvbnMvc3BlY2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxzRkFBaUc7QUFHakcsSUFBYSx1Q0FBdUMsR0FBcEQsTUFBYSx1Q0FBdUM7SUFRbEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUNBQW1DO2FBQ2xELGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxtREFBbUMsQ0FBQzthQUN6QyxNQUFNLENBQUM7WUFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQ0FBbUM7YUFDbEQsa0JBQWtCLENBQUMsZUFBZSxDQUFDO2FBQ25DLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUQsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM5RCxPQUFPLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlELE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUNBQW1DO2FBQ2xELGtCQUFrQixDQUFDLGVBQWUsQ0FBQzthQUNuQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ25ELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsbUNBQW1DO2FBQ2xELGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ25DLE9BQU8sTUFBTSxJQUFJLENBQUMsbUNBQW1DO2FBQ2xELGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxtREFBbUMsQ0FBQzthQUMzQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1DQUFtQzthQUNsRCxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDekIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQTdFQztJQURDLHVCQUFpQixDQUFDLG1EQUFtQyxDQUFDOzhCQUNsQixvQkFBVTtvR0FBc0M7QUFIMUUsdUNBQXVDO0lBRG5ELG1CQUFPLEVBQUU7R0FDRyx1Q0FBdUMsQ0FnRm5EO0FBaEZZLDBGQUF1QyJ9