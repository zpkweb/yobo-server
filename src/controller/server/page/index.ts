import { Body, Controller, Get, Inject, Post, Provide, ALL } from "@midwayjs/decorator";
import PageServer from 'src/service/page'

@Provide()
@Controller('/api/admin/page')
export class AdminPageController {

  @Inject()
  pageServer: PageServer;

  @Get('/banner')
  async getBanner() {
    const data = await this.pageServer.getBannerAll();
    return data;
  }

  @Post('/banner')
  async postBanner(@Body(ALL) body) {
    const data = await this.pageServer.createBanner(body);
    return data;
  }

  @Post('/banner/update')
  async updateBanner(@Body(ALL) body) {
    const data = await this.pageServer.updateBanner(body);
    return data;
  }

  @Post('/banner/delete')
  async deleteBanner(@Body() bannerId) {
    const data = await this.pageServer.deleteBanner(bannerId);
    return data;
  }

}
