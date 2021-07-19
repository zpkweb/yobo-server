import { Repository } from "typeorm";
import { InformationCommentEntity } from "../../../entity/information/comment";
export declare class BaseInformationCommentService {
    informationCommentEntity: Repository<InformationCommentEntity>;
    BaseCreate({ content, userId, userName, videoId, likes, isShow, isDelete }?: {
        content?: string;
        userId?: string;
        userName?: string;
        videoId?: string;
        likes?: number;
        isShow?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommentId(commentId: any): Promise<InformationCommentEntity>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<[InformationCommentEntity[], number]>;
    BaseRetrieveList({ videoId, currentPage, pageSize }?: {
        videoId?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<[InformationCommentEntity[], number]>;
    BaseUpdate({ id, content, userId, userName, videoId, likes, isShow, commentId }?: {
        id?: string;
        content?: string;
        userId?: string;
        userName?: string;
        videoId?: string;
        likes?: number;
        isShow?: boolean;
        commentId?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseUpdateCommentId({ content, userId, userName, videoId, likes, isShow, commentId }?: {
        content?: string;
        userId?: string;
        userName?: string;
        videoId?: string;
        likes?: number;
        isShow?: boolean;
        commentId?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseRelationAdd(payload: any): Promise<void>;
    BaseRelationRemove(payload: any): Promise<void>;
}
