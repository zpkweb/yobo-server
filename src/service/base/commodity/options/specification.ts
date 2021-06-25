/**
 * 商品规格
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsSpecificationEntity } from 'src/entity/commodity/options/specification';

@Provide()
export class BaseCommodityOptionsSpecificationService {

  @InjectEntityModel(CommodityOptionsSpecificationEntity)
  commodityOptionsSpecificationEntity: Repository<CommodityOptionsSpecificationEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsSpecificationEntity)
      .values({
        'img': payload.img,
        'zh-cn': payload.zhcn,
        'en-us': payload.enus,
        'ja-jp': payload.jajp,
        'es-es': payload.eses
      })
      .execute();
  }



  /**
   * 查询
   */
  async BaseRetrieve(payload) {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder('specification')
      .where('specification.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('specification.en-us = :enus', { enus: payload.enus })
      .orWhere('specification.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('specification.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder('specification')
      .where('specification.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder()
      .update(CommodityOptionsSpecificationEntity)
      .set({
        'img': payload.img,
        'zh-cn': payload.zhcn,
        'en-us': payload.enus,
        'ja-jp': payload.jajp,
        'es-es': payload.eses
      })
      .where("id = :id", { id: payload.id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.commodityOptionsSpecificationEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
