import { BaseInformationReplyService } from "../base/information/reply";
import { InformationLikesService } from "./likes";
export declare class InformationReplyService {
    baseInformationReplyService: BaseInformationReplyService;
    informationLikesService: InformationLikesService;
    create(payload: any): Promise<{
        data: import("../../entity/information/reply").InformationReplyEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    reply(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    likes({ type, replyId, userId, userName }?: {
        type?: string;
        replyId?: string;
        userId?: string;
        userName?: string;
    }): Promise<{
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
    baseRetrieveReplyId(replytId: any): Promise<{
        data: import("../../entity/information/reply").InformationReplyEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: import("../../entity/information/reply").InformationReplyEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommentId(payload: any): Promise<{
        data: import("../../entity/information/reply").InformationReplyEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    baseUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    baseUpdateReplyId(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
