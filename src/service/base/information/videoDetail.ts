
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationVideoDetailEntity } from 'src/entity/information/videoDetail';

@Provide()
export class BaseInformationVideoDetailService {

  @InjectEntityModel(InformationVideoDetailEntity)
  informationVideoDetailEntity: Repository<InformationVideoDetailEntity>;

  async BaseCreate({
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
    isDelete = false
  } = {}) {
    return this.informationVideoDetailEntity
      .createQueryBuilder()
      .insert()
      .into(InformationVideoDetailEntity)
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
    return this.informationVideoDetailEntity
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
    return this.informationVideoDetailEntity
      .createQueryBuilder()
      .update(InformationVideoDetailEntity)
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
    return this.informationVideoDetailEntity
      .createQueryBuilder()
      .update(InformationVideoDetailEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
