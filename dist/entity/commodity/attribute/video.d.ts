import { CommodityEntity } from "../commodity";
export declare class CommodityVideoEntity {
    id: number;
    video: string;
    ccId: string;
    siteId: string;
    videoPhoto: string;
    createdDate: Date;
    updatedDate: Date;
    commodity: CommodityEntity;
}
