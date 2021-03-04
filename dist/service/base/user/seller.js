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
exports.BaseSellerServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const seller_1 = require("../../../entity/user/seller/seller");
const metadata_1 = require("../../../entity/user/seller/metadata");
const photo_1 = require("../../../entity/commodity/attribute/photo");
const name_1 = require("../../../entity/commodity/attribute/name");
let BaseSellerServer = class BaseSellerServer {
    async baseCreateSeller(payload) {
        console.log("baseCreateSeller", payload);
        return await this.userSellerEntity
            .createQueryBuilder()
            .insert()
            .into(seller_1.UserSellerEntity)
            .values({
            state: payload.state,
            type: payload.type,
            typeName: payload.typeName,
            firstname: payload.firstname,
            lastname: payload.lastname,
            tags: payload.tags,
            label: payload.label,
            gender: payload.gender,
            country: payload.country,
        })
            .execute();
    }
    async baseCreateSellerMetadata(payload) {
        console.log("baseCreateSellerMetadata", payload);
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
            profile: payload.profile,
        })
            .execute();
    }
    async BaseHas(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .where('seller.sellerId = :sellerId', { sellerId: sellerId })
            .getOne();
    }
    async baseApplySeller(userId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .where('user.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseRetrieveSeller(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .leftJoinAndSelect('seller.metadata', 'metadata')
            .leftJoinAndSelect('seller.commoditys', 'commoditys')
            .leftJoinAndMapMany('commoditys.photos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
            .addSelect('seller.createdDate')
            .where("seller.userId = :userId", { userId: payload.userId })
            .orWhere("seller.sellerId = :sellerId", { sellerId: payload.sellerId })
            .getOne();
    }
    async baseRetrieveSellerAll(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .leftJoinAndSelect('seller.metadata', 'metadata')
            .leftJoinAndSelect('seller.commoditys', 'commoditys')
            .leftJoinAndMapMany('seller.commodityPhotos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
            .leftJoinAndMapOne('seller.commodityName', name_1.CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
            .addSelect('seller.createdDate')
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseSearchSeller(payload) {
        console.log("baseSearchSeller", payload);
        const where = {};
        if (payload.surname) {
            where.firstname = typeorm_1.Like(payload.surname);
        }
        if (payload.label) {
            where.label = typeorm_1.Like(payload.label);
        }
        if (payload.gender) {
            where.gender = typeorm_1.Like(payload.gender);
        }
        if (payload.country) {
            where.country = typeorm_1.Like(payload.country);
        }
        if (payload.state) {
            where.state = typeorm_1.Like(payload.state);
        }
        if (payload.type) {
            where.type = typeorm_1.Like(payload.type);
        }
        if (payload.email) {
            where.email = typeorm_1.Like(payload.email);
        }
        if (payload.phone) {
            where.phone = typeorm_1.Like(payload.phone);
        }
        return await this.userSellerEntity.findAndCount({
            join: {
                alias: "seller",
                leftJoinAndSelect: {
                    user: "seller.user",
                    metadata: "seller.metadata"
                }
            },
            where,
            take: payload.pageSize,
            skip: payload.pageSize * (payload.currentPage - 1),
        });
    }
    async baseUpdateSeller(payload) {
        console.log("baseUpdateSeller", payload);
        const { sellerId, ...setData } = payload;
        return await this.userSellerEntity
            .createQueryBuilder()
            .update(seller_1.UserSellerEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseUpdateSellerMetadata(payload) {
        console.log("baseUpdateSellerMetadata", payload);
        const { sellerId, ...setData } = payload;
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .update(metadata_1.UserSellerMetadataEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseDeleteSeller(sellerId) {
        console.log("baseDeleteSeller", sellerId);
        return await this.userSellerEntity
            .createQueryBuilder()
            .delete()
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseDeleteSellerAll() {
        return await this.userSellerEntity
            .createQueryBuilder()
            .delete()
            .execute();
    }
    async basseSetSellerState(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerEntity
            .createQueryBuilder()
            .update(seller_1.UserSellerEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(seller_1.UserSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerServer.prototype, "userSellerEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(metadata_1.UserSellerMetadataEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerServer.prototype, "userSellerMetadataEntity", void 0);
BaseSellerServer = __decorate([
    decorator_1.Provide()
], BaseSellerServer);
exports.BaseSellerServer = BaseSellerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS91c2VyL3NlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUEyQztBQUMzQywrREFBaUU7QUFDakUsbUVBQTJFO0FBQzNFLHFFQUE0RTtBQUM1RSxtRUFBMEU7QUFHMUUsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFhM0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN4QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMseUJBQWdCLENBQUM7YUFDdEIsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1lBQzVCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87U0FDekIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENB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