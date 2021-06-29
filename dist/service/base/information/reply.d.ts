import { Repository } from "typeorm";
import { InformationReplyEntity } from "../../../entity/information/reply";
export declare class BaseInformationReplyService {
    informationReplyEntity: Repository<InformationReplyEntity>;
    BaseCreate({ content, replyUser, userId, commentId, isShow, isDelete }?: {
        content?: string;
        replyUser?: string;
        userId?: string;
        commentId?: string;
        isShow?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationReplyEntity[]>;
    BaseUpdate({ id, content, replyUser, userId, commentId, isShow }?: {
        id?: string;
        content?: string;
        replyUser?: string;
        userId?: string;
        commentId?: string;
        isShow?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
