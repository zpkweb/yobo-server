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
exports.CommodityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const commodity_1 = require("./commodity");
const name_1 = require("./attribute/name");
const desc_1 = require("./attribute/desc");
const price_1 = require("./attribute/price");
const photo_1 = require("./attribute/photo");
const color_1 = require("./attribute/color");
const category_1 = require("./options/category");
const shape_1 = require("./options/shape");
const technique_1 = require("./options/technique");
const theme_1 = require("./options/theme");
const comment_1 = require("./comment");
let CommodityService = class CommodityService {
    async create(payload) {
        console.log("commodity index create", payload);
        const commodity = await this.commodityAttributeName.hasName({
            'zh-cn': payload['zh-cn'],
            'en-us': payload['en-us'],
            'ja-jp': payload['ja-jp'],
            'fr-fr': payload['fr-fr'],
            'es-es': payload['es-es']
        });
        console.log("create commodity", commodity);
        if (commodity.success) {
            return {
                success: false,
                code: 10013
            };
        }
        const commodityNew = await this.commodityCommodityService.create(payload);
        if (!commodityNew.success) {
            return commodityNew;
        }
        return await this.commodityCommodityService.retrieve({
            commodityId: commodityNew.data.generatedMaps[0].commodityId
        });
    }
    async find(payload) {
        return await this.commodityCommodityService.retrieve(payload);
    }
    async findAll(payload) {
        return await this.commodityCommodityService.retrieveAll({
            isLocale: payload.isLocale || false,
            locale: payload.locale || 'zh-cn',
            currentPage: +payload.currentPage || 1,
            pageSize: +payload.pageSize || 10
        });
    }
    async search(payload) {
        console.log("search", payload);
        let price;
        if (payload.price) {
            if (typeof payload.price == 'string') {
                price = JSON.parse(payload.price);
            }
            else {
                price = payload.price;
            }
        }
        else {
            price = {
                min: '',
                max: ''
            };
        }
        let width;
        if (payload.width) {
            if (typeof payload.width == 'string') {
                width = JSON.parse(payload.width);
            }
            else {
                width = payload.width;
            }
        }
        else {
            width = {
                min: '',
                max: ''
            };
        }
        let height;
        if (payload.height) {
            if (typeof payload.height == 'string') {
                height = JSON.parse(payload.height);
            }
            else {
                height = payload.height;
            }
        }
        else {
            height = {
                min: '',
                max: ''
            };
        }
        let colors;
        if (payload.colors) {
            if (typeof payload.colors == 'string') {
                colors = JSON.parse(payload.colors);
            }
            else {
                colors = payload.colors;
            }
        }
        else {
            colors = {
                start: '',
                end: ''
            };
        }
        let colorStart = colors.start.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
        let colorEnd = colors.end.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
        let colorsMin, colorsMax;
        if (colorStart <= colorEnd) {
            colorsMin = colorStart;
            colorsMax = colorEnd;
        }
        else {
            colorsMin = colorEnd;
            colorsMax = colorStart;
        }
        let hots = false;
        if (payload.hots && payload.hots == 'true') {
            hots = true;
        }
        let news = false;
        if (payload.news && payload.news == 'true') {
            news = true;
        }
        return await this.commodityCommodityService.search({
            name: payload.name || '',
            desc: payload.desc || '',
            priceMin: price.min || 0,
            priceMax: price.max || 100,
            widthMin: width.min || 0,
            widthMax: width.max || 100,
            heightMin: height.min || 0,
            heightMax: height.max || 100,
            colorsMin: colorsMin || 0,
            colorsMax: colorsMax || 16777215,
            state: payload.state || '',
            shapeId: payload.shapeId || '',
            themeId: payload.themeId || '',
            categoryId: payload.categoryId || '',
            techniqueId: payload.techniqueId || '',
            sellerId: payload.sellerId || '',
            hots,
            news,
            currentPage: payload.currentPage || 1,
            pageSize: payload.pageSize || 10,
            isLocale: payload.isLocale || false,
            locale: payload.locale || 'zh-cn'
        });
    }
    async delete(payload) {
        return await this.commodityCommodityService.delete(payload);
    }
    async update(payload) {
        console.log("commodity payload", payload);
        const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
        console.log("commodity", commodity);
        if (!commodity.success) {
            return {
                success: false,
                code: 10014
            };
        }
        const commodityUpdate = await this.commodityCommodityService.update({
            commodityId: payload.commodityId,
            state: payload.state,
            width: payload.width,
            height: payload.height
        });
        console.log("commodityUpdate", commodityUpdate);
        if (!commodityUpdate.success) {
            return commodityUpdate;
        }
        const commodityName = await this.commodityAttributeName.updateName({
            commodityId: payload.commodityId,
            'zh-cn': payload.name['zh-cn'] || '',
            'en-us': payload.name['en-us'] || '',
            'ja-jp': payload.name['ja-jp'] || '',
            'fr-fr': payload.name['fr-fr'] || '',
            'es-es': payload.name['es-es'] || ''
        });
        console.log("commodityName", commodityName);
        if (!commodityName.success) {
            return commodityName;
        }
        const commodityDesc = await this.commodityAttributeDesc.updateDesc({
            commodityId: payload.commodityId,
            'zh-cn': payload.desc['zh-cn'] || '',
            'en-us': payload.desc['en-us'] || '',
            'ja-jp': payload.desc['ja-jp'] || '',
            'fr-fr': payload.desc['fr-fr'] || '',
            'es-es': payload.desc['es-es'] || ''
        });
        console.log("commodityDesc", commodityDesc);
        if (!commodityDesc.success) {
            return commodityDesc;
        }
        const commodityPrice = await this.commodityAttributePrice.updatePrice({
            commodityId: payload.commodityId,
            'zh-cn': payload.price['zh-cn'] || 0,
            'en-us': payload.price['en-us'] || 0,
            'ja-jp': payload.price['ja-jp'] || 0,
            'fr-fr': payload.price['fr-fr'] || 0,
            'es-es': payload.price['es-es'] || 0
        });
        console.log("commodityPrice", commodityPrice);
        if (!commodityPrice.success) {
            return commodityPrice;
        }
        for (let item of payload.photos) {
            if (item.id) {
                const commodityPhotoUpdate = await this.commodityAttributePhoto.update({
                    src: item.url,
                    name: item.name,
                    commodityId: payload.commodityId,
                });
                console.log("commodityPhotoUpdate", commodityPhotoUpdate);
                if (!commodityPhotoUpdate.success) {
                    return commodityPhotoUpdate;
                }
            }
            else {
                const commodityPhotoCreate = await this.commodityAttributePhoto.create({
                    src: item.url,
                    name: item.name
                });
                if (!commodityPhotoCreate.success) {
                    return commodityPhotoCreate;
                }
                await this.commodityCommodityService.relation({
                    name: 'photos',
                    of: { commodityId: payload.commodityId },
                    add: commodityPhotoCreate.data.identifiers[0].id
                });
            }
        }
        for (let item of payload.colors) {
            const commodityColor = await this.commodityAttributeColor.update({
                ...item,
                commodityId: payload.commodityId,
            });
            console.log("commodityColor", commodityColor);
            if (!commodityColor.success) {
                return commodityColor;
            }
        }
        await this.commodityCommodityService.relation({
            name: 'shapes',
            of: { commodityId: payload.commodityId },
            add: payload.shape
        });
        await this.commodityCommodityService.relation({
            name: 'themes',
            of: { commodityId: payload.commodityId },
            add: payload.theme
        });
        await this.commodityCommodityService.relation({
            name: 'categorys',
            of: { commodityId: payload.commodityId },
            add: payload.category
        });
        await this.commodityCommodityService.relation({
            name: 'techniques',
            of: { commodityId: payload.commodityId },
            add: payload.technique
        });
        if (payload.sellerId) {
            await this.commodityCommodityService.relation({
                name: 'seller',
                of: commodity.data.id,
                set: { sellerId: payload.sellerId }
            });
        }
        return await this.commodityCommodityService.retrieve({
            commodityId: payload.commodityId
        });
    }
    async commodityOptionsCreate(payload) {
        let data = [];
        if (payload.options && payload.options.length) {
            for (let item of payload.options) {
                console.log("item", item);
                const commodityOptions = await this.commodityOptionsTypeRetrieve({
                    type: payload.type,
                    ...item
                });
                console.log("commodityOptions", commodityOptions);
                if (commodityOptions.success) {
                    return {
                        success: false,
                        code: 10013
                    };
                }
                const commodityOptionsNew = await this.commodityOptionsTypeCreate({
                    type: payload.type,
                    ...item
                });
                if (!commodityOptionsNew.success) {
                    return {
                        success: false,
                        code: 10004
                    };
                }
                const commodityOption = await this.commodityOptionsTypeRetrieve({
                    type: payload.type,
                    ...item
                });
                if (commodityOption.success) {
                    data.push(commodityOption.data);
                }
                else {
                    return {
                        success: false,
                        code: 10009
                    };
                }
            }
        }
        return {
            data,
            success: true,
            code: 10003
        };
    }
    async commodityOptionsTypeCreate(payload) {
        console.log("commodityOptionsTypeCreate", payload);
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.create({
                    'img': payload['img'] || '',
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.create({
                    'img': payload['img'] || '',
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.create({
                    'img': payload['img'] || '',
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.create({
                    'img': payload['img'] || '',
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
        }
        return data;
    }
    async commodityOptionsTypeRetrieve(payload) {
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieve(payload);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieve(payload);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieve(payload);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieve(payload);
                break;
        }
        return data;
    }
    async commodityOptionsTypeRetrieveId(payload) {
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieveId({
                    id: payload.id
                });
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieveId({
                    id: payload.id
                });
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieveId({
                    id: payload.id
                });
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieveId({
                    id: payload.id
                });
                break;
        }
        return data;
    }
    async commodityOptionsTypeRetrieveAll(payload) {
        console.log("commodityOptionsTypeRetrieveAll", payload);
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieveAll(payload);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieveAll(payload);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieveAll(payload);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieveAll(payload);
                break;
        }
        return data;
    }
    async commodityOptionsUpdate(payload) {
        const commodityOptionsShape = await this.commodityOptionsTypeRetrieveId(payload);
        console.log("commodityOptionsShape", commodityOptionsShape);
        if (!commodityOptionsShape.success) {
            return {
                success: false,
                code: 10014
            };
        }
        return await this.commodityOptionsTypeUpdate({
            'type': payload.type,
            'id': commodityOptionsShape.data.id,
            img: payload.img || commodityOptionsShape.data.img,
            'zh-cn': payload['zh-cn'] || commodityOptionsShape.data['zh-cn'],
            'en-us': payload['en-us'] || commodityOptionsShape.data['en-us'],
            'ja-jp': payload['ja-jp'] || commodityOptionsShape.data['ja-jp'],
            'fr-fr': payload['fr-fr'] || commodityOptionsShape.data['fr-fr'],
            'es-es': payload['es-es'] || commodityOptionsShape.data['es-es']
        });
    }
    async commodityOptionsTypeUpdate(payload) {
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.update({
                    id: payload.id,
                    img: payload.img,
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.update({
                    id: payload.id,
                    img: payload.img,
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.update({
                    id: payload.id,
                    img: payload.img,
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.update({
                    id: payload.id,
                    img: payload.img,
                    'zh-cn': payload['zh-cn'] || '',
                    'en-us': payload['en-us'] || '',
                    'ja-jp': payload['ja-jp'] || '',
                    'fr-fr': payload['fr-fr'] || '',
                    'es-es': payload['es-es'] || ''
                });
                break;
        }
        return data;
    }
    async commodityOptionsDelete(payload) {
        const commodityOptionsShape = await this.commodityOptionsTypeRetrieveId({
            type: payload.type,
            id: payload.id
        });
        if (!commodityOptionsShape.success) {
            return {
                success: false,
                code: 10014
            };
        }
        return await this.commodityOptionsTypeDelete({
            type: payload.type,
            id: payload.id
        });
    }
    async commodityOptionsTypeDelete(payload) {
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.delete({
                    id: payload.id
                });
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.delete({
                    id: payload.id
                });
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.delete({
                    id: payload.id
                });
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.delete({
                    id: payload.id
                });
                break;
        }
        return data;
    }
    async commodityComment(payload) {
        return await this.commentService.home(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.CommodityCommodityService)
], CommodityService.prototype, "commodityCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.CommodityAttributeName)
], CommodityService.prototype, "commodityAttributeName", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", desc_1.CommodityAttributeDesc)
], CommodityService.prototype, "commodityAttributeDesc", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", price_1.CommodityAttributePrice)
], CommodityService.prototype, "commodityAttributePrice", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", photo_1.CommodityAttributePhoto)
], CommodityService.prototype, "commodityAttributePhoto", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", color_1.CommodityAttributeColor)
], CommodityService.prototype, "commodityAttributeColor", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityOptionsCategoryService)
], CommodityService.prototype, "commodityOptionsCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityOptionsShapeService)
], CommodityService.prototype, "commodityOptionsShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityOptionsTechniqueService)
], CommodityService.prototype, "commodityOptionsTechniqueService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityOptionsThemeService)
], CommodityService.prototype, "commodityOptionsThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", comment_1.CommentService)
], CommodityService.prototype, "commentService", void 0);
CommodityService = __decorate([
    decorator_1.Provide()
], CommodityService);
exports.CommodityService = CommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDJDQUF3RDtBQUN4RCwyQ0FBMEQ7QUFDMUQsMkNBQTBEO0FBQzFELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBQzVELGlEQUFxRTtBQUNyRSwyQ0FBK0Q7QUFDL0QsbURBQXVFO0FBQ3ZFLDJDQUErRDtBQUMvRCx1Q0FBMEM7QUFFMUMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFvQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRTlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztZQUMxRCxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQzFDLElBQUcsU0FBUyxDQUFDLE9BQU8sRUFBQztZQUNuQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBRUQsTUFBTSxZQUFZLEdBQUksTUFBTSxJQUFJLENBQUMseUJBQXlCLENB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