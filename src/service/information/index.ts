import { Provide, Inject } from "@midwayjs/decorator";
import { InformationCommentService } from "./comment";
import { InformationDetailService } from "./detail";
import { InformationLikesService } from "./likes";
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
  informationLikesService: InformationLikesService;

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
    desc = {},
    videos = [],
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
    // console.log("information", information)

    // 创建详情
    let detailData:any = await this.informationDetailService.create({
      zhcn: desc['zh-cn'],
      enus: desc['en-us'],
      jajp: desc['ja-jp'],
      eses: desc['es-es'],
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
    const data = await this.informationService.retrieveName({
      zhcn: name['zh-cn'],
      enus: name['en-us'],
      jajp: name['ja-jp'],
      eses: name['es-es']
    });

    return {
      data: data.data,
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
    desc = {},
    videos = [],
    removeVideos = []
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
    // console.log("information", information)
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
    // console.log("informationUpdate", informationUpdate)
    // 更新资讯失败
    if(!informationUpdate.success) {
      return informationUpdate;
    }

    // 更新详情
    const detailData:any = await this.informationDetailService.update({
      id: desc['id'],
      zhcn: desc['zh-cn'],
      enus: desc['en-us'],
      jajp: desc['ja-jp'],
      eses: desc['es-es'],
    })
    // console.log("detailData", detailData)
    // 更新详情失败
    if(!detailData.success) {
      return detailData;
    }

    // 删除关联视频
    if(removeVideos && removeVideos.length) {
      for(let item of removeVideos) {
        await this.informationService.relationRemove({
          name: 'videos',
          of: information.data.id,
          remove: item.id
        })
      }
    }

    if(videos && videos.length) {
      for(let item of videos) {
        // 关联资讯
        await this.informationService.relationAdd({
          name: 'videos',
          of: information.data.id,
          add: item.id
        })

      }

    }

    return {
      success: true,
      code: 10007
    }

  }

  // 删除资讯
  async deleteInformation(informationId) {
    return await this.informationService.baseDelete(informationId)
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
  async informationVideoDetail(payload) {
    return await this.informationVideoService.retrieveVideoId(payload)
  }

  // 搜索资讯视频
  async searchInformationVideo(payload) {
    return await this.informationVideoService.baseSearch(payload)
  }

  // 置顶视频
  async informationTopVideo() {
    return await this.informationVideoService.topVideo()
  }

  // 最新视频
  async informationNewVideo() {
    return await this.informationVideoService.newVideo()
  }

  // 更新资讯视频
  async updateInformationVideo(payload) {
    return await this.informationVideoService.update(payload)
  }

  // 删除资讯
  async deleteInformationVideo(videoId) {
    return await this.informationVideoService.baseDelete(videoId)
  }


  // 视频评论
  async videoComment(payload) {
    return await this.informationCommentService.create(payload)
  }

  // 视频评论列表
  async commentList(payload) {
    // video list
    return await this.informationCommentService.retrieveList(payload)
  }


  // 视频评论回复， 回复视频评论回复
  async commentReply(payload) {
    return await this.informationReplyService.create(payload)
  }

  async replyReply(payload) {
    return await this.informationReplyService.reply(payload)
  }

  // 点赞评论， 点赞回复
  async likes({
    type = '',
    typeId = '',
    userName = '',
    userId = ''
  } = {}) {

    switch(type) {
      case "comment":
        return await this.informationCommentService.likes({
          type,
          userId,
          userName,
          commentId: typeId
        })
        break;
      case "reply":
      default:
        return await this.informationReplyService.likes({
          type,
          userId,
          userName,
          replyId: typeId
        })
        break;

    }

  }


  // 官网资讯详情
  async bffInformationDetail(payload) {
    return await this.informationService.retrieveInformationDetail(payload)
  }

  //  视频观看
  async watchs(payload) {
    return await this.informationVideoService.watchs(payload)
  }

}
