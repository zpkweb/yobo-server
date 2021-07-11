import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationVideoDetailService } from "src/service/base/information/videoDetail";

@Provide()
export class InformationVideoDetailService {

  @Inject()
  baseInformationVideoDetailService: BaseInformationVideoDetailService;

  async baseCreate(payload) {
    const data = await this.baseInformationVideoDetailService.BaseCreate(payload);
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
    const data = await this.baseInformationVideoDetailService.BaseRetrieve(payload);
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



  async baseUpdate(payload) {
    const data = await this.baseInformationVideoDetailService.BaseUpdate(payload);
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
    const data = await this.baseInformationVideoDetailService.BaseDelete(id);
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



}
