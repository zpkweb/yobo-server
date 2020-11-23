import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';

@Provide()
@Controller('/api/user')
export class ServerUserRegisterController {

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
    // const token = this.jwt.sign({ foo: 'bar' }, this.jwtConfig.secret);
    // ctx.body = { token: this.jwt.sign({name: 'tony'})}
    // 用户存在,生成token
    // const token = app.jwt.sign({
    //   name: user.name,
    // }, app.config.jwt.secret);

    let data:any =  await this.userRegisterService.register(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
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
