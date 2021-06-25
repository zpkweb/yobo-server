import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationFabulousEntity } from 'src/entity/information/fabulous';

@Provide()
export class BaseInformationFabulousService {

  @InjectEntityModel(InformationFabulousEntity)
  informationFabulousEntity: Repository<InformationFabulousEntity>;

  async BaseCreate({
    type = '',
    typeId = '',
    userId = '',
    isCancel = true,
    isDelete = false
  } = {}) {
    return this.informationFabulousEntity
      .createQueryBuilder()
      .insert()
      .into(InformationFabulousEntity)
      .values({
        type,
        typeId,
        userId,
        isCancel,
        isDelete
      })
      .execute();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationFabulousEntity
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
    isCancel = true,
  } = {}) {
    return this.informationFabulousEntity
      .createQueryBuilder()
      .update(InformationFabulousEntity)
      .set({
        type,
        typeId,
        userId,
        isCancel,
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationFabulousEntity
      .createQueryBuilder()
      .update(InformationFabulousEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
