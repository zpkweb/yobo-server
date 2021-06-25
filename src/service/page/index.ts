import { Inject, Provide } from "@midwayjs/decorator";
import { PageBannerService } from './banner';

@Provide()
export default class PageService {

  @Inject()
  pageBannerService: PageBannerService;

  async createBanner(payload) {
    return await this.pageBannerService.create(payload);
  }

  async updateBanner(payload) {
    return await this.pageBannerService.update(payload);
  }

  async getBannerAll() {
    return await this.pageBannerService.getAll();
  }


  async deleteBanner(bannerId) {
    return await this.pageBannerService.delete(bannerId);
  }
}
