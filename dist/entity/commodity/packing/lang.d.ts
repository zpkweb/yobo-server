import { CommodityPackingEntity } from "./packing";
import { CommodityPackingLangMetadataEntity } from "./lang/metadata";
export declare class CommodityPackingLangEntity {
    id: number;
    lang: string;
    photo: string;
    number: number;
    createdDate: Date;
    updatedDate: Date;
    packing: CommodityPackingEntity;
    metadata: CommodityPackingLangMetadataEntity[];
}
