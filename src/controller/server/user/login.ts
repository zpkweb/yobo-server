import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Validate } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';
import { AdminUserLoginDTO } from 'src/dto/user/login';

@Provide()
@Controller('/api/admin/user', { tagName: '后台管理-登录' })
export class AdminUserLoginController {

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 后台登录
  @Post('/login',{summary:'登录'})
  @Validate()
  async login(@Body(ALL) loginBody: AdminUserLoginDTO) {
    console.log("admin login", loginBody)
    let data:any =  await this.loginService.adminLogin(loginBody);
    if(data.success){
      data.data.token = await this.jwt.sign({
        ...data
      }, this.jwtConfig.secret);
    }
    console.log("login data", data)
    return data;

  }



}
