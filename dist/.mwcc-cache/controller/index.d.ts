import { Context } from 'egg';
import { LoginService } from "../service/user/login";
import { Application } from 'egg';
export declare class apiController {
    app: Application;
    loginService: LoginService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    api(ctx: any): Promise<void>;
}
