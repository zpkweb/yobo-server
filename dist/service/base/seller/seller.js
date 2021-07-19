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
exports.BaseSellerService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const seller_1 = require("../../../entity/user/seller/seller");
const photo_1 = require("../../../entity/commodity/attribute/photo");
const name_1 = require("../../../entity/commodity/attribute/name");
let BaseSellerService = class BaseSellerService {
    async relation(payload) {
        return await this.userSellerEntity
            .createQueryBuilder()
            .relation(seller_1.UserSellerEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async baseCreateSeller(payload) {
        return await this.userSellerEntity
            .createQueryBuilder()
            .insert()
            .into(seller_1.UserSellerEntity)
            .values({
            banner: payload.banner,
            choice: payload.choice,
            state: payload.state,
            type: payload.type,
            firstname: payload.firstname,
            lastname: payload.lastname,
            searchName: payload.searchName,
            tags: payload.tags,
            gender: payload.gender,
            country: payload.country,
            likes: payload.likes
        })
            .execute();
    }
    async BaseHas(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .where('seller.sellerId = :sellerId', { sellerId: sellerId })
            .getOne();
    }
    async BaseHasName(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .where('seller.firstname = :firstname', { firstname: payload.firstname })
            .where('seller.lastname = :lastname', { lastname: payload.lastname })
            .getOne();
    }
    async baseApplySeller(userId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .where('seller.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseRetrieveSeller(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .addSelect('seller.createdDate')
            .where("seller.sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async BaseRetrieveSellerCommoditysPhotos(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoin('seller.commoditys', 'commoditys')
            .leftJoinAndMapMany('seller.commodityPhotos', photo_1.CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
            .addSelect('seller.createdDate')
            .where("seller.sellerId = :sellerId", { sellerId: sellerId })
            .orderBy({
            "commoditys.likes": "DESC"
        })
            .getOne();
    }
    async baseRetrieveUser(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .where("seller.sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async baseChoiceSeller(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .addSelect('seller.createdDate')
            .where("seller.choice = :choice", { choice: true })
            .orderBy("seller.createdDate", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getMany();
    }
    async baseSellerIdRetrieveSeller(sellerId) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .leftJoin('seller.commoditys', 'commoditys')
            .addSelect('seller.createdDate')
            .where("seller.sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async baseRetrieveSellerAll(payload) {
        return await this.userSellerEntity
            .createQueryBuilder('seller')
            .leftJoinAndSelect('seller.user', 'user')
            .addSelect('seller.createdDate')
            .orderBy("seller.createdDate", payload.news ? "DESC" : "ASC")
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
        if (payload.choice) {
            where.choice = payload.choice && payload.choice == 'true' ? true : false;
        }
        if (payload.other) {
            if (payload.other == '男') {
                where.gender = '男';
            }
            else if (payload.other == '女') {
                where.gender = '女';
            }
        }
        if (payload.gender) {
            where.gender = payload.gender;
        }
        if (payload.country) {
            where.country = payload.country;
        }
        if (payload.searchName) {
            where.searchName = typeorm_1.Like(`%${payload.searchName}%`);
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
        if (payload.other == '工作室') {
            return await this.userSellerEntity
                .createQueryBuilder('seller')
                .leftJoinAndSelect('seller.user', 'user')
                .innerJoin('seller.studio', 'studio')
                .addSelect('seller.createdDate')
                .where(where)
                .orderBy("seller.createdDate", payload.news ? "DESC" : "ASC")
                .skip((payload.currentPage - 1) * payload.pageSize)
                .take(payload.pageSize)
                .getManyAndCount();
        }
        else {
            return await this.userSellerEntity
                .createQueryBuilder('seller')
                .leftJoinAndSelect('seller.user', 'user')
                .addSelect('seller.createdDate')
                .where(where)
                .orderBy("seller.createdDate", payload.news ? "DESC" : "ASC")
                .skip((payload.currentPage - 1) * payload.pageSize)
                .take(payload.pageSize)
                .getManyAndCount();
        }
    }
    async baseUpdateSeller(payload) {
        const { sellerId, ...setData } = payload;
        const set = {};
        if (setData.banner) {
            set.banner = setData.banner;
        }
        if (setData.choice) {
            set.choice = setData.choice;
        }
        if (setData.state) {
            set.state = setData.state;
        }
        if (setData.type) {
            set.type = setData.type;
        }
        if (setData.firstname) {
            set.firstname = setData.firstname;
        }
        if (setData.lastname) {
            set.lastname = setData.lastname;
        }
        if (setData.searchName) {
            set.searchName = setData.searchName;
        }
        if (setData.tags) {
            set.tags = setData.tags;
        }
        if (setData.gender) {
            set.gender = setData.gender;
        }
        if (setData.country) {
            set.country = setData.country;
        }
        if (setData.likes >= 0) {
            set.likes = setData.likes;
        }
        return await this.userSellerEntity
            .createQueryBuilder()
            .update(seller_1.UserSellerEntity)
            .set(set)
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
    async baseSetSellerState(payload) {
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
], BaseSellerService.prototype, "userSellerEntity", void 0);
BaseSellerService = __decorate([
    decorator_1.Provide()
], BaseSellerService);
exports.BaseSellerService = BaseSellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9zZWxsZXIvc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQTJDO0FBQzNDLCtEQUFpRTtBQUNqRSxxRUFBNEU7QUFDNUUsbUVBQTBFO0FBSTFFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBTzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUVwQixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMseUJBQWdCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQVFELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBRTVCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1lBQzVCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7WUFDOUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lB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