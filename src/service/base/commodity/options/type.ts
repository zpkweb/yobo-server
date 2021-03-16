/**
 * 商品类型
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsTypeEntity } from 'src/entity/commodity/options/type';

@Provide()
export class BaseCommodityOptionsTypeServer {

  @InjectEntityModel(CommodityOptionsTypeEntity)
  CommodityOptionsTypeEntity: Repository<CommodityOptionsTypeEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsTypeEntity)
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
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder('type')
      .where('type.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('type.en-us = :enus', { enus: payload.enus })
      .orWhere('type.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('type.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(payload) {
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder('type')
      .where('type.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder()
      .update(CommodityOptionsTypeEntity)
      .set(setData)
      .where("id = :id", { id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.CommodityOptionsTypeEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
