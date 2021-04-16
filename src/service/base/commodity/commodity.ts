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
import { CommodityClassificationEntity } from 'src/entity/commodity/commodity-options/classification';
import { CommodityMaterialEntity } from 'src/entity/commodity/commodity-options/material';
import { CommodityModelEntity } from 'src/entity/commodity/commodity-options/model';
import { CommodityPlaceEntity } from 'src/entity/commodity/commodity-options/place';
import { CommodityRuiwuEntity } from 'src/entity/commodity/commodity-options/ruiwu';
import { CommodityShapeEntity } from 'src/entity/commodity/commodity-options/shape';
import { CommoditySpecificationEntity } from 'src/entity/commodity/commodity-options/specification';
import { CommodityStyleEntity } from 'src/entity/commodity/commodity-options/style';
import { CommodityTechniqueEntity } from 'src/entity/commodity/commodity-options/technique';
import { CommodityThemeEntity } from 'src/entity/commodity/commodity-options/theme';
import { CommodityTypeEntity } from 'src/entity/commodity/commodity-options/type';
import { CommodityUseEntity } from 'src/entity/commodity/commodity-options/use';



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
  commodityCategoryEntity: Repository<CommodityCategoryEntity>;

  @InjectEntityModel(CommodityClassificationEntity)
  commodityClassificationEntity: Repository<CommodityClassificationEntity>;

  @InjectEntityModel(CommodityMaterialEntity)
  commodityMaterialEntity: Repository<CommodityMaterialEntity>;

  @InjectEntityModel(CommodityModelEntity)
  commodityModelEntity: Repository<CommodityModelEntity>;

  @InjectEntityModel(CommodityPlaceEntity)
  commodityPlaceEntity: Repository<CommodityPlaceEntity>;

  @InjectEntityModel(CommodityRuiwuEntity)
  commodityRuiwuEntity: Repository<CommodityRuiwuEntity>;

  @InjectEntityModel(CommodityShapeEntity)
  commodityShapeEntity: Repository<CommodityShapeEntity>;

  @InjectEntityModel(CommoditySpecificationEntity)
  commoditySpecificationEntity: Repository<CommoditySpecificationEntity>;

  @InjectEntityModel(CommodityStyleEntity)
  commodityStyleEntity: Repository<CommodityStyleEntity>;

  @InjectEntityModel(CommodityTechniqueEntity)
  commodityTechniqueEntity: Repository<CommodityTechniqueEntity>;

  @InjectEntityModel(CommodityThemeEntity)
  commodityThemeEntity: Repository<CommodityThemeEntity>;

  @InjectEntityModel(CommodityTypeEntity)
  commodityTypeEntity: Repository<CommodityTypeEntity>;

  @InjectEntityModel(CommodityUseEntity)
  commodityUseEntity: Repository<CommodityUseEntity>;

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
    const data =  await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.categorys', 'categorys')
      .innerJoinAndSelect('categorys.options', 'categorysOption')

      .leftJoinAndSelect('commodity.classifications', 'classifications')
      .innerJoinAndSelect('classifications.options', 'classificationsOption')

      .leftJoinAndSelect('commodity.materials', 'materials')
      .innerJoinAndSelect('materials.options', 'materialsOption')

      .leftJoinAndSelect('commodity.models', 'models')
      .innerJoinAndSelect('models.options', 'modelsOption')

      .leftJoinAndSelect('commodity.places', 'places')
      .innerJoinAndSelect('places.options', 'placesOption')

      .leftJoinAndSelect('commodity.ruiwus', 'ruiwus')
      .innerJoinAndSelect('ruiwus.options', 'ruiwusOption')

      .leftJoinAndSelect('commodity.shapes', 'shapes')
      .innerJoinAndSelect('shapes.options', 'shapesOption')

      .leftJoinAndSelect('commodity.specifications', 'specification')
      .innerJoinAndSelect('specification.options', 'specificationsOption')

      .leftJoinAndSelect('commodity.styles', 'styles')
      .innerJoinAndSelect('styles.options', 'stylesOption')

      .leftJoinAndSelect('commodity.techniques', 'techniques')
      .innerJoinAndSelect('techniques.options', 'techniquesOption')

      .leftJoinAndSelect('commodity.themes', 'themes')
      .innerJoinAndSelect('themes.options', 'themesOption')

      .leftJoinAndSelect('commodity.types', 'types')
      .innerJoinAndSelect('types.options', 'typesOption')

      .leftJoinAndSelect('commodity.uses', 'uses')
      .innerJoinAndSelect('uses.options', 'usesOption')

      .leftJoinAndSelect('commodity.seller', 'seller')
      .addSelect('commodity.createdDate')
      .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
      .getOne();
    return data
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

    const category = await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.categorys', 'category')
      .where("category.categoryId IN (:...categorys)", { categorys : categorys})
      .getMany();

    return category;
  }


  /**
   * 搜索
   * @param commodityId
   */
  // 并集
  async BaseSearchUnion(payload, where) {
    const commodityIds = new Set();


    if(payload.name) {
      const name = await this.commodityNameEntity
        .createQueryBuilder('name')
        .leftJoinAndSelect('name.commodity', 'commodity')
        .where("name.zh-cn like :name", { name : `%${payload.name}%`})
        .getMany()
      name.map((item) => commodityIds.add(item.commodity.commodityId))
    }

    if(payload.desc) {
      const desc = await this.commodityDescEntity
        .createQueryBuilder('desc')
        .leftJoinAndSelect('desc.commodity', 'commodity')
        .where("desc.zh-cn like :desc", { desc : `%${payload.desc}%`})
        .getMany()
      desc.map((item) => commodityIds.add(item.commodity.commodityId))
    }

    if(payload.priceMin && !payload.priceMax) {
      const price = await this.commodityPriceEntity
        .createQueryBuilder('price')
        .leftJoinAndSelect('price.commodity', 'commodity')
        .where("price.zh-cn > :priceMin", { priceMin : payload.priceMin})
        .getMany()
      price.map((item) => commodityIds.add(item.commodity.commodityId))
    }else if(!payload.priceMin && payload.priceMax) {
      const price = await this.commodityPriceEntity
        .createQueryBuilder('price')
        .leftJoinAndSelect('price.commodity', 'commodity')
        .where("price.zh-cn < :priceMax", { priceMax : payload.priceMax})
        .getMany()
      price.map((item) => commodityIds.add(item.commodity.commodityId))
    }else if(payload.priceMin && payload.priceMax) {
      const price = await this.commodityPriceEntity
        .createQueryBuilder('price')
        .leftJoinAndSelect('price.commodity', 'commodity')
        .where("price.zh-cn BETWEEN :priceMin AND :priceMax", { priceMin : payload.priceMin, priceMax : payload.priceMax})
        .getMany()
      price.map((item) => commodityIds.add(item.commodity.commodityId))
    }

    if(payload.colors) {
      const colors = await this.commodityColorEntity
        .createQueryBuilder('colors')
        .leftJoinAndSelect('colors.commodity', 'commodity')
        .where("colors.startColorValue < :startColor", { startColor: payload.colors.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0) })
        .andWhere("colors.endColorValue < :endColor", { endColor: payload.colors.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0) })
        .getMany()
      colors.map((item) => commodityIds.add(item.commodity.commodityId))
    }





    if(payload.categorys.length) {
      const options = await this.commodityCategoryEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.categorys})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.classifications.length) {
      const options = await this.commodityClassificationEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.classifications})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.materials.length) {
      const options = await this.commodityMaterialEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.materials})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.models.length) {
      const options = await this.commodityModelEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.models})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.places.length) {
      const options = await this.commodityPlaceEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.places})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.ruiwus.length) {
      const options = await this.commodityRuiwuEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.ruiwus})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.shapes.length) {
      const options = await this.commodityShapeEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.shapes})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.specifications.length) {
      const options = await this.commoditySpecificationEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.specifications})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.styles.length) {
      const options = await this.commodityStyleEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.styles})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.techniques.length) {
      const options = await this.commodityTechniqueEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.techniques})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.themes.length) {
      const options = await this.commodityThemeEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.themes})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.types.length) {
      const options = await this.commodityTypeEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.types})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }

    if(payload.uses.length) {
      const options = await this.commodityUseEntity
        .createQueryBuilder('options')
        .select("options.commodityId")
        .where("options.optionId IN (:...options)", { options : payload.uses})
        .getMany()
      options.map((item) => commodityIds.add(item.commodityId))
    }




    if(commodityIds.size){
      where.commodityId = In([...commodityIds])
    }

    const data = await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.categorys', 'categorys')
      .leftJoinAndSelect('commodity.classifications', 'classifications')
      .leftJoinAndSelect('commodity.materials', 'materials')
      .leftJoinAndSelect('commodity.models', 'models')
      .leftJoinAndSelect('commodity.places', 'places')
      .leftJoinAndSelect('commodity.ruiwus', 'ruiwus')
      .leftJoinAndSelect('commodity.shapes', 'shapes')
      .leftJoinAndSelect('commodity.specifications', 'specifications')
      .leftJoinAndSelect('commodity.styles', 'styles')
      .leftJoinAndSelect('commodity.techniques', 'techniques')
      .leftJoinAndSelect('commodity.themes', 'themes')
      .leftJoinAndSelect('commodity.types', 'types')
      .leftJoinAndSelect('commodity.uses', 'uses')

      .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
      .addSelect('commodity.createdDate')
      .where(where)
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
      .setParameter("state", payload.state)
      .setParameter("categorys", payload.categorys)
      .setParameter("classifications", payload.classifications)
      .setParameter("materials", payload.materials)
      .setParameter("models", payload.models)
      .setParameter("places", payload.places)
      .setParameter("ruiwus", payload.ruiwus)
      .setParameter("shapes", payload.shapes)
      .setParameter("specifications", payload.specifications)
      .setParameter("styles", payload.styles)
      .setParameter("techniques", payload.techniques)
      .setParameter("themes", payload.themes)
      .setParameter("types", payload.types)
      .setParameter("uses", payload.uses)
      .orderBy("browsingCount.count", payload.hots ? "DESC"  :  "ASC")
      .orderBy("commodity.createdDate", payload.news ? "DESC"  :  "ASC")

      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
      // .getSql()
    return data;
  }
  // 交集
  async BaseSearchIntersection(payload, where) {


    const data = await this.commodityEntity
      .createQueryBuilder('commodity')
      .leftJoinAndSelect('commodity.seller', 'seller')
      .leftJoinAndSelect('commodity.name', 'name')
      .leftJoinAndSelect('commodity.desc', 'desc')
      .leftJoinAndSelect('commodity.price', 'price')
      .leftJoinAndSelect('commodity.photos', 'photos')
      .leftJoinAndSelect('commodity.colors', 'colors')
      .leftJoinAndSelect('commodity.categorys', 'categorys')
      .leftJoinAndSelect('commodity.classifications', 'classifications')
      .leftJoinAndSelect('commodity.materials', 'materials')
      .leftJoinAndSelect('commodity.models', 'models')
      .leftJoinAndSelect('commodity.places', 'places')
      .leftJoinAndSelect('commodity.ruiwus', 'ruiwus')
      .leftJoinAndSelect('commodity.shapes', 'shapes')
      .leftJoinAndSelect('commodity.specifications', 'specifications')
      .leftJoinAndSelect('commodity.styles', 'styles')
      .leftJoinAndSelect('commodity.techniques', 'techniques')
      .leftJoinAndSelect('commodity.themes', 'themes')
      .leftJoinAndSelect('commodity.types', 'types')
      .leftJoinAndSelect('commodity.uses', 'uses')

      .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
      .addSelect('commodity.createdDate')
      .where(where)
      // // 艺术品名称
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
      // // 艺术品详情
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
      // // 艺术品价格
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
      // // 艺术品颜色
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
      })




      // 艺术品分类
      .andWhere(qb => {
        let subQuery;
        if(payload.categorys.length) {
          subQuery = qb
          .subQuery()
          .select("category.commodityId")
          .from(CommodityCategoryEntity, "category")
          .where("category.optionId IN (:...categorys)")
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
      .andWhere(qb => {
        let subQuery;
        if(payload.classifications.length) {
          subQuery = qb
          .subQuery()
          .select("classification.commodityId")
          .from(CommodityClassificationEntity, "classification")
          .where("classification.optionId IN (:...classifications)")
          .getQuery();
        }else {
          subQuery = qb
          .subQuery()
          .select("classification.commodityId")
          .from(CommodityClassificationEntity, "classification")
          .getQuery();
        }
        return "commodity.commodityId IN " + subQuery;
      })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.materials.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("material.commodityId")
      //     .from(CommodityMaterialEntity, "material")
      //     .where("material.optionId IN (:...materials)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("material.commodityId")
      //     .from(CommodityMaterialEntity, "material")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.models.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("model.commodityId")
      //     .from(CommodityModelEntity, "model")
      //     .where("model.optionId IN (:...models)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("model.commodityId")
      //     .from(CommodityModelEntity, "model")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.places.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("place.commodityId")
      //     .from(CommodityPlaceEntity, "place")
      //     .where("place.optionId IN (:...places)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("place.commodityId")
      //     .from(CommodityPlaceEntity, "place")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.ruiwus.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("ruiwu.commodityId")
      //     .from(CommodityRuiwuEntity, "ruiwu")
      //     .where("ruiwu.optionId IN (:...ruiwus)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("ruiwu.commodityId")
      //     .from(CommodityRuiwuEntity, "ruiwu")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.shapes.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("shape.commodityId")
      //     .from(CommodityShapeEntity, "shape")
      //     .where("shape.optionId IN (:...shapes)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("shape.commodityId")
      //     .from(CommodityShapeEntity, "shape")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.specifications.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("specification.commodityId")
      //     .from(CommoditySpecificationEntity, "specification")
      //     .where("specification.optionId IN (:...specifications)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("specification.commodityId")
      //     .from(CommoditySpecificationEntity, "specification")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.styles.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("style.commodityId")
      //     .from(CommodityStyleEntity, "style")
      //     .where("style.optionId IN (:...styles)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("style.commodityId")
      //     .from(CommodityStyleEntity, "style")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.techniques.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("technique.commodityId")
      //     .from(CommodityTechniqueEntity, "technique")
      //     .where("technique.optionId IN (:...techniques)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("technique.commodityId")
      //     .from(CommodityTechniqueEntity, "technique")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.themes.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("theme.commodityId")
      //     .from(CommodityThemeEntity, "theme")
      //     .where("theme.optionId IN (:...themes)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("theme.commodityId")
      //     .from(CommodityThemeEntity, "theme")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.types.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("type.commodityId")
      //     .from(CommodityTypeEntity, "type")
      //     .where("type.optionId IN (:...types)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("type.commodityId")
      //     .from(CommodityTypeEntity, "type")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
      // })
      // .andWhere(qb => {
      //   let subQuery;
      //   if(payload.uses.length) {
      //     subQuery = qb
      //     .subQuery()
      //     .select("use.commodityId")
      //     .from(CommodityUseEntity, "use")
      //     .where("use.optionId IN (:...uses)")
      //     .getQuery();
      //   }else {
      //     subQuery = qb
      //     .subQuery()
      //     .select("use.commodityId")
      //     .from(CommodityUseEntity, "use")
      //     .getQuery();
      //   }
      //   return "commodity.commodityId IN " + subQuery;
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
      .setParameter("state", payload.state)
      .setParameter("categorys", payload.categorys)
      .setParameter("classifications", payload.classifications)
      .setParameter("materials", payload.materials)
      .setParameter("models", payload.models)
      .setParameter("places", payload.places)
      .setParameter("ruiwus", payload.ruiwus)
      .setParameter("shapes", payload.shapes)
      .setParameter("specifications", payload.specifications)
      .setParameter("styles", payload.styles)
      .setParameter("techniques", payload.techniques)
      .setParameter("themes", payload.themes)
      .setParameter("types", payload.types)
      .setParameter("uses", payload.uses)
      .orderBy("browsingCount.count", payload.hots ? "DESC"  :  "ASC")
      .orderBy("commodity.createdDate", payload.news ? "DESC"  :  "ASC")


      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
      // .getSql()
    return data;

  }
  async BaseSearch(payload) {

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



    return this.BaseSearchUnion(payload, where)

    // return this.BaseSearchIntersection(payload, where)

  }
  /**
   * 删除商品
   */
  async BaseDeleteCommodityId(commodityId) {
    return await this.commodityEntity
      .createQueryBuilder()
      .delete()
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }
  async BaseDeleteAll() {
    return await this.commodityEntity
      .createQueryBuilder()
      .delete()
      .execute();
  }
  /**
   * 更新商品
   * @param payload
   */
  async BaseUpdate(payload) {
    const { commodityId, ...setData } = payload;
    return await this.commodityEntity
      .createQueryBuilder()
      .update(CommodityEntity)
      .set(setData)
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }
}
