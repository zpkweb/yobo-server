import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationCommentService } from "src/service/base/information/comment";

@Provide()
export class InformationCommentService {

  @Inject()
  baseInformationCommentService: BaseInformationCommentService;

  async create(payload) {
    const data = await this.baseInformationCommentService.BaseCreate(payload);
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
    const data = await this.baseInformationCommentService.BaseRetrieve(payload);
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
    const data = await this.baseInformationCommentService.BaseUpdate(payload);
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
    const data = await this.baseInformationCommentService.BaseDelete(id);
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
