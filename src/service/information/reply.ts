import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationReplyService } from "src/service/base/information/reply";
import { InformationLikesService } from "./likes";

@Provide()
export class InformationReplyService {

  @Inject()
  baseInformationReplyService: BaseInformationReplyService;

  @Inject()
  informationLikesService: InformationLikesService;

  async create(payload) {
    // console.log("create", payload)
    const data = await this.baseCreate(payload);
    if(data) {

      const result = await this.baseRetrieveReplyId(data.data.generatedMaps[0].replyId)
      if(!result.success) {
        return result;
      }
      return {
        data: result.data,
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

  async reply(payload) {
    // console.log("create", payload)
    const data = await this.baseCreate(payload);
    if(data) {
      // 获取回复的回复
      const replyData = await this.baseRetrieveReplyId(payload.replyId);
      if(!replyData.success) {
        return replyData;
      }
      // 回复数+1
      const replyNumsNew = replyData.data.replyNums + 1;
      const replyNumsData = await this.baseUpdateReplyId({
        replyId: payload.replyId,
        replyNums: replyNumsNew
      })
      // console.log("replyNumsData", replyNumsData)
      if(!replyNumsData.success) {
        return replyNumsData;
      }
      // 获取新创建的回复
      const result = await this.baseRetrieveReplyId(data.data.generatedMaps[0].replyId)
      if(!result.success) {
        return result;
      }
      return {
        data: result.data,
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

  // 点赞
  async likes({type = 'reply', replyId = '', userId = '', userName = '' } = {}) {
    // 查看是否存在
    const comment = await this.baseRetrieveReplyId(replyId);
    if(!comment.success) {
      return comment;
    }
    const likesNum = comment.data.likes + 1;
    // 更新点赞数
    const commentLikes = await this.baseUpdateReplyId({
      replyId: replyId,
      likes: likesNum
    })
    if(!commentLikes.success) {
      return commentLikes;
    }
    // 添加点赞记录
    const likes = await this.informationLikesService.create({
      userId: userId,
      userName,
      type,
      typeId: replyId
    })
    if(!likes.success) {
      return likes;
    }
    return {
      success: true,
      code: 10009
    }
  }


  async baseCreate(payload) {
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
        code: 10004
      }
    }
  }


  async baseRetrieveReplyId(replytId) {

    const data = await this.baseInformationReplyService.BaseRetrieveReplyId(replytId);
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



  async retrieveCommentId(payload) {
    const data = await this.baseInformationReplyService.BaseRetrieveCommentId(payload);
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

  async baseUpdateReplyId(payload) {
    const data = await this.baseInformationReplyService.BaseUpdatereplyId(payload);
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
