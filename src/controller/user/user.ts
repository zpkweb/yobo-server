import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, Param, Query, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/user') // , { middleware: [ 'reportMiddleware' ] }
export class UserController {

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
  async removeUser(@Param() ID, @Body() Id, @Query() id) {
    return await this.userService.remove(ID||Id||id);
  }

  // 更新用户
  @Post('/update')
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update(updateBody);
  }


  // 查找用户
  @Get()
  @Get('/:ID')
  async findUser(@Param() ID, @Query() id) {
    return await this.userService.find(ID||id);
  }

}
