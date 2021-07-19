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
    userName = '',
    videoId = '',
    likes = 0,
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
        userName,
        videoId,
        likes,
        isShow,
        isDelete
      })
      .execute();
  }

  async BaseRetrieveCommentId(commentId) {
    const where:any = {
      isDelete: false,
      isShow: true,
      commentId
    };
    return this.informationCommentEntity
      .createQueryBuilder("comment")
      .where(where)
      .addSelect("comment.createdDate")
      .getOne();
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
      .getManyAndCount();
  }

  async BaseRetrieveList({
    videoId = '',
    currentPage = 1,
    pageSize = 10
  } = {}) {
    const where:any = {
      isDelete: false,
      isShow: true
    };
    if(videoId) {
      where.videoId = videoId;
    }
    return this.informationCommentEntity
      .createQueryBuilder('comment')
      .where(where)
      // .where("videoId = :videoId", { videoId: videoId })
      // .andWhere("isDelete = :isDelete", { isDelete : false })
      // .andWhere("isShow = :isShow", { isShow : true })
      .addSelect("comment.createdDate")
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getManyAndCount();
  }

  async BaseUpdate({
    id = '',
    content = '',
    userId = '',
    userName = '',
    videoId = '',
    likes = 0,
    isShow = true,
    commentId = ''
  } = {}) {
    return this.informationCommentEntity
      .createQueryBuilder()
      .update(InformationCommentEntity)
      .set({
        content,
        userId,
        userName,
        likes,
        videoId,
        isShow,
        commentId
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseUpdateCommentId({
    content = '',
    userId = '',
    userName = '',
    videoId = '',
    likes = 0,
    isShow = true,
    commentId = ''
  } = {}) {
    const set:any = {}
    if(content) {
      set.content = content;
    }
    if(likes) {
      set.likes = likes;
    }

    return this.informationCommentEntity
      .createQueryBuilder()
      .update(InformationCommentEntity)
      .set(set)
      .where("commentId = :commentId", { commentId : commentId })
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

  async BaseRelationSet(payload) {
    return await this.informationCommentEntity
      .createQueryBuilder()
      .relation(InformationCommentEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  async BaseRelationAdd(payload) {
    return await this.informationCommentEntity
      .createQueryBuilder()
      .relation(InformationCommentEntity, payload.name)
      .of(payload.of)
      .add(payload.add);
  }

  async BaseRelationRemove(payload) {
    return await this.informationCommentEntity
      .createQueryBuilder()
      .relation(InformationCommentEntity, payload.name)
      .of(payload.of)
      .remove(payload.remove);
  }

}
