import { CommodityOptionsClassificationEntity } from "../options/classification";
import { CommodityEntity } from "../commodity";
export declare class CommodityClassificationEntity {
    id: number;
    commodityName: string;
    classificationName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    classifications: CommodityOptionsClassificationEntity;
}
