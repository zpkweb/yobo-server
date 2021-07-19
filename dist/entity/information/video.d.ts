import { InformationEntity } from "./information";
import { InformationCommentEntity } from "./comment";
import { InformationVideoDetailEntity } from "./videoDetail";
export declare class InformationVideoEntity {
    id: number;
    videoId: string;
    videoSrc: string;
    ccId: string;
    siteId: string;
    videoPhoto: string;
    isTop: boolean;
    watchs: number;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'es-es': string;
    information: InformationEntity;
    comments: InformationCommentEntity[];
    detail: InformationVideoDetailEntity;
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
