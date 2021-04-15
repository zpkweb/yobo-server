import { CommodityOptionsClassificationEntity } from "../options/classification";
import { CommodityEntity } from "../commodity";
export declare class CommodityClassificationEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsClassificationEntity;
}
