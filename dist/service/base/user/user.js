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
            'userName': payload.userName || '',
            'userEmail': payload.userEmail || '',
            'userPhone': payload.userPhone || '',
            index: payload.index
        })
            .execute();
    }
    async baseRetrieveUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder('userIdentity')
            .where('userIdentity.userId = :userId', { userId: payload.userId })
            .andWhere("userIdentity.zh-cn = :zhcn", { zhcn: payload.zhcn })
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
    async baseRetrieveUser(payload) {
        return await this.userEntity
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.identitys', 'identitys')
            .leftJoinAndSelect('user.seller', 'seller')
            .where("user.name = :name", { name: payload.name })
            .andWhere("user.email = :email", { email: payload.email })
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
            .leftJoinAndSelect('user.seller', 'seller')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLG9EQUFrRDtBQUNsRCxpQ0FBaUM7QUFDakMscUVBQXVFO0FBQ3ZFLDBEQUE0RDtBQUk1RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBbUJ6QixLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVO2FBQ3pCLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxpQkFBVSxDQUFDO2FBQ2hCLE1BQU0sQ0FBQztZQUNOLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDMUUsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUtELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPO1FBQ2xDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw2QkFBa0IsQ0FBQzthQUN4QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FB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