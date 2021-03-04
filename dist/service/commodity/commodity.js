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
exports.CommodityCommodityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const commodity_1 = require("../base/commodity/commodity");
const name_1 = require("./attribute/name");
const desc_1 = require("./attribute/desc");
const price_1 = require("./attribute/price");
const photo_1 = require("./attribute/photo");
const color_1 = require("./attribute/color");
let CommodityCommodityService = class CommodityCommodityService {
    async create(payload) {
        console.log("create", payload);
        const commodity = await this.createMetadata({
            state: payload.state || '0',
            width: payload.width || 0,
            height: payload.height || 0
        });
        if (!commodity.success) {
            return commodity;
        }
        const commodityName = await this.commodityAttributeName.create({
            'zh-cn': payload.name['zh-cn'] || '',
            'en-us': payload.name['en-us'] || '',
            'ja-jp': payload.name['ja-jp'] || '',
            'fr-fr': payload.name['fr-fr'] || '',
            'es-es': payload.name['es-es'] || ''
        });
        if (!commodityName.success) {
            return commodityName;
        }
        await this.relation({
            name: 'name',
            of: { commodityId: commodity.data.generatedMaps[0].commodityId },
            set: commodityName.data.identifiers[0].id
        });
        const commodityDesc = await this.commodityAttributeDesc.create({
            'zh-cn': payload.desc['zh-cn'] || '',
            'en-us': payload.desc['en-us'] || '',
            'ja-jp': payload.desc['ja-jp'] || '',
            'fr-fr': payload.desc['fr-fr'] || '',
            'es-es': payload.desc['es-es'] || ''
        });
        if (!commodityDesc.success) {
            return commodityDesc;
        }
        await this.relation({
            name: 'desc',
            of: { commodityId: commodity.data.generatedMaps[0].commodityId },
            set: commodityDesc.data.identifiers[0].id
        });
        const commodityPrice = await this.commodityAttributePrice.create({
            'zh-cn': payload.price['zh-cn'] || 0,
            'en-us': payload.price['en-us'] || 0,
            'ja-jp': payload.price['ja-jp'] || 0,
            'fr-fr': payload.price['fr-fr'] || 0,
            'es-es': payload.price['es-es'] || 0
        });
        if (!commodityPrice.success) {
            return commodityPrice;
        }
        await this.relation({
            name: 'price',
            of: { commodityId: commodity.data.generatedMaps[0].commodityId },
            set: commodityPrice.data.identifiers[0].id
        });
        for (let item of payload.photos) {
            const commodityPhoto = await this.commodityAttributePhoto.create({
                src: item.url,
                name: item.name
            });
            if (!commodityPhoto.success) {
                return commodityPhoto;
            }
            await this.relation({
                name: 'photos',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: commodityPhoto.data.identifiers[0].id
            });
        }
        for (let item of payload.colors) {
            const commodityColor = await this.commodityAttributeColor.create({
                name: item.name,
                value: item.name.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0)
            });
            if (!commodityColor.success) {
                return commodityColor;
            }
            await this.relation({
                name: 'colors',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: commodityColor.data.identifiers[0].id
            });
        }
        console.log("commodity", commodity.data);
        for (let item of payload.shapes) {
            await this.relation({
                name: 'shapes',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: item.id
            });
        }
        for (let item of payload.themes) {
            await this.relation({
                name: 'themes',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: item.id
            });
        }
        for (let item of payload.categorys) {
            await this.relation({
                name: 'categorys',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: item.id
            });
        }
        for (let item of payload.techniques) {
            await this.relation({
                name: 'techniques',
                of: { commodityId: commodity.data.generatedMaps[0].commodityId },
                add: item.id
            });
        }
        console.log("商品 关联 商家", { commodityId: commodity.data.generatedMaps[0].commodityId, sellerId: payload.sellerId });
        if (payload.sellerId) {
            await this.relation({
                name: 'seller',
                of: commodity.data.identifiers[0].id,
                set: { sellerId: payload.sellerId }
            });
        }
        return commodity;
    }
    async createMetadata(payload) {
        const data = await this.baseCommodityServer.BaseCreate(payload);
        if (data.identifiers[0].id) {
            return {
                data: data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async relation(payload) {
        if (payload.set) {
            return await this.baseCommodityServer.BaseRelationSet({
                name: payload.name,
                of: payload.of,
                set: payload.set
            });
        }
        else if (payload.add) {
            return await this.baseCommodityServer.BaseRelationAdd({
                name: payload.name,
                of: payload.of,
                add: payload.add
            });
        }
    }
    async hasCommodityPhoto(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'photos',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasCommodityColor(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'colors',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasCommodityCategory(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'categorys',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasCommodityShape(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'shapes',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasCommodityTechnique(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'techniques',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasCommodityTheme(payload) {
        const data = await this.baseCommodityServer.BaseHasRelation({
            type: 'themes',
            commodityId: payload.commodityId,
            id: payload.id
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async retrieve(payload) {
        console.log("retrieve", payload);
        let data = await this.baseCommodityServer.BaseRetrieve(payload.commodityId);
        if (payload.isLocale) {
            const filterData = this.filter(payload.locale || 'zh-cn', [data]);
            data = filterData[0];
        }
        console.log("data", data);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveAll(payload) {
        let result = await this.baseCommodityServer.BaseRetrieveAll(payload);
        console.log("retrieveAll", result);
        let data = result[0];
        let total = result[1];
        if (payload.isLocale) {
            data = this.filter(payload.locale, data);
        }
        if (data) {
            return {
                data: {
                    list: data,
                    total
                },
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    filter(type, payload) {
        return payload.map(item => {
            let name = item.name ? item.name[type] : '';
            let desc = item.desc ? item.desc[type] : '';
            let price = item.price;
            let shapes = item.shapes ? item.shapes.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let themes = item.themes ? item.themes.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let categorys = item.categorys ? item.categorys.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let techniques = item.techniques ? item.techniques.map(item => { return { id: item.id, name: item[type] }; }) : '';
            return {
                commodityId: item.commodityId,
                state: item.state,
                colors: item.colors,
                width: item.width,
                height: item.height,
                photos: item.photos,
                name,
                desc,
                price,
                shapes,
                themes,
                categorys,
                techniques,
                seller: item.seller || '',
                createdDate: item.createdDate
            };
        });
    }
    async search(payload) {
        let result = await this.baseCommodityServer.BaseSearch(payload);
        console.log("search", result);
        let data = result[0];
        let total = result[1];
        if (payload.isLocale) {
            data = this.filter(payload.locale, data);
        }
        if (data) {
            return {
                data: {
                    list: data,
                    total
                },
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async delete(payload) {
        const data = await this.baseCommodityServer.BaseDelete(payload.commodityId);
        if (data.affected) {
            return {
                data: data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async hasCommodity(commodityId) {
        const data = await this.baseCommodityServer.BaseHas(commodityId);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async update(payload) {
        const data = await this.baseCommodityServer.BaseUpdate(payload);
        if (data.affected) {
            return {
                data: data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.BaseCommodityServer)
], CommodityCommodityService.prototype, "baseCommodityServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.CommodityAttributeName)
], CommodityCommodityService.prototype, "commodityAttributeName", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", desc_1.CommodityAttributeDesc)
], CommodityCommodityService.prototype, "commodityAttributeDesc", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", price_1.CommodityAttributePrice)
], CommodityCommodityService.prototype, "commodityAttributePrice", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", photo_1.CommodityAttributePhoto)
], CommodityCommodityService.prototype, "commodityAttributePhoto", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", color_1.CommodityAttributeColor)
], CommodityCommodityService.prototype, "commodityAttributeColor", void 0);
CommodityCommodityService = __decorate([
    decorator_1.Provide()
], CommodityCommodityService);
exports.CommodityCommodityService = CommodityCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsMkRBQWtFO0FBQ2xFLDJDQUEwRDtBQUMxRCwyQ0FBMEQ7QUFDMUQsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFFNUQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFxQnBDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUs5QixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDMUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBRztZQUMzQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7U0FDNUIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUE7U0FDakI7UUFHRCxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7WUFDN0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMs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