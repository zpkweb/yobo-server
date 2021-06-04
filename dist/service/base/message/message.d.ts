import { MessageEntity } from "../../../entity/message/message";
import { Repository } from "typeorm";
export declare class BaseMessageServer {
    messageEntity: Repository<MessageEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveMessageId(messageId: any): Promise<MessageEntity>;
    BaseRetrieveAll(payload: any): Promise<[MessageEntity[], number]>;
    BaseSearch(payload: any): Promise<[MessageEntity[], number]>;
    BaseDelete(messageId: any): Promise<import("typeorm").UpdateResult>;
}
