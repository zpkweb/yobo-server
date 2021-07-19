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
      .createQueryBuilder('informationVideo')
      .where(where)
      .andWhere("informationVideo.isDelete = :isDelete", { isDelete : false })
      .getOne();
  }

  async BaseRetrieveVideoId(videoId) {
    return this.informationVideoEntity
      .createQueryBuilder('informationVideo')
      .leftJoinAndSelect("informationVideo.detail", "detail")
      .where("informationVideo.videoId = :videoId", { videoId : videoId })
      .andWhere("informationVideo.isDelete = :isDelete", { isDelete : false })
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
      .createQueryBuilder('informationVideo')
      .leftJoinAndSelect("informationVideo.detail", "detail")
      .where(where)
      .andWhere("informationVideo.isDelete = :isDelete", { isDelete : false })
      .addSelect("informationVideo.createdDate")
      .orderBy({
        "informationVideo.id": news ? "DESC"  :  "ASC",
      })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getManyAndCount();
  }


  async BaseUpdate(payload) {
    const { videoId, ...setData } = payload;
    const set:any = {}
    if(setData.videoSrc) {
      set.videoSrc = setData.videoSrc;
    }
    if(setData.ccId) {
      set.ccId = setData.ccId;
    }
    if(setData.siteId) {
      set.siteId = setData.siteId;
    }
    if(setData.videoPhoto) {
      set.videoPhoto = setData.videoPhoto;
    }
    if(setData.zhcn) {
      set['zh-cn'] = setData.zhcn;
    }
    if(setData.enus) {
      set['en-us'] = setData.enus;
    }
    if(setData.jajp) {
      set['ja-jp'] = setData.jajp;
    }
    if(setData.eses) {
      set['es-es'] = setData.eses;
    }
    if(setData.watchs) {
      set.watchs = setData.watchs;
    }


    return this.informationVideoEntity
      .createQueryBuilder()
      .update(InformationVideoEntity)
      .set(set)
      .where("videoId = :videoId", { videoId : videoId })
      .andWhere("isDelete = :isDelete", { isDelete : false })
      .execute();
  }

  async BaseDelete(videoId) {
    return this.informationVideoEntity
      .createQueryBuilder()
      .update(InformationVideoEntity)
      .set({
        isDelete: true
      })
      .where("videoId = :videoId", { videoId : videoId })
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
