import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, MoreThanOrEqual, LessThanOrEqual, Between, In } from "typeorm";
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';
import { CommodityColorEntity } from 'src/entity/commodity/attribute/color';
import { CommodityBrowsingCountEntity } from 'src/entity/commodity/commodityBrowsingCount';

import { CommodityCategoryEntity } from 'src/entity/commodity/commodity-options/category';
// import { CommodityOptionsClassificationEntity } from 'src/entity/commodity/options/classification';
// import { CommodityOptionsMaterialEntity } from 'src/entity/commodity/options/material';
// import { CommodityOptionsModelEntity } from 'src/entity/commodity/options/model';
// import { CommodityOptionsPlaceEntity } from 'src/entity/commodity/options/place';
// import { CommodityOptionsRuiwuEntity } from 'src/entity/commodity/options/ruiwu';
// import { CommodityOptionsShapeEntity } from 'src/entity/commodity/options/shape';
// import { CommodityOptionsSpecificationEntity } from 'src/entity/commodity/options/specification';
// import { CommodityOptionsStyleEntity } from 'src/entity/commodity/options/style';
// import { CommodityOptionsTechniqueEntity } from 'src/entity/commodity/options/technique';
// import { CommodityOptionsThemeEntity } from 'src/entity/commodity/options/theme';
// import { CommodityOptionsTypeEntity } from 'src/entity/commodity/options/type';
// import { CommodityOptionsUseEntity } from 'src/entity/commodity/options/use';

@Provide()
export class BaseCommodityServer {

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>;

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

  @InjectEntityModel(CommodityCategoryEntity)
  commodityCategoryEntity: Repository<CommodityCategoryEntity>

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

