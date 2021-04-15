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
        console.log("BaseRetrieve", payload);
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder('category')
            .where('category.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('category.en-us = :enus', { enus: payload.enus })
            .orWhere('category.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('category.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(id) {
        console.log("caterory BaseRetrieveId id", id);
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder('category')
            .where('category.id = :id', { id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .update(category_1.CommodityOptionsCategoryEntity)
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
        return await this.commodityOptionsCategoryEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRFQUF1RjtBQUV2RixJQUFhLGtDQUFrQyxHQUEvQyxNQUFhLGtDQUFrQztJQVE3QyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHlDQUE4QixDQUFDO2FBQ3BDLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU9ELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNwQyxPQUFPLE1BQU0sSUFBSSxDQUFDLDhCQUE4QjthQUM3QyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDOUIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2RCxPQUFPLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pELE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekQsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFLRCxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM3QyxPQUFPLE1BQU0sSUFBSSxDQUFDLDhCQUE4QjthQUM3QyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDOUIsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDbEMsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsOEJBQThCO2FBQzdDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyx5Q0FBOEIsQ0FBQzthQUN0QyxHQUFHLENBQUM7WUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyw4QkFBOEI7YUFDN0Msa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUFwRkM7SUFEQyx1QkFBaUIsQ0FBQyx5Q0FBOEIsQ0FBQzs4QkFDbEIsb0JBQVU7MEZBQWlDO0FBSGhFLGtDQUFrQztJQUQ5QyxtQkFBTyxFQUFFO0dBQ0csa0NBQWtDLENBdUY5QztBQXZGWSxnRkFBa0MifQ==