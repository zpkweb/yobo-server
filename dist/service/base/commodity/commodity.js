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
            .leftJoinAndSelect('commodity.shapes', 'shape')
            .leftJoinAndSelect('commodity.themes', 'theme')
            .leftJoinAndSelect('commodity.categorys', 'category')
            .leftJoinAndSelect('commodity.techniques', 'technique')
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
            .leftJoinAndSelect('commodity.shapes', 'shape')
            .leftJoinAndSelect('commodity.themes', 'theme')
            .leftJoinAndSelect('commodity.categorys', 'category')
            .leftJoinAndSelect('commodity.techniques', 'technique')
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
            .leftJoinAndSelect('commodity.shapes', 'shapes')
            .leftJoinAndSelect('commodity.themes', 'themes')
            .leftJoinAndSelect('commodity.categorys', 'categorys')
            .leftJoinAndSelect('commodity.techniques', 'techniques')
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