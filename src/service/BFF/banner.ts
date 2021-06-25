import { Config, Inject, Provide } from "@midwayjs/decorator";
import PageService from '../page';

@Provide()
export class BannerService {

  @Config('host')
  host;

  @Inject()
  pageService: PageService;

  async get() {
    return await this.pageService.getBannerAll();
  }
}
