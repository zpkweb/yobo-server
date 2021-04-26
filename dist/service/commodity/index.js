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
const comment_1 = require("./comment");
const commodityOption_1 = require("./commodityOption");
let CommodityService = class CommodityService {
    async create(payload) {
        const commodity = await this.commodityAttributeName.hasName({
            'zh-cn': payload['zh-cn'],
            'en-us': payload['en-us'],
            'ja-jp': payload['ja-jp'],
            'fr-fr': payload['fr-fr'],
            'es-es': payload['es-es']
        });
        if (commodity.success) {
            return {
                success: false,
                code: 10013
            };
        }
        return await this.commodityCommodityService.create(payload);
    }
    async find(payload) {
        return await this.commodityCommodityService.retrieve(payload);
    }
    async edit(commodityId) {
        return await this.commodityCommodityService.edit(commodityId);
    }
    async buy(payload) {
        return await this.commodityCommodityService.buy(payload);
    }
    async findAll(payload) {
        return await this.commodityCommodityService.retrieveAll(payload);
    }
    async findPhoto(payload) {
        return await this.commodityCommodityService.retrievePhoto(payload);
    }
    async search(payload) {
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
        let hots = false;
        if (payload.hots && payload.hots == 'true') {
            hots = true;
        }
        let news = false;
        if (payload.news && payload.news == 'true') {
            news = true;
        }
        return await this.commodityCommodityService.search({
            id: payload.id || '',
            commodityId: payload.commodityId || '',
            sellerId: payload.sellerId || '',
            name: payload.name || '',
            desc: payload.desc || '',
            priceMin: price.min || 0,
            priceMax: price.max || 0,
            widthMin: width.min || 0,
            widthMax: width.max || 0,
            heightMin: height.min || 0,
            heightMax: height.max || 0,
            colors: payload.colors,
            state: payload.state || '',
            categorys: (payload.categorys && payload.categorys.length) ? JSON.parse(payload.categorys) : [],
            classifications: (payload.classifications && payload.classifications.length) ? JSON.parse(payload.classifications) : [],
            materials: (payload.materials && payload.materials.length) ? JSON.parse(payload.materials) : [],
            models: (payload.models && payload.models.length) ? JSON.parse(payload.models) : [],
            places: (payload.places && payload.places.length) ? JSON.parse(payload.places) : [],
            ruiwus: (payload.ruiwus && payload.ruiwus.length) ? JSON.parse(payload.ruiwus) : [],
            shapes: (payload.shapes && payload.shapes.length) ? JSON.parse(payload.shapes) : [],
            specifications: (payload.specifications && payload.specifications.length) ? JSON.parse(payload.specifications) : [],
            styles: (payload.styles && payload.styles.length) ? JSON.parse(payload.styles) : [],
            techniques: (payload.techniques && payload.techniques.length) ? JSON.parse(payload.techniques) : [],
            themes: (payload.themes && payload.themes.length) ? JSON.parse(payload.themes) : [],
            types: (payload.types && payload.types.length) ? JSON.parse(payload.types) : [],
            uses: (payload.uses && payload.uses.length) ? JSON.parse(payload.uses) : [],
            hots,
            news,
            currentPage: payload.currentPage || 1,
            pageSize: payload.pageSize || 10,
            isLocale: payload.isLocale || false,
            locale: payload.locale || 'zh-cn'
        });
    }
    async searchs(payload) {
        return await this.commodityCommodityService.searchs(payload);
    }
    async delete(commodityId) {
        if (commodityId) {
            return await this.commodityCommodityService.deleteCommodityId(commodityId);
        }
        else {
            return await this.commodityCommodityService.deleteAll();
        }
    }
    async update(payload) {
        const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
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
            if (!commodityColor.success) {
                return commodityColor;
            }
        }
        await this.commodityCommodityService.relationUpdate(payload);
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
    async createOptions(payload) {
        let data = [];
        if (payload.options && payload.options.length) {
            for (let item of payload.options) {
                const commodityOptions = await this.commodityOptionService.commodityOptionsTypeRetrieve({
                    type: payload.type,
                    img: item.img,
                    zhcn: item['zh-cn'],
                    enus: item['en-us'],
                    jajp: item['ja-jp'],
                    eses: item['es-es'],
                    frfr: item['fr-fr'],
                });
                if (commodityOptions.success) {
                    return {
                        success: false,
                        code: 10013
                    };
                }
                const commodityOptionsNew = await this.commodityOptionService.commodityOptionsTypeCreate({
                    type: payload.type,
                    img: item.img,
                    zhcn: item['zh-cn'],
                    enus: item['en-us'],
                    jajp: item['ja-jp'],
                    eses: item['es-es'],
                    frfr: item['fr-fr'],
                });
                if (!commodityOptionsNew.success) {
                    return {
                        success: false,
                        code: 10004
                    };
                }
                const commodityOption = await this.commodityOptionService.commodityOptionsTypeRetrieve({
                    type: payload.type,
                    img: item.img,
                    zhcn: item['zh-cn'],
                    enus: item['en-us'],
                    jajp: item['ja-jp'],
                    eses: item['es-es'],
                    frfr: item['fr-fr'],
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
    async retrieveOptions({ isLocale = false, locale = 'zh-cn' }) {
        return this.commodityOptionService.commodityOptionsRetrieve({ isLocale, locale });
    }
    async retrieveOption({ type = '', } = {}) {
        return this.commodityOptionService.commodityOptionsTypeRetrieve({
            type
        });
    }
    async retrieveOptionId(payload) {
        return this.commodityOptionService.commodityOptionsTypeRetrieveId({
            type: payload.type,
            id: payload.id,
        });
    }
    async retrieveOptionAll(payload) {
        return this.commodityOptionService.commodityOptionsTypeRetrieveAll({
            type: payload.type,
            isLocale: payload.isLocale || false,
            locale: 'zh-cn'
        });
    }
    async updateOptions({ type = '', id = '', img = '', zhcn = '', enus = '', jajp = '', eses = '' } = {}) {
        const commodityOptions = await this.commodityOptionService.commodityOptionsTypeRetrieveId({ type, id });
        if (!commodityOptions.success) {
            return {
                success: false,
                code: 10014
            };
        }
        return await this.commodityOptionService.commodityOptionsTypeUpdate({
            'type': type,
            'id': id || commodityOptions.data.id,
            'img': img || commodityOptions.data.img,
            'zhcn': zhcn || commodityOptions.data['zh-cn'],
            'enus': enus || commodityOptions.data['en-us'],
            'jajp': jajp || commodityOptions.data['ja-jp'],
            'eses': eses || commodityOptions.data['es-es']
        });
    }
    async deleteOptions(payload) {
        const commodityOptionsShape = await this.commodityOptionService.commodityOptionsTypeRetrieveId({
            type: payload.type,
            id: payload.id
        });
        if (!commodityOptionsShape.success) {
            return {
                success: false,
                code: 10014
            };
        }
        return await this.commodityOptionService.commodityOptionsTypeDelete({
            type: payload.type,
            id: payload.id
        });
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
    __metadata("design:type", comment_1.CommentService)
], CommodityService.prototype, "commentService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodityOption_1.CommodityOptionService)
], CommodityService.prototype, "commodityOptionService", void 0);
CommodityService = __decorate([
    decorator_1.Provide()
], CommodityService);
exports.CommodityService = CommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDJDQUF3RDtBQUN4RCwyQ0FBMEQ7QUFDMUQsMkNBQTBEO0FBQzFELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBRTVELHVDQUEyQztBQUMzQyx1REFBMkQ7QUFFM0QsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUEyQjNCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUVsQixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUQsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxTQUFTLENBQUMsT0FBTyxFQUFDO1lBQ25CLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7UUFZRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU5RCxDQUFDO0lBS0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxLQUFLLENB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QUMsQ0FBQyxFQUFFO1lBQ25GLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkgsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25HLE1BQU0s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