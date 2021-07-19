import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationLikesEntity } from 'src/entity/information/likes';

@Provide()
export class BaseInformationLikesService {

  @InjectEntityModel(InformationLikesEntity)
  informationLikesEntity: Repository<InformationLikesEntity>;

  async BaseCreate({
    type = '',
    typeId = '',
    userId = '',
    userName = '',
    isCancel = true,
    isDelete = false
  } = {}) {
    return this.informationLikesEntity
      .createQueryBuilder()
      .insert()
      .into(InformationLikesEntity)
      .values({
        type,
        typeId,
        userId,
        userName,
        isCancel,
        isDelete
      })
      .execute();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationLikesEntity
      .createQueryBuilder()
      .where("isDelete = :isDelete", { isDelete : false })
      .andWhere("isCancel = :isCancel", { isCancel : false })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getMany();
  }

  async BaseUpdate({
    id = '',
    type = '',
    typeId = '',
    userId = '',
    userName = '',
    isCancel = true,
  } = {}) {
    return this.informationLikesEntity
      .createQueryBuilder()
      .update(InformationLikesEntity)
      .set({
        type,
        typeId,
        userId,
        userName,
        isCancel,
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationLikesEntity
      .createQueryBuilder()
      .update(InformationLikesEntity)
      .set({
        isDelete: true
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
