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
const likeSeller_1 = require("../../../entity/my/likeSeller");
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
    async baseSellerIdRetrieveSeller(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .leftJoin('seller.commoditys', 'commoditys')
            .leftJoinAndMapMany('seller.commoditysPhotos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
            .addSelect('seller.createdDate')
            .where("seller.sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async BaseRetrieveFollow(sellerId) {
        return await this.myLikeSellerEntity.count({ sellerId: sellerId });
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
__decorate([
    orm_1.InjectEntityModel(likeSeller_1.MyLikeSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerServer.prototype, "myLikeSellerEntity", void 0);
BaseSellerServer = __decorate([
    decorator_1.Provide()
], BaseSellerServer);
exports.BaseSellerServer = BaseSellerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS91c2VyL3NlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUEyQztBQUMzQywrREFBaUU7QUFDakUsbUVBQTJFO0FBQzNFLHFFQUE0RTtBQUM1RSxtRUFBMEU7QUFFMUUsOERBQThEO0FBRTlELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBZTNCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztTQUN6QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBTUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLE9BQU87UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0I7YUFDdkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG1DQUF3QixD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