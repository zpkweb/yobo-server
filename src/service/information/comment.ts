import { Inject, Provide } from "@midwayjs/decorator";
import { BaseInformationCommentService } from "src/service/base/information/comment";
import { InformationReplyService } from "./reply";
import { InformationLikesService } from "./likes";
@Provide()
export class InformationCommentService {

  @Inject()
  baseInformationCommentService: BaseInformationCommentService;

  @Inject()
  informationReplyService: InformationReplyService;

  @Inject()
  informationLikesService: InformationLikesService;

  async create(payload) {
    // 创建
    const data = await this.baseCreate(payload);
    if(!data.success) {
      return data;
    }

    // 关联视频
    // this.relationSet({
    //   name: 'video',
    //   of: data.data.identifiers[0].id,
    //   set: {videoId: payload.videoId},
    // })

    const result = await this.baseRetrieveCommentId(data.data.generatedMaps[0].commentId)
    if(!result.success) {
      return result;
    }
    return {
      data: result.data,
      success: true,
      code: 10003
    }
  }

  async baseCreate(payload) {
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
        code: 10004
      }
    }
  }

  async baseRetrieveCommentId(commentId) {

    const data = await this.baseInformationCommentService.BaseRetrieveCommentId(commentId);
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

  async retrieveList(payload) {

    const data = await this.baseInformationCommentService.BaseRetrieveList(payload);
    let list:any = data[0];
    let total = data[1];
    if(list) {
      // list = list.map(async (item) => {
      //   const replyData = await this.informationReplyService.retrieveCommentId({
      //     commentId: item.commentId
      //   })
      //   console.log("replyData", replyData)
      //   item.reply = replyData.success ? replyData.data : [];
      //   return item;
      // })
      for(let item of list) {
        const replyData = await this.informationReplyService.retrieveCommentId({
          commentId: item.commentId
        })
        // console.log("replyData", replyData)
        item.reply = replyData.success ? replyData.data : [];
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

  // 点赞
  async likes({type = 'comment', commentId = '', userId = '', userName = '' } = {}) {
    // 查看是否存在
    const comment = await this.baseRetrieveCommentId(commentId);
    if(!comment.success) {
      return comment;
    }
    const likesNum = comment.data.likes + 1;
    // 更新点赞数
    const commentLikes = await this.baseUpdateCommentId({
      commentId: commentId,
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
      typeId: commentId
    })
    if(!likes.success) {
      return likes;
    }
    return {
      success: true,
      code: 10009
    }
  }

  async baseUpdateCommentId(payload) {
    const data = await this.baseInformationCommentService.BaseUpdateCommentId(payload);
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


  async relationSet(payload) {
    return this.baseInformationCommentService.BaseRelationSet(payload);
  }

  async relationAdd(payload) {
    return this.baseInformationCommentService.BaseRelationAdd(payload);
  }

  async relationRemove(payload) {
    return this.baseInformationCommentService.BaseRelationRemove(payload);
  }

}
