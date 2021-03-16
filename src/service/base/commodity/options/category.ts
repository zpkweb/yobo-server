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
  CommodityOptionsCategoryEntity: Repository<CommodityOptionsCategoryEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.CommodityOptionsCategoryEntity
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
    console.log("BaseRetrieve", payload)
    return await this.CommodityOptionsCategoryEntity
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
  async BaseRetrieveId(payload) {
    return await this.CommodityOptionsCategoryEntity
      .createQueryBuilder('category')
      .where('category.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.CommodityOptionsCategoryEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.CommodityOptionsCategoryEntity
      .createQueryBuilder()
      .update(CommodityOptionsCategoryEntity)
      .set(setData)
      .where("id = :id", { id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.CommodityOptionsCategoryEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}
