import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationVideoService } from "src/service/base/information/video";
import { InformationVideoDetailService } from './videoDetail';
@Provide()
export class InformationVideoService {

  @Inject()
  baseInformationVideoService: BaseInformationVideoService;

  @Inject()
  informationVideoDetailService: InformationVideoDetailService;

  async create(payload) {

    // 创建视频
    const videoData = await this.baseCreate(payload);
    if(!videoData.success) {
      return videoData;
    }

    // 创建视频详情
    // console.log("payload.detail", payload.detail)
    const detailJSON = JSON.parse(payload.detail);
    const videoDetailData = await this.informationVideoDetailService.baseCreate({
      zhcn: detailJSON['zh-cn'],
      enus: detailJSON['en-us'],
      jajp: detailJSON['ja-jp'],
      eses: detailJSON['es-es'],
    })
    if(videoDetailData.success) {
      //  视频 关联 视频详情
      this.relationSet({
        name: 'detail',
        of: videoData.data.identifiers[0].id,
        set: videoDetailData.data.identifiers[0].id
      })
    }
    // 查询视频
    const data = await this.baseInformationVideoService.BaseRetrieveName({
      zhcn: payload['zh-cn'],
      enus: payload['en-us'],
      jajp: payload['ja-jp'],
      eses: payload['es-es'],
    });

    return {
      data,
      success: true,
      code: 10003
    }


  }

  async baseCreate(payload) {
    // 判断视频标题是否存在
    const isTitle = await this.baseInformationVideoService.BaseRetrieveName({
      zhcn: payload['zh-cn'],
      enus: payload['en-us'],
      jajp: payload['ja-jp'],
      eses: payload['es-es'],
    })
    if(isTitle) {
      return {
        success: false,
        code: 10013
      }
    }
    // 创建视频
    const data = await this.baseInformationVideoService.BaseCreate({
      isTop: payload.isTop,
      zhcn: payload['zh-cn'],
      enus: payload['en-us'],
      jajp: payload['ja-jp'],
      eses: payload['es-es'],
      videoSrc: payload.videoSrc,
      ccId: payload.ccId,
      siteId: payload.siteId,
      videoPhoto: payload.videoPhoto,
      watchs: 0,
      isDelete: false
    });

    if(data) {
      return {
        data,
        success: true,
        code: 10003
      }
    }else{
      return {
        success: false,
        code: 10004
      }
    }

  }

