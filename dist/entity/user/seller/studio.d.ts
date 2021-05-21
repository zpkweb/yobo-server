import { UserSellerEntity } from "./seller";
export declare class UserSellerStudioEntity {
    id: number;
    sellerId: string;
    banner: string;
    name: string;
    introduce: string;
    photo: string;
    video: string;
    ccId: string;
    siteId: string;
    videoPhoto: string;
    createdDate: Date;
    updatedDate: Date;
    seller: UserSellerEntity;
}
