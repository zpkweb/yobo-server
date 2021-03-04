import { Context } from 'egg';
import { LoginService } from "../../../service/user/login";
import { AdminUserLoginDTO } from "../../../dto/user/login";
export declare class AdminUserLoginController {
    loginService: LoginService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    login(loginBody: AdminUserLoginDTO): Promise<any>;
}
