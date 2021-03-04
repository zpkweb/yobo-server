import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
export declare class AuthorizeMiddleware implements IWebMiddleware {
    jwt: any;
    jwtConfig: any;
    resolve(): (ctx: Context, next: IMidwayWebNext) => Promise<any>;
}
