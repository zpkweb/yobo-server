import { Repository } from "typeorm";
import { UserIdentityEntity } from "../../../entity/user/identity/identity";
export declare class BaseIdentityServer {
    userIdentityEntity: Repository<UserIdentityEntity>;
    baseCreateUserIdentity(index: any): Promise<import("typeorm").InsertResult>;
    baseRetrieveUserIdentity(userId: any): Promise<UserIdentityEntity[]>;
    baseRetrieveIdentityUserId(userId: any): Promise<UserIdentityEntity[]>;
    baseRetrieveUserIdentityList(payload: any): Promise<UserIdentityEntity>;
    baseDeleteUserIdentity(payload: any): Promise<import("typeorm").DeleteResult>;
    baseDeleteIdentityId(payload: any): Promise<import("typeorm").DeleteResult>;
    BaseRelationSet(payload: any): Promise<void>;
}
