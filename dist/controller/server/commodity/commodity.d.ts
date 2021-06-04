import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
export declare class AdminCommodityController {
    commodityService: CommodityService;
    ctx: Context;
    pagination: any;
    createCommodity(createBody: any): Promise<{
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
    find(findParams: any): Promise<any>;
    edit(queryAll: any): Promise<any>;
    findAll(findAllParams: any): Promise<any>;
    search(searchParams: any): Promise<any>;
    searchs(searchParams: any): Promise<any>;
    delete(commodityId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateCommodity(updateBody: any): Promise<any>;
    createOptions(type: any, optionsBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    retrieveOptions(param: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    }>;
    retrieveOption(type: any): Promise<any>;
    retrieveOptionId(param: any): Promise<any>;
    updateOptions(type: any, optionsBody: any): Promise<any>;
    deleteOptions(type: any, optionsBody: any): Promise<any>;
}
