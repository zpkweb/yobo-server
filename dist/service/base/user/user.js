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
exports.BaseUserService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../../entity/user/user");
const crypto = require("crypto");
const identity_1 = require("../../../entity/user/identity/identity");
const address_1 = require("../../../entity/user/address");
let BaseUserService = class BaseUserService {
    async baseCreateUser(payload) {
        return await this.userEntity
            .createQueryBuilder()
            .insert()
            .into(user_1.UserEntity)
            .values({
            avatar: payload.avatar,
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            password: payload.password,
        })
            .execute();
    }
    async baseCreateUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .insert()
            .into(identity_1.UserIdentityEntity)
            .values({
            identityIndex: payload.index
        })
            .execute();
    }
    async baseRetrieveUserIdentity(userId) {
        return await this.userIdentityEntity
            .createQueryBuilder('userIdentity')
            .where('userIdentity.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseDeleteUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: payload.userId })
            .execute();
    }
    async baseLoginUser(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.seller', 'seller')
            .where("user.name = :name", { name: payload.name })
            .orWhere("user.email = :email", { email: payload.name })
            .orWhere("user.phone = :phone", { phone: payload.name })
            .getOne();
    }
    async baseLoginAdmin(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .where("user.name = :name", { name: payload.name })
            .orWhere("user.email = :email", { email: payload.name })
            .orWhere("user.phone = :phone", { phone: payload.name })
            .getOne();
    }
    async baseValidatePassword(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .addSelect("user.password")
            .where("user.userId = :userId", { userId: payload.userId })
            .andWhere("user.password = :password", { password: crypto.createHash('md5').update(payload.password).digest('hex') })
            .getOne();
    }
    async BaseHas(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where('user.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseRetrieveUserName(name) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where("user.name = :name", { name: name })
            .getOne();
    }
    async baseRetrieveUserEmail(email) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where("user.email = :email", { email: email })
            .getOne();
    }
    async baseRetrieveUserPhone(phone) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where("user.phone = :phone", { phone: phone })
            .getOne();
    }
    async baseRetrieveUser(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where("user.name = :name", { name: payload.name })
            .andWhere("user.email = :email", { email: payload.email })
            .getOne();
    }
    async baseRetrieveUserId(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .where("user.userId = :userId", { userId: userId })
            .getOne();
    }
    async baseRetrieveUserPass(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .addSelect("user.password")
            .where("user.userId = :userId", { userId: userId })
            .getOne();
    }
    async baseRetrieveUserAll() {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .getMany();
    }
    async baseSearchUser(payload) {
        const where = {};
        if (payload.name) {
            where.name = typeorm_1.Like(`%${payload.name}%`);
        }
        if (payload.email) {
            where.email = typeorm_1.Like(`%${payload.email}%`);
        }
        if (payload.phone) {
            where.phone = typeorm_1.Like(`%${payload.phone}%`);
        }
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.seller', 'seller')
            .where(where)
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseUpdateUser(payload) {
        const { userId, ...setData } = payload;
        return await this.userEntity
            .createQueryBuilder()
            .update(user_1.UserEntity)
            .set(setData)
            .where("user.userId = :userId", { userId: userId })
            .execute();
    }
    async baseDeleteUser(userId) {
        return await this.userEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: userId })
            .execute();
    }
    async baseDeleteUserAll() {
        return await this.userEntity
            .createQueryBuilder()
            .delete()
            .execute();
    }
    async baseRetrieveUserAddress(userId) {
        return await this.userAddressEntity
            .createQueryBuilder('address')
            .leftJoinAndSelect('address.user', 'user')
            .where('user.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseCreateUserAddress(payload) {
        return await this.userAddressEntity
            .createQueryBuilder()
            .insert()
            .into(address_1.UserAddressEntity)
            .values({
            name: payload.name || '',
            phone: payload.phone || '',
            country: payload.country || '',
            city: payload.city || '',
            address: payload.address || ''
        })
            .execute();
    }
    async baseUpdateUserAddress(payload) {
        const { userId, ...setData } = payload;
        return await this.userAddressEntity
            .createQueryBuilder('address')
            .leftJoinAndSelect('address.user', 'user')
            .update(address_1.UserAddressEntity)
            .set(setData)
            .where("user.userId = :userId", { userId: userId })
            .execute();
    }
    async baseDeleteUserAddress(userId) {
        return await this.userAddressEntity
            .createQueryBuilder('address')
            .delete()
            .where("userId = :userId", { userId: userId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseUserService.prototype, "userEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(identity_1.UserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseUserService.prototype, "userIdentityEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(address_1.UserAddressEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseUserService.prototype, "userAddressEntity", void 0);
BaseUserService = __decorate([
    decorator_1.Provide()
], BaseUserService);
exports.BaseUserService = BaseUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQTJDO0FBQzNDLG9EQUFrRDtBQUNsRCxpQ0FBaUM7QUFDakMscUVBQXVFO0FBQ3ZFLDBEQUE0RDtBQUk1RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBbUIxQixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVO2FBQ3pCLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxpQkFBVSxDQUFDO2FBQ2hCLE1BQU0sQ0FBQztZQUNOLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw2QkFBa0IsQ0FBQzthQUN4QixNQUFNLENBQUM7WUFDTixhQUFhLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDN0IsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUtBLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNO1FBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMs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