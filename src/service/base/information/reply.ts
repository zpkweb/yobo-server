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
    replyUser = '',
    userId = '',
    commentId = '',
    isShow = true,
    isDelete = false
  } = {}) {
    return this.informationReplyEntity
      .createQueryBuilder()
      .insert()
      .into(InformationReplyEntity)
      .values({
        content,
        replyUser,
        userId,
        commentId,
        isShow,
        isDelete
      })
      .execute();
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

  async BaseUpdate({
    id = '',
    content = '',
    replyUser = '',
    userId = '',
    commentId = '',
    isShow = true
  } = {}) {
    return this.informationReplyEntity
      .createQueryBuilder()
      .update(InformationReplyEntity)
      .set({
        content,
        replyUser,
        userId,
        commentId,
        isShow,
      })
      .where("id = :id", { id : id })
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
