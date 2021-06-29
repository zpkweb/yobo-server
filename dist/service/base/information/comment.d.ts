import { Repository } from "typeorm";
import { InformationCommentEntity } from "../../../entity/information/comment";
export declare class BaseInformationCommentService {
    informationCommentEntity: Repository<InformationCommentEntity>;
    BaseCreate({ content, userId, videoId, isShow, isDelete }?: {
        content?: string;
        userId?: string;
        videoId?: string;
        isShow?: boolean;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationCommentEntity[]>;
    BaseUpdate({ id, content, userId, videoId, isShow, commentId }?: {
        id?: string;
        content?: string;
        userId?: string;
        videoId?: string;
        isShow?: boolean;
        commentId?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
