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
        .add(payload.add);
    }
  /**
   * 查询商品是否存在
   * @param commodityId
   */
    async BaseHas(commodityId) {
      return await this.commodityEntity
      .createQueryBuilder('commodity')
      .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
      .getOne();
    }
  /**
   * 查询商品关联属性是否存在
   * @param payload
   * commodityId
   * id
   * type : category, shape, technique, theme
   */
  async BaseHasRelation(payload) {
    return await this.commodityEntity
    .createQueryBuilder('commodity')
    .leftJoinAndSelect(`commodity.${payload.type}`, 'relation', 'relation.id = :id', { id: payload.id })
    .where('commodity.commodityId = :commodityId', { commodityId: payload.commodityId })
    .getOne();
  }
  /**
   * 查询商品
   */
  async BaseRetrieve(commodityId) {
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .addSelect('commodity.createdDate')
      .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
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
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .addSelect('commodity.createdDate')
      // .printSql()
      // .getSql();
      .getMany();
  }
  /**
   * 删除商品
   */
  async BaseDelete(commodityId) {
    return await this.commodityEntity
      .createQueryBuilder()
      .delete()
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }
  /**
   * 更新商品
   * @param payload
   */
  async BaseUpdate(payload) {
    return await this.commodityEntity
      .createQueryBuilder()
      .update(CommodityEntity)
      .set({
        state: payload.state,
        colors: payload.colors,
        size: payload.size
      })
      .where("commodityId = :commodityId", { commodityId: payload.commodityId })
      .execute();
  }
}
