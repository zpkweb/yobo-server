import { CommodityCommodityService } from "./commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributeDetails } from "./attribute/details";
import { CommodityAttributePostage } from "./attribute/postage";
import { CommodityAttributePrice } from "./attribute/price";
import { CommodityAttributePhoto } from "./attribute/photo";
import { CommodityAttributeVideo } from "./attribute/video";
import { CommodityAttributeColor } from "./attribute/color";
import { CommentService } from "./comment";
import { CommodityOptionService } from "./commodityOption";
export declare class CommodityService {
    commodityCommodityService: CommodityCommodityService;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributeDetails: CommodityAttributeDetails;
    commodityAttributePostage: CommodityAttributePostage;
    commodityAttributePrice: CommodityAttributePrice;
    commodityAttributePhoto: CommodityAttributePhoto;
    commodityAttributeVideo: CommodityAttributeVideo;
    commodityAttributeColor: CommodityAttributeColor;
    commentService: CommentService;
    commodityOptionService: CommodityOptionService;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        id: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
        id?: undefined;
    } | {
        data: {
            commodityId: any;
        };
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
    edit(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    clientCommodity(payload: any): Promise<{
        data: any;
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
    findPhoto(payload: any): Promise<{
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
    searchs(payload: any): Promise<any>;
    searchTest(payload: any): Promise<any>;
    clientSearch(payload: any): Promise<any>;
    ServiceSearch(payload: any): Promise<any>;
    delete(commodityId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    update(payload: any): Promise<any>;
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
    choiceCommodity(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
