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
exports.BaseCommodityOptionsClassificationService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const classification_1 = require("../../../../entity/commodity/options/classification");
let BaseCommodityOptionsClassificationService = class BaseCommodityOptionsClassificationService {
    async BaseCreate(payload) {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .insert()
            .into(classification_1.CommodityOptionsClassificationEntity)
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
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder('classification')
            .where('classification.zh-cn = :zhcn', { zhcn: payload.zhcn })
            .orWhere('classification.en-us = :enus', { enus: payload.enus })
            .orWhere('classification.ja-jp = :jajp', { jajp: payload.jajp })
            .orWhere('classification.es-es = :eses', { eses: payload.eses })
            .getOne();
    }
    async BaseRetrieveId(id) {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder('classification')
            .where('classification.id = :id', { id: id })
            .getOne();
    }
    async BaseRetrieveAll() {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .update(classification_1.CommodityOptionsClassificationEntity)
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
        return await this.commodityOptionsClassificationEntity
            .createQueryBuilder()
            .delete()
            .where("id = :id", { id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(classification_1.CommodityOptionsClassificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityOptionsClassificationService.prototype, "commodityOptionsClassificationEntity", void 0);
BaseCommodityOptionsClassificationService = __decorate([
    decorator_1.Provide()
], BaseCommodityOptionsClassificationService);
exports.BaseCommodityOptionsClassificationService = BaseCommodityOptionsClassificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9vcHRpb25zL2NsYXNzaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHdGQUFtRztBQUduRyxJQUFhLHlDQUF5QyxHQUF0RCxNQUFhLHlDQUF5QztJQVFwRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHFEQUFvQyxDQUFDO2FBQzFDLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRztZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU9ELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9DQUFvQzthQUNuRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzdELE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0QsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvRCxPQUFPLENBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9ELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9DQUFvQzthQUNuRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDNUMsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0NBQW9DO2FBQ25ELGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxxREFBb0MsQ0FBQzthQUM1QyxHQUFHLENBQUM7WUFDSCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1NBQ3RCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQ0FBb0M7YUFDbkQsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUFsRkM7SUFEQyx1QkFBaUIsQ0FBQyxxREFBb0MsQ0FBQzs4QkFDbEIsb0JBQVU7dUdBQXVDO0FBSDVFLHlDQUF5QztJQURyRCxtQkFBTyxFQUFFO0dBQ0cseUNBQXlDLENBcUZyRDtBQXJGWSw4RkFBeUMifQ==