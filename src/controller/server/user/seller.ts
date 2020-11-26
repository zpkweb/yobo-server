import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';

@Provide()
@Controller('/api/admin/seller')
export class ServerUserSellerController {

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;


  // 更新商家信息
  @Post('/update')
  async register(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.register(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
    }, this.jwtConfig.secret);
    }
    return data;

  }



}
