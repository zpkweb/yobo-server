import { Aspect, IMethodAspect, JoinPoint, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserController } from 'src/controller/client/user/user';
import { UserSellerController } from 'src/controller/client/user/seller';
import { UserRegisterController } from 'src/controller/client/user/register';
import { UserLoginController } from 'src/controller/client/user/login';

@Provide()
@Aspect([
  UserController,
  UserSellerController,
  UserRegisterController,
  UserLoginController
])
export class ReportInfo implements IMethodAspect {

  @Inject()
  ctx: Context;

  async afterReturn(point: JoinPoint, result) {

    console.log("afterReturn result", result)
    const resultData = await result;
    if(resultData && resultData.code){
      return { code: resultData.code, message: point.target.ctx.__(resultData.code), success: false, data: resultData.data }
    }else{
      return { code: 10000, message: point.target.ctx.__('10000'), success: true, data: resultData }
    }

  }
}