    async BaseRelationRemove(payload) {
      await this.commodityEntity
        .createQueryBuilder()
        .relation(CommodityEntity, payload.name)
        .of(payload.of)
        .remove(payload.remove);
    }
  /**
   * 查询商品是否存在
   * @param commodityId
   */
    async BaseHas(commodityId) {
      console.log("BaseHas commodityId", commodityId)
      return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
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
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.classifications', 'classification')
      .leftJoinAndSelect('commodity.materials', 'material')
      .leftJoinAndSelect('commodity.models', 'model')
      .leftJoinAndSelect('commodity.places', 'place')
      .leftJoinAndSelect('commodity.ruiwus', 'ruiwu')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.specifications', 'specification')
      .leftJoinAndSelect('commodity.styles', 'style')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.types', 'type')
      .leftJoinAndSelect('commodity.uses', 'use')
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
      .leftJoinAndSelect('commodity.categorys', 'category')
      .leftJoinAndSelect('commodity.classifications', 'classification')
      .leftJoinAndSelect('commodity.materials', 'material')
      .leftJoinAndSelect('commodity.models', 'model')
      .leftJoinAndSelect('commodity.places', 'place')
      .leftJoinAndSelect('commodity.ruiwus', 'ruiwu')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.specifications', 'specification')
      .leftJoinAndSelect('commodity.styles', 'style')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.types', 'type')
      .leftJoinAndSelect('commodity.uses', 'use')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .addSelect('commodity.createdDate')
      // .printSql()
      // .getSql();
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  async BaseRetrieveCategory(categorys) {
    console.log("BaseRetrieveCategory", categorys)
  //   const loadedPosts = await connection.getRepository(Post).find({
  //     title: In(["About #2", "About #3"])
  // });
  const where: any = {};

  where.categorys = {
    id : In(['1', '2'])
  }
  //   const category = await this.commodityCategoryEntity
  //   .find({
  //     join: {
  //       alias: "category",
  //       leftJoinAndSelect: {
  //           categorys: "category.categorys",
  //       }
  //   },
  //     where
  //   })

  const category = await this.commodityEntity
  .createQueryBuilder('commodity')
  .leftJoinAndSelect('commodity.categorys', 'category')
  .where("category.categoryId IN (:...categorys)", { categorys : ['1','2']})
  .getMany()
    console.log("category ", category)
    return category
  }
  /**
   * 搜索
   * @param commodityId
   */
  async BaseSearch(payload) {
    console.log("BaseSearch", payload)


    // const where: any = {};

    // if (payload.id) {
    //   where.id = Like(payload.id);
    // }

    // if (payload.name) {
    //   where.name = Like(payload.name);
    // }

    // if (payload.desc) {
    //   where.desc = Like(payload.desc);
    // }

    // if (payload.sellerId) {
    //   where.sellerId = Like(payload.sellerId);
    // }

    // if (payload.shapeId) {
    //   where.shapeId = Like(payload.shapeId);
    // }

    // if (payload.themeId) {
    //   where.themeId = Like(payload.themeId);
    // }

    // if (payload.categoryId) {
    //   where.categoryId = Like(payload.categoryId);
    // }

    // if (payload.techniqueId) {
    //   where.techniqueId = Like(payload.techniqueId);
    // }

    // if (payload.state) {
    //   where.state = Like(payload.state);
    // }

    // if (payload.hots) {
    //   where.hots = payload.hots;
    // }

    // if (payload.news) {
    //   where.news = payload.news;
    // }


    // if (payload.priceMin && !payload.priceMax) {
    //   where.price = MoreThanOrEqual(payload.priceMin);
    // }else if(!payload.priceMin && payload.priceMax) {
    //   where.price = LessThanOrEqual(payload.priceMax);
    // }else if(payload.priceMin && payload.priceMax){
    //   where.price = Between(payload.priceMin, payload.priceMax);
    // }


    // if (payload.widthMin && !payload.widthMax) {
    //   where.width = MoreThanOrEqual(payload.widthMin);
    // }else if(!payload.widthMin && payload.widthMax) {
    //   where.width = LessThanOrEqual(payload.widthMax);
    // }else if(payload.widthMin && payload.widthMax){
    //   where.width = Between(payload.widthMin, payload.widthMax);
    // }

    // if (payload.heightMin && !payload.heightMax) {
    //   where.height = MoreThanOrEqual(payload.heightMin);
    // }else if(!payload.heightMin && payload.heightMax) {
    //   where.height = LessThanOrEqual(payload.heightMax);
    // }else if(payload.heightMin && payload.heightMax){
    //   where.height = Between(payload.heightMin, payload.heightMax);
    // }

    // if (payload.colorsMin && !payload.colorsMax) {
    //   // where.colors = MoreThanOrEqual(payload.colorsMin);
    //   const userQb = await this.commodityEntity
    //   .createQueryBuilder("colors")
    //   .select("colors.commodityId")
    //   .where("colors.value MoreThanOrEqual :colorsMin", { colorsMin: payload.colorsMin });
    //   where.colors.value = "commodity.commodityId IN (" + userQb.getQuery() + ")"
    // }else if(!payload.colorsMin && payload.colorsMax) {
    //   // where.commodity.colors.value = LessThanOrEqual(payload.colorsMax);
    //   const userQb = await this.commodityEntity
    //   .createQueryBuilder("colors")
    //   .select("colors.commodityId")
    //   .where("colors.value LessThanOrEqual :colorsMax", { colorsMax: payload.colorsMax });
    //   where.colors.value = "commodity.commodityId IN (" + userQb.getQuery() + ")"
    // }else if(payload.colorsMin && payload.colorsMax){
    //   // where.commodity.colors.value = Between(payload.colorsMin, payload.colorsMax);
    //   const userQb = await this.commodityEntity
    //   .createQueryBuilder("colors")
    //   .select("colors.commodityId")
    //   .where("colors.value BETWEEN :colorsMin AND :colorsMax", { colorsMin: payload.colorsMin, colorsMax: payload.colorsMax });
    //   where.colors.value = "commodity.commodityId IN (" + userQb.getQuery() + ")"
    // }






    // console.log("BaseSearch where", where)
    // // list total
    // return await this.commodityEntity.findAndCount({
    //   // relations: ['seller'],
    //   join: {
    //     alias: "commodity",
    //     leftJoinAndSelect: {
    //       name: "commodity.name",
    //       desc: "commodity.desc",
    //       price: "commodity.price",
    //       photos: "commodity.photos",
    //       colors: "commodity.colors",
    //       categorys: "commodity.categorys",
    //       classifications: "commodity.classifications",
    //       materials: "commodity.materials",
    //       models: "commodity.models",
    //       places: "commodity.places",
    //       ruiwus: "commodity.ruiwus",
    //       shapes: "commodity.shapes",
    //       specifications: "commodity.specifications",
    //       styles: "commodity.styles",
    //       techniques: "commodity.techniques",
    //       themes: "commodity.themes",
    //       types: "commodity.types",
    //       uses: "commodity.uses",
    //       seller: "commodity.seller",
    //       browsingCount: "commodity.browsingCount",
    //     }
    //   },
    //   where,
    //   take: payload.pageSize,
    //   skip: payload.pageSize * (payload.currentPage - 1),
    // });


    const where: any = {};

    if (payload.id) {
      where.id = payload.id;
    }

    if (payload.commodityId) {
      where.commodityId = payload.commodityId;
    }

    if (payload.sellerId) {
      where.seller = {
        sellerId: payload.sellerId
      }
    }


    if (payload.state) {
      where.state = payload.state;
    }

    if (payload.widthMin && !payload.widthMax) {
      where.width = MoreThanOrEqual(payload.widthMin);
    }else if(!payload.widthMin && payload.widthMax) {
      where.width = LessThanOrEqual(payload.widthMax);
    }else if(payload.widthMin && payload.widthMax){
      where.width = Between(payload.widthMin, payload.widthMax);
    }

    if (payload.heightMin && !payload.heightMax) {
      where.height = MoreThanOrEqual(payload.heightMin);
    }else if(!payload.heightMin && payload.heightMax) {
      where.height = LessThanOrEqual(payload.heightMax);
    }else if(payload.heightMin && payload.heightMax){
      where.height = Between(payload.heightMin, payload.heightMax);
    }


    // if(payload.categorys) {
    //   where.categorys = {
    //     id: JSON.parse(payload.categorys)[0].id
    //   }
    // }

    console.log("where", where)

    let andWhere;


    // 艺术家id
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.sellerId){
      //     subQuery = qb
      //     .subQuery()
      //     .select("seller.sellerId")
      //     .from(UserSellerEntity, "seller")
      //     .where("seller.sellerId = :sellerId")
      //     .getQuery();
      //   return "commodity.sellerId IN " + subQuery;
      //   }else{
      //     subQuery = qb
      //     .subQuery()
      //     .select("seller.sellerId")
      //     .from(UserSellerEntity, "seller")
      //     .getQuery();
      //     return "commodity.sellerId IN " + subQuery;
      //   }

      // })
    // if(payload.sellerId) {
    //   const userSellerQb = await this.userSellerEntity
    //     .createQueryBuilder("seller")
    //     .select("seller.sellerId")
    //     .where("seller.sellerId = :sellerId", { sellerId: payload.sellerId });
    //   // andWhere = "commodity.sellerId IN (" + userSellerQb.getQuery() + ")"
    //   andWhere = `commodity.sellerId IN (${userSellerQb.getQuery()})`
    // }
    console.log("andWhere", andWhere)


    // ${ payload.widthMin && payload.widthMax ? ' AND BETWEEN :widthMin AND :widthMax' : ''} ${ payload.heightMin && payload.heightMax ? ' AND BETWEEN :heightMin AND :heightMax' : ''}
    return await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.categorys', 'categorys')
      .leftJoinAndSelect('commodity.classifications', 'classification')
      .leftJoinAndSelect('commodity.materials', 'material')
      .leftJoinAndSelect('commodity.models', 'model')
      .leftJoinAndSelect('commodity.places', 'place')
      .leftJoinAndSelect('commodity.ruiwus', 'ruiwu')
      .leftJoinAndSelect('commodity.shapes', 'shape')
      .leftJoinAndSelect('commodity.specifications', 'specification')
      .leftJoinAndSelect('commodity.styles', 'style')
      .leftJoinAndSelect('commodity.techniques', 'technique')
      .leftJoinAndSelect('commodity.themes', 'theme')
      .leftJoinAndSelect('commodity.types', 'type')
      .leftJoinAndSelect('commodity.uses', 'use')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
      .addSelect('commodity.createdDate')
      .where(where)
      // .andWhere(andWhere)
      // .where(`commodity.state like :state ${ payload.id ? ' AND commodity.id = :id' : ''}${ payload.widthMin && payload.widthMax ? ' AND commodity.width BETWEEN :widthMin AND :widthMax' : ''} ${ payload.heightMin && payload.heightMax ? ' AND commodity.height BETWEEN :heightMin AND :heightMax' : ''} ${ payload.shapeId ? ' AND shapes.id = :shapeId' : ''}${ payload.themeId ? ' AND themes.id = :themeId' : ''}${ payload.categoryId ? ' AND categorys.id = :categoryId' : ''}${ payload.techniqueId ? ' AND techniques.id = :techniqueId' : ''}`)
      // .orWhere("commodity.sellerId = :sellerId", { sellerId: payload.sellerId })

      // 艺术品名称
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("name.commodityId")
          .from(CommodityNameEntity, "name")
          .where("name.zh-cn like :name")
          // .andWhere("name.en-us like :name")
          // .andWhere("name.ja-jp like :name")
          // .andWhere("name.fr-fr like :name")
          // .andWhere("name.es-es like :name")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
      })
      // 艺术品详情
      .andWhere(qb => {
        const subQuery = qb
          .subQuery()
          .select("desc.commodityId")
          .from(CommodityDescEntity, "desc")
          .where("desc.zh-cn like :desc")
          // .andWhere("name.en-us like :desc")
          // .andWhere("name.ja-jp like :desc")
          // .andWhere("name.fr-fr like :desc")
          // .andWhere("name.es-es like :desc")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
      })


