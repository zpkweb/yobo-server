import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/seller',{tagName:'艺术家'})
export class ServiceSellerController {

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

  /**
   * 获取商家详细信息
   *
   * @param {*} findQuery
   * @return {*}
   * @memberof ServiceSellerController
   * userId
   * sellerId
   */
  @Get('/',{summary:'获取艺术家详细信息'})
  async find(@Query(ALL) queryAll) {
    return await this.sellerService.find({
      sellerId: queryAll.sellerId,
      locale: queryAll.locale || 'zh-cn',
      isLocale: true
    })
  }

  @Get('/choice',{summary:'精选艺术家'})
  async choice(@Query(ALL) queryAll) {
    return await this.sellerService.choiceSeller({
      pageSize: queryAll.pageSize || 5,
      currentPage: queryAll.currentPage || 1,
      news: queryAll.news || 'true'
    })
  }

  // 更新艺术家信息
  @Post('/update',{summary:'更新艺术家信息'})
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
  @Post('/setState',{summary:'设置艺术家状态'})
  async setState(@Body(ALL) stateBody) {
    return await this.sellerService.updateSellerState(stateBody);
  }

  // 艺术家搜索
  @Get('/search',{summary:'艺术家搜索'})
  async search(@Query(ALL) searchParams) {
    // return await this.sellerService.searchSeller(searchQuery);
    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const data:any = await this.sellerService.search({
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


}
