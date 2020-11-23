import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';

@Provide()
@Controller('/api/user')
export class UserLoginController {

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 登录
  @Post('/login')
  async login(@Body(ALL) loginBody) {
    let data:any =  await this.loginService.login(loginBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data,
        identitys: data.identitys
      }, this.jwtConfig.secret);
    }
    console.log("login data", data)
    return data;

  }



}
