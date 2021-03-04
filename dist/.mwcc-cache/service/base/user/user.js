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
exports.BaseUserServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../../entity/user/user");
const crypto = require("crypto");
const identity_1 = require("../../../entity/user/identity/identity");
const address_1 = require("../../../entity/user/address");
let BaseUserServer = class BaseUserServer {
    async baseCreateUser(payload) {
        console.log("baseCreateUser", payload);
        return await this.userEntity
            .createQueryBuilder()
            .insert()
            .into(user_1.UserEntity)
            .values({
            avatar: payload.avatar,
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            password: crypto.createHash('md5').update(payload.password).digest('hex')
        })
            .execute();
    }
    async baseCreateUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .insert()
            .into(identity_1.UserIdentityEntity)
            .values({
            'zh-cn': payload['zh-cn'] || '',
            'en-us': payload['en-us'] || '',
            'ja-jp': payload['ja-jp'] || '',
            'fr-fr': payload['fr-fr'] || '',
            'es-es': payload['es-es'] || '',
            index: payload.index
        })
            .execute();
    }
    async baseDeleteUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: payload.userId })
            .orWhere("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
            .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
            .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
            .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
            .orWhere("identityList.es-es = :eses", { eses: payload['es-es'] })
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
        console.log("BaseHas", userId);
        return await this.userEntity
            .createQueryBuilder('user')
            .where('user.userId = :userId', { userId: userId })
            .getOne();
    }
    async baseRetrieveUser(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.seller', 'seller')
            .where("user.name = :name", { name: payload.name })
            .orWhere("user.email = :email", { email: payload.email })
            .orWhere("user.userId = :userId", { userId: payload.userId })
            .getOne();
    }
    async baseRetrieveUserId(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.seller', 'seller')
            .where("user.userId = :userId", { userId: userId })
            .getOne();
    }
    async baseRetrieveUserPass(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .addSelect("user.password")
            .where("user.userId = :userId", { userId: payload.userId })
            .orWhere("user.email = :email", { email: payload.email })
            .getOne();
    }
    async baseRetrieveUserAll() {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .getMany();
    }
    async baseRetrieveInfo(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.address', 'address')
            .where("user.userId = :userId", { userId: userId })
            .getOne();
    }
    async baseRetrieveSelf(userId) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.seller', 'seller')
            .leftJoinAndSelect('user.address', 'address')
            .leftJoinAndSelect('user.likeSellers', 'likeSellers')
            .leftJoinAndSelect('user.likeCommoditys', 'likeCommoditys')
            .leftJoinAndSelect('user.browsingHistory', 'browsingHistory')
            .where("user.userId = :userId", { userId: userId })
            .getOne();
    }
    async baseSearchUser(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identity')
            .where("user.name like :name", { name: `%${payload.name}%` })
            .andWhere("user.email like :email", { email: `%${payload.email}%` })
            .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseSearchUserIdentity(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .innerJoinAndSelect('user.identitys', 'identity', 'identity.en-us like :enus ', { enus: `%${payload.identity}%` })
            .where("user.name like :name", { name: `%${payload.name}%` })
            .andWhere("user.email like :email", { email: `%${payload.email}%` })
            .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
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
        console.log("baseUpdateUserAddress", payload);
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
], BaseUserServer.prototype, "userEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(identity_1.UserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseUserServer.prototype, "userIdentityEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(address_1.UserAddressEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseUserServer.prototype, "userAddressEntity", void 0);
BaseUserServer = __decorate([
    decorator_1.Provide()
], BaseUserServer);
exports.BaseUserServer = BaseUserServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLG9EQUFrRDtBQUNsRCxpQ0FBaUM7QUFDakMscUVBQXVFO0FBQ3ZFLDBEQUE0RDtBQUk1RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBbUJ6QixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN0QyxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVU7YUFDekIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLGlCQUFVLENBQUM7YUFDaEIsTUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMxRSxDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBS0QsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU87UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDZCQUFrQixDQUFDO2FBQ3hCLE1BQU0sQ0FBQztZ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