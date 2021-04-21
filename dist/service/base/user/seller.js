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
        const where = {};
        if (payload.id) {
            where.id = payload.id;
        }
        if (payload.sellerId) {
            where.sellerId = payload.sellerId;
        }
        if (payload.state) {
            where.state = payload.state;
        }
        if (payload.type) {
            where.type = payload.type;
        }
        if (payload.label) {
            where.label = payload.label;
        }
        if (payload.other) {
            if (payload.other == '男') {
                where.gender = '男';
            }
            else if (payload.other == '女') {
                where.gender = '女';
            }
            else {
                where.label = payload.other;
            }
        }
        if (payload.gender) {
            where.gender = payload.gender;
        }
        if (payload.country) {
            where.country = payload.country;
        }
        if (payload.firstname) {
            where.firstname = typeorm_1.Like(`%${payload.firstname}%`);
        }
        if (payload.surname) {
            where.firstname = typeorm_1.Like(`%${payload.surname}%`);
        }
        if (payload.lastname) {
            where.lastname = typeorm_1.Like(`%${payload.lastname}%`);
        }
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .leftJoinAndSelect('seller.metadata', 'metadata')
            .addSelect('seller.createdDate')
            .where(where)
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseUpdateSeller(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerEntity
            .createQueryBuilder()
            .update(seller_1.UserSellerEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseUpdateSellerMetadata(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerMetadataEntity
            .createQueryBuilder()
            .update(metadata_1.UserSellerMetadataEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseDeleteSeller(sellerId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS91c2VyL3NlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUEyQztBQUMzQywrREFBaUU7QUFDakUsbUVBQTJFO0FBQzNFLHFFQUE0RTtBQUM1RSxtRUFBMEU7QUFHMUUsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFhM0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87UUFDNUIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLHlCQUFnQixDQUFDO2FBQ3RCLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztZQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1NBQ3pCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFNRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTztRQUNwQyxPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QjthQUN2QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsbUNBQXdCLENBQUM7YUFDOUIsTUFB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