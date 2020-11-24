import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, Param, Query, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/api/admin/user', { middleware: [ 'authorizeMiddleware' ] }) // , { middleware: [ 'authorizeMiddleware' ] }
export class ServerUserController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 删除用户
  @Post('/remove')
  @Post('/remove/:ID')
  async removeUser(@Param() ID, @Body() Id) {
    return await this.userService.remove(ID||Id);
  }

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

}
