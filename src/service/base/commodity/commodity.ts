import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityEntity } from 'src/entity/commodity/commodity';

@Provide()
export class BaseCommodityServer {

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;


  /**
    * 创建商品
    * state
    * colors
    * size
    */
  async BaseCreate(payload) {
    return await this.commodityEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityEntity)
      .values({
        state: payload.state,
        colors: payload.colors,
        size: payload.size
      })
      .execute();
  }

  /**
   * 商品 关联 属性，选项
   * 属性：name desc price photos
   * 选项：shape theme category technique
   */
    async BaseRelationSet(payload) {
      await this.commodityEntity
        .createQueryBuilder()
        .relation(CommodityEntity, payload.name)
        .of(payload.of)
        .set(payload.set);
    }
    async BaseRelationAdd(payload) {
      await this.commodityEntity
        .createQueryBuilder()
        .relation(CommodityEntity, payload.name)
        .of(payload.of)
        .add(payload.set);
    }

  /**
   * 查询商品
   */
  async BaseRetrieveId(payload) {
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.shape', 'shape')
      .leftJoinAndSelect('commodity.theme', 'theme')
      .leftJoinAndSelect('commodity.category', 'category')
      .leftJoinAndSelect('commodity.technique', 'technique')
      .where('commodity.commodityId = :commodityId', { commodityId: payload.commodityId })
      .getOne();
  }
  /**
   * 查询所有商品
   */
  async BaseRetrieveAll() {
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.shape', 'shape')
      .leftJoinAndSelect('commodity.theme', 'theme')
      .leftJoinAndSelect('commodity.category', 'category')
      .leftJoinAndSelect('commodity.technique', 'technique')
      .getMany();
  }
}
