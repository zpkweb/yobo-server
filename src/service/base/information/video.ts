import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { InformationVideoEntity } from 'src/entity/information/video';

@Provide()
export class BaseInformationVideoService {

  @InjectEntityModel(InformationVideoEntity)
  informationVideoEntity: Repository<InformationVideoEntity>;

  async BaseCreate({
    videoSrc = '',
    ccId = '',
    siteId = '',
    videoPhoto = '',
    watchs = 0,
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
    isDelete = false
  } = {}) {
    return this.informationVideoEntity
      .createQueryBuilder()
      .insert()
      .into(InformationVideoEntity)
      .values({
        videoSrc,
        ccId,
        siteId,
        videoPhoto,
        watchs,
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
    return this.informationVideoEntity
      .createQueryBuilder()
      .where("isDelete = :isDelete", { isDelete : false })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getMany();
  }

  async BaseUpdate({
    id = '',
    videoSrc = '',
    ccId = '',
    siteId = '',
    videoPhoto = '',
    watchs = 0,
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
  } = {}) {
    return this.informationVideoEntity
      .createQueryBuilder()
      .update(InformationVideoEntity)
      .set({
        videoSrc,
        ccId,
        siteId,
        videoPhoto,
        watchs,
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationVideoEntity
      .createQueryBuilder()
      .update(InformationVideoEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

}
