import { Body, Controller, Get, Inject, Post, Provide, ALL } from "@midwayjs/decorator";
import PageService from 'src/service/page'

@Provide()
@Controller('/api/admin/page', {tagName:'后台管理-页面管理'})
export class AdminPageController {

  @Inject()
  pageService: PageService;

  @Get('/banner', {summary:'获取轮播图'})
  async getBanner() {
    const data = await this.pageService.getBannerAll();
    return data;
  }

  @Post('/banner',{summary:'创建轮播图'})
  async postBanner(@Body(ALL) body) {
    const data = await this.pageService.createBanner(body);
    return data;
  }

  @Post('/banner/update',{summary:'更新轮播图'})
  async updateBanner(@Body(ALL) body) {
    const data = await this.pageService.updateBanner(body);
    return data;
  }

  @Post('/banner/delete',{summary:'删除轮播图'})
  async deleteBanner(@Body() bannerId) {
    const data = await this.pageService.deleteBanner(bannerId);
    return data;
  }

}
