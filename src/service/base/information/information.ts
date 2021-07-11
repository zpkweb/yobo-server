import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Like, Repository } from "typeorm";
import { InformationEntity } from 'src/entity/information/information';

@Provide()
export class BaseInformationService {

  @InjectEntityModel(InformationEntity)
  informationEntity: Repository<InformationEntity>;

  async BaseCreate({
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
    isTop = false,
    isDelete = false
  } = {}) {
    return this.informationEntity
      .createQueryBuilder()
      .insert()
      .into(InformationEntity)
      .values({
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
        isTop,
        isDelete
      })
      .execute();
  }

  async BaseRetrieve({
    currentPage = 1,
    pageSize = 10,
    news = false,
    isTop = false
  } = {}) {
    return this.informationEntity
      .createQueryBuilder('information')
      .leftJoinAndSelect("information.detail", "detail")
      .leftJoinAndSelect("information.videos", "videos")
      .where("information.isDelete = :isDelete", { isDelete : false })
      .addSelect("information.isTop")
      .addSelect("information.createdDate")
      .orderBy({
        "information.id": news ? "DESC"  :  "ASC",
        "information.isTop": isTop ? "DESC"  :  "ASC"
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

    return this.informationEntity
      .createQueryBuilder()
      .where(where)
      .getOne();
  }

  async BaseRetrieveInformationId(informationId) {
    return this.informationEntity
      .createQueryBuilder('information')
      .leftJoinAndSelect("information.detail", "detail")
      .leftJoinAndSelect("information.videos", "videos")
      .where("information.informationId = :informationId", { informationId : informationId })
      .addSelect("information.isTop")
      .addSelect("information.createdDate")
      .getOne();
  }

  async BaseSearchInformation({
    name = '',
    currentPage = 1,
    pageSize = 10,
    news = false,
    isTop = false
  } = {}) {
    const where:any = {
      isDelete: false
    };
    if(name) {
      where['zh-cn'] = Like(`%${name}%`);
    }
    return this.informationEntity
      .createQueryBuilder('information')
      .leftJoinAndSelect("information.detail", "detail")
      .leftJoinAndSelect("information.videos", "videos")
      .where(where)
      .addSelect("information.isTop")
      .addSelect("information.createdDate")
      .orderBy({
        "information.id": news ? "DESC"  :  "ASC",
        "information.isTop": isTop ? "DESC"  :  "ASC"
      })
      .skip((currentPage-1)*pageSize)
      .take(pageSize)
      .getManyAndCount();
  }

  async BaseUpdate({
    id = '',
    zhcn = '',
    enus = '',
    jajp = '',
    eses = '',
    isTop = false
  } = {}) {
    return this.informationEntity
      .createQueryBuilder()
      .update(InformationEntity)
      .set({
        'zh-cn': zhcn,
        'en-us': enus,
        'ja-jp': jajp,
        'es-es': eses,
        isTop
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseDelete(id) {
    return this.informationEntity
      .createQueryBuilder()
      .update(InformationEntity)
      .set({
        isDelete: false
      })
      .where("id = :id", { id : id })
      .execute();
  }

  async BaseRelationSet(payload) {
    return await this.informationEntity
      .createQueryBuilder()
      .relation(InformationEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  async BaseRelationAdd(payload) {
    return await this.informationEntity
      .createQueryBuilder()
      .relation(InformationEntity, payload.name)
      .of(payload.of)
      .add(payload.add);
  }

}
