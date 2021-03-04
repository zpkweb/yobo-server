import { CommodityCommodityService } from "./commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributePrice } from "./attribute/price";
import { CommodityAttributePhoto } from "./attribute/photo";
import { CommodityAttributeColor } from "./attribute/color";
import { CommodityOptionsCategoryService } from "./options/category";
import { CommodityOptionsShapeService } from "./options/shape";
import { CommodityOptionsTechniqueService } from "./options/technique";
import { CommodityOptionsThemeService } from "./options/theme";
import { CommentService } from "./comment";
export declare class CommodityService {
    commodityCommodityService: CommodityCommodityService;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributePrice: CommodityAttributePrice;
    commodityAttributePhoto: CommodityAttributePhoto;
    commodityAttributeColor: CommodityAttributeColor;
    commodityOptionsCategoryService: CommodityOptionsCategoryService;
    commodityOptionsShapeService: CommodityOptionsShapeService;
    commodityOptionsTechniqueService: CommodityOptionsTechniqueService;
    commodityOptionsThemeService: CommodityOptionsThemeService;
    commentService: CommentService;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
    }>;
    find(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    findAll(payload: any): Promise<{
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
    update(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    }>;
    commodityOptionsCreate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    commodityOptionsTypeCreate(payload: any): Promise<any>;
    commodityOptionsTypeRetrieve(payload: any): Promise<any>;
    commodityOptionsTypeRetrieveId(payload: any): Promise<any>;
    commodityOptionsTypeRetrieveAll(payload: any): Promise<any>;
    commodityOptionsUpdate(payload: any): Promise<any>;
    commodityOptionsTypeUpdate(payload: any): Promise<any>;
    commodityOptionsDelete(payload: any): Promise<any>;
    commodityOptionsTypeDelete(payload: any): Promise<any>;
    commodityComment(payload: any): Promise<{
        success: boolean;
        code: number;
        data: {
            id: number;
            src: string;
            star: number;
            title: string;
            desc: string;
        }[];
    }>;
}
