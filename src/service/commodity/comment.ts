import { Config, Provide } from "@midwayjs/decorator";

@Provide()
export class CommentService {

  @Config('host')
  host;

  async home(payload) {
    return {
      success: true,
      code: 10009,
      data: [{
        id: 1,
        src: `${this.host.origin}/images/commodity/1.png`,
        star: 5,
        title: '1 The staircase. Vaynor Park',
        desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
      },{
        id: 2,
        src: `${this.host.origin}/images/commodity/2.png`,
        star: 4,
        title: '2 The staircase. Vaynor Park',
        desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
      },{
        id: 3,
        src: `${this.host.origin}/images/commodity/3.png`,
        star: 3,
        title: '3 The staircase. Vaynor Park',
        desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
      },{
        id: 4,
        src: `${this.host.origin}/images/commodity/4.png`,
        star: 2,
        title: '4 The staircase. Vaynor Park',
        desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
      }]
    }
  }
}
