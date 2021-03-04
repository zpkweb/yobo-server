import { UserSellerEntity } from "./seller";
export declare class UserSellerStudioEntity {
    id: number;
    name: string;
    photo: string;
    video: string;
    text: string;
    createdDate: Date;
    updatedDate: Date;
    seller: UserSellerEntity[];
}
