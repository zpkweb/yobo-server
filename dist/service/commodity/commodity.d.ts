import { BaseCommodityServer } from "../base/commodity/commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributePrice } from "./attribute/price";
import { CommodityAttributePhoto } from "./attribute/photo";
import { CommodityAttributeColor } from "./attribute/color";
export declare class CommodityCommodityService {
    baseCommodityServer: BaseCommodityServer;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributePrice: CommodityAttributePrice;
    commodityAttributePhoto: CommodityAttributePhoto;
    commodityAttributeColor: CommodityAttributeColor;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    createMetadata(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
    hasCommodityPhoto(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityColor(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityCategory(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityShape(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityTechnique(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityTheme(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveAll(payload: any): Promise<{
        data: {
            list: import("../../entity/commodity/commodity").CommodityEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    filter(type: any, payload: any): any;
    search(payload: any): Promise<{
        data: {
            list: import("../../entity/commodity/commodity").CommodityEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete(payload: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodity(commodityId: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
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
}
