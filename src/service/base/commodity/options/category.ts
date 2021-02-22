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
      // .values({
      //   img: payload.img,
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr'],
      //   'es-es': payload['es-es']
      // })
      .values(payload)
      .execute();
  }



  /**
   * 查询商品形状选项
   */
  async BaseRetrieve(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('category')
      .where('category.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('category.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('category.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      // .orWhere('category.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .orWhere('category.es-es = :eses', { eses: payload['es-es'] })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder('category')
      .where('category.id = :id', { id: payload.id })
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
    const { id, ...setData } = payload;
    return await this.commodityOptionsCategoryEntity
      .createQueryBuilder()
      .update(CommodityOptionsCategoryEntity)
      // .set({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr']
      // })
      .set(setData)
      .where("id = :id", { id: id })
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
