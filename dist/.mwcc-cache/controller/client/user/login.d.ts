import { Context } from 'egg';
import { LoginService } from "../../../service/user/login";
import { UserRegisterService } from "../../../service/user/register";
import { UserService } from "../../../service/user/user";
import { SellerService } from "../../../service/user/seller";
export declare class UserLoginController {
    loginService: LoginService;
    userRegisterService: UserRegisterService;
    userService: UserService;
    sellerService: SellerService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    email: any;
    register(registerBody: any): Promise<any>;
    apply(applySellerBody: any): Promise<any>;
    login(loginBody: any): Promise<any>;
    passwordRetrieveCodeSend(codeSendBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/user").UserEntity;
        success: boolean;
        code: number;
    }>;
    passwordRetrieveCodeVerify(codeVerifyBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    search(searchQuery: any): Promise<any>;
}
