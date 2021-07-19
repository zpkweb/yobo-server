import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationLikesService } from "src/service/base/information/likes";

@Provide()
export class InformationLikesService {

  @Inject()
  baseInformationLikesService: BaseInformationLikesService;

  async create(payload) {
    const data = await this.baseInformationLikesService.BaseCreate(payload);
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
    const data = await this.baseInformationLikesService.BaseRetrieve(payload);
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
    const data = await this.baseInformationLikesService.BaseUpdate(payload);
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
    const data = await this.baseInformationLikesService.BaseDelete(id);
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
