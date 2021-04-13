import { CommodityOptionsUseEntity } from "../options/use";
import { CommodityEntity } from "../commodity";
export declare class CommodityUseEntity {
    id: number;
    commodityName: string;
    useName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    uses: CommodityOptionsUseEntity;
}
