import { InformationCommentService } from "./comment";
import { InformationDetailService } from "./detail";
import { InformationLikesService } from "./likes";
import { InformationService } from "./information";
import { InformationReplyService } from "./reply";
import { InformationVideoService } from "./video";
import { InformationVideoDetailService } from "./videoDetail";
export declare class ServiceInformation {
    informationCommentService: InformationCommentService;
    informationDetailService: InformationDetailService;
    informationLikesService: InformationLikesService;
    informationService: InformationService;
    informationReplyService: InformationReplyService;
    informationVideoService: InformationVideoService;
    informationVideoDetailService: InformationVideoDetailService;
    createInformation({ name, desc, videos, }?: {
        name?: {};
        desc?: {};
        videos?: any[];
    }): Promise<any>;
    informationList({ currentPage, pageSize, news, isTop, isLocale, locale }?: {
        currentPage?: number;
        pageSize?: number;
        news?: boolean;
        isTop?: boolean;
        isLocale?: boolean;
        locale?: string;
    }): Promise<{
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
    informationDetail(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    searchInformation(payload: any): Promise<{
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
    updateInformation({ informationId, name, desc, videos, removeVideos }?: {
        informationId?: string;
        name?: {};
        desc?: {};
        videos?: any[];
        removeVideos?: any[];
    }): Promise<any>;
    deleteInformation(informationId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    createInformationVideo(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    }>;
    informationVideoList({ currentPage, pageSize, news, isLocale, locale }?: {
        currentPage?: number;
        pageSize?: number;
        news?: boolean;
        isLocale?: boolean;
        locale?: string;
    }): Promise<{
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
    informationVideoDetail(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    searchInformationVideo(payload: any): Promise<{
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
    informationTopVideo(): Promise<{
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    informationNewVideo(): Promise<{
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateInformationVideo(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    deleteInformationVideo(videoId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    videoComment(payload: any): Promise<{
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
    commentList(payload: any): Promise<{
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
    commentReply(payload: any): Promise<{
        data: import("../../entity/information/reply").InformationReplyEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    replyReply(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    likes({ type, typeId, userName, userId }?: {
        type?: string;
        typeId?: string;
        userName?: string;
        userId?: string;
    }): Promise<{
        success: boolean;
        code: number;
    }>;
    bffInformationDetail(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    watchs(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
