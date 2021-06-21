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
            height: payload.height,
            images: payload.images
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQW9GO0FBQ3BGLG1FQUFpRTtBQUNqRSwrREFBaUU7QUFDakUsbUVBQTBFO0FBQzFFLG1FQUEwRTtBQUMxRSxxRUFBNEU7QUFDNUUscUVBQTRFO0FBQzVFLDZGQUEyRjtBQUUzRixtRkFBMEY7QUFDMUYsK0ZBQXNHO0FBQ3RHLG1GQUEwRjtBQUMxRiw2RUFBb0Y7QUFDcEYsNkVBQW9GO0FBQ3BGLDZFQUFvRjtBQUNwRiw2RUFBb0Y7QUFDcEYsNkZBQW9HO0FBQ3BHLDZFQUFvRjtBQUNwRixxRkFBNEY7QUFDNUYsNkVBQW9GO0FBQ3BGLDJFQUFrRjtBQUNsRix5RUFBZ0Y7QUFLaEYsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFvRTlCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWU7YUFDOUIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDJCQUFlLENBQUM7YUFDckIsTUFBTSxDQUFDO1lBQ04sTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBT0MsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBRTNCLE1BQU0sSUFB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