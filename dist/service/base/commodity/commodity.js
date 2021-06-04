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
            choice: payload.choice,
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
            "commodity.id": payload.news && payload.news == 'true' ? "DESC" : "ASC",
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
            "commodity.id": payload.news && payload.news == 'true' ? "DESC" : "ASC",
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
            .orderBy("browsingCount.count", payload.hots && payload.hots == 'true' ? "DESC" : "ASC")
            .orderBy("commodity.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
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
            "commodity.id": payload.news && payload.news == 'true' ? "DESC" : "ASC",
        })
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
        return data;
    }
    async BaseSearchCommodity(payload) {
        console.log("BaseSearchCommodity", payload);
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
        console.log("where", where);
        return await this.commodityEntity
            .createQueryBuilder('commodity')
            .where(where)
            .orderBy({
            "commodity.id": payload.news && payload.news == 'true' ? "DESC" : "ASC",
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
        return await this.commodityEntity
            .createQueryBuilder()
            .update(commodity_1.CommodityEntity)
            .set(setData)
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
            .orderBy("commodity.createdDate", payload.news && payload.news == 'true' ? "DESC" : "ASC")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQW9GO0FBQ3BGLG1FQUFpRTtBQUNqRSwrREFBaUU7QUFDakUsbUVBQTBFO0FBQzFFLG1FQUEwRTtBQUMxRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLDZGQUEyRjtBQUUzRixtRkFBMEY7QUFDMUYsK0ZBQXNHO0FBQ3RHLG1GQUEwRjtBQUMxRiw2RUFBb0Y7QUFDcEYsNkVBQW9GO0FBQ3BGLDZFQUFvRjtBQUNwRiw2RUFBb0Y7QUFDcEYsNkZBQW9HO0FBQ3BHLDZFQUFvRjtBQUNwRixxRkFBNEY7QUFDNUYsNkVBQW9GO0FBQ3BGLDJFQUFrRjtBQUNsRix5RUFBZ0Y7QUFLaEYsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFvRTlCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWU7YUFDOUIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDJCQUFlLENBQUM7YUFDckIsTUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFFM0IsTUFBTSxJQUFJLENBQUMsZUFBZTthQUN2QixrQkFBa0IsRUFBRTth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