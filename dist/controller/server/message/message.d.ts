import Message from "../../../service/message/index";
export declare class AdminMessageController {
    message: Message;
    findAll(queryAll: any): Promise<{
        data: {
            list: import("../../../entity/message/message").MessageEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    search(queryAll: any): Promise<{
        data: {
            list: import("../../../entity/message/message").MessageEntity[];
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
