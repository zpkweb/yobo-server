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
exports.BaseBrowsingHistoryService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const browsingHistory_1 = require("../../../entity/my/browsingHistory");
const commodity_1 = require("../../../entity/commodity/commodity");
let BaseBrowsingHistoryService = class BaseBrowsingHistoryService {
    async BaseCreate(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .insert()
            .into(browsingHistory_1.MyBrowsingHistoryEntity)
            .values({
            count: payload.count,
            userId: payload.userId,
            commodityId: payload.commodityId
        })
            .execute();
    }
    async BaseRetrieve(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder('myBrowsingHistory')
            .where("myBrowsingHistory.userId = :userId", { userId: payload.userId })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseHas(payload) {
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder('myBrowsingHistory')
            .where("myBrowsingHistory.userId = :userId", { userId: payload.userId })
            .andWhere("myBrowsingHistory.commodityId = :commodityId", { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseUpdate(payload) {
        const { userId, commodityId, ...setData } = payload;
        return await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .update(browsingHistory_1.MyBrowsingHistoryEntity)
            .set(setData)
            .where("userId = :userId", { userId: userId })
            .andWhere("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
    async BaseRelation(payload) {
        await this.myBrowsingHistoryEntity
            .createQueryBuilder()
            .relation(browsingHistory_1.MyBrowsingHistoryEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(browsingHistory_1.MyBrowsingHistoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseBrowsingHistoryService.prototype, "myBrowsingHistoryEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(commodity_1.CommodityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseBrowsingHistoryService.prototype, "commodityEntity", void 0);
BaseBrowsingHistoryService = __decorate([
    decorator_1.Provide()
], BaseBrowsingHistoryService);
exports.BaseBrowsingHistoryService = BaseBrowsingHistoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9teS9icm93c2luZ0hpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQXdFO0FBQ3hFLG1FQUFpRTtBQVFqRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVlyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDdEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHlDQUF1QixDQUFDO2FBQzdCLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFRRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUI7YUFDdEMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7YUFRdkMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQVN2RSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDdEIsZUFBZSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUtELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQzthQUd2QyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3ZFLFFBQVEsQ0FBQyw4Q0FBOEMsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUYsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBTUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3BELE9BQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCO2FBQ3RDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyx5Q0FBdUIsQ0FBQzthQUMvQixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzdDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUNwRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxJQUFJLENBQUMsdUJBQXVCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyx5Q0FBdUIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQy9DLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBR0YsQ0FBQTtBQTVGQztJQURDLHVCQUFpQixDQUFDLHlDQUF1QixDQUFDOzhCQUNsQixvQkFBVTsyRUFBMEI7QUFHN0Q7SUFEQyx1QkFBaUIsQ0FBQywyQkFBZSxDQUFDOzhCQUNsQixvQkFBVTttRUFBa0I7QUFObEMsMEJBQTBCO0lBRHRDLG1CQUFPLEVBQUU7R0FDRywwQkFBMEIsQ0ErRnRDO0FBL0ZZLGdFQUEwQiJ9