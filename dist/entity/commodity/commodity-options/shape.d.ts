import { CommodityOptionsShapeEntity } from "../options/shape";
import { CommodityEntity } from "../commodity";
export declare class CommodityShapeEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsShapeEntity;
}
