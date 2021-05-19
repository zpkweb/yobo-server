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
    create(createBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: {
            sellerId: any;
        };
        success: boolean;
        code: number;
    }>;
    edit(editQuery: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    update(registerBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    find(findQuery: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
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
