import { UserEntity } from "../user";
import { UserCustomerServiceEntity } from "../customerService/customerService";
export declare class UserAdminEntity {
    id: number;
    adminId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    customerService: UserCustomerServiceEntity[];
}
