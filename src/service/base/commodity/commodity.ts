import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';
import { CommodityColorEntity } from 'src/entity/commodity/attribute/color';
import { CommodityBrowsingCountEntity } from 'src/entity/commodity/commodityBrowsingCount';

@Provide()
export class BaseCommodityServer {

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;

  @InjectEntityModel(CommodityNameEntity)
  commodityNameEntity: Repository<CommodityNameEntity>;

  @InjectEntityModel(CommodityDescEntity)
  commodityDescEntity: Repository<CommodityDescEntity>;

  @InjectEntityModel(CommodityPriceEntity)
  commodityPriceEntity: Repository<CommodityPriceEntity>;

  @InjectEntityModel(CommodityColorEntity)
  commodityColorEntity: Repository<CommodityColorEntity>;

  @InjectEntityModel(CommodityBrowsingCountEntity)
  commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;

  /**
    * 创建商品
    * state
    * width
    * height
    */
  async BaseCreate(payload) {
    return await this.commodityEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityEntity)
      .values({
        state: payload.state,
        width: payload.width,
        height: payload.height
      })
      .execute();
  }

  /**
   * 商品 关联 属性，选项
   * 属性：name desc price photos colors
   * 选项：shape theme category technique
   */
    async BaseRelationSet(payload) {
      console.log("BaseRelationSet", payload)

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
      console.log("BaseHas commodityId", commodityId)
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
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .addSelect('commodity.createdDate')
      .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
      .getOne();
  }
  /**
   * 查询所有商品
   */
  async BaseRetrieveAll(payload) {
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .addSelect('commodity.createdDate')
      // .printSql()
      // .getSql();
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }
  /**
   * 搜索
   * @param commodityId
   */
  async BaseSearch(payload) {
    console.log("BaseSearch", payload)


    // ${ payload.widthMin && payload.widthMax ? ' AND BETWEEN :widthMin AND :widthMax' : ''} ${ payload.heightMin && payload.heightMax ? ' AND BETWEEN :heightMin AND :heightMax' : ''}
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.shapes', 'shapes')
      .leftJoinAndSelect('commodity.themes', 'themes')
      .leftJoinAndSelect('commodity.categorys', 'categorys')
      .leftJoinAndSelect('commodity.techniques', 'techniques')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
      .addSelect('commodity.createdDate')
      .where(`commodity.state like :state ${ payload.widthMin && payload.widthMax ? ' AND commodity.width BETWEEN :widthMin AND :widthMax' : ''} ${ payload.heightMin && payload.heightMax ? ' AND commodity.height BETWEEN :heightMin AND :heightMax' : ''} ${ payload.shapeId ? ' AND shapes.id = :shapeId' : ''}${ payload.themeId ? ' AND themes.id = :themeId' : ''}${ payload.categoryId ? ' AND categorys.id = :categoryId' : ''}${ payload.techniqueId ? ' AND techniques.id = :techniqueId' : ''}`)
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("name.commodityId")
          .from(CommodityNameEntity, "name")
          .where("name.zh-cn like :name")
          .andWhere("name.en-us like :name")
          .andWhere("name.ja-jp like :name")
          .andWhere("name.fr-fr like :name")
          .getQuery();
          console.log("name subQuery", subQuery)
        return "commodity.commodityId IN " + subQuery;
      })
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("desc.commodityId")
          .from(CommodityDescEntity, "desc")
          .where("desc.zh-cn like :desc")
          .andWhere("name.en-us like :desc")
          .andWhere("name.ja-jp like :desc")
          .andWhere("name.fr-fr like :desc")
          .getQuery();
          console.log("desc subQuery", subQuery)
        return "commodity.commodityId IN " + subQuery;
      })
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("price.commodityId")
          .from(CommodityPriceEntity, "price")
          .where("price.zh-cn BETWEEN :priceMin AND :priceMax")
          .andWhere("name.en-us BETWEEN :priceMin AND :priceMax")
          .andWhere("name.ja-jp BETWEEN :priceMin AND :priceMax")
          .andWhere("name.fr-fr BETWEEN :priceMin AND :priceMax")
          .getQuery();
          console.log("price subQuery", subQuery)
        return "commodity.commodityId IN " + subQuery;
      })
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("color.commodityId")
          .from(CommodityColorEntity, "color")
          .where("color.value BETWEEN :colorsMin AND :colorsMax")
          .getQuery();
          console.log("color subQuery", subQuery)
        return "commodity.commodityId IN " + subQuery;
      })
      // .andWhere(qb => {
      //   const subQuery = qb
      //     .subQuery()
      //     .select("browsingCount.commodityId")
      //     .from(CommodityBrowsingCountEntity, "browsingCount")
      //     .where("browsingCount.commodityId = :commodityId")
      //     .orderBy("browsingCount.count", payload.hots ? "DESC"  :  "ASC")
      //     .getQuery();
      //     console.log("browsingCount subQuery", subQuery)
      //     if(payload.hots){
      //       return "commodity.commodityId IN " + subQuery;
      //     }else{
      //       return " "
      //     }
      // })
      .setParameter("name", `%${payload.name}%`)
      .setParameter("desc", `%${payload.desc}%`)
      .setParameter("priceMin", payload.priceMin)
      .setParameter("priceMax", payload.priceMax)
      .setParameter("widthMin", payload.widthMin)
      .setParameter("widthMax", payload.widthMax)
      .setParameter("heightMin", payload.heightMin)
      .setParameter("heightMax", payload.heightMax)
      .setParameter("colorsMin", payload.colorsMin)
      .setParameter("colorsMax", payload.colorsMax)
      .setParameter("state", `%${payload.state}%`)
      .setParameter("shapeId", payload.shapeId)
      .setParameter("themeId", payload.themeId)
      .setParameter("categoryId", payload.categoryId)
      .setParameter("techniqueId", payload.techniqueId)
      .orderBy("browsingCount.count", payload.hots ? "DESC"  :  "ASC")
      .orderBy("commodity.createdDate", payload.news ? "DESC"  :  "ASC")
      // .andWhere(qb => {
      //   const subQuery = qb
      //     .subQuery()
      //     .select("shape.id")
      //     .from(CommodityOptionsShapeEntity, "shape")
      //     .where("shape.id like :shapeId")
      //     .getQuery();
      //   return "commodity.id IN " + subQuery;
      // })
      // .setParameter("shapeId", `%${payload.shapeId}%`)

      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();

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
    console.log("BaseUpdate", payload)
    const { commodityId, ...setData } = payload;
    return await this.commodityEntity
      .createQueryBuilder()
      .update(CommodityEntity)
      .set(setData)
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }
}
