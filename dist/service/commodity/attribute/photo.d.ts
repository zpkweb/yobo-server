import { BaseCommodityPhotoServer } from "../../base/commodity/attribute/photo";
export declare class CommodityAttributePhoto {
    baseCommodityPhotoServer: BaseCommodityPhotoServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/photo").CommodityPhotoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    getCommodity(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/photo").CommodityPhotoEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/photo").CommodityPhotoEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
