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
    async edit(payload) {
        return await this.commodityCommodityService.edit(payload.commodityId);
    }
    async clientCommodity(payload) {
        return await this.commodityCommodityService.clientCommodity(payload);
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
        return await this.commodityCommodityService.searchs({
            ...payload,
            locale: payload.locale || 'zh-cn'
        });
    }
    async clientSearch(payload) {
        return await this.commodityCommodityService.clientSearch({
            ...payload,
            locale: payload.locale || 'zh-cn'
        });
    }
    async serverSearch(payload) {
        return await this.commodityCommodityService.serverSearch({
            ...payload,
            locale: payload.locale || 'zh-cn'
        });
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
            choice: payload.choice,
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
        for (let item of payload.removePhotos) {
            if (item.id) {
                await this.commodityAttributePhoto.delete(item.id);
            }
        }
        for (let item of payload.photos) {
            if (item.id) {
                if (item.remove) {
                }
                else {
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
        if (payload.seller && payload.seller.sellerId) {
            await this.commodityCommodityService.relation({
                name: 'seller',
                of: commodity.data.id,
                set: { sellerId: payload.seller.sellerId }
            });
        }
        else {
            await this.commodityCommodityService.relation({
                name: 'seller',
                of: commodity.data.id,
                set: null
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
    async choiceCommodity(payload) {
        return await this.commodityCommodityService.choiceCommodity(payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDJDQUF3RDtBQUN4RCwyQ0FBMEQ7QUFDMUQsMkNBQTBEO0FBQzFELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBRTVELHVDQUEyQztBQUMzQyx1REFBMkQ7QUFFM0QsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUEyQjNCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUVsQixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUQsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxTQUFTLENBQUMsT0FBTyxFQUFDO1lBQ25CLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCxLQUFLLENB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QUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuSCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7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