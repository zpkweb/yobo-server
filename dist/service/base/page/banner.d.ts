import { Repository } from "typeorm";
import { PageBannerEntity } from "../../../entity/page/banner";
export declare class BasePageBannerService {
    pageBannerEntity: Repository<PageBannerEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(bannerId: any): Promise<PageBannerEntity>;
    BaseRetrievebannerId(payload: any): Promise<PageBannerEntity>;
    BaseRetrieve(payload: any): Promise<PageBannerEntity[]>;
    BaseRetrieveAll(): Promise<PageBannerEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(bannerId: any): Promise<import("typeorm").DeleteResult>;
}
