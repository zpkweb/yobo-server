import { UserEntity } from "../user";
import { UserAdminEntity } from "../admin/admin";
export declare class UserCustomerServiceEntity {
    id: number;
    costomerServiceId: string;
    user: UserEntity;
    createdDate: Date;
    updatedDate: Date;
    admin: UserAdminEntity;
}
