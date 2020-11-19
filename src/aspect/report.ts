import { Aspect, IMethodAspect, JoinPoint, Provide } from '@midwayjs/decorator';
import { UserController } from '../controller/user/user';
import { UserIdentityController } from '../controller/user/identity';

@Provide()
@Aspect([
  UserController,
  UserIdentityController
])
export class ReportInfo implements IMethodAspect {
  async afterReturn(point: JoinPoint, result) {
    return { success: true, message: 'OK', data: await result }
  }
}
