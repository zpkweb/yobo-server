import { Config, Provide } from "@midwayjs/decorator";

@Provide()
export class BannerService {

  @Config('host')
  host;

  async get() {
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
