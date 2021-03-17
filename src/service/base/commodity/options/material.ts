/**
 * 商品材质
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsMaterialEntity } from 'src/entity/commodity/options/material';

@Provide()
export class BaseCommodityOptionsMaterialServer {

  @InjectEntityModel(CommodityOptionsMaterialEntity)
  commodityOptionsMaterialEntity: Repository<CommodityOptionsMaterialEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsMaterialEntity)
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
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder('material')
      .where('material.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('material.en-us = :enus', { enus: payload.enus })
      .orWhere('material.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('material.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(payload) {
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder('material')
      .where('material.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder()
      .update(CommodityOptionsMaterialEntity)
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
    return await this.commodityOptionsMaterialEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
