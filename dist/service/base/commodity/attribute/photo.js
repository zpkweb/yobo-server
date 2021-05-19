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
exports.BaseCommodityPhotoServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const photo_1 = require("../../../../entity/commodity/attribute/photo");
let BaseCommodityPhotoServer = class BaseCommodityPhotoServer {
    async BaseCreate(payload) {
        return await this.commodityPhotoEntity
            .createQueryBuilder()
            .insert()
            .into(photo_1.CommodityPhotoEntity)
            .values({
            'src': payload.src,
            'name': payload.name
        })
            .execute();
    }
    async BaseHas(commodityId) {
        return await this.commodityPhotoEntity
            .createQueryBuilder('commodity')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseRetrieveCommodityId(commodityId) {
        return await this.commodityPhotoEntity
            .createQueryBuilder('photo')
            .where('photo.commodityId = :commodityId', { commodityId: commodityId })
            .getMany();
    }
    async BaseRetrieve(payload) {
        return await this.commodityPhotoEntity
            .createQueryBuilder('photo')
            .where('photo.commodityId = :commodityId', { commodityId: payload.commodityId })
            .orWhere('photo.name = :name', { name: payload.name })
            .orWhere('photo.src = :src', { src: payload.src })
            .getMany();
    }
    async BaseRetrieveAll() {
        return await this.commodityPhotoEntity
            .createQueryBuilder()
            .getMany();
    }
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityPhotoEntity
            .createQueryBuilder()
            .update(photo_1.CommodityPhotoEntity)
            .set(setData)
            .where('commodityId = :commodityId', { commodityId: commodityId })
            .execute();
    }
    async BaseDelete(id) {
        return await this.commodityPhotoEntity
            .createQueryBuilder()
            .delete()
            .where('id = :id', { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(photo_1.CommodityPhotoEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityPhotoServer.prototype, "commodityPhotoEntity", void 0);
BaseCommodityPhotoServer = __decorate([
    decorator_1.Provide()
], BaseCommodityPhotoServer);
exports.BaseCommodityPhotoServer = BaseCommodityPhotoServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2NvbW1vZGl0eS9hdHRyaWJ1dGUvcGhvdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0VBQTRFO0FBRzVFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBUW5DLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNEJBQW9CLENBQUM7YUFDMUIsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSTtTQUNyQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBTUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ3JDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzthQUMvQixLQUFLLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDM0UsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBTUQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFdBQVc7UUFDdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDbkMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUN2RSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFLRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxvQkFBb0I7YUFDbkMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDL0UsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyRCxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2pELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxJQUFJLENBQUMsb0JBQW9CO2FBQ25DLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyw0QkFBb0IsQ0FBQzthQUM1QixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ2pFLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLG9CQUFvQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzdCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7QUFuRkM7SUFEQyx1QkFBaUIsQ0FBQyw0QkFBb0IsQ0FBQzs4QkFDbEIsb0JBQVU7c0VBQXVCO0FBSDVDLHdCQUF3QjtJQURwQyxtQkFBTyxFQUFFO0dBQ0csd0JBQXdCLENBc0ZwQztBQXRGWSw0REFBd0IifQ==