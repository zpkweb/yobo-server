import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationService } from "src/service/base/information/information";

@Provide()
export class InformationService {

  @Inject()
  baseInformationService: BaseInformationService;

  async create(payload) {
    const data = await this.baseInformationService.BaseCreate(payload);
    if(data) {
      return {
        data,
        success: true,
        code: 10003
      }
    }else{
      return {
        success: false,
        code: 10003
      }
    }
  }

  async retrieve(payload) {
    const data = await this.baseInformationService.BaseRetrieve(payload);
    let list:any = data[0];
    let total = data[1];
    if(list) {
      if(payload.isLocale) {
        // console.log("payload.locale", payload.locale)
        list = list.map(item => {
          const informationId = item.informationId;
          const name = item[payload.locale];
          const detail = item.detail ? item.detail[payload.locale] : '';
          const videos = item.videos.map(item => {
            // console.log("payload.locale", payload.locale)
            return {
              videoId: item.videoId,
              videoSrc: item.videoSrc,
              ccId: item.ccId,
              siteId: item.siteId,
              videoPhoto: item.videoPhoto,
              watchs: item.watchs,
              name: item[payload.locale]
            }
          })
          return {
            informationId,
            name,
            detail,
            videos
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
    const data = await this.baseInformationService.BaseRetrieveName(payload);
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

  async update(payload) {
    const data = await this.baseInformationService.BaseUpdate(payload);
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
  }

  async delete(id) {
    const data = await this.baseInformationService.BaseDelete(id);
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
    return this.baseInformationService.BaseRelationSet(payload);
  }

  async relationAdd(payload) {
    return this.baseInformationService.BaseRelationAdd(payload);
  }

}
