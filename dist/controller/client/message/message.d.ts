import Message from "../../../service/message/index";
export declare class MessageController {
    message: Message;
    postBanner(body: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
