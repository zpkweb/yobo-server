import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';

@Provide()
@Controller('/api/admin/user')
export class ServerUserRegisterController {

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 注册用户
  @Post('/register')
  async register(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.adminRegister(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
      }, this.jwtConfig.secret);
    }
    return data;
  }

  // 添加管理员
  @Post('/admin/register')
  async adminRegister(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.createAdmin(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
    }, this.jwtConfig.secret);
    }
    return data;

  }

  // 添加客服
  @Post('/customerService/register')
  async customerServiceRegister(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.createCustomerService(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
    }, this.jwtConfig.secret);
    }
    return data;

  }



}
