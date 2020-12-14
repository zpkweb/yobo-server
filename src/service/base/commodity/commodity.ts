import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';

@Provide()
export class BaseCommodityServer {

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;

  @InjectEntityModel(CommodityNameEntity)
  commodityNameEntity: Repository<CommodityNameEntity>;


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
   * 搜索
   * @param commodityId
   */
  async BaseSearch(payload) {
    console.log("BaseSearch", payload)
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name', 'name.zh-cn like :lang OR name.en-us like :lang OR name.ja-jp like :lang OR name.fr-fr like :lang', { lang: `%${payload.name}%` })
      // .leftJoinAndSelect('commodity.name', 'name')
      // .leftJoinAndSelect('commodity.desc', 'desc', 'desc.zh-cn like :lang OR desc.en-us like :lang OR desc.ja-jp like :lang OR desc.fr-fr like :lang', { lang: `%${payload.desc}%`})
      // .innerJoinAndSelect('commodity.price', 'price', 'price.zh-cn like :zhcn OR price.en-us like :enus OR price.ja-jp like :jajp OR price.fr-fr like :frfr', { zhcn: `%${payload.price}%`, enus: `${payload.price}`, jajp: `${payload.price}`, frfr: `${payload.price}` })
      // .innerJoinAndSelect('commodity.shapes', 'shapes', 'shapes.id like :id ', { id: `%${payload.shapes}%` })
      // .innerJoinAndSelect('commodity.themes', 'themes', 'themes.id like :id ', { id: `%${payload.themes}%` })
      // .innerJoinAndSelect('commodity.categorys', 'categorys', 'categorys.id like :id ', { id: `%${payload.categorys}%` })
      // .innerJoinAndSelect('commodity.techniques', 'techniques', 'techniques.id like :id ', { id: `%${payload.techniques}%` })
      // .innerJoinAndSelect('commodity.seller', 'seller', 'seller.email like :email ', { email: `%${payload.seller}%` })
      .addSelect('commodity.createdDate')
      // .where("commodity.state like :state", { state: `%${payload.state}%` })
      // .andWhere(qb => {
      //   const subQuery = qb
      //     .subQuery()
      //     .from(CommodityNameEntity, "name")
      //     .where("name.zh-cn = :name")
      //     .andWhere("name.en-us = :name")
      //     .andWhere("name.ja-jp = :name")
      //     .andWhere("name.fr-fr = :name")
      //     .getQuery();
      //   return "commodity.name IN " + subQuery;
      // })
      // .setParameter("name", payload.name)
      // .andWhere("name.zh-cn like :name")
      // .andWhere("name.en-us like :name")
      // .andWhere("name.ja-jp like :name")
      // .andWhere("name.fr-fr like :name")
      // .setParameter("name", payload.name)
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
