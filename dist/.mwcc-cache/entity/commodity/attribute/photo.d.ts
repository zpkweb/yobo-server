import { CommodityEntity } from "../commodity";
export declare class CommodityPhotoEntity {
    id: number;
    src: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    commodity: CommodityEntity;
}
