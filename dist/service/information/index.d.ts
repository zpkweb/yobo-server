import { InformationCommentService } from "./comment";
import { InformationDetailService } from "./detail";
import { InformationFabulousService } from "./fabulous";
import { InformationService } from "./information";
import { InformationReplyService } from "./reply";
import { InformationVideoService } from "./video";
export declare class ServiceInformation {
    informationCommentService: InformationCommentService;
    informationDetailService: InformationDetailService;
    informationFabulousService: InformationFabulousService;
    informationService: InformationService;
    informationReplyService: InformationReplyService;
    informationVideoService: InformationVideoService;
    createInformation({ zhcn, enus, jajp, eses, zhcnDetail, enusDetail, jajpDetail, esesDetail, videoSrc, ccId, siteId, videoPhoto, watchs, zhcnVideo, enusVideo, jajpVideo, esesVideo, }?: {
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
        zhcnDetail?: string;
        enusDetail?: string;
        jajpDetail?: string;
        esesDetail?: string;
        videoSrc?: string;
        ccId?: string;
        siteId?: string;
        videoPhoto?: string;
        watchs?: number;
        zhcnVideo?: string;
        enusVideo?: string;
        jajpVideo?: string;
        esesVideo?: string;
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
}
