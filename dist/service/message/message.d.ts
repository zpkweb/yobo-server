import { BaseMessageService } from "../base/message/message";
export declare class MessageService {
    baseMessageService: BaseMessageService;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    retrieveMessageId(messageId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    retrieveAll(payload: any): Promise<{
        data: {
            list: import("../../entity/message/message").MessageEntity[];
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
            list: import("../../entity/message/message").MessageEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete(messageId: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
