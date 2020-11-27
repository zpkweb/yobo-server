import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';

@Provide()
@Controller('/api/admin/user', { tagName: 'admin' })
export class ServerUserLoginController {

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 后台登录
  @Post('/login')
  async login(@Body(ALL) loginBody) {
    let data:any =  await this.loginService.adminLogin(loginBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
      }, this.jwtConfig.secret);
    }
    console.log("login data", data)
    return data;

  }



}
