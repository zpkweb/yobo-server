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
            .leftJoinAndSelect('commodity.seller', 'seller')
            .addSelect('commodity.createdDate')
            .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
            .getOne();
        return data;
    }
    async BaseRetrieveCommodityId(commodityId) {
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .innerJoinAndSelect('commodity.seller', 'seller')
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
            "commodity.id": Boolean(payload.news) ? "DESC" : "ASC",
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
            "commodity.id": Boolean(payload.news) ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
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
        console.log("commodityIds", commodityIds);
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
            console.log("category subQuery", subQuery);
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
            console.log("classification subQuery", subQuery);
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
            console.log("material subQuery", subQuery);
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
            console.log("model subQuery", subQuery);
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
            console.log("place subQuery", subQuery);
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
            console.log("ruiwu subQuery", subQuery);
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
            console.log("shape subQuery", subQuery);
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
            console.log("specification subQuery", subQuery);
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
            console.log("style subQuery", subQuery);
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
            console.log("technique subQuery", subQuery);
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
            console.log("theme subQuery", subQuery);
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
            console.log("type subQuery", subQuery);
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
            console.log("use subQuery", subQuery);
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
            .getSql();
        console.log(data);
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
        console.log("BaseSearchs", payload);
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
        if (payload.categorys.length) {
            where += `${isAND ? ' AND ' : ''} categorys.optionId IN (:...categorys) `;
            isAND = true;
        }
        if (payload.classifications.length) {
            where += `${isAND ? ' AND ' : ''} classifications.optionId IN (:...classifications) `;
            isAND = true;
        }
        if (payload.materials.length) {
            where += `${isAND ? ' AND ' : ''} materials.optionId IN (:...materials) `;
            isAND = true;
        }
        if (payload.models.length) {
            where += `${isAND ? ' AND ' : ''} models.optionId IN (:...models) `;
            isAND = true;
        }
        if (payload.places.length) {
            where += `${isAND ? ' AND ' : ''} places.optionId IN (:...places) `;
            isAND = true;
        }
        if (payload.ruiwus.length) {
            where += `${isAND ? ' AND ' : ''} ruiwus.optionId IN (:...ruiwus) `;
            isAND = true;
        }
        if (payload.shapes.length) {
            where += `${isAND ? ' AND ' : ''} shapes.optionId IN (:...shapes) `;
            isAND = true;
        }
        if (payload.specifications.length) {
            where += `${isAND ? ' AND ' : ''} specifications.optionId IN (:...specifications) `;
            isAND = true;
        }
        if (payload.techniques.length) {
            where += `${isAND ? ' AND ' : ''} techniques.optionId IN (:...techniques) `;
            isAND = true;
        }
        if (payload.themes.length) {
            where += `${isAND ? ' AND ' : ''} themes.optionId IN (:...themes) `;
            isAND = true;
        }
        if (payload.types.length) {
            where += `${isAND ? ' AND ' : ''} types.optionId IN (:...types) `;
            isAND = true;
        }
        if (payload.uses.length) {
            where += `${isAND ? ' AND ' : ''} uses.optionId IN (:...uses) `;
            isAND = true;
        }
        console.log("where", where);
        const data = await this.commodityEntity
            .createQueryBuilder('commodity')
            .innerJoin('commodity.name', 'name')
            .innerJoin('commodity.desc', 'desc')
            .innerJoin('commodity.price', 'price')
            .innerJoin('commodity.colors', 'colors')
            .innerJoin('commodity.categorys', 'categorys')
            .innerJoin('commodity.classifications', 'classifications')
            .innerJoin('commodity.materials', 'materials')
            .innerJoin('commodity.models', 'models')
            .innerJoin('commodity.places', 'places')
            .innerJoin('commodity.ruiwus', 'ruiwus')
            .innerJoin('commodity.shapes', 'shapes')
            .innerJoin('commodity.specifications', 'specifications')
            .innerJoin('commodity.styles', 'styles')
            .innerJoin('commodity.techniques', 'techniques')
            .innerJoin('commodity.themes', 'themes')
            .innerJoin('commodity.types', 'types')
            .innerJoin('commodity.uses', 'uses')
            .leftJoinAndSelect('commodity.photos', 'photos')
            .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
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
            "commodity.id": Boolean(payload.news) ? "DESC" : "ASC",
            "browsingCount.count": payload.hots ? "DESC" : "ASC"
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
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