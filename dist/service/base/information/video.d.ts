import { Repository } from "typeorm";
import { InformationVideoEntity } from "../../../entity/information/video";
export declare class BaseInformationVideoService {
    informationVideoEntity: Repository<InformationVideoEntity>;
    BaseCreate({ videoSrc, ccId, siteId, videoPhoto, watchs, zhcn, enus, jajp, eses, isDelete }?: {
        videoSrc?: string;
        ccId?: string;
        siteId?: string;
        videoPhoto?: string;
        watchs?: number;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
        isDelete?: boolean;
    }): Promise<import("typeorm").InsertResult>;
    BaseRetrieve({ currentPage, pageSize, news, }?: {
        currentPage?: number;
        pageSize?: number;
        news?: boolean;
    }): Promise<[InformationVideoEntity[], number]>;
    BaseRetrieveName({ zhcn, enus, jajp, eses, }?: {
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<InformationVideoEntity>;
    BaseRetrieveVideoId(videoId: any): Promise<InformationVideoEntity>;
    BaseSearch({ title, currentPage, pageSize, news, }?: {
        title?: string;
        currentPage?: number;
        pageSize?: number;
        news?: boolean;
    }): Promise<[InformationVideoEntity[], number]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(videoId: any): Promise<import("typeorm").UpdateResult>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseRelationAdd(payload: any): Promise<void>;
}
