import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsThemeEntity } from 'src/entity/commodity/options/theme';

@Provide()
export class BaseCommodityOptionsThemeServer {

  @InjectEntityModel(CommodityOptionsThemeEntity)
  commodityOptionsThemeEntity: Repository<CommodityOptionsThemeEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsThemeEntity)
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
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder('Theme')
      .where('Theme.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('Theme.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('Theme.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('Theme.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder('Theme')
      .where('Theme.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
  async BaseUpdate(payload) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .update(CommodityOptionsThemeEntity)
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
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}
