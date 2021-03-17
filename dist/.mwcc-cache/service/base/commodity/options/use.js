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
exports.BaseCommodityOptionsUseServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const use_1 = require("../../../../entity/commodity/options/use");
let BaseCommodityOptionsUseServer = class BaseCommodityOptionsUseServer {
    async BaseCreate(payload) {
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder()
            .insert()
            .into(use_1.CommodityOptionsUseEntity)
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
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder('use')
            .where('use.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('use.en-us = :enus', { enus: payload.enus })
            .orWhere('use.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('use.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder('use')
            .where('use.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { id, ...setData } = payload;
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder()
            .update(use_1.CommodityOptionsUseEntity)
            .set(setData)
            .where("id = :id", { id })
            .execute();
    }
    async BaseDelete(id) {
        return await this.CommodityOptionsUseEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(use_1.CommodityOptionsUseEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsUseServer.prototype, "CommodityOptionsUseEntity", void 0);
BaseCommodityOptionsUseServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsUseServer);
exports.BaseCommodityOptionsUseServer = BaseCommodityOptionsUseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvb3B0aW9ucy91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsa0VBQTZFO0FBRzdFLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBUXhDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QjthQUN4QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsK0JBQXlCLENBQUM7YUFDL0IsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBT0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCO2FBQ3hDLGtCQUFrQixDQUFDLEtBQUssQ0FBQzthQUN6QixLQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwRCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QjthQUN4QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7YUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDekMsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyx5QkFBeUI7YUFDeEMsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDbkMsT0FBTyxNQUFNLElBQUksQ0FBQyx5QkFBeUI7YUFDeEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLCtCQUF5QixDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDekIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCO2FBQ3hDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBN0VDO0lBREMsdUJBQWlCLENBQUMsK0JBQXlCLENBQUM7OEJBQ2xCLG9CQUFVO2dGQUE0QjtBQUh0RCw2QkFBNkI7SUFEekMsbUJBQU8sRUFBRTtHQUNHLDZCQUE2QixDQWdGekM7QUFoRlksc0VBQTZCIn0=