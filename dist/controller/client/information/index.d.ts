import { ServiceInformation } from "../../../service/information/index";
export declare class informatinController {
    serviceInformation: ServiceInformation;
    pagination: any;
    videoComment(createBody: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/information/comment").InformationCommentEntity;
        success: boolean;
        code: number;
    }>;
    commentReply(createBody: any): Promise<{
        data: import("../../../entity/information/reply").InformationReplyEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    replyReply(createBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    commentList(findParams: any): Promise<any>;
    videoCommentLikes(createBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    videoWatchs(createBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
