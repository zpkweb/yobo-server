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
exports.BaseCommodityOptionsTechniqueServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const technique_1 = require("../../../../entity/commodity/options/technique");
let BaseCommodityOptionsTechniqueServer = class BaseCommodityOptionsTechniqueServer {
    async BaseCreate(payload) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .insert()
            .into(technique_1.CommodityOptionsTechniqueEntity)
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
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder('technique')
            .where('technique.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('technique.en-us = :enus', { enus: payload.enus })
            .orWhere('technique.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('technique.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(payload) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder('technique')
            .where('technique.id = :id', { id: payload.id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .update(technique_1.CommodityOptionsTechniqueEntity)
            .set({
            'img': payload.img,
            'zh-cn': payload.zhcn,
            'en-us': payload.enus,
            'ja-jp': payload.jajp,
            'es-es': payload.eses
        })
            .where("id = :id", { id: payload.id })
            .execute();
    }
    async BaseDelete(id) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(technique_1.CommodityOptionsTechniqueEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsTechniqueServer.prototype, "commodityOptionsTechniqueEntity", void 0);
BaseCommodityOptionsTechniqueServer = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsTechniqueServer);
exports.BaseCommodityOptionsTechniqueServer = BaseCommodityOptionsTechniqueServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvb3B0aW9ucy90ZWNobmlxdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsOEVBQXlGO0FBR3pGLElBQWEsbUNBQW1DLEdBQWhELE1BQWEsbUNBQW1DO0lBUTlDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsMkNBQStCLENBQUM7YUFDckMsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsK0JBQStCO2FBQzlDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzthQUMvQixLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hELE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUQsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxRCxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUMvQyxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLQSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQywrQkFBK0I7YUFDOUMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDJDQUErQixDQUFDO2FBQ3ZDLEdBQUcsQ0FBQztZQUNILEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3JDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDekIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTtBQWhGQztJQURDLHVCQUFpQixDQUFDLDJDQUErQixDQUFDOzhCQUNsQixvQkFBVTs0RkFBa0M7QUFIbEUsbUNBQW1DO0lBRC9DLG1CQUFPLEVBQUU7R0FDRyxtQ0FBbUMsQ0FtRi9DO0FBbkZZLGtGQUFtQyJ9