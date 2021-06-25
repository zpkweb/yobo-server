import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationReplyService } from "src/service/base/information/reply";

@Provide()
export class InformationReplyService {

  @Inject()
  baseInformationReplyService: BaseInformationReplyService;

  async create(payload) {
    const data = await this.baseInformationReplyService.BaseCreate(payload);
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
    const data = await this.baseInformationReplyService.BaseRetrieve(payload);
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
    const data = await this.baseInformationReplyService.BaseUpdate(payload);
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
    const data = await this.baseInformationReplyService.BaseDelete(id);
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
