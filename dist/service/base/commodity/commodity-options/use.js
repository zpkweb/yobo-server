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
exports.BaseCommodityUseServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const use_1 = require("../../../../entity/commodity/commodity-options/use");
let BaseCommodityUseServer = class BaseCommodityUseServer {
    async BaseCreate(payload) {
        return await this.CommodityUseEntity
            .createQueryBuilder()
            .insert()
            .into(use_1.CommodityUseEntity)
            .values({
            commodityName: payload.commodityName,
            useName: payload.useName,
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.CommodityUseEntity
            .createQueryBuilder('use')
            .where('use.commodityName = :commodityName', { commodityName: payload.commodityName })
            .orWhere('use.useName = :useName', { useName: payload.useName })
            .getOne();
    }
    async BaseRelationSet(payload) {
        await this.CommodityUseEntity
            .createQueryBuilder()
            .relation(use_1.CommodityUseEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(use_1.CommodityUseEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityUseServer.prototype, "CommodityUseEntity", void 0);
BaseCommodityUseServer = __decorate([
    decorator_1.Provide()
], BaseCommodityUseServer);
exports.BaseCommodityUseServer = BaseCommodityUseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDRFQUErRTtBQUkvRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUtqQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHdCQUFrQixDQUFDO2FBQ3hCLE1BQU0sQ0FBQztZQUNOLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87U0FDekIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7YUFDekIsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyRixPQUFPLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQy9ELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDMUIsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLHdCQUFrQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FHRixDQUFBO0FBaENDO0lBREMsdUJBQWlCLENBQUMsd0JBQWtCLENBQUM7OEJBQ2xCLG9CQUFVO2tFQUFxQjtBQUh4QyxzQkFBc0I7SUFEbEMsbUJBQU8sRUFBRTtHQUNHLHNCQUFzQixDQW1DbEM7QUFuQ1ksd0RBQXNCIn0=