import { Repository } from "typeorm";
import { UserEntity } from "../../../entity/user/user";
import { UserIdentityEntity } from "../../../entity/user/identity/identity";
import { UserAddressEntity } from "../../../entity/user/address";
export declare class BaseUserService {
    userEntity: Repository<UserEntity>;
    userIdentityEntity: Repository<UserIdentityEntity>;
    userAddressEntity: Repository<UserAddressEntity>;
    baseCreateUser(payload: any): Promise<import("typeorm").InsertResult>;
    baseCreateUserIdentity(payload: any): Promise<import("typeorm").InsertResult>;
    baseRetrieveUserIdentity(userId: any): Promise<UserIdentityEntity>;
    baseDeleteUserIdentity(payload: any): Promise<import("typeorm").DeleteResult>;
    baseLoginUser(payload: any): Promise<UserEntity>;
    baseLoginAdmin(payload: any): Promise<UserEntity>;
    baseValidatePassword(payload: any): Promise<UserEntity>;
    BaseHas(userId: any): Promise<UserEntity>;
    baseRetrieveUserName(name: any): Promise<UserEntity>;
    baseRetrieveUserEmail(email: any): Promise<UserEntity>;
    baseRetrieveUserPhone(phone: any): Promise<UserEntity>;
    baseRetrieveUser(payload: any): Promise<UserEntity>;
    baseRetrieveUserId(userId: any): Promise<UserEntity>;
    baseRetrieveUserPass(userId: any): Promise<UserEntity>;
    baseRetrieveUserAll(): Promise<UserEntity[]>;
    baseSearchUser(payload: any): Promise<[UserEntity[], number]>;
    baseUpdateUser(payload: any): Promise<import("typeorm").UpdateResult>;
    baseDeleteUser(userId: any): Promise<import("typeorm").DeleteResult>;
    baseDeleteUserAll(): Promise<import("typeorm").DeleteResult>;
    baseRetrieveUserAddress(userId: any): Promise<UserAddressEntity>;
    baseCreateUserAddress(payload: any): Promise<import("typeorm").InsertResult>;
    baseUpdateUserAddress(payload: any): Promise<import("typeorm").UpdateResult>;
    baseDeleteUserAddress(userId: any): Promise<import("typeorm").DeleteResult>;
}
