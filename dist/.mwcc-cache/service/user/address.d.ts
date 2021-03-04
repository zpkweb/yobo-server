import { Repository } from 'typeorm';
import { UserAddressEntity } from "../../entity/user/address";
import { BaseUserServer } from "../base/user/user";
export default class UserAddressService {
    userAddressEntity: Repository<UserAddressEntity>;
    baseUserServer: BaseUserServer;
    create(payload: any): Promise<{
        data: UserAddressEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(userId: any): Promise<{
        data: UserAddressEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        data: UserAddressEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    remove(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateAddress(payload: any): Promise<any>;
}
