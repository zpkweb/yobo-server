import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsTechniqueEntity } from 'src/entity/commodity/options/technique';

@Provide()
export class BaseCommodityOptionsTechniqueServer {

  @InjectEntityModel(CommodityOptionsTechniqueEntity)
  commodityOptionsTechniqueEntity: Repository<CommodityOptionsTechniqueEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsTechniqueEntity)
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
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder('technique')
      .where('technique.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('technique.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('technique.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('technique.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .orWhere('technique.es-es = :eses', { eses: payload['es-es'] })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder('technique')
      .where('technique.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .update(CommodityOptionsTechniqueEntity)
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
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}
