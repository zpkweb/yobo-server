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
    BaseRetrieve({ currentPage, pageSize }?: {
        currentPage?: number;
        pageSize?: number;
    }): Promise<InformationVideoEntity[]>;
    BaseUpdate({ id, videoSrc, ccId, siteId, videoPhoto, watchs, zhcn, enus, jajp, eses, }?: {
        id?: string;
        videoSrc?: string;
        ccId?: string;
        siteId?: string;
        videoPhoto?: string;
        watchs?: number;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        eses?: string;
    }): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").UpdateResult>;
}
