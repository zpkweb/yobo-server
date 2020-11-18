import { Inject, Controller, Post, Provide, Get, Config, Plugin } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/user')
export class UserController {

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
  //   const { ctx, app } = this;
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

  }


  // 添加用户
  @Post('/create')
  async createUser() {
    // crypto.createHash('md5').update(password).digest('hex');
    return  await this.userService.createUser();
  }

  // 删除用户
  @Post('/remove')
  async removeUser() {
    return await this.userService.removeUser();
  }

  // 更新用户
  @Post('/update')
  async updateUser() {
    return await this.userService.updateUser();
  }

  // 查找所有用户
  @Get('/find')
  async findAllUser() {
    return await this.userService.findAllUser();
  }

  // 查找某个用户
  @Get('/find/:ID')
  async findUser() {
    return await this.userService.findUser();
  }

  // 登录
  @Get('/login')
  async login() {
    return await this.userService.login();
  }



}
