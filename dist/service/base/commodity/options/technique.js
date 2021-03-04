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
            .values(payload)
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder('technique')
            .where('technique.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
            .orWhere('technique.en-us = :enus', { enus: payload['en-us'] })
            .orWhere('technique.ja-jp = :jajp', { jajp: payload['ja-jp'] })
            .orWhere('technique.es-es = :eses', { eses: payload['es-es'] })
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
        const { id, ...setData } = payload;
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .update(technique_1.CommodityOptionsTechniqueEntity)
            .set(setData)
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(payload) {
        return await this.commodityOptionsTechniqueEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id: payload.id })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvb3B0aW9ucy90ZWNobmlxdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsOEVBQXlGO0FBR3pGLElBQWEsbUNBQW1DLEdBQWhELE1BQWEsbUNBQW1DO0lBUTlDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsMkNBQStCLENBQUM7YUFTckMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzVELE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM5RCxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFFOUQsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzlELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDL0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUMvQyxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNuQyxPQUFPLE1BQU0sSUFBSSxDQUFDLCtCQUErQjthQUM5QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsMkNBQStCLENBQUM7YUFPdkMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDN0IsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsK0JBQStCO2FBQzlDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3JDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUFwRkM7SUFEQyx1QkFBaUIsQ0FBQywyQ0FBK0IsQ0FBQzs4QkFDbEIsb0JBQVU7NEZBQWtDO0FBSGxFLG1DQUFtQztJQUQvQyxtQkFBTyxFQUFFO0dBQ0csbUNBQW1DLENBdUYvQztBQXZGWSxrRkFBbUMifQ==