import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';

@Provide()
@Controller('/api/user')
export class UserRegisterController {

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

    let data:any =  await this.userRegisterService.register(registerBody);
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
  @Post('/seller/register')
  async apply(@Body(ALL) applySellerBody) {
    const data =  await this.userRegisterService.registerSeller(applySellerBody);
    return data;

  }



}
