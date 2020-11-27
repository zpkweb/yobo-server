import { Aspect, IMethodAspect, JoinPoint, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserController } from 'src/controller/client/user/user';
import { UserLoginController } from 'src/controller/client/user/login';

@Provide()
@Aspect([
  UserController,
  UserLoginController
])
export class ReportInfo implements IMethodAspect {

  @Inject()
  ctx: Context;

  async afterReturn(point: JoinPoint, result) {

    const resultData = await result;
    console.log("afterReturn result", resultData)
    return {
      code: resultData.code,
      success: resultData.success,
      message: point.target.ctx.__(resultData.code),
      data: resultData.data
    }


  }
}
