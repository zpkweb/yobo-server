/**
 * 商品规格
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsSpecificationEntity } from 'src/entity/commodity/options/specification';

@Provide()
export class BaseCommodityOptionsSpecificationServer {

  @InjectEntityModel(CommodityOptionsSpecificationEntity)
  CommodityOptionsSpecificationEntity: Repository<CommodityOptionsSpecificationEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.CommodityOptionsSpecificationEntity
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
    return await this.CommodityOptionsSpecificationEntity
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
  async BaseRetrieveId(payload) {
    return await this.CommodityOptionsSpecificationEntity
      .createQueryBuilder('specification')
      .where('specification.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.CommodityOptionsSpecificationEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.CommodityOptionsSpecificationEntity
      .createQueryBuilder()
      .update(CommodityOptionsSpecificationEntity)
      .set(setData)
      .where("id = :id", { id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.CommodityOptionsSpecificationEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
