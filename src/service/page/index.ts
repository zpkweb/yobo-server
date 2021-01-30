import { Inject, Provide } from "@midwayjs/decorator";
import { PageBannerServer } from './banner';

@Provide()
export default class PageServer {

  @Inject()
  pageBannerServer: PageBannerServer;

  async createBanner(payload) {
    return await this.pageBannerServer.create(payload);
  }

  async updateBanner(payload) {
    return await this.pageBannerServer.update(payload);
  }

  async getBannerAll() {
    return await this.pageBannerServer.getAll();
  }


  async deleteBanner(bannerId) {
    return await this.pageBannerServer.delete(bannerId);
  }
}
