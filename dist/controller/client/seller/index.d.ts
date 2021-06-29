import { Context } from 'egg';
import { UserRegisterService } from "../../../service/user/register";
import { SellerService } from "../../../service/user/seller";
export declare class ServiceSellerController {
    userRegisterService: UserRegisterService;
    sellerService: SellerService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    pagination: any;
    find(queryAll: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    choice(queryAll: any): Promise<{
        data: import("../../../entity/user/seller/seller").UserSellerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(registerBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    }>;
    setState(stateBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    search(searchParams: any): Promise<any>;
}
