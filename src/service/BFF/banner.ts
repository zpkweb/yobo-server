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
    return {
      success: true,
      code: 10009,
      data: [{
        src: `${this.host.origin}/images/banner/1.png`,
        title: '为您精选',
        subTitle: '来自世界各地的优秀艺术家'
      },{
        src: `${this.host.origin}/images/banner/2.jpg`,
        title: '为您精选',
        subTitle: '来自世界各地的优秀艺术家'
      },{
        src: `${this.host.origin}/images/banner/3.jpg`,
        title: '为您精选',
        subTitle: '来自世界各地的优秀艺术家'
      },{
        src: `${this.host.origin}/images/banner/4.jpg`,
        title: '为您精选',
        subTitle: '来自世界各地的优秀艺术家'
      }]
    }
  }
}
