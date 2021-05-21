import { Context } from 'egg';
import { UserService } from "../../../service/user/user";
import { SellerService } from "../../../service/user/seller";
import UserAddressService from "../../../service/user/address";
export declare class UserController {
    userService: UserService;
    sellerService: SellerService;
    userAddressService: UserAddressService;
    ctx: Context;
    email: any;
    jwt: any;
    jwtConfig: any;
    info(userId: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    changePassword(changePasswordBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    updateUser(updateBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    getAddress(userId: any): Promise<{
        data: import("../../../entity/user/address").UserAddressEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    address(addressBody: any): Promise<{
        data: import("../../../entity/user/address").UserAddressEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    addressUpdate(addressBody: any): Promise<any>;
    addressRemove(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
