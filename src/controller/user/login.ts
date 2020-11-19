import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user';

@Provide()
@Controller('/user')
export class UserLoginController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Get('/token')
  async api(ctx: Context) {
    const token = this.jwt.sign({ foo: 'bar' }, this.jwtConfig.secret);
    ctx.body = token;

    // const { ctx, app } = this;
    // // post请求传来的参数
    // const { name } = ctx.request.body;
    // // 判断数据库里面是否存在该用户
    // const user = await ctx.service.user.login(name);

    // if(user){
    //   // 用户存在,生成token
    //   const token = app.jwt.sign({
    //     name: user.name, // 需要存储的token数据，获取ctx.state.user
    //   }, app.config.jwt.secret);

    //   ctx.body = {
    //     code: 200,
    //     message: '登录成功',
    //     data: { id: user.id },
    //     token
    //   }
    // }

    // const payload = { foo: 'bar' }
    // const token = this.jwt.sign(payload)
    // const valid = this.jwt.verify(token)

    // ctx.body = `\nPayload: ${JSON.stringify(payload)}\nToken: ${token}\nResult: ${JSON.stringify(valid)}`

  }

  // 登录
  @Post('/login')
  async login(@Body(ALL) loginBody) {
    // ctx.body = { token: this.jwt.sign({name: 'tony'})}
    // 用户存在,生成token
    // const token = app.jwt.sign({
    //   name: user.name,
    // }, app.config.jwt.secret);
    return await this.userService.login(loginBody);
  }



}
