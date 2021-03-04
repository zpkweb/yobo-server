import { UserEntity } from "./user";
export declare class UserAddressEntity {
    id: number;
    name: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
}
