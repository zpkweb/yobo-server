import { CommodityOptionsShapeEntity } from "../options/shape";
import { CommodityEntity } from "../commodity";
export declare class CommodityShapeEntity {
    id: number;
    commodityName: string;
    shapeName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    shapes: CommodityOptionsShapeEntity;
}
