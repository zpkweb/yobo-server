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

  @Get()
  @Get('/:ID')
  async findIdentityList(@Param() ID, @Query() id ) {
    console.log("findIdentityList", ID || id)
    return await this.identityService.findIdentityList(ID || id)
  }

  @Post('/remove')
  @Post('/remove/:ID')
  async removeIdentityList(@Param() ID, @Body() Id, @Query() id) {
    return await this.identityService.removeIdentityList(ID || Id || id)
  }

}
