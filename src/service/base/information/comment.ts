import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationCommentEntity } from 'src/entity/information/comment';

@Provide()
export class BaseInformationCommentService {

  @InjectEntityModel(InformationCommentEntity)
  informationCommentEntity: Repository<InformationCommentEntity>;

  async BaseCreate({
    content = '',
    userId = '',
    videoId = '',
    isShow = true,
    isDelete = false
  } = {}) {
    return this.informationCommentEntity
      .createQueryBuilder()
      .insert()
      .into(InformationCommentEntity)
      .values({
        content,
        userId,
        videoId,
        isShow,
        isDelete
      })
      .execute();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationCommentEntity
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
    userId = '',
    videoId = '',
    isShow = true,
    commentId = ''
  } = {}) {
    return this.informationCommentEntity
      .createQueryBuilder()
      .update(InformationCommentEntity)
      .set({
        content,
        userId,
        videoId,
        isShow,
        commentId
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationCommentEntity
      .createQueryBuilder()
      .update(InformationCommentEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
