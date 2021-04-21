import { Context } from 'egg';
import { LoginService } from "../service/user/login";
import { Application } from 'egg';
import { UploadService } from "../service/upload/index";
export declare class apiController {
    app: Application;
    loginService: LoginService;
    uploadService: UploadService;
    ctx: Context;
    jwt: any;
    jwtConfig: any;
    api(ctx: any): Promise<void>;
    test(ctx: any): Promise<void>;
}
