import { Context } from 'egg';
import { UserRegisterService } from "../../../service/user/register";
export declare class AdminUserRegisterController {
    userRegisterService: UserRegisterService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    register(registerBody: any): Promise<any>;
    adminRegister(registerBody: any): Promise<any>;
    customerServiceRegister(registerBody: any): Promise<any>;
    apply(applySellerBody: any): Promise<any>;
}
