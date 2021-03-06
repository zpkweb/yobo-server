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
exports.BaseSellerMetadataService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const metadata_1 = require("../../../entity/user/seller/metadata");
let BaseSellerMetadataService = class BaseSellerMetadataService {
    async baseCreate(payload) {
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .insert()
            .into(metadata_1.UserSellerMetadataEntity)
            .values({
            language: payload.language,
            findUs: payload.findUs,
            isFullTime: payload.isFullTime,
            onlineSell: payload.onlineSell,
            sold: payload.sold,
            channel: payload.channel,
            gallery: payload.gallery,
            medium: payload.medium,
            galleryInfo: payload.galleryInfo,
            recommend: payload.recommend,
            prize: payload.prize,
            website: payload.website,
            profileZhcn: payload.profileZhcn,
            profileEnus: payload.profileEnus,
            profileJajp: payload.profileJajp,
            profileEses: payload.profileEses,
        })
            .execute();
    }
    async baseRetrieve(sellerId) {
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async baseUpdate(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .update(metadata_1.UserSellerMetadataEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseUpdateMetadata(payload) {
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .update(metadata_1.UserSellerMetadataEntity)
            .set({ ...payload })
            .execute();
    }
    async relation(payload) {
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .relation(metadata_1.UserSellerMetadataEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(metadata_1.UserSellerMetadataEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerMetadataService.prototype, "userSellerMetadataEntity", void 0);
BaseSellerMetadataService = __decorate([
    decorator_1.Provide()
], BaseSellerMetadataService);
exports.BaseSellerMetadataService = BaseSellerMetadataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL3NlbGxlci9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxtRUFBMkU7QUFJM0UsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFTbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ3ZDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxtQ0FBd0IsQ0FBQzthQUM5QixNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQVNBLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUTtRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QjthQUN2QyxrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDckQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBU0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLG1DQUF3QixDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDckQsT0FBTyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU87UUFFOUIsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLG1DQUF3QixDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxFQUFDLEdBQUcsT0FBTyxFQUFDLENBQUM7YUFDakIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1FBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCO2FBQ3ZDLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQyxtQ0FBd0IsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2hELEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBRUYsQ0FBQTtBQWpGQztJQURDLHVCQUFpQixDQUFDLG1DQUF3QixDQUFDOzhCQUNsQixvQkFBVTsyRUFBMEI7QUFIbkQseUJBQXlCO0lBRHJDLG1CQUFPLEVBQUU7R0FDRyx5QkFBeUIsQ0FvRnJDO0FBcEZZLDhEQUF5QiJ9