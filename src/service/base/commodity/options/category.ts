import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsCategoryEntity } from 'src/entity/commodity/options/category';

@Provide()
export class BaseCommodityOptionsCategoryServer {

  @InjectEntityModel(CommodityOptionsCategoryEntity)
  commodityOptionsCategoryEntity: Repository<CommodityOptionsCategoryEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsCategoryEntity)
      .values({
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr']
      })
      .execute();
  }

  /**
   * 查询商品形状选项
   */
  async BaseRetrieve(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('Category')
      .where('Category.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('Category.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('Category.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('Category.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('Category')
      .where('Category.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
  async BaseUpdate(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .update(CommodityOptionsCategoryEntity)
      .set({
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr']
      })
      .where("id = :id", { id: payload.id })
      .execute();
  }

  /**
   * 删除商品形状选项
   */
  async BaseDelete(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}
