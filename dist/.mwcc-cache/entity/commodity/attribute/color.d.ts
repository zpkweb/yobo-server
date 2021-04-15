import { CommodityEntity } from "../commodity";
export declare class CommodityColorEntity {
    id: number;
    startColor: string;
    startColorValue: number;
    endColor: string;
    endColorValue: number;
    createdDate: Date;
    updatedDate: Date;
    commodity: CommodityEntity;
}
