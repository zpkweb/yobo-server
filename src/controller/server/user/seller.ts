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

  @Config('pagination')
  pagination;

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
  async search(@Query(ALL) searchParams) {
    console.log('search', searchParams)
    // return await this.sellerService.searchSeller(searchQuery);
    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const data:any = await this.sellerService.searchSeller({
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

  // 删除艺术家
  @Get('/delete')
  async delete(@Query() sellerId) {
    return await this.sellerService.deleteSeller(sellerId);
  }




}
