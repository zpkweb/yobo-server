import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, Query, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/api/admin/user',{tagName:'后台管理-用户'})
export class AdminUserController {

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
  @Get('/remove',{summary:'删除用户'})
  @Get('/delete',{summary:'删除用户'})
  async removeUser(@Query() userId) {
    return await this.userService.remove(userId);
  }

  // 更新用户
  @Post('/update',{summary:'更新用户'})
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update(updateBody);
  }

  // 查找用户
  @Get('/',{summary:'查找用户'})
  async findUser(@Query(ALL) findQuery) {
    return await this.userService.find({
      type: findQuery.type,
      userId: findQuery.userId
    });
  }

  @Get('/edit',{summary:'编辑用户'})
  async editUser(@Query(ALL) findQuery) {
    return await this.userService.edit({
      type: findQuery.type,
      userId: findQuery.userId
    });
  }

  // 搜索用户
  @Get('/search',{summary:'搜索用户'})
  async searchUser(@Query(ALL) searchParams) {

    // return await this.userService.search(searchParams);

    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
    const data:any = await this.userService.search({
      ...searchParams,
      news,
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
  @Get('/identity/delete',{summary:'删除用户身份'})
  async deleteUserIdentity(@Query(ALL) identityDeleteQuery) {
    return await this.userService.deleteUserIdentity(identityDeleteQuery);
  }

}
