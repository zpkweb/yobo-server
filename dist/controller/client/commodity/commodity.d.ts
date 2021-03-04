import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
export declare class CommodityController {
    commodityService: CommodityService;
    ctx: Context;
    pagination: any;
    find(findQuery: any): Promise<any>;
    search(searchQuery: any): Promise<any>;
    optionsShape(type: any): Promise<any>;
}
