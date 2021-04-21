import { CommodityCommodityService } from "./commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributePrice } from "./attribute/price";
import { CommodityAttributePhoto } from "./attribute/photo";
import { CommodityAttributeColor } from "./attribute/color";
import { CommentService } from "./comment";
import { CommodityOptionService } from "./commodityOption";
export declare class CommodityService {
    commodityCommodityService: CommodityCommodityService;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributePrice: CommodityAttributePrice;
    commodityAttributePhoto: CommodityAttributePhoto;
    commodityAttributeColor: CommodityAttributeColor;
    commentService: CommentService;
    commodityOptionService: CommodityOptionService;
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
    searchs(payload: any): Promise<{
        data: {
            list: any;
            total: any;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete(commodityId: any): Promise<{
        success: boolean;
        code: number;
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
    createOptions(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    retrieveOptions({ isLocale, locale }: {
        isLocale?: boolean;
        locale?: string;
    }): Promise<{
        data: any;
        success: boolean;
        code: number;
    }>;
    retrieveOption({ type, }?: {
        type?: string;
    }): Promise<any>;
    retrieveOptionId(payload: any): Promise<any>;
    retrieveOptionAll(payload: any): Promise<any>;
    updateOptions({ type, id, img, zhcn, enus, jajp, eses }?: {
        type?: string;
        id?: string;
        img?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<any>;
    deleteOptions(payload: any): Promise<any>;
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
