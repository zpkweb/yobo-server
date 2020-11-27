import { Body, Controller, Get, Inject, Param, Post, Provide, Query, ALL } from "@midwayjs/decorator";
import { IdentityService } from 'src/service/user/identity';

@Provide()
@Controller('/api/admin/identity')
export class ServerUserIdentityController {

  @Inject()
  identityService: IdentityService;

  @Post()
  async createIdentityList(@Body(ALL) identityListBody:any) {
    return await this.identityService.createIdentityList(identityListBody)
  }

  /**
   * 获取身份列表
   * @param ID
   * @param id
   */
  @Get()
  async findIdentityList(@Param() ID, @Query() id ) {
    console.log("findIdentityList", ID || id)
    return await this.identityService.findIdentityList(ID || id)
  }

  /**
   * 删除身份列表
   * @param ID
   * @param Id
   * @param id
   */
  @Post('/remove')
  @Post('/remove/:ID')
  async removeIdentityList(@Param() ID, @Body() Id, @Query() id) {
    return await this.identityService.removeIdentityList(ID || Id || id)
  }


  /**
   * 通过身份查找用户
   * @param ID
   * @param id
   */
  @Get('/user')
  @Get('/user/:ID')
  async findIdentityUser(@Param() ID, @Query() id ) {
    console.log("findIdentityUser", ID || id)
    return await this.identityService.findIdentityUser(ID || id)
  }

}
