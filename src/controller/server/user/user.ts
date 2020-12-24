import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, Query, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/api/admin/user')
export class ServerUserController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Config('pagination')
  pagination;

  // 删除用户
  @Get('/remove')
  @Get('/delete')
  async removeUser(@Query() userId) {
    return await this.userService.remove(userId);
  }

  // 更新用户
  @Post('/update')
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update(updateBody);
  }

  // 查找用户
  @Get()
  async findUser(@Query(ALL) findQuery) {
    return await this.userService.find({
      type: findQuery.type,
      userId: findQuery.userId
    });
  }

  // 搜索用户
  @Get('/search')
  async searchUser(@Query(ALL) searchParams) {
    console.log("ctx", searchParams)

    // return await this.userService.search(searchParams);

    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const data:any = await this.userService.search({
      ...searchParams,
      pageSize: pageSize,
      currentPage: currentPage,
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;

  }

  // 删除用户身份
  @Get('/identity/delete')
  async deleteUserIdentity(@Query(ALL) identityDeleteQuery) {
    return await this.userService.deleteUserIdentity(identityDeleteQuery);
  }

}
