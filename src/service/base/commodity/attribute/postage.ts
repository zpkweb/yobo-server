import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPostageEntity } from 'src/entity/commodity/attribute/postage';

@Provide()
export class BaseCommodityPostageService {

  @InjectEntityModel(CommodityPostageEntity)
  commodityPostageEntity: Repository<CommodityPostageEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityPostageEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityPostageEntity)
      // .values({
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
   * 查询商品是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityPostageEntity
    .createQueryBuilder('postage')
    .where('postage.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieve(payload) {
    return await this.commodityPostageEntity
      .createQueryBuilder('postage')
      .where('postage.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('postage.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('postage.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      // .orWhere('postage.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .orWhere('postage.es-es = :eses', { eses: payload['es-es'] })
      .getOne();
  }

  /**
   * 查询Id
   */
  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityPostageEntity
      .createQueryBuilder('postage')
      .where('postage.commodityId = :commodityId', { commodityId: commodityId })
      .getOne();
  }

  /**
   * 查询所有
   */
  async BaseRetrieveAll() {
    return await this.commodityPostageEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { commodityId, ...setData } = payload;
    return await this.commodityPostageEntity
      .createQueryBuilder()
      .update(CommodityPostageEntity)
      // .set({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr']
      // })
      .set(setData)
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(commodityId) {
    return await this.commodityPostageEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  async BaseSearch(payload) {
    return await this.commodityPostageEntity
      .createQueryBuilder('postage')
      .innerJoinAndSelect('postage.commodity', 'commoditys')
      .where('postage.zh-cn like :zhcn', { zhcn: `%${payload}%` })
      .getMany();
  }

}
