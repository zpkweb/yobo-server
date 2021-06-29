import { InformationEntity } from "./information";
import { InformationCommentEntity } from "./comment";
export declare class InformationVideoEntity {
    id: number;
    videoId: string;
    videoSrc: string;
    ccId: string;
    siteId: string;
    videoPhoto: string;
    watchs: number;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'es-es': string;
    information: InformationEntity;
    comments: InformationCommentEntity[];
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
