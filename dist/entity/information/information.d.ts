import { InformationDetailEntity } from "./detail";
import { InformationVideoEntity } from "./video";
export declare class InformationEntity {
    id: number;
    informationId: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'es-es': string;
    isTop: boolean;
    detail: InformationDetailEntity;
    videos: InformationVideoEntity[];
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
