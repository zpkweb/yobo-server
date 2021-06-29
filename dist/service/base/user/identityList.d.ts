import { UserIdentityListEntity } from "../../../entity/user/identity/list";
import { Repository } from "typeorm";
export declare class BaseIdentityListService {
    userIdentityListEntity: Repository<UserIdentityListEntity>;
    baseCreateIdentityList(payload: any): Promise<import("typeorm").InsertResult>;
    baseRetrieveIdentityList(payload: any): Promise<UserIdentityListEntity>;
    baseRetrieveIdentityListAll(): Promise<UserIdentityListEntity[]>;
    baseUpdateIdentityList(payload: any): Promise<import("typeorm").UpdateResult>;
    baseDeleteIdentityList(payload: any): Promise<import("typeorm").DeleteResult>;
    baseDeleteIdentityListAll(): Promise<import("typeorm").DeleteResult>;
}
