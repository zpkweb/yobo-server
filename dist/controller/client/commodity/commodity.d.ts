import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
export declare class CommodityController {
    commodityService: CommodityService;
    ctx: Context;
    pagination: any;
    find(findQuery: any): Promise<any>;
    search(searchQuery: any): Promise<any>;
    searchTest(searchQuery: any): Promise<any>;
    searchs(searchQuery: any): Promise<any>;
    options(type: any): Promise<any>;
}
