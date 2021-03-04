import { Repository } from "typeorm";
import { CommodityPhotoEntity } from "../../../../entity/commodity/attribute/photo";
export declare class BaseCommodityPhotoServer {
    commodityPhotoEntity: Repository<CommodityPhotoEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityPhotoEntity>;
    BaseRetrieveCommodityId(payload: any): Promise<CommodityPhotoEntity[]>;
    BaseRetrieve(payload: any): Promise<CommodityPhotoEntity[]>;
    BaseRetrieveAll(): Promise<CommodityPhotoEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(payload: any): Promise<import("typeorm").DeleteResult>;
}
