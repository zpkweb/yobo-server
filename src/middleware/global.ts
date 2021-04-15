import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class GlobalMiddleware implements IWebMiddleware {

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      // if(ctx.request.method === 'OPTIONS'){
      //   return ctx.body={
      //     code: 200,
      //     success: true
      //   }
      // }
      const startTime = Date.now();
      await next();

      ctx.body = Object.assign({}, ctx.body, {
        status: ctx.body.success ? 200 : 500,
        message: ctx.__(ctx.body.code)
      })

      console.log("接口响应时间:", Date.now() - startTime);
    };
  }

}
