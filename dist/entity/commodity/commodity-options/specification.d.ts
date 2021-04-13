import { CommodityOptionsSpecificationEntity } from "../options/specification";
import { CommodityEntity } from "../commodity";
export declare class CommoditySpecificationEntity {
    id: number;
    commodityName: string;
    specificationName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    specifications: CommodityOptionsSpecificationEntity;
}
