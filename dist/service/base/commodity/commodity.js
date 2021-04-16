"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommodityServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../../../entity/commodity/commodity");
const seller_1 = require("../../../entity/user/seller/seller");
const name_1 = require("../../../entity/commodity/attribute/name");
const desc_1 = require("../../../entity/commodity/attribute/desc");
const price_1 = require("../../../entity/commodity/attribute/price");
const color_1 = require("../../../entity/commodity/attribute/color");
const commodityBrowsingCount_1 = require("../../../entity/commodity/commodityBrowsingCount");
const category_1 = require("../../../entity/commodity/commodity-options/category");
const classification_1 = require("../../../entity/commodity/commodity-options/classification");
const material_1 = require("../../../entity/commodity/commodity-options/material");
const model_1 = require("../../../entity/commodity/commodity-options/model");
const place_1 = require("../../../entity/commodity/commodity-options/place");
const ruiwu_1 = require("../../../entity/commodity/commodity-options/ruiwu");
const shape_1 = require("../../../entity/commodity/commodity-options/shape");
const specification_1 = require("../../../entity/commodity/commodity-options/specification");
const style_1 = require("../../../entity/commodity/commodity-options/style");
const technique_1 = require("../../../entity/commodity/commodity-options/technique");
const theme_1 = require("../../../entity/commodity/commodity-options/theme");
const type_1 = require("../../../entity/commodity/commodity-options/type");
const use_1 = require("../../../entity/commodity/commodity-options/use");
let BaseCommodityServer = class BaseCommodityServer {
    async BaseCreate(payload) {
        return await this.commodityEntity
            .createQueryBuilder()
            .insert()
            .into(commodity_1.CommodityEntity)
            .values({
            state: payload.state,
            width: payload.width,
            height: payload.height
        })
            .execute();
    }
    async BaseRelationSet(payload) {
        await this.commodityEntity
            .createQueryBuilder()
            .relation(commodity_1.CommodityEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseRelationAdd(payload) {
        await this.commodityEntity
            .createQueryBuilder()
            .relation(commodity_1.CommodityEntity, payload.name)
            .of(payload.of)
            .add(payload.add);
    }
    async BaseRelationRemove(payload) {
        await this.commodityEntity
            .createQueryBuilder()
            .relation(commodity_1.CommodityEntity, payload.name)
            .of(payload.of)
            .remove(payload.remove);
    }
    async BaseHas(commodityId) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.name', 'name')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
    }
    async BaseHasRelation(payload) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect(`commodity.${payload.type}`, 'relation', 'relation.id = :id', { id: payload.id })
            .where('commodity.commodityId = :commodityId', { commodityId: payload.commodityId })
            .getOne();
    }
    async BaseRetrieve(commodityId) {
        const data = await this.commodityEntity
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
        return data;
    }
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
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseRetrieveCategory(categorys) {
        const category = await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.categorys', 'category')
            .where("category.categoryId IN (:...categorys)", { categorys: categorys })
            .getMany();
        return category;
    }
    async BaseSearchUnion(payload, where) {
        const commodityIds = new Set();
        if (payload.name) {
            const name = await this.commodityNameEntity
                .createQueryBuilder('name')
                .leftJoinAndSelect('name.commodity', 'commodity')
                .where("name.zh-cn like :name", { name: `%${payload.name}%` })
                .getMany();
            name.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        if (payload.desc) {
            const desc = await this.commodityDescEntity
                .createQueryBuilder('desc')
                .leftJoinAndSelect('desc.commodity', 'commodity')
                .where("desc.zh-cn like :desc", { desc: `%${payload.desc}%` })
                .getMany();
            desc.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        if (payload.priceMin && !payload.priceMax) {
            const price = await this.commodityPriceEntity
                .createQueryBuilder('price')
                .leftJoinAndSelect('price.commodity', 'commodity')
                .where("price.zh-cn > :priceMin", { priceMin: payload.priceMin })
                .getMany();
            price.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        else if (!payload.priceMin && payload.priceMax) {
            const price = await this.commodityPriceEntity
                .createQueryBuilder('price')
                .leftJoinAndSelect('price.commodity', 'commodity')
                .where("price.zh-cn < :priceMax", { priceMax: payload.priceMax })
                .getMany();
            price.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        else if (payload.priceMin && payload.priceMax) {
            const price = await this.commodityPriceEntity
                .createQueryBuilder('price')
                .leftJoinAndSelect('price.commodity', 'commodity')
                .where("price.zh-cn BETWEEN :priceMin AND :priceMax", { priceMin: payload.priceMin, priceMax: payload.priceMax })
                .getMany();
            price.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        if (payload.colors) {
            const colors = await this.commodityColorEntity
                .createQueryBuilder('colors')
                .leftJoinAndSelect('colors.commodity', 'commodity')
                .where("colors.startColorValue < :startColor", { startColor: payload.colors.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0) })
                .andWhere("colors.endColorValue < :endColor", { endColor: payload.colors.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0) })
                .getMany();
            colors.map((item) => commodityIds.add(item.commodity.commodityId));
        }
        if (payload.categorys.length) {
            const options = await this.commodityCategoryEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.categorys })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.classifications.length) {
            const options = await this.commodityClassificationEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.classifications })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.materials.length) {
            const options = await this.commodityMaterialEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.materials })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.models.length) {
            const options = await this.commodityModelEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.models })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.places.length) {
            const options = await this.commodityPlaceEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.places })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.ruiwus.length) {
            const options = await this.commodityRuiwuEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.ruiwus })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.shapes.length) {
            const options = await this.commodityShapeEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.shapes })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.specifications.length) {
            const options = await this.commoditySpecificationEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.specifications })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.styles.length) {
            const options = await this.commodityStyleEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.styles })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.techniques.length) {
            const options = await this.commodityTechniqueEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.techniques })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.themes.length) {
            const options = await this.commodityThemeEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.themes })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.types.length) {
            const options = await this.commodityTypeEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.types })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (payload.uses.length) {
            const options = await this.commodityUseEntity
                .createQueryBuilder('options')
                .select("options.commodityId")
                .where("options.optionId IN (:...options)", { options: payload.uses })
                .getMany();
            options.map((item) => commodityIds.add(item.commodityId));
        }
        if (commodityIds.size) {
            where.commodityId = typeorm_1.In([...commodityIds]);
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
            .orderBy("browsingCount.count", payload.hots ? "DESC" : "ASC")
            .orderBy("commodity.createdDate", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
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
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("name.commodityId")
                .from(name_1.CommodityNameEntity, "name")
                .where("name.zh-cn like :name")
                .getQuery();
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("desc.commodityId")
                .from(desc_1.CommodityDescEntity, "desc")
                .where("desc.zh-cn like :desc")
                .getQuery();
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.priceMin && !payload.priceMax) {
                subQuery = qb
                    .subQuery()
                    .select("price.commodityId")
                    .from(price_1.CommodityPriceEntity, "price")
                    .where("price.zh-cn > :priceMin")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else if (!payload.priceMin && payload.priceMax) {
                subQuery = qb
                    .subQuery()
                    .select("price.commodityId")
                    .from(price_1.CommodityPriceEntity, "price")
                    .where("price.zh-cn < :priceMax")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else if (payload.priceMin && payload.priceMax) {
                subQuery = qb
                    .subQuery()
                    .select("price.commodityId")
                    .from(price_1.CommodityPriceEntity, "price")
                    .where("price.zh-cn BETWEEN :priceMin AND :priceMax")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("price.commodityId")
                    .from(price_1.CommodityPriceEntity, "price")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.colorsMin && !payload.colorsMax) {
                subQuery = qb
                    .subQuery()
                    .select("color.commodityId")
                    .from(color_1.CommodityColorEntity, "color")
                    .where("color.value > :colorsMin")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else if (!payload.colorsMin && payload.colorsMax) {
                subQuery = qb
                    .subQuery()
                    .select("color.commodityId")
                    .from(color_1.CommodityColorEntity, "color")
                    .where("color.value < :colorsMax")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else if (payload.colorsMin && payload.colorsMax) {
                subQuery = qb
                    .subQuery()
                    .select("color.commodityId")
                    .from(color_1.CommodityColorEntity, "color")
                    .where("color.value BETWEEN :colorsMin AND :colorsMax")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("color.commodityId")
                    .from(color_1.CommodityColorEntity, "color")
                    .getQuery();
                return "commodity.commodityId IN " + subQuery;
            }
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.categorys.length) {
                subQuery = qb
                    .subQuery()
                    .select("category.commodityId")
                    .from(category_1.CommodityCategoryEntity, "category")
                    .where("category.optionId IN (:...categorys)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("category.commodityId")
                    .from(category_1.CommodityCategoryEntity, "category")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.classifications.length) {
                subQuery = qb
                    .subQuery()
                    .select("classification.commodityId")
                    .from(classification_1.CommodityClassificationEntity, "classification")
                    .where("classification.optionId IN (:...classifications)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("classification.commodityId")
                    .from(classification_1.CommodityClassificationEntity, "classification")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .setParameter("id", payload.id)
            .setParameter("sellerId", payload.sellerId)
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
            .orderBy("browsingCount.count", payload.hots ? "DESC" : "ASC")
            .orderBy("commodity.createdDate", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
    async BaseSearch(payload) {
        const where = {};
        if (payload.id) {
            where.id = payload.id;
        }
        if (payload.commodityId) {
            where.commodityId = payload.commodityId;
        }
        if (payload.sellerId) {
            where.seller = {
                sellerId: payload.sellerId
            };
        }
        if (payload.state) {
            where.state = payload.state;
        }
        if (payload.widthMin && !payload.widthMax) {
            where.width = typeorm_1.MoreThanOrEqual(payload.widthMin);
        }
        else if (!payload.widthMin && payload.widthMax) {
            where.width = typeorm_1.LessThanOrEqual(payload.widthMax);
        }
        else if (payload.widthMin && payload.widthMax) {
            where.width = typeorm_1.Between(payload.widthMin, payload.widthMax);
        }
        if (payload.heightMin && !payload.heightMax) {
            where.height = typeorm_1.MoreThanOrEqual(payload.heightMin);
        }
        else if (!payload.heightMin && payload.heightMax) {
            where.height = typeorm_1.LessThanOrEqual(payload.heightMax);
        }
        else if (payload.heightMin && payload.heightMax) {
            where.height = typeorm_1.Between(payload.heightMin, payload.heightMax);
        }
        return this.BaseSearchUnion(payload, where);
    }
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
    async BaseUpdate(payload) {
        const { commodityId, ...setData } = payload;
        return await this.commodityEntity
            .createQueryBuilder()
            .update(commodity_1.CommodityEntity)
            .set(setData)
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(commodity_1.CommodityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(seller_1.UserSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "userSellerEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(name_1.CommodityNameEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityNameEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(desc_1.CommodityDescEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityDescEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(price_1.CommodityPriceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityPriceEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(color_1.CommodityColorEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityColorEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(commodityBrowsingCount_1.CommodityBrowsingCountEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityBrowsingCountEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(category_1.CommodityCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityCategoryEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(classification_1.CommodityClassificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityClassificationEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(material_1.CommodityMaterialEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityMaterialEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(model_1.CommodityModelEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityModelEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(place_1.CommodityPlaceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityPlaceEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(ruiwu_1.CommodityRuiwuEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityRuiwuEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(shape_1.CommodityShapeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityShapeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(specification_1.CommoditySpecificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commoditySpecificationEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(style_1.CommodityStyleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityStyleEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(technique_1.CommodityTechniqueEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityTechniqueEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(theme_1.CommodityThemeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityThemeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(type_1.CommodityTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityTypeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(use_1.CommodityUseEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityServer.prototype, "commodityUseEntity", void 0);
BaseCommodityServer = __decorate([
    decorator_1.Provide()
], BaseCommodityServer);
exports.BaseCommodityServer = BaseCommodityServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQW9GO0FBQ3BGLG1FQUFpRTtBQUNqRSwrREFBaUU7QUFDakUsbUVBQTBFO0FBQzFFLG1FQUEwRTtBQUMxRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLDZGQUEyRjtBQUUzRixtRkFBMEY7QUFDMUYsK0ZBQXNHO0FBQ3RHLG1GQUEwRjtBQUMxRiw2RUFBb0Y7QUFDcEYsNkVBQW9GO0FBQ3BGLDZFQUFvRjtBQUNwRiw2RUFBb0Y7QUFDcEYsNkZBQW9HO0FBQ3BHLDZFQUFvRjtBQUNwRixxRkFBNEY7QUFDNUYsNkVBQW9GO0FBQ3BGLDJFQUFrRjtBQUNsRix5RUFBZ0Y7QUFLaEYsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFvRTlCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWU7YUFDOUIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDJCQUFlLENBQUM7YUFDckIsTUFBTSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU9DLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUUzQixNQUFNLElBQUksQ0FBQyxlQUFlO2FBQ3ZCLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQywyQkFBZSxFQUFFLE9BQU8s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