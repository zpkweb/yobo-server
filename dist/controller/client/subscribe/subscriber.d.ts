import { Context } from 'egg';
import { SubscriberService } from "../../../service/subscribe/subscriber";
export declare class SubscriberController {
    subscriberService: SubscriberService;
    ctx: Context;
    create(createBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    find(findQuery: any): Promise<{
        data: import("../../../entity/subscribe/subscriber").SubscriberEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/subscribe/subscriber").SubscriberEntity[];
        success: boolean;
        code: number;
    }>;
    delete(deleteBody: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}
