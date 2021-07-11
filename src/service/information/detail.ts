import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationDetailService } from "src/service/base/information/detail";

@Provide()
export class InformationDetailService {

  @Inject()
  baseInformationDetailService: BaseInformationDetailService;

  async create(payload) {
    const data = await this.baseInformationDetailService.BaseCreate(payload);
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
    const data = await this.baseInformationDetailService.BaseRetrieve(payload);
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
    const data = await this.baseInformationDetailService.BaseUpdate(payload);
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
    const data = await this.baseInformationDetailService.BaseDelete(id);
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
