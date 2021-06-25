
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationDetailEntity } from 'src/entity/information/detail';

@Provide()
export class BaseInformationDetailService {

  @InjectEntityModel(InformationDetailEntity)
  informationDetailEntity: Repository<InformationDetailEntity>;

  async BaseCreate({
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
    isDelete = false
  } = {}) {
    return this.informationDetailEntity
      .createQueryBuilder()
      .insert()
      .into(InformationDetailEntity)
      .values({
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
        isDelete
      })
      .execute();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10
  } = {}) {
    return this.informationDetailEntity
      .createQueryBuilder()
      .where("isDelete = :isDelete", { isDelete : false })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getMany();
  }



  async BaseUpdate({
    id = '',
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
  } = {}) {
    return this.informationDetailEntity
      .createQueryBuilder()
      .update(InformationDetailEntity)
      .set({
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationDetailEntity
      .createQueryBuilder()
      .update(InformationDetailEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
