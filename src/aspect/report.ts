import { Aspect, IMethodAspect, JoinPoint, Provide } from '@midwayjs/decorator';
import { UserController } from 'src/controller/client/user/user';
import { UserRegisterController } from 'src/controller/client/user/register';
import { UserLoginController } from 'src/controller/client/user/login';
@Provide()
@Aspect([
  UserController,
  UserRegisterController,
  UserLoginController
])

export class ReportInfo implements IMethodAspect {

  async afterReturn(point: JoinPoint, result) {
    console.log("afterReturn", point, result)
    const ctx = point.target.ctx;
    const resultData = await result;

    if(resultData && resultData.code){
      return { code: resultData.code, message: ctx.__(resultData.code), success: false }
    }else{
      return { code: 10000, message: ctx.__(10000), success: true, data: resultData }
    }

  }
}
