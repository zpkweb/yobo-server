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
exports.BaseCommodityOptionsCategoryServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const category_1 = require("../../../../entity/commodity/options/category");
let BaseCommodityOptionsCategoryServer = class BaseCommodityOptionsCategoryServer {
    async BaseCreate(payload) {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .insert()
            .into(category_1.CommodityOptionsCategoryEntity)
            .values(payload)
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder('category')
            .where('category.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('category.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('category.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('category.es-es = :eses', { eses: payload['es-es'] })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder('category')
            .where('category.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { id, ...setData } = payload;
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .update(category_1.CommodityOptionsCategoryEntity)
            .set(setData)
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(payload) {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id: payload.id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(category_1.CommodityOptionsCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsCategoryServer.prototype, "commodityOptionsCategoryEntity", void 0);
BaseCommodityOptionsCategoryServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsCategoryServer);
exports.BaseCommodityOptionsCategoryServer = BaseCommodityOptionsCategoryServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRFQUF1RjtBQUd2RixJQUFhLGtDQUFrQyxHQUEvQyxNQUFhLGtDQUFrQztJQVE3QyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHlDQUE4QixDQUFDO2FBU3BDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLENBQUMsVUFBVSxDQUFDO2FBQzlCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMzRCxPQUFPLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDN0QsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBRTdELE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM3RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLENBQUMsVUFBVSxDQUFDO2FBQzlCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDOUMsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLHlDQUE4QixDQUFDO2FBT3RDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzdCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLDhCQUE4QjthQUM3QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBdEZDO0lBREMsdUJBQWlCLENBQUMseUNBQThCLENBQUM7OEJBQ2xCLG9CQUFVOzBGQUFpQztBQUhoRSxrQ0FBa0M7SUFEOUMsbUJBQU8sRUFBRTtHQUNHLGtDQUFrQyxDQXlGOUM7QUF6RlksZ0ZBQWtDIn0=