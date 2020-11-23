import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, Query, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/api/user', { middleware: [ 'authorizeMiddleware' ] }) // , { middleware: [ 'authorizeMiddleware' ] }
export class UserController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 更新用户
  @Post('/update')
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update(updateBody);
  }

  // 查找用户
  @Get()
  async findUser(@Query(ALL) findQuery) {
    console.log("ctx", this.ctx.state,  findQuery)
    return await this.userService.find({
      type: findQuery.type,
      userId: findQuery.userId
    });
  }

  // 修改密码
  @Post('/change/password')
  async changePassword(@Body(ALL) changePasswordBody){
    return await this.userService.changePassword(changePasswordBody);
  }

}
