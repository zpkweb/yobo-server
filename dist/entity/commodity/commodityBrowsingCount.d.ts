import { CommodityEntity } from "./commodity";
export declare class CommodityBrowsingCountEntity {
    id: number;
    count: number;
    commodityId: string;
    createdDate: Date;
    updatedDate: Date;
    commodity: CommodityEntity;
}