      // 艺术品分类
      .andWhere(qb => {
        let subQuery;
        if(payload.categorys.length) {
          subQuery = qb
          .subQuery()
          .select("category.commodityId")
          .from(CommodityCategoryEntity, "category")
          .where("category.categoryId IN (:...categorys)")
          .getQuery();
        }else {
          subQuery = qb
          .subQuery()
          .select("category.commodityId")
          .from(CommodityCategoryEntity, "category")
          .getQuery();
        }

        return "commodity.commodityId IN " + subQuery;
      })



      // 艺术品价格
      .andWhere(qb => {
        let subQuery;
        if(payload.priceMin && !payload.priceMax) {
          subQuery = qb
          .subQuery()
          .select("price.commodityId")
          .from(CommodityPriceEntity, "price")
          .where("price.zh-cn > :priceMin")
          // .andWhere("name.en-us > :priceMin")
          // .andWhere("name.ja-jp > :priceMin")
          // .andWhere("name.fr-fr > :priceMin")
          // .andWhere("name.es-es > :priceMin")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else if(!payload.priceMin && payload.priceMax) {
          subQuery = qb
          .subQuery()
          .select("price.commodityId")
          .from(CommodityPriceEntity, "price")
          .where("price.zh-cn < :priceMax")
          // .andWhere("name.en-us < :priceMax")
          // .andWhere("name.ja-jp < :priceMax")
          // .andWhere("name.fr-fr < :priceMax")
          // .andWhere("name.es-es < :priceMax")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else if(payload.priceMin && payload.priceMax) {
          subQuery = qb
          .subQuery()
          .select("price.commodityId")
          .from(CommodityPriceEntity, "price")
          .where("price.zh-cn BETWEEN :priceMin AND :priceMax")
          // .andWhere("name.en-us BETWEEN :priceMin AND :priceMax")
          // .andWhere("name.ja-jp BETWEEN :priceMin AND :priceMax")
          // .andWhere("name.fr-fr BETWEEN :priceMin AND :priceMax")
          // .andWhere("name.es-es BETWEEN :priceMin AND :priceMax")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else{
          subQuery = qb
          .subQuery()
          .select("price.commodityId")
          .from(CommodityPriceEntity, "price")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }

      })
      // 艺术品颜色
      .andWhere(qb => {
        let subQuery;
        if(payload.colorsMin && !payload.colorsMax) {
          subQuery = qb
          .subQuery()
          .select("color.commodityId")
          .from(CommodityColorEntity, "color")
          .where("color.value > :colorsMin")
          // .andWhere("name.en-us > :colorsMin")
          // .andWhere("name.ja-jp > :colorsMin")
          // .andWhere("name.fr-fr > :colorsMin")
          // .andWhere("name.es-es > :colorsMin")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else if(!payload.colorsMin && payload.colorsMax) {
          subQuery = qb
          .subQuery()
          .select("color.commodityId")
          .from(CommodityColorEntity, "color")
          .where("color.value < :colorsMax")
          // .andWhere("name.en-us < :colorsMax")
          // .andWhere("name.ja-jp < :colorsMax")
          // .andWhere("name.fr-fr < :colorsMax")
          // .andWhere("name.es-es < :colorsMax")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else if(payload.colorsMin && payload.colorsMax) {
          subQuery = qb
          .subQuery()
          .select("color.commodityId")
          .from(CommodityColorEntity, "color")
          .where("color.value BETWEEN :colorsMin AND :colorsMax")
          // .andWhere("name.en-us BETWEEN :colorsMin AND :colorsMax")
          // .andWhere("name.ja-jp BETWEEN :colorsMin AND :colorsMax")
          // .andWhere("name.fr-fr BETWEEN :colorsMin AND :colorsMax")
          // .andWhere("name.es-es BETWEEN :colorsMin AND :colorsMax")
          .getQuery();
        return "commodity.commodityId IN " + subQuery;
        }else{
          subQuery = qb
          .subQuery()
          .select("color.commodityId")
          .from(CommodityColorEntity, "color")
          .getQuery();
          return "commodity.commodityId IN " + subQuery;
        }

        // const subQuery = qb
        //   .subQuery()
        //   .select("color.commodityId")
        //   .from(CommodityColorEntity, "color")
        //   .where("color.value BETWEEN :colorsMin AND :colorsMax")
        //   .getQuery();
        //   console.log("color subQuery", subQuery)
        // return "commodity.commodityId IN " + subQuery;
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
      .setParameter("id", payload.id)
      .setParameter("sellerId", payload.sellerId)
      // .setParameters(userSellerQb.getParameters())
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
      .setParameter("categorys", payload.categorys)
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
