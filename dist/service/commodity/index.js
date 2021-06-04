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
const details_1 = require("./attribute/details");
const postage_1 = require("./attribute/postage");
const price_1 = require("./attribute/price");
const photo_1 = require("./attribute/photo");
const video_1 = require("./attribute/video");
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
    async searchTest(payload) {
        return await this.commodityCommodityService.searchTest({
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
        if (commodityUpdate.success) {
        }
        else {
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
        if (commodityName.success) {
            if (commodityName.id) {
                await this.commodityCommodityService.relation({
                    name: 'name',
                    of: { commodityId: payload.commodityId },
                    set: commodityName.id
                });
            }
        }
        else {
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
        if (commodityDesc.success) {
            if (commodityDesc.id) {
                await this.commodityCommodityService.relation({
                    name: 'desc',
                    of: { commodityId: payload.commodityId },
                    set: commodityDesc.id
                });
            }
        }
        else {
            return commodityDesc;
        }
        const commodityDetails = await this.commodityAttributeDetails.updateDetails({
            commodityId: payload.commodityId,
            'zh-cn': payload.details['zh-cn'] || '',
            'en-us': payload.details['en-us'] || '',
            'ja-jp': payload.details['ja-jp'] || '',
            'fr-fr': payload.details['fr-fr'] || '',
            'es-es': payload.details['es-es'] || ''
        });
        if (commodityDetails.success) {
            if (commodityDetails.id) {
                await this.commodityCommodityService.relation({
                    name: 'details',
                    of: { commodityId: payload.commodityId },
                    set: commodityDetails.id
                });
            }
        }
        else {
            return commodityDetails;
        }
        const commodityPostage = await this.commodityAttributePostage.updatePostage({
            commodityId: payload.commodityId,
            'zh-cn': payload.postage['zh-cn'] || '',
            'en-us': payload.postage['en-us'] || '',
            'ja-jp': payload.postage['ja-jp'] || '',
            'fr-fr': payload.postage['fr-fr'] || '',
            'es-es': payload.postage['es-es'] || ''
        });
        if (commodityPostage.success) {
            if (commodityPostage.id) {
                await this.commodityCommodityService.relation({
                    name: 'postage',
                    of: { commodityId: payload.commodityId },
                    set: commodityPostage.id
                });
            }
        }
        else {
            return commodityPostage;
        }
        const commodityPrice = await this.commodityAttributePrice.updatePrice({
            commodityId: payload.commodityId,
            'zh-cn': payload.price['zh-cn'] || 0,
            'en-us': payload.price['en-us'] || 0,
            'ja-jp': payload.price['ja-jp'] || 0,
            'fr-fr': payload.price['fr-fr'] || 0,
            'es-es': payload.price['es-es'] || 0
        });
        if (commodityPrice.success) {
            if (commodityPrice.id) {
                await this.commodityCommodityService.relation({
                    name: 'price',
                    of: { commodityId: payload.commodityId },
                    set: commodityPrice.id
                });
            }
        }
        else {
            return commodityPrice;
        }
        for (let item of payload.removePhotos) {
            if (item.id) {
                await this.commodityAttributePhoto.delete(item.id);
            }
        }
        for (let item of payload.photos) {
            if (item.id) {
                const commodityPhotoUpdate = await this.commodityAttributePhoto.update({
                    id: item.id,
                    src: item.url,
                    name: item.name
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
        for (let item of payload.removeVideos) {
            if (item.id) {
                await this.commodityAttributeVideo.delete(item.id);
            }
        }
        for (let item of payload.videos) {
            if (item.id) {
                const commodityVideoUpdate = await this.commodityAttributeVideo.update({
                    id: item.id,
                    video: item.video,
                    ccId: item.ccId,
                    siteId: item.siteId,
                    videoPhoto: item.videoPhoto
                });
                if (!commodityVideoUpdate.success) {
                    return commodityVideoUpdate;
                }
            }
            else {
                const commodityVideoCreate = await this.commodityAttributeVideo.create({
                    video: item.video,
                    ccId: item.ccId,
                    siteId: item.siteId,
                    videoPhoto: item.videoPhoto
                });
                if (!commodityVideoCreate.success) {
                    return commodityVideoCreate;
                }
                await this.commodityCommodityService.relation({
                    name: 'videos',
                    of: { commodityId: payload.commodityId },
                    add: commodityVideoCreate.data.identifiers[0].id
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
    __metadata("design:type", details_1.CommodityAttributeDetails)
], CommodityService.prototype, "commodityAttributeDetails", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", postage_1.CommodityAttributePostage)
], CommodityService.prototype, "commodityAttributePostage", void 0);
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
    __metadata("design:type", video_1.CommodityAttributeVideo)
], CommodityService.prototype, "commodityAttributeVideo", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDJDQUF3RDtBQUN4RCwyQ0FBMEQ7QUFDMUQsMkNBQTBEO0FBQzFELGlEQUFnRTtBQUNoRSxpREFBZ0U7QUFDaEUsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBRTVELHVDQUEyQztBQUMzQyx1REFBMkQ7QUFFM0QsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFvQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUVsQixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUQsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxTQUFTLENBQUMsT0FBTyxFQUFDO1lBQ25CLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFD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QUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuSCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxP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