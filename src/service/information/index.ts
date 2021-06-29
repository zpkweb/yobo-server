import { Provide, Inject } from "@midwayjs/decorator";
import { InformationCommentService } from "./comment";
import { InformationDetailService } from "./detail";
import { InformationFabulousService } from "./fabulous";
import { InformationService } from "./information";
import { InformationReplyService } from "./reply";
import { InformationVideoService } from "./video";

@Provide()
export class ServiceInformation {

  @Inject()
  informationCommentService: InformationCommentService;

  @Inject()
  informationDetailService: InformationDetailService;

  @Inject()
  informationFabulousService: InformationFabulousService;

  @Inject()
  informationService: InformationService;

  @Inject()
  informationReplyService: InformationReplyService;

  @Inject()
  informationVideoService: InformationVideoService;


/**
 * 创建资讯
 *  标题
 *  详情
 *  视频
 * @param {*} payload
 * @memberof ServiceInformation
 */
  async  createInformation({
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',

    zhcnDetail = '',
    enusDetail = '',
    jajpDetail = '',
    esesDetail = '',

    videoSrc = '',
    ccId = '',
    siteId = '',
    videoPhoto = '',
    watchs = 0,
    zhcnVideo = '',
    enusVideo = '',
    jajpVideo = '',
    esesVideo = '',


  } = {}) {
    // 查询参数
    if(!zhcn && !enus && !jajp && !eses) {
      return {
        success: false,
        code: 10104
      }
    }
    // 查询资讯
    let information:any = await this.informationService.retrieveName({
      zhcn,
      enus,
      jajp,
      eses
    })
    // console.log("information", information)
    if(information.success) {
      // 资讯名称 已存在
      return {
        success: false,
        code: 10013
      }
    }else{
      // 创建资讯
      information = await this.informationService.create({
        zhcn,
        enus,
        jajp,
        eses
      })
      // 创建失败
      if(!information.success) {
        return information;
      }
    }
    // console.log("information", information)

    // 创建详情
    let detail:any = await this.informationDetailService.create({
      zhcn: zhcnDetail,
      enus: enusDetail,
      jajp: jajpDetail,
      eses: esesDetail,
    })
    // 创建失败
    if(!detail.success){
      return detail;
    }
    // 关联资讯

    // console.log("detail", detail)
    await this.informationService.relationSet({
      name: 'detail',
      of: information.data.identifiers[0].id,
      set: detail.data.identifiers[0].id
    })

    // 创建视频
    let video:any = await this.informationVideoService.create({
      videoSrc,
      ccId,
      siteId,
      videoPhoto,
      watchs,
      zhcn : zhcnVideo,
      enus : enusVideo,
      jajp : jajpVideo,
      eses : esesVideo,
    })
    // 创建失败
    if(!video.success){
      return video;
    }
    // 关联资讯
    // console.log("video", video)
    await this.informationService.relationAdd({
      name: 'videos',
      of: information.data.identifiers[0].id,
      add: video.data.identifiers[0].id
    })

    return {
      success: true,
      code: 10003
    };

  }

  // 资讯列表
  async informationList({
    currentPage = 1,
    pageSize = 10,
    news = false,
    isTop = false,
    isLocale = false,
    locale = 'zh-cn'
  } = {}) {
    return await this.informationService.retrieve({
      currentPage,
      pageSize,
      news,
      isTop,
      isLocale,
      locale
    })
  }

  // 资讯详情：播放列表， 详情， 评论， 视频观看人数

  // 更新资讯



  // 视频评论

  // 视频评论回复， 回复视频评论回复

  // 点赞评论， 点赞回复


}
