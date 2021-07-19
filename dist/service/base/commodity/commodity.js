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
exports.BaseCommodityService = void 0;
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
let BaseCommodityService = class BaseCommodityService {
    async BaseCreate(payload) {
        return await this.commodityEntity
            .createQueryBuilder()
            .insert()
            .into(commodity_1.CommodityEntity)
            .values({
            choice: payload.choice,
            state: payload.state,
            width: payload.width,
            height: payload.height,
            images: payload.images,
            likes: payload.likes
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
            .leftJoinAndSelect('commodity.seller', 'seller')
            .addSelect('commodity.createdDate')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
        return data;
    }
    async BaseRetrieveCommodityId(commodityId) {
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.seller', 'seller')
            .addSelect('commodity.createdDate')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
        return data;
    }
    async BaseRetrieveAll(payload) {
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.name', 'name')
            .leftJoinAndSelect('commodity.desc', 'desc')
            .leftJoinAndSelect('commodity.price', 'price')
            .leftJoinAndSelect('commodity.photos', 'photos')
            .leftJoinAndSelect('commodity.colors', 'colors')
            .addSelect('commodity.createdDate')
            .orderBy({
            "commodity.id": payload.news ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
    async BaseRetrievePhoto(payload) {
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.name', 'name')
            .innerJoinAndSelect('commodity.photos', 'photos')
            .leftJoin('commodity.categorys', 'categorys')
            .addSelect('commodity.createdDate')
            .orderBy({
            "commodity.id": payload.news ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
    async BaseRetrieveCommodityPhoto(commodityId) {
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.name', 'name')
            .innerJoinAndSelect('commodity.photos', 'photos')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .addSelect('commodity.createdDate')
            .getOne();
        return data;
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
            .andWhere(qb => {
            let subQuery;
            if (payload.materials.length) {
                subQuery = qb
                    .subQuery()
                    .select("material.commodityId")
                    .from(material_1.CommodityMaterialEntity, "material")
                    .where("material.optionId IN (:...materials)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("material.commodityId")
                    .from(material_1.CommodityMaterialEntity, "material")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.models.length) {
                subQuery = qb
                    .subQuery()
                    .select("model.commodityId")
                    .from(model_1.CommodityModelEntity, "model")
                    .where("model.optionId IN (:...models)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("model.commodityId")
                    .from(model_1.CommodityModelEntity, "model")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.places.length) {
                subQuery = qb
                    .subQuery()
                    .select("place.commodityId")
                    .from(place_1.CommodityPlaceEntity, "place")
                    .where("place.optionId IN (:...places)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("place.commodityId")
                    .from(place_1.CommodityPlaceEntity, "place")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.ruiwus.length) {
                subQuery = qb
                    .subQuery()
                    .select("ruiwu.commodityId")
                    .from(ruiwu_1.CommodityRuiwuEntity, "ruiwu")
                    .where("ruiwu.optionId IN (:...ruiwus)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("ruiwu.commodityId")
                    .from(ruiwu_1.CommodityRuiwuEntity, "ruiwu")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.shapes.length) {
                subQuery = qb
                    .subQuery()
                    .select("shape.commodityId")
                    .from(shape_1.CommodityShapeEntity, "shape")
                    .where("shape.optionId IN (:...shapes)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("shape.commodityId")
                    .from(shape_1.CommodityShapeEntity, "shape")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.specifications.length) {
                subQuery = qb
                    .subQuery()
                    .select("specification.commodityId")
                    .from(specification_1.CommoditySpecificationEntity, "specification")
                    .where("specification.optionId IN (:...specifications)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("specification.commodityId")
                    .from(specification_1.CommoditySpecificationEntity, "specification")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.styles.length) {
                subQuery = qb
                    .subQuery()
                    .select("style.commodityId")
                    .from(style_1.CommodityStyleEntity, "style")
                    .where("style.optionId IN (:...styles)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("style.commodityId")
                    .from(style_1.CommodityStyleEntity, "style")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.techniques.length) {
                subQuery = qb
                    .subQuery()
                    .select("technique.commodityId")
                    .from(technique_1.CommodityTechniqueEntity, "technique")
                    .where("technique.optionId IN (:...techniques)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("technique.commodityId")
                    .from(technique_1.CommodityTechniqueEntity, "technique")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.themes.length) {
                subQuery = qb
                    .subQuery()
                    .select("theme.commodityId")
                    .from(theme_1.CommodityThemeEntity, "theme")
                    .where("theme.optionId IN (:...themes)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("theme.commodityId")
                    .from(theme_1.CommodityThemeEntity, "theme")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.types.length) {
                subQuery = qb
                    .subQuery()
                    .select("type.commodityId")
                    .from(type_1.CommodityTypeEntity, "type")
                    .where("type.optionId IN (:...types)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("type.commodityId")
                    .from(type_1.CommodityTypeEntity, "type")
                    .getQuery();
            }
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            let subQuery;
            if (payload.uses.length) {
                subQuery = qb
                    .subQuery()
                    .select("use.commodityId")
                    .from(use_1.CommodityUseEntity, "use")
                    .where("use.optionId IN (:...uses)")
                    .getQuery();
            }
            else {
                subQuery = qb
                    .subQuery()
                    .select("use.commodityId")
                    .from(use_1.CommodityUseEntity, "use")
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
            .orderBy("commodity.createdDate", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getSql();
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
    async BaseSearchs(payload) {
        let where = '';
        var isAND = false;
        if (payload.id) {
            where += `commodity.id = :id`;
            isAND = true;
        }
        if (payload.commodityId) {
            where += `${isAND ? ' AND ' : ''} commodity.commodityId = :commodityId`;
            isAND = true;
        }
        if (payload.sellerId) {
            where += `${isAND ? ' AND ' : ''} commodity.seller.sellerId = :sellerId`;
            isAND = true;
        }
        if (payload.state) {
            where += `${isAND ? ' AND ' : ''} commodity.state = :state`;
            isAND = true;
        }
        if (payload.name) {
            where += `${isAND ? ' AND ' : ''} name.zh-cn like :name `;
            isAND = true;
        }
        if (payload.desc) {
            where += `${isAND ? ' AND ' : ''} desc.zh-cn like :desc `;
            isAND = true;
        }
        if (payload.price) {
            where += `${isAND ? ' AND ' : ''} price.zh-cn BETWEEN :priceMin AND :priceMax `;
            isAND = true;
        }
        if (payload.colors) {
            where += `${isAND ? ' AND ' : ''} colors.startColorValue >= :colors AND colors.endColorValue <= :colors `;
            isAND = true;
        }
        if (payload.categorys && payload.categorys.length) {
            where += `${isAND ? ' AND ' : ''} categorys.optionId IN (:...categorys) `;
            isAND = true;
        }
        if (payload.classifications && payload.classifications.length) {
            where += `${isAND ? ' AND ' : ''} classifications.optionId IN (:...classifications) `;
            isAND = true;
        }
        if (payload.shapes && payload.shapes.length) {
            where += `${isAND ? ' AND ' : ''} shapes.optionId IN (:...shapes) `;
            isAND = true;
        }
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .innerJoin('commodity.name', 'name')
            .innerJoin('commodity.desc', 'desc')
            .innerJoin('commodity.price', 'price')
            .innerJoin('commodity.colors', 'colors')
            .innerJoin('commodity.categorys', 'categorys')
            .innerJoin('commodity.classifications', 'classifications')
            .innerJoin('commodity.shapes', 'shapes')
            .addSelect('commodity.createdDate')
            .where(where)
            .setParameter("id", payload.id)
            .setParameter("commodityId", payload.commodityId)
            .setParameter("state", payload.state)
            .setParameter("sellerId", payload.sellerId)
            .setParameter("name", `%${payload.name}%`)
            .setParameter("desc", `%${payload.desc}%`)
            .setParameter("colors", payload.colors)
            .setParameter("priceMin", payload.price.min)
            .setParameter("priceMax", payload.price.max)
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
            .orderBy({
            "commodity.id": payload.news ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
    async BaseSearchCommodity(payload) {
        const where = {};
        if (payload.id) {
            where.id = payload.id;
        }
        if (payload.commodityId) {
            where.commodityId = payload.commodityId;
        }
        else {
            if (payload.isSearchCommodityIds) {
                where.commodityId = typeorm_1.In(payload.commodityIds);
            }
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
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .where(where)
            .orderBy({
            "commodity.id": payload.news ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseRetrieveSeller(commodityId) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.seller', 'seller')
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .getOne();
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
        const set = {};
        if (setData.choice) {
            set.choice = setData.choice;
        }
        if (setData.state) {
            set.state = setData.state;
        }
        if (setData.width) {
            set.width = setData.width;
        }
        if (setData.height) {
            set.height = setData.height;
        }
        if (setData.images) {
            set.images = setData.images;
        }
        if (setData.likes >= 0) {
            set.likes = setData.likes;
        }
        return await this.commodityEntity
            .createQueryBuilder()
            .update(commodity_1.CommodityEntity)
            .set(set)
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
    async baseRetrieveCommmodity(sellerId) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .where("commodity.sellerId = :sellerId", { sellerId: sellerId })
            .getMany();
    }
    async baseRetrieveCommmodityPagination(payload) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .where("commodity.sellerId = :sellerId", { sellerId: payload.sellerId })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async baseChoiceCommodity(payload) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .leftJoinAndSelect('commodity.seller', 'seller')
            .addSelect('commodity.createdDate')
            .where("commodity.choice = :choice", { choice: true })
            .orderBy("commodity.id", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getMany();
    }
    async baseRetrieveSellerCount(sellerId) {
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .where("commodity.sellerId = :sellerId", { sellerId: sellerId })
            .getCount();
    }
};
__decorate([
    orm_1.InjectEntityModel(commodity_1.CommodityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(seller_1.UserSellerEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "userSellerEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(name_1.CommodityNameEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityNameEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(desc_1.CommodityDescEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityDescEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(price_1.CommodityPriceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityPriceEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(color_1.CommodityColorEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityColorEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(commodityBrowsingCount_1.CommodityBrowsingCountEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityBrowsingCountEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(category_1.CommodityCategoryEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityCategoryEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(classification_1.CommodityClassificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityClassificationEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(material_1.CommodityMaterialEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityMaterialEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(model_1.CommodityModelEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityModelEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(place_1.CommodityPlaceEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityPlaceEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(ruiwu_1.CommodityRuiwuEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityRuiwuEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(shape_1.CommodityShapeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityShapeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(specification_1.CommoditySpecificationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commoditySpecificationEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(style_1.CommodityStyleEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityStyleEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(technique_1.CommodityTechniqueEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityTechniqueEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(theme_1.CommodityThemeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityThemeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(type_1.CommodityTypeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityTypeEntity", void 0);
__decorate([
    orm_1.InjectEntityModel(use_1.CommodityUseEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseCommodityService.prototype, "commodityUseEntity", void 0);
BaseCommodityService = __decorate([
    decorator_1.Provide()
], BaseCommodityService);
exports.BaseCommodityService = BaseCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQW9GO0FBQ3BGLG1FQUFpRTtBQUNqRSwrREFBaUU7QUFDakUsbUVBQTBFO0FBQzFFLG1FQUEwRTtBQUMxRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLDZGQUEyRjtBQUUzRixtRkFBMEY7QUFDMUYsK0ZBQXNHO0FBQ3RHLG1GQUEwRjtBQUMxRiw2RUFBb0Y7QUFDcEYsNkVBQW9GO0FBQ3BGLDZFQUFvRjtBQUNwRiw2RUFBb0Y7QUFDcEYsNkZBQW9HO0FBQ3BHLDZFQUFvRjtBQUNwRixxRkFBNEY7QUFDNUYsNkVBQW9GO0FBQ3BGLDJFQUFrRjtBQUNsRix5RUFBZ0Y7QUFLaEYsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFvRS9CLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWU7YUFDOUIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDJCQUFlLENBQUM7YUFDckIsTUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDckIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQU9DLEtBQUssQ0FB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