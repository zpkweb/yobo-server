import { UserEntity } from "../user";
import { UserSellerEntity } from "../seller/seller";
import { UserAdminEntity } from "../admin/admin";
export declare class UserCustomerServiceEntity {
    id: number;
    costomerServiceId: string;
    user: UserEntity;
    createdDate: Date;
    updatedDate: Date;
    sellers: UserSellerEntity[];
    admin: UserAdminEntity;
}