  async retrieve(payload) {
    const data = await this.baseInformationVideoService.BaseRetrieve(payload);
    let list:any = data[0];
    let total = data[1];
    if(data) {
      if(payload.isLocale) {
        // console.log("payload.locale", payload.locale)
        list = list.map(item => {

          const title = item[payload.locale];
          const detail = item.detail ? item.detail[payload.locale] : '';

          return {
            videoId: item.videoId,
            videoSrc: item.videoSrc,
            ccId: item.ccId,
            siteId: item.siteId,
            videoPhoto: item.videoPhoto,
            watchs: item.watchs,
            title,
            detail,
            createdDate: item.createdDate
          }
        })
      }
      return {
        data: {
          list,
          total
        },
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }


  async retrieveName(payload) {
    const data = await this.baseInformationVideoService.BaseRetrieveName(payload);
    if(data) {
      return {
        data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async retrieveVideoId(payload) {
    let data:any = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
    if(data) {
      if(payload.isLocale) {
        const title = data[payload.locale];
        const detail = data.detail ? data.detail[payload.locale] : '';

        data = {
          videoId: data.videoId,
          videoSrc: data.videoSrc,
          ccId: data.ccId,
          siteId: data.siteId,
          videoPhoto: data.videoPhoto,
          watchs: data.watchs,
          title,
          detail,
          createdDate: data.createdDate
        }
      }
      return {
        data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async baseSearch(payload) {
    const data = await this.baseInformationVideoService.BaseSearch(payload);
    let list:any = data[0];
    let total = data[1];
    if(data) {
      if(payload.isLocale) {
        // console.log("payload.locale", payload.locale)
        list = list.map(item => {

          const title = item[payload.locale];
          const detail = item.detail ? item.detail[payload.locale] : '';

          return {
            videoId: item.videoId,
            videoSrc: item.videoSrc,
            ccId: item.ccId,
            siteId: item.siteId,
            videoPhoto: item.videoPhoto,
            watchs: item.watchs,
            title,
            detail,
            createdDate: item.createdDate
          }
        })
      }
      return {
        data: {
          list,
          total
        },
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async topVideo() {
    // 查询资讯视频是否存在
    const data = await this.baseInformationVideoService.BaseTopVideo();
    if(data) {
      return {
        data,
        success: true,
        code: 10014
      }
    }else{
      return {
        success: false,
        code: 10014
      }
    }
  }

  async newVideo() {
    // 查询资讯视频是否存在
    const data = await this.baseInformationVideoService.BaseNewVideo();
    if(data) {
      return {
        data,
        success: true,
        code: 10014
      }
    }else{
      return {
        success: false,
        code: 10014
      }
    }
  }

  async update(payload) {
    // 更新资讯视频
    const videoUpdateData = await this.baseUpdate(payload);

    if(!videoUpdateData.success) {
      return videoUpdateData;
    }
    // 更新资讯视频详情
    if(payload.detail) {
      const detailJSON = (typeof payload.detail == 'string') ? JSON.parse(payload.detail) : payload.detail;
      console.log("detailJSON", detailJSON)
      if(detailJSON.id) {
        // 更新资讯视频详情
        const videoDetailData = await this.informationVideoDetailService.baseUpdate({
          id: detailJSON.id,
          zhcn: detailJSON['zh-cn'],
          enus: detailJSON['en-us'],
          jajp: detailJSON['ja-jp'],
          eses: detailJSON['es-es'],
        })
        if(!videoDetailData.success) {
          return videoDetailData;
        }
      }else{
        // 创建资讯视频详情
        const videoDetailData = await this.informationVideoDetailService.baseCreate({
          zhcn: detailJSON['zh-cn'],
          enus: detailJSON['en-us'],
          jajp: detailJSON['ja-jp'],
          eses: detailJSON['es-es'],
        })
        console.log("videoDetailData", videoDetailData)
        if(videoDetailData.success) {
          //  视频 关联 视频详情
          this.relationSet({
            name: 'detail',
            of: payload.id,
            set: videoDetailData.data.identifiers[0].id
          })
        }
      }
    }

    return {
      success: true,
      code: 10007
    }

  }

  async baseUpdate(payload) {
    // 查询资讯视频是否存在
    const isVideo = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
    if(!isVideo) {
      // 不存在
      return {
        success: false,
        code: 10014
      }
    }
    // 更新资讯视频
    const data = await this.baseInformationVideoService.BaseUpdate({
      isTop: payload.isTop,
      videoId: payload.videoId,
      videoSrc: payload.videoSrc,
      ccId: payload.ccId,
      siteId: payload.siteId,
      videoPhoto: payload.videoPhoto,
      zhcn: payload['zh-cn'],
      enus: payload['en-us'],
      jajp: payload['ja-jp'],
      eses: payload['es-es'],
    });

    if(data.affected) {
      return {
        data,
        success: true,
        code: 10007
      }
    }else{
      return {
        success: false,
        code: 10008
      }
    }
  }

  async watchs(payload) {
    // 获取视频
    const video = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
    if(video) {
      const watchs = video.watchs + 1;
      const data = await this.baseInformationVideoService.BaseUpdate({
        videoId: payload.videoId,
        watchs
      })
      if(data.affected) {
        return {
          success: true,
          code: 10007
        }
      }else{
        return {
          success: false,
          code: 10008
        }
      }
    }else{
      return {
        success: false,
        code: 10014
      }
    }

  }

  async baseDelete(videoId) {
    const data = await this.baseInformationVideoService.BaseDelete(videoId);
    if(data.affected) {
      return {
        success: true,
        code: 10005
      }
    }else{
      return {
        success: false,
        code: 10006
      }
    }
  }

  async relationSet(payload) {
    return this.baseInformationVideoService.BaseRelationSet(payload);
  }

  async relationAdd(payload) {
    return this.baseInformationVideoService.BaseRelationAdd(payload);
  }

}
