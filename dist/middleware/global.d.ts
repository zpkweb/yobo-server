import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
export declare class GlobalMiddleware implements IWebMiddleware {
    resolve(): (ctx: Context, next: IMidwayWebNext) => Promise<void>;
}
