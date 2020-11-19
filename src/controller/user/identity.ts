import { Body, Controller, Get, Inject, Param, Post, Provide, Query, ALL } from "@midwayjs/decorator";
import { IdentityService } from 'src/service/user/identity';

@Provide()
@Controller('/user')
export class UserIdentityController {

  @Inject()
  identityService: IdentityService;

  @Post('/identityList')
  async createIdentityList(@Body(ALL) identityListBody:any) {
    return await this.identityService.createIdentityList(identityListBody)
  }

  @Get('/identityList')
  @Get('/identityList/:ID')
  async findIdentityList(@Param() ID, @Query() id ) {
    return await this.identityService.findIdentityList(ID || id)
  }

  @Post('/identityList/remove')
  @Post('/identityList/remove/:ID')
  async removeIdentityList(@Param() ID, @Body() Id, @Query() id) {
    return await this.identityService.removeIdentityList(ID || Id || id)
  }

}
