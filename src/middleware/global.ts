import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class GlobalMiddleware implements IWebMiddleware {

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      const startTime = Date.now();
      await next();
      console.log("接口响应时间:", Date.now() - startTime);

      console.log("ctx.body", ctx.body)
      const resultData = await ctx.body;

      if(resultData && resultData.code){
        ctx.body = { code: resultData.code, message: ctx.__(resultData.code), success: false, data: resultData.data }
      }else{
        ctx.body = { code: 10000, message: ctx.__('10000'), success: true, data: resultData }
      }

    };
  }

}
