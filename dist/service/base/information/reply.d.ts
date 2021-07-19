import { Repository } from "typeorm";
import { InformationReplyEntity } from "../../../entity/information/reply";
export declare class BaseInformationReplyService {
    informationReplyEntity: Repository<InformationReplyEntity>;
    BaseCreate({ content, replyUserId, replyUserName, userId, userName, commentId, likes, replyNums, isShow, isDelete }?: {
        content?: string;
        replyUserId?: string;
        replyUserName?: string;
        userId?: string;
        userName?: string;
        commentId?: string;
        likes?: number;
        replyNums?: number;
        isShow?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieveReplyId(replyId: any): Promise<InformationReplyEntity>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationReplyEntity[]>;
    BaseRetrieveCommentId({ commentId, currentPage, pageSize }?: {
        commentId?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationReplyEntity[]>;
    BaseUpdate({ id, content, replyUserId, replyUserName, userId, userName, commentId, likes, replyNums, isShow }?: {
        id?: string;
        content?: string;
        replyUserId?: string;
        replyUserName?: string;
        userId?: string;
        userName?: string;
        commentId?: string;
        likes?: number;
        replyNums?: number;
        isShow?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseUpdatereplyId({ replyId, content, replyUserId, replyUserName, userId, userName, commentId, likes, replyNums, isShow }?: {
        replyId?: string;
        content?: string;
        replyUserId?: string;
        replyUserName?: string;
        userId?: string;
        userName?: string;
        commentId?: string;
        likes?: number;
        replyNums?: number;
        isShow?: boolean;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
