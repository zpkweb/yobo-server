/**
 * 商品形状
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsCategoryEntity } from 'src/entity/commodity/options/category';
@Provide()
export class BaseCommodityOptionsCategoryServer {

  @InjectEntityModel(CommodityOptionsCategoryEntity)
  commodityOptionsCategoryEntity: Repository<CommodityOptionsCategoryEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsCategoryEntity)
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
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('category')
      .where('category.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('category.en-us = :enus', { enus: payload.enus })
      .orWhere('category.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('category.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('category')
      .where('category.id = :id', { id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .update(CommodityOptionsCategoryEntity)
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
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
