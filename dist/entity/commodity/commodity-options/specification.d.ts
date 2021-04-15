import { CommodityOptionsSpecificationEntity } from "../options/specification";
import { CommodityEntity } from "../commodity";
export declare class CommoditySpecificationEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsSpecificationEntity;
}
