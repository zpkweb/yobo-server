import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationVideoService } from "src/service/base/information/video";

@Provide()
export class InformationVideoService {

  @Inject()
  baseInformationVideoService: BaseInformationVideoService;

  async create(payload) {
    const data = await this.baseInformationVideoService.BaseCreate(payload);
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
    const data = await this.baseInformationVideoService.BaseRetrieve(payload);
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
    const data = await this.baseInformationVideoService.BaseUpdate(payload);
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
    const data = await this.baseInformationVideoService.BaseDelete(id);
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
