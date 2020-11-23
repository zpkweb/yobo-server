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
      // "identitys": [
      //   {
      //     "id": "8",
      //     "identityId": "0413787a-9eb3-4935-a5fa-3752a243386e",
      //     "name": "用户",
      //     "index": 80
      //   }
      // ],
      data.token = await this.jwt.sign({
        ...data,
        identitys: data.identitys
    }, this.jwtConfig.secret);
    }
    console.log("register data", data)
    return data;

  }

  // 申请成为艺术家
  @Post('/apply/seller')
  async apply(@Body(ALL) applySellerBody) {

    const data =  await this.userRegisterService.applySeller(applySellerBody);
    return data;

  }



}
