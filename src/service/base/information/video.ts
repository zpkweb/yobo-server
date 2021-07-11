import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Like, Repository } from "typeorm";
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
    pageSize = 10,
    news = false,
  } = {}) {
    return this.informationVideoEntity
      .createQueryBuilder('informationVideo')
      .leftJoinAndSelect("informationVideo.detail", "detail")
      .where("informationVideo.isDelete = :isDelete", { isDelete : false })
      .addSelect("informationVideo.createdDate")
      .orderBy({
        "informationVideo.id": news ? "DESC"  :  "ASC"
      })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getManyAndCount();
  }

  async BaseRetrieveName({
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
  } = {}) {

    const where = {};
    if(zhcn) {
      where['zh-cn'] = zhcn;
    }
    if(enus) {
      where['en-us'] = enus;
    }
    if(jajp) {
      where['ja-jp'] = jajp;
    }
    if(eses) {
      where['es-es'] = eses;
    }

    return this.informationVideoEntity
      .createQueryBuilder()
      .where(where)
      .getOne();
  }

  async BaseRetrieveVideoId(videoId) {
    return this.informationVideoEntity
      .createQueryBuilder('informationVideo')
      .leftJoinAndSelect("informationVideo.detail", "detail")
      .where("informationVideo.videoId = :videoId", { videoId : videoId })
      .addSelect("informationVideo.createdDate")
      .getOne();
  }

  async BaseSearch({
    title = '',
    currentPage = 1,
    pageSize = 10,
    news = false,
  } = {}) {
    const where:any = {
      isDelete: false
    };
    if(title) {
      where['zh-cn'] = Like(`%${title}%`);
    }
    return this.informationVideoEntity
      .createQueryBuilder('information')
      .leftJoinAndSelect("information.detail", "detail")
      .where(where)
      .addSelect("information.createdDate")
      .orderBy({
        "information.id": news ? "DESC"  :  "ASC",
      })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getManyAndCount();
  }


  async BaseUpdate({
    videoId = '',
    videoSrc = '',
    ccId = '',
    siteId = '',
    videoPhoto = '',
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
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
      })
      .where("videoId = :videoId", { videoId : videoId })
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

  async BaseRelationSet(payload) {
    return await this.informationVideoEntity
      .createQueryBuilder()
      .relation(InformationVideoEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  async BaseRelationAdd(payload) {
    return await this.informationVideoEntity
      .createQueryBuilder()
      .relation(InformationVideoEntity, payload.name)
      .of(payload.of)
      .add(payload.add);
  }

}
