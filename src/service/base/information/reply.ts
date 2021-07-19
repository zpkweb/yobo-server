import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationReplyEntity } from 'src/entity/information/reply';

@Provide()
export class BaseInformationReplyService {

  @InjectEntityModel(InformationReplyEntity)
  informationReplyEntity: Repository<InformationReplyEntity>;

  async BaseCreate({
    content = '',
    replyUserId = '',
    replyUserName = '',
    userId = '',
    userName = '',
    commentId = '',
    likes = 0,
    replyNums = 0,
    isShow = true,
    isDelete = false
  } = {}) {
    return this.informationReplyEntity
      .createQueryBuilder()
      .insert()
      .into(InformationReplyEntity)
      .values({
        content,
        replyUserId,
        replyUserName,
        userId,
        userName,
        commentId,
        likes,
        replyNums,
        isShow,
        isDelete
      })
      .execute();
  }


  async BaseRetrieveReplyId(replyId) {
    const where:any = {
      isDelete: false,
      isShow: true,
      replyId
    };
    return this.informationReplyEntity
      .createQueryBuilder("reply")
      .where(where)
      .addSelect("reply.createdDate")
      .getOne();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationReplyEntity
      .createQueryBuilder()
      .where("isDelete = :isDelete", { isDelete : false })
      .andWhere("isShow = :isShow", { isShow : true })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getMany();
  }

  async BaseRetrieveCommentId({
    commentId = '',
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationReplyEntity
      .createQueryBuilder('reply')
      .where("commentId = :commentId", { commentId: commentId })
      .andWhere("isDelete = :isDelete", { isDelete : false })
      .andWhere("isShow = :isShow", { isShow : true })
      .addSelect('reply.createdDate')
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getMany();
  }



  async BaseUpdate({
    id = '',
    content = '',
    replyUserId = '',
    replyUserName = '',
    userId = '',
    userName = '',
    commentId = '',
    likes = 0,
    replyNums = 0,
    isShow = true
  } = {}) {

    const set:any = {}
    if(content) {
      set.content = content;
    }
    if(likes) {
      set.likes = likes;
    }
    if(replyNums) {
      set.replyNums = replyNums;
    }
    return this.informationReplyEntity
      .createQueryBuilder()
      .update(InformationReplyEntity)
      .set(set)
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseUpdatereplyId({
    replyId = '',
    content = '',
    replyUserId = '',
    replyUserName = '',
    userId = '',
    userName = '',
    commentId = '',
    likes = 0,
    replyNums = 0,
    isShow = true
  } = {}) {

    const set:any = {}
    if(content) {
      set.content = content;
    }
    if(likes) {
      set.likes = likes;
    }
    if(replyNums) {
      set.replyNums = replyNums;
    }

    return this.informationReplyEntity
      .createQueryBuilder()
      .update(InformationReplyEntity)
      .set(set)
      .where("replyId = :replyId", { replyId : replyId })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationReplyEntity
      .createQueryBuilder()
      .update(InformationReplyEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
