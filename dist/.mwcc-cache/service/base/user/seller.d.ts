import { Repository } from "typeorm";
import { UserSellerEntity } from "../../../entity/user/seller/seller";
import { UserSellerMetadataEntity } from "../../../entity/user/seller/metadata";
export declare class BaseSellerServer {
    userSellerEntity: Repository<UserSellerEntity>;
    userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;
    baseCreateSeller(payload: any): Promise<import("typeorm").InsertResult>;
    baseCreateSellerMetadata(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(sellerId: any): Promise<UserSellerEntity>;
    baseApplySeller(userId: any): Promise<UserSellerEntity>;
    baseRetrieveSeller(payload: any): Promise<UserSellerEntity>;
    baseRetrieveSellerAll(payload: any): Promise<[UserSellerEntity[], number]>;
    baseSearchSeller(payload: any): Promise<[UserSellerEntity[], number]>;
    baseUpdateSeller(payload: any): Promise<import("typeorm").UpdateResult>;
    baseUpdateSellerMetadata(payload: any): Promise<import("typeorm").UpdateResult>;
    baseDeleteSeller(sellerId: any): Promise<import("typeorm").DeleteResult>;
    baseDeleteSellerAll(): Promise<import("typeorm").DeleteResult>;
    basseSetSellerState(payload: any): Promise<import("typeorm").UpdateResult>;
}