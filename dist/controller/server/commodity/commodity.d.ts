import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
export declare class AdminCommodityController {
    commodityService: CommodityService;
    ctx: Context;
    pagination: any;
    createCommodity(createBody: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
    }>;
    find(findParams: any): Promise<any>;
    finEdit(findParams: any): Promise<any>;
    findAll(findAllParams: any): Promise<any>;
    search(searchParams: any): Promise<any>;
    delete(deleteBody: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateCommodity(updateBody: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    }>;
    createOptions(type: any, optionsBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    retrieveOption(type: any): Promise<any>;
    updateOptions(type: any, optionsBody: any): Promise<any>;
    deleteOptions(type: any, optionsBody: any): Promise<any>;
}
