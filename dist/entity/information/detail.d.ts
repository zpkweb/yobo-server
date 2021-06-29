import { InformationEntity } from "./information";
export declare class InformationDetailEntity {
    id: number;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'es-es': string;
    information: InformationEntity;
    isDelete: boolean;
    createdDate: Date;
    updatedDate: Date;
}
