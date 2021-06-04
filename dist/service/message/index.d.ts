import { MessageServer } from "./message";
export default class Message {
    messageServer: MessageServer;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    findAll(payload: any): Promise<{
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
