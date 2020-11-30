import { Aspect, IMethodAspect, JoinPoint, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserController } from 'src/controller/client/user/user';
import { UserLoginController } from 'src/controller/client/user/login';

import { ServerUserLoginController } from 'src/controller/server/user/login';
@Provide()
@Aspect([
  UserController,
  UserLoginController,
  ServerUserLoginController
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
      status: resultData.success,
      message: point.target.ctx.__(resultData.code),
      data: resultData.data
    }


  }
}
