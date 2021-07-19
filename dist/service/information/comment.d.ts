import { BaseInformationCommentService } from "../base/information/comment";
import { InformationReplyService } from "./reply";
import { InformationLikesService } from "./likes";
export declare class InformationCommentService {
    baseInformationCommentService: BaseInformationCommentService;
    informationReplyService: InformationReplyService;
    informationLikesService: InformationLikesService;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/information/comment").InformationCommentEntity;
        success: boolean;
        code: number;
    }>;
    baseCreate(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    baseRetrieveCommentId(commentId: any): Promise<{
        data: import("../../entity/information/comment").InformationCommentEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: [import("../../entity/information/comment").InformationCommentEntity[], number];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveList(payload: any): Promise<{
        data: {
            list: any;
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    likes({ type, commentId, userId, userName }?: {
        type?: string;
        commentId?: string;
        userId?: string;
        userName?: string;
    }): Promise<{
        success: boolean;
        code: number;
    }>;
    baseUpdateCommentId(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
    relationSet(payload: any): Promise<void>;
    relationAdd(payload: any): Promise<void>;
    relationRemove(payload: any): Promise<void>;
}
