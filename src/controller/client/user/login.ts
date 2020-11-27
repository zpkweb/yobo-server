import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';
import { UserRegisterService } from 'src/service/user/register';

@Provide()
@Controller('/api/user')
export class UserLoginController {

  @Inject()
  loginService: LoginService;

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 注册成为普通用户
  @Post('/register')
  async register(@Body(ALL) registerBody) {

    let data:any =  await this.userRegisterService.registerUser(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data,
        identitys: data.identitys
    }, this.jwtConfig.secret);
    }
    console.log("register data", data)
    return data;

  }

  // 申请成为艺术家
  @Post('/seller/apply')
  async apply(@Body(ALL) applySellerBody) {
    const data =  await this.userRegisterService.applySeller(applySellerBody);
    console.log("申请成为艺术家", data)
    return data;

  }

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
