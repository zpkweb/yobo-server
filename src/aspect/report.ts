import { Aspect, IMethodAspect, JoinPoint, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserController } from 'src/controller/client/user/user';
import { UserLoginController } from 'src/controller/client/user/login';

import { ServerUserController } from 'src/controller/server/user/user';
import { ServerUserLoginController } from 'src/controller/server/user/login';
import { ServerUserRegisterController } from 'src/controller/server/user/register';
import { ServerUserSellerController } from 'src/controller/server/user/seller';

import { CommodityController } from 'src/controller/client/commodity/commodity';
import { CommodityAdminController } from 'src/controller/server/commodity/commodity';

@Provide()
@Aspect([
  UserController,
  UserLoginController,
  ServerUserController,
  ServerUserLoginController,
  ServerUserRegisterController,
  ServerUserSellerController,
  CommodityController,
  CommodityAdminController
])
export class ReportInfo implements IMethodAspect {

  @Inject()
  ctx: Context;

  async afterReturn(point: JoinPoint, result) {
    // console.log("point", point)
    const resultData = await result;
    // console.log("afterReturn result", resultData)
    return {
      code: resultData.code,
      success: resultData.success,
      status: resultData.success ? 200 : 500,
      message: point.target.ctx.__(resultData.code),
      data: resultData.data
    }


  }
  // async afterThrow(point: JoinPoint, error) {
  //   if(error){
  //     console.error(error)
  //     return error;
  //   }
  // }
}
