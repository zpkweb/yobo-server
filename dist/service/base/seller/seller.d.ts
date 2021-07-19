import { Repository } from "typeorm";
import { UserSellerEntity } from "../../../entity/user/seller/seller";
export declare class BaseSellerService {
    userSellerEntity: Repository<UserSellerEntity>;
    relation(payload: any): Promise<void>;
    baseCreateSeller(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(sellerId: any): Promise<UserSellerEntity>;
    BaseHasName(payload: any): Promise<UserSellerEntity>;
    baseApplySeller(userId: any): Promise<UserSellerEntity>;
    baseRetrieveSeller(sellerId: any): Promise<UserSellerEntity>;
    BaseRetrieveSellerCommoditysPhotos(sellerId: any): Promise<UserSellerEntity>;
    baseRetrieveUser(sellerId: any): Promise<UserSellerEntity>;
    baseChoiceSeller(payload: any): Promise<UserSellerEntity[]>;
    baseSellerIdRetrieveSeller(sellerId: any): Promise<UserSellerEntity>;
    baseRetrieveSellerAll(payload: any): Promise<[UserSellerEntity[], number]>;
    baseRetrieveSellerHome(payload: any): Promise<[UserSellerEntity[], number]>;
    baseSearchSeller(payload: any): Promise<[UserSellerEntity[], number]>;
    baseUpdateSeller(payload: any): Promise<import("typeorm").UpdateResult>;
    baseDeleteSeller(sellerId: any): Promise<import("typeorm").DeleteResult>;
    baseDeleteSellerAll(): Promise<import("typeorm").DeleteResult>;
    baseSetSellerState(payload: any): Promise<import("typeorm").UpdateResult>;
}
