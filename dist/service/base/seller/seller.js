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
const photo_1 = require("../../../entity/commodity/attribute/photo");
const name_1 = require("../../../entity/commodity/attribute/name");
let BaseSellerServer = class BaseSellerServer {
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
            tags: payload.tags,
            gender: payload.gender,
            country: payload.country,
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
            .orderBy("seller.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
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
            .orderBy("seller.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
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
                .orderBy("seller.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
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
                .orderBy("seller.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
                .skip((payload.currentPage - 1) * payload.pageSize)
                .take(payload.pageSize)
                .getManyAndCount();
        }
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
], BaseSellerServer.prototype, "userSellerEntity", void 0);
BaseSellerServer = __decorate([
    decorator_1.Provide()
], BaseSellerServer);
exports.BaseSellerServer = BaseSellerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9zZWxsZXIvc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQTJDO0FBQzNDLCtEQUFpRTtBQUNqRSxxRUFBNEU7QUFDNUUsbUVBQTBFO0FBSTFFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBTzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUVwQixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMseUJBQWdCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQVFELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBRTVCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQzthQUN0QixNQUFNLENBQUM7WUFDTixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1lBQzVCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztTQUN6QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBUUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1FBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQ2pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUM1QixLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUQsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQ2pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUM1QixLQUFLLENBQUMsK0JBQStCLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3hFLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEUsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBT0QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQ2pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUU1QixLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDcEQsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBT0QsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVE7UUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBQzVCLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7YUFJeEMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO2FBQy9CLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUM1RCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtRQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDNUIsaUJBQWlCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzthQUN4QyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBSUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87UUFDNUIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBTzVCLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQzthQUMvQixLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDbEQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksSUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsS0FBSyxDQUFDO2FBQ3ZGLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsMEJBQTBCLENBQUMsUUFBUTtRQUV2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDNUIsaUJBQWlCLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzthQUV4QyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2FBRTNDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQzthQUMvQixLQUFLLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBU0QsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU87UUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBQzVCLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7YUFNeEMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO2FBQy9CLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQzthQUN2RixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDdEIsZUFBZSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9CLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUc1QixrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7YUFDckQsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsNEJBQW9CLEVBQUUsZ0JBQWdCLEVBQUUscURBQXFELENBQUM7YUFDM0ksaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsMEJBQW1CLEVBQUUsZUFBZSxFQUFFLG9EQUFvRCxDQUFDO2FBR3JJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUN0QixlQUFlLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBT0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87UUFFNUIsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBRXRCLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNkLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDbkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzFFO1FBRUQsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFDO1lBQ2YsSUFBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7YUFDbkI7aUJBQUssSUFBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtnQkFDN0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7YUFDbkI7U0FFRjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixLQUFLLENBQUMsUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtpQkFDakMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2lCQUM1QixpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2lCQUV4QyxTQUFTLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQztpQkFDcEMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO2lCQUMvQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQztpQkFDdkYsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDdEIsZUFBZSxFQUFFLENBQUM7U0FDcEI7YUFBSztZQUNKLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO2lCQUNqQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7aUJBQzVCLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7aUJBR3hDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDWixPQUFPLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxLQUFLLENBQUM7aUJBQ3ZGLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ3RCLGVBQWUsRUFBRSxDQUFDO1NBQ3BCO0lBR0gsQ0FBQztJQVNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzVCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLHlCQUFnQixDQUFDO2FBUXhCLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDckQsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBWUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVE7UUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3JELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU1ELEtBQUssQ0FBQyxtQkFBbUI7UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBUUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU87UUFDOUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMseUJBQWdCLENBQUM7YUFJeEIsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNyRCxPQUFPLEVBQUUsQ0FBQTtJQUNkLENBQUM7Q0FFSixDQUFBO0FBalVDO0lBREMsdUJBQWlCLENBQUMseUJBQWdCLENBQUM7OEJBQ2xCLG9CQUFVOzBEQUFrQjtBQUhuQyxnQkFBZ0I7SUFENUIsbUJBQU8sRUFBRTtHQUNHLGdCQUFnQixDQW9VNUI7QUFwVVksNENBQWdCIn0=