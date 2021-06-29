import { Repository } from 'typeorm';
import { UserAddressEntity } from "../../entity/user/address";
import { BaseUserService } from "../base/user/user";
export default class UserAddressService {
    userAddressEntity: Repository<UserAddressEntity>;
    baseUserService: BaseUserService;
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
