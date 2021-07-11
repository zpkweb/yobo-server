import { Provide, Inject } from "@midwayjs/decorator";
import { InformationCommentService } from "./comment";
import { InformationDetailService } from "./detail";
import { InformationFabulousService } from "./fabulous";
import { InformationService } from "./information";
import { InformationReplyService } from "./reply";
import { InformationVideoService } from "./video";
import { InformationVideoDetailService } from "./videoDetail";
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

  @Inject()
  informationVideoDetailService: InformationVideoDetailService;

  //  创建资讯
  async  createInformation({
    name = {},
    detail = {},
    videos = []
  } = {}) {

    // 查询资讯
    let information:any = await this.informationService.retrieveName({
      zhcn: name['zh-cn'],
      enus: name['en-us'],
      jajp: name['ja-jp'],
      eses: name['es-es']
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
        zhcn: name['zh-cn'],
        enus: name['en-us'],
        jajp: name['ja-jp'],
        eses: name['es-es']
      })
      // 创建失败
      if(!information.success) {
        return information;
      }
    }
    console.log("information", information)

    // 创建详情
    let detailData:any = await this.informationDetailService.create({
      zhcn: detail['zh-cn'],
      enus: detail['en-us'],
      jajp: detail['ja-jp'],
      eses: detail['es-es'],
    })
    // 创建失败
    if(!detailData.success){
      return detailData;
    }
    // 关联资讯

    // console.log("detail", detail)
    await this.informationService.relationSet({
      name: 'detail',
      of: information.data.identifiers[0].id,
      set: detailData.data.identifiers[0].id
    })

    // 创建视频

    if(videos && videos.length) {
      for(let item of videos) {

        // 关联资讯
        await this.informationService.relationAdd({
          name: 'videos',
          of: information.data.identifiers[0].id,
          add: item.id
        })
      }

    }


    // 获取资讯
    // const informationData = await this.informationService.retrieveInformationId(information.data.generatedMaps[0].informationId);
    return {
      informationId: information.data.generatedMaps[0].informationId,
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

  // 资讯详情
  async informationDetail(payload) {
    return await this.informationService.retrieveInformationDetail(payload)
  }

  // 搜索资讯
  async searchInformation(payload) {
    return await this.informationService.searchInformation(payload)
  }

  // 更新资讯
  async updateInformation({
    informationId = '',
    name = {},
    detail = {},
    videos = []
  } = {}) {
    // 查询参数
    // if(!zhcn && !enus && !jajp && !eses) {
    //   return {
    //     success: false,
    //     code: 10104
    //   }
    // }
    // 查询资讯
    const information:any = await this.informationService.retrieveInformationId(informationId);
    if(!information.success) {
      return {
        success: false,
        code: 10014
      };
    }

    // 更新资讯
    const informationUpdate = await this.informationService.update({
      id: name['id'],
      zhcn: name['zh-cn'],
      enus: name['en-us'],
      jajp: name['ja-jp'],
      eses: name['es-es']
    })
    // 更新资讯失败
    if(!informationUpdate.success) {
      return informationUpdate;
    }

    // 更新详情
    const detailData:any = await this.informationDetailService.update({
      id: detail['id'],
      zhcn: detail['zh-cn'],
      enus: detail['en-us'],
      jajp: detail['ja-jp'],
      eses: detail['es-es'],
    })
    // 更新详情失败
    if(!detailData.success) {
      return detailData;
    }


    if(videos && videos.length) {
      for(let item of videos) {
        if(item.id) {
          // 更新视频
          const video:any = await this.informationVideoService.update({
            id: item.id,
            videoSrc: item.videoSrc,
            ccId: item.ccId,
            siteId: item.siteId,
            videoPhoto: item.videoPhoto,
            zhcn: item['zh-cn'],
            enus: item['en-us'],
            jajp: item['ja-jp'],
            eses: item['es-es']
          })

          // 更新视频失败
          if(!video.success){
            return video;
          }
        }else{
          // 创建视频
          const video:any = await this.informationVideoService.create({
            videoSrc: item.videoSrc,
            ccId: item.ccId,
            siteId: item.siteId,
            videoPhoto: item.videoPhoto,
            zhcn: item['zh-cn'],
            enus: item['en-us'],
            jajp: item['ja-jp'],
            eses: item['es-es']
          })

          // 创建视频失败
          if(!video.success){
            return video;
          }
          // 关联资讯
          // console.log("video", video)
          await this.informationService.relationAdd({
            name: 'videos',
            of: information.data.id,
            add: video.data.identifiers[0].id
          })
        }


      }

    }

    return {
      success: true,
      code: 10007
    }

  }





  //  创建资讯视频
  async createInformationVideo(payload) {
    return await this.informationVideoService.create(payload);
  }

  // 资讯视频列表
  async informationVideoList({
    currentPage = 1,
    pageSize = 10,
    news = false,
    isLocale = false,
    locale = 'zh-cn'
  } = {}) {
    return await this.informationVideoService.retrieve({
      currentPage,
      pageSize,
      news,
      isLocale,
      locale
    })
  }

  // 资讯视频详情
  async informationVideoId(payload) {
    return await this.informationVideoService.retrieveVideoId(payload)
  }

  // 搜索资讯视频
  async searchInformationVideo(payload) {
    return await this.informationVideoService.baseSearch(payload)
  }

  // 更新资讯视频
  async updateInformationVideo(payload) {
    return await this.informationVideoService.update(payload)
  }


  // 视频评论

  // 视频评论回复， 回复视频评论回复

  // 点赞评论， 点赞回复


  // 官网资讯详情
  async bffInformationDetail(payload) {
    console.log(payload)
    return await this.informationService.retrieveInformationDetail(payload)
  }

}
