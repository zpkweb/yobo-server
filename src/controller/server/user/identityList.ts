import { Body, Controller, Get, Inject, Post, Provide, Query, ALL } from "@midwayjs/decorator";
import { IdentityListService } from 'src/service/user/identityList';

@Provide()
@Controller('/api/admin/identityList',{tagName:'后台管理-身份列表'})
export class AdminUserIdentityController {

  @Inject()
  identityListService: IdentityListService;

  /**
   * 创建身份列表
   * @identityListBody
   */

  @Post('/', {summary:'创建身份列表'})
  async createIdentityList(@Body(ALL) identityListBody) {
    return await this.identityListService.createIdentityList(identityListBody)
  }

  /**
   * 查询身份列表
   * @param ID
   * @param id
   */
  @Get('/',{summary:'查询身份列表'})
  async retrieveIdentity(@Query(ALL) retrieveQuery ) {
    return await this.identityListService.retrieveIdentityList(retrieveQuery)
  }

  /**
   * 更新身份列表
   * @identityListBody
   */
  @Post('/update',{summary:'更新身份列表'})
  async updateIdentityList(@Body(ALL) identityListBody) {
    return await this.identityListService.updateIdentityList(identityListBody)
  }


  /**
   * 删除身份列表
   * @deleteQuery
   * name
   * index
   * id
   */
  @Get('/delete',{summary:'删除身份列表'})
  async deleteIdentityList(@Query(ALL) deleteQuery) {
    return await this.identityListService.deleteIdentityList(deleteQuery)
  }

}
