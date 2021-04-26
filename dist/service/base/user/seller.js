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
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseRetrieveSellerHome(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .innerJoinAndSelect('seller.commoditys', 'commoditys')
            .leftJoinAndMapMany('seller.commodityPhotos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
            .leftJoinAndMapOne('seller.commodityName', name_1.CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
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