import { Config, Inject, Provide } from "@midwayjs/decorator";
import PageServer from '../page';

@Provide()
export class BannerService {

  @Config('host')
  host;

  @Inject()
  pageServer: PageServer;

  async get() {
    return await this.pageServer.getBannerAll();
  }
}
