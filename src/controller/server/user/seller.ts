import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/admin/seller', {tagName:'后台管理-艺术家'})
export class AdminUserSellerController {

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

  // 创建艺术家
  @Post('/create', { summary: '创建艺术家' })
  async create(@Body(ALL) createBody) {
    const data = await this.sellerService.create(createBody);
    return data;
  }

  @Get('/edit', { summary: '编辑艺术家' })
  async edit(@Query(ALL) editQuery) {
    const data = await this.sellerService.edit(editQuery);
    return data;
  }

  // 更新艺术家信息
  @Post('/update',{summary:'更新艺术家信息'})
  async update(@Body(ALL) registerBody) {
    return await this.sellerService.update(registerBody);
    // return await this.sellerService.updateSeller(registerBody);
  }

  // 获取艺术家详细信息
  @Get('/',{summary:'获取艺术家详细信息'})
  async find(@Query(ALL) findQuery) {
    return await this.sellerService.find(findQuery)
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
    const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
    const data:any = await this.sellerService.searchSeller({
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

  // 删除艺术家
  @Get('/delete',{summary:'删除艺术家'})
  async delete(@Query() sellerId) {
    return await this.sellerService.deleteSeller(sellerId);
  }

  @Post('/update/metadata',{summary:'更新艺术家个人信息'})
  async updateMetadata(@Query(ALL) queryAll) {
    return await this.sellerService.updateMetadata(queryAll);
  }

  @Post('/update/resume',{summary:'更新艺术家个人信息'})
  async updateResume(@Query(ALL) queryAll) {
    return await this.sellerService.updateResume(queryAll);
  }

}
