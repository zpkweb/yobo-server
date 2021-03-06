import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityColorEntity } from 'src/entity/commodity/attribute/color';

@Provide()
export class BaseCommodityColorService {

  @InjectEntityModel(CommodityColorEntity)
  commodityColorEntity: Repository<CommodityColorEntity>;

  /**
   * 创建颜色
   */
  async BaseCreate(payload) {
    return await this.commodityColorEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityColorEntity)
      .values({
        'startColor': payload.startColor,
        'startColorValue': payload.startColorValue,
        'endColor': payload.endColor,
        'endColorValue': payload.endColorValue,
      })
      .execute();
  }

  /**
   * 查询颜色是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityColorEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }


  /**
   * 查询颜色
   */
  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityColorEntity
      .createQueryBuilder('color')
      .where('color.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  /**
   * 查询颜色
   */
  async BaseRetrieve(payload) {
    return await this.commodityColorEntity
      .createQueryBuilder('color')
      .where('color.commodityId = :commodityId', { commodityId: payload.commodityId })
      .getMany();
  }

  /**
   * 查询所有颜色
   */
  async BaseRetrieveAll() {
    return await this.commodityColorEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改颜色
   */
  async BaseUpdate(payload) {
    const { commodityId, ...setData } = payload;
    return await this.commodityColorEntity
      .createQueryBuilder()
      .update(CommodityColorEntity)
      .set(setData)
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  /**
   * 删除颜色
   */
  async BaseDelete(payload) {
    return await this.commodityColorEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: payload.commodityId })
      .execute();
  }

  async BaseSearch(payload) {
    return await this.commodityColorEntity
      .createQueryBuilder('color')
      .innerJoinAndSelect('color.commodity', 'commoditys')
      .where('color.startColorValue >= :colors AND color.endColorValue <= :colors', { colors: payload })
      .getMany();
  }
}
