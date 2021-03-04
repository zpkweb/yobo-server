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
exports.BasePageBannerServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const banner_1 = require("../../../entity/page/banner");
let BasePageBannerServer = class BasePageBannerServer {
    async BaseCreate(payload) {
        return await this.pageBannerEntity
            .createQueryBuilder()
            .insert()
            .into(banner_1.PageBannerEntity)
            .values({
            src: payload.src,
            title: payload.title,
            subTitle: payload.subTitle,
            desc: payload.desc
        })
            .execute();
    }
    async BaseHas(bannerId) {
        return await this.pageBannerEntity
            .createQueryBuilder('banner')
            .where('banner.bannerId = :bannerId', { bannerId: bannerId })
            .getOne();
    }
    async BaseRetrievebannerId(payload) {
        return await this.pageBannerEntity
            .createQueryBuilder('banner')
            .where('banner.bannerId = :bannerId', { bannerId: payload.bannerId })
            .getOne();
    }
    async BaseRetrieve(payload) {
        return await this.pageBannerEntity
            .createQueryBuilder('banner')
            .where('banner.bannerId = :bannerId', { bannerId: payload.bannerId })
            .orWhere('banner.name = :name', { name: payload.name })
            .orWhere('banner.src = :src', { src: payload.src })
            .getMany();
    }
    async BaseRetrieveAll() {
        return await this.pageBannerEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
        const { bannerId, ...setData } = payload;
        return await this.pageBannerEntity
            .createQueryBuilder()
            .update(banner_1.PageBannerEntity)
            .set(setData)
            .where('bannerId = :bannerId', { bannerId: bannerId })
            .execute();
    }
    async BaseDelete(bannerId) {
        return await this.pageBannerEntity
            .createQueryBuilder()
            .delete()
            .where('bannerId = :bannerId', { bannerId: bannerId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(banner_1.PageBannerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BasePageBannerServer.prototype, "pageBannerEntity", void 0);
BasePageBannerServer = __decorate([
    decorator_1.Provide()
], BasePageBannerServer);
exports.BasePageBannerServer = BasePageBannerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9wYWdlL2Jhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyx3REFBMEQ7QUFHMUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFRL0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDaEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDbkIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNwQixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUNqQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDNUIsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzVELE1BQU0sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQU1ELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO1FBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUM1QixLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BFLE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUtELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDNUIsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRSxPQUFPLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RELE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbEQsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLHlCQUFnQixDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDckQsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNyRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FFRixDQUFBO0FBdkZDO0lBREMsdUJBQWlCLENBQUMseUJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOzhEQUFtQjtBQUhwQyxvQkFBb0I7SUFEaEMsbUJBQU8sRUFBRTtHQUNHLG9CQUFvQixDQTBGaEM7QUExRlksb0RBQW9CIn0=