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
const name_1 = require("../../../entity/commodity/attribute/name");
const desc_1 = require("../../../entity/commodity/attribute/desc");
const price_1 = require("../../../entity/commodity/attribute/price");
const color_1 = require("../../../entity/commodity/attribute/color");
const commodityBrowsingCount_1 = require("../../../entity/commodity/commodityBrowsingCount");
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
        console.log("BaseRelationSet", payload);
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
    async BaseHas(commodityId) {
        console.log("BaseHas commodityId", commodityId);
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
    async BaseSearch(payload) {
        console.log("BaseSearch", payload);
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
            .leftJoinAndSelect('commodity.browsingCount', 'browsingCount')
            .addSelect('commodity.createdDate')
            .where(`commodity.state like :state ${payload.widthMin && payload.widthMax ? ' AND commodity.width BETWEEN :widthMin AND :widthMax' : ''} ${payload.heightMin && payload.heightMax ? ' AND commodity.height BETWEEN :heightMin AND :heightMax' : ''} ${payload.shapeId ? ' AND shapes.id = :shapeId' : ''}${payload.themeId ? ' AND themes.id = :themeId' : ''}${payload.categoryId ? ' AND categorys.id = :categoryId' : ''}${payload.techniqueId ? ' AND techniques.id = :techniqueId' : ''}`)
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("name.commodityId")
                .from(name_1.CommodityNameEntity, "name")
                .where("name.zh-cn like :name")
                .andWhere("name.en-us like :name")
                .andWhere("name.ja-jp like :name")
                .andWhere("name.fr-fr like :name")
                .andWhere("name.es-es like :name")
                .getQuery();
            console.log("name subQuery", subQuery);
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("desc.commodityId")
                .from(desc_1.CommodityDescEntity, "desc")
                .where("desc.zh-cn like :desc")
                .andWhere("name.en-us like :desc")
                .andWhere("name.ja-jp like :desc")
                .andWhere("name.fr-fr like :desc")
                .andWhere("name.es-es like :desc")
                .getQuery();
            console.log("desc subQuery", subQuery);
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("price.commodityId")
                .from(price_1.CommodityPriceEntity, "price")
                .where("price.zh-cn BETWEEN :priceMin AND :priceMax")
                .andWhere("name.en-us BETWEEN :priceMin AND :priceMax")
                .andWhere("name.ja-jp BETWEEN :priceMin AND :priceMax")
                .andWhere("name.fr-fr BETWEEN :priceMin AND :priceMax")
                .andWhere("name.es-es BETWEEN :priceMin AND :priceMax")
                .getQuery();
            console.log("price subQuery", subQuery);
            return "commodity.commodityId IN " + subQuery;
        })
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select("color.commodityId")
                .from(color_1.CommodityColorEntity, "color")
                .where("color.value BETWEEN :colorsMin AND :colorsMax")
                .getQuery();
            console.log("color subQuery", subQuery);
            return "commodity.commodityId IN " + subQuery;
        })
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
            .orderBy("browsingCount.count", payload.hots ? "DESC" : "ASC")
            .orderBy("commodity.createdDate", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseDelete(commodityId) {
        return await this.commodityEntity
            .createQueryBuilder()
            .delete()
            .where("commodityId = :commodityId", { commodityId: commodityId })
            .execute();
    }
    async BaseUpdate(payload) {
        console.log("BaseUpdate", payload);
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
BaseCommodityServer = __decorate([
    decorator_1.Provide()
], BaseCommodityServer);
exports.BaseCommodityServer = BaseCommodityServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLG1FQUFpRTtBQUNqRSxtRUFBMEU7QUFDMUUsbUVBQTBFO0FBQzFFLHFFQUE0RTtBQUM1RSxxRUFBNEU7QUFDNUUsNkZBQTJGO0FBRzNGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBMEI5QixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxlQUFlO2FBQzlCLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQywyQkFBZSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFPQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUV2QyxNQUFNLElBQUksQ0FBQyxlQUFlO2FBQ3ZCLGtCQUFrQixFQUFFO2FBQ3BCLFFBQVEsQ0FBQywyQkFBZSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDdkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9B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