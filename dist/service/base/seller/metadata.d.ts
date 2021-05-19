import { Repository } from "typeorm";
import { UserSellerMetadataEntity } from "../../../entity/user/seller/metadata";
export declare class BaseSellerMetadataServer {
    userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;
    baseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    baseRetrieve(sellerId: any): Promise<UserSellerMetadataEntity>;
    baseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    relation(payload: any): Promise<void>;
}
