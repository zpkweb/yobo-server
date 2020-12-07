import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/admin/user/seller')
export class ServerUserSellerController {

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;



  // 获取商家详细信息
  @Get()
  async find(@Query(ALL) findQuery) {
    return await this.sellerService.find(findQuery)
  }

  // 更新艺术家信息
  @Post('/update')
  async update(@Body(ALL) registerBody) {
    return await this.sellerService.updateSeller(registerBody);
  }

  // 艺术家申请 registerList
  // @Get('/applyList')
  // async applyList(@Query(ALL) findQuery) {
  //   return await this.sellerService.applyList(findQuery)
  // }

  /**
   * 设置艺术家状态
   * @param stateBody sellerId state
   */
  @Post('/setState')
  async setState(@Body(ALL) stateBody) {
    return await this.sellerService.updateSellerState(stateBody);
  }

  // 艺术家搜索
  @Get('/search')
  async search(@Query(ALL) searchQuery) {
    console.log('search', searchQuery)
    return await this.sellerService.searchSeller(searchQuery);
  }

  // 删除艺术家
  @Get('/delete')
  async delete(@Query() sellerId) {
    return await this.sellerService.deleteSeller(sellerId);
  }




}
