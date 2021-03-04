import { Context } from 'egg';
import { UserRegisterService } from "../../../service/user/register";
import { SellerService } from "../../../service/user/seller";
export declare class AdminUserSellerController {
    userRegisterService: UserRegisterService;
    sellerService: SellerService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    pagination: any;
    find(findQuery: any): Promise<{
        data: import("../../../entity/user/seller/seller").UserSellerEntity;
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
    delete(sellerId: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
