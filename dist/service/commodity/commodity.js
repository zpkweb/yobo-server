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
const details_1 = require("./attribute/details");
const postage_1 = require("./attribute/postage");
const price_1 = require("./attribute/price");
const photo_1 = require("./attribute/photo");
const video_1 = require("./attribute/video");
const color_1 = require("./attribute/color");
const category_1 = require("./commodity-options/category");
const classification_1 = require("./commodity-options/classification");
const material_1 = require("./commodity-options/material");
const model_1 = require("./commodity-options/model");
const place_1 = require("./commodity-options/place");
const ruiwu_1 = require("./commodity-options/ruiwu");
const shape_1 = require("./commodity-options/shape");
const specification_1 = require("./commodity-options/specification");
const style_1 = require("./commodity-options/style");
const technique_1 = require("./commodity-options/technique");
const theme_1 = require("./commodity-options/theme");
const type_1 = require("./commodity-options/type");
const use_1 = require("./commodity-options/use");
const metadata_1 = require("../base/seller/metadata");
const commodityOption_1 = require("./commodityOption");
const seller_1 = require("../user/seller");
const seller_2 = require("../base/seller/seller");
const commodity_search_1 = require("./commodity-search");
let CommodityCommodityService = class CommodityCommodityService {
    async edit(commodityId) {
        let commodity = {};
        const baseCommodityService = await this.baseCommodityService.BaseRetrieveCommodityId(commodityId);
        if (baseCommodityService) {
            commodity = baseCommodityService;
            if (baseCommodityService.seller) {
                commodity.seller = baseCommodityService.seller;
            }
        }
        const commodityAttributeColor = await this.commodityAttributeColor.retrieveCommodityId(commodityId);
        if (commodityAttributeColor.success) {
            commodity.colors = commodityAttributeColor.data;
        }
        const commodityAttributeDesc = await this.commodityAttributeDesc.retrieveCommodityId(commodityId);
        if (commodityAttributeDesc.success) {
            commodity.desc = commodityAttributeDesc.data;
        }
        const commodityAttributeDetails = await this.commodityAttributeDetails.retrieveCommodityId(commodityId);
        if (commodityAttributeDetails.success) {
            commodity.details = commodityAttributeDetails.data;
        }
        const commodityAttributePostage = await this.commodityAttributePostage.retrieveCommodityId(commodityId);
        if (commodityAttributePostage.success) {
            commodity.postage = commodityAttributePostage.data;
        }
        const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(commodityId);
        if (commodityAttributeName.success) {
            commodity.name = commodityAttributeName.data;
        }
        const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(commodityId);
        if (commodityAttributePhoto.success) {
            commodity.photos = commodityAttributePhoto.data;
        }
        const commodityAttributeVideo = await this.commodityAttributeVideo.retrieveCommodityId(commodityId);
        if (commodityAttributeVideo.success) {
            commodity.videos = commodityAttributeVideo.data;
        }
        const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(commodityId);
        if (commodityAttributePrice.success) {
            commodity.price = commodityAttributePrice.data;
        }
        const commodityCategoryService = await this.commodityCategoryService.retrieveCommodityId(commodityId);
        if (commodityCategoryService.success) {
            commodity.categorys = commodityCategoryService.data;
        }
        const commodityClassificationService = await this.commodityClassificationService.retrieveCommodityId(commodityId);
        if (commodityClassificationService.success) {
            commodity.classifications = commodityClassificationService.data;
        }
        const commodityMaterialService = await this.commodityMaterialService.retrieveCommodityId(commodityId);
        if (commodityMaterialService.success) {
            commodity.materials = commodityMaterialService.data;
        }
        const commodityModelService = await this.commodityModelService.retrieveCommodityId(commodityId);
        if (commodityModelService.success) {
            commodity.models = commodityModelService.data;
        }
        const commodityPlaceService = await this.commodityPlaceService.retrieveCommodityId(commodityId);
        if (commodityPlaceService.success) {
            commodity.places = commodityPlaceService.data;
        }
        const commodityRuiwuService = await this.commodityRuiwuService.retrieveCommodityId(commodityId);
        if (commodityRuiwuService.success) {
            commodity.ruiwus = commodityRuiwuService.data;
        }
        const commodityShapeService = await this.commodityShapeService.retrieveCommodityId(commodityId);
        if (commodityShapeService.success) {
            commodity.shapes = commodityShapeService.data;
        }
        const commoditySpecificationService = await this.commoditySpecificationService.retrieveCommodityId(commodityId);
        if (commoditySpecificationService.success) {
            commodity.specifications = commoditySpecificationService.data;
        }
        const commodityStyleService = await this.commodityStyleService.retrieveCommodityId(commodityId);
        if (commodityStyleService.success) {
            commodity.styles = commodityStyleService.data;
        }
        const commodityTechniqueService = await this.commodityTechniqueService.retrieveCommodityId(commodityId);
        if (commodityTechniqueService.success) {
            commodity.techniques = commodityTechniqueService.data;
        }
        const commodityThemeService = await this.commodityThemeService.retrieveCommodityId(commodityId);
        if (commodityThemeService.success) {
            commodity.themes = commodityThemeService.data;
        }
        const commodityTypeService = await this.commodityTypeService.retrieveCommodityId(commodityId);
        if (commodityTypeService.success) {
            commodity.types = commodityTypeService.data;
        }
        const commodityUseService = await this.commodityUseService.retrieveCommodityId(commodityId);
        if (commodityUseService.success) {
            commodity.uses = commodityUseService.data;
        }
        if (commodity) {
            return {
                data: commodity,
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
    async clientCommodity(payload) {
        let commodity = {};
        const baseCommodityService = await this.baseCommodityService.BaseRetrieveCommodityId(payload.commodityId);
        if (baseCommodityService) {
            const { seller, ...commodityData } = baseCommodityService;
            commodity = commodityData;
            if (seller && seller.sellerId) {
                const sellerData = await this.baseSellerService.baseRetrieveSeller(seller.sellerId);
                if (sellerData && sellerData.user) {
                    seller.user = sellerData.user;
                }
                const sellerMetadata = await this.baseSellerMetadataService.baseRetrieve(seller.sellerId);
                if (sellerMetadata) {
                    seller.metadata = sellerMetadata;
                }
                const commoditys = await this.retrieveCommmoditySellerPagination({
                    sellerId: seller.sellerId,
                    pageSize: payload.pageSize,
                    currentPage: payload.currentPage,
                });
                if (commoditys.success && commoditys.data && commoditys.data.length) {
                    let commodityIndex = 0;
                    let commodityData = [];
                    for (let item of commoditys.data) {
                        if (item.commodityId != payload.commodityId && commodityIndex < 4) {
                            commodityIndex++;
                            const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                            if (commodityAttributeName.success) {
                                item.name = commodityAttributeName.data[payload.locale];
                            }
                            const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                            if (commodityAttributePhoto.success) {
                                item.photos = commodityAttributePhoto.data.map(item => item.src);
                            }
                            commodityData.push(item);
                        }
                    }
                    seller.commoditys = commodityData;
                }
                commodity.seller = seller;
            }
        }
        const commodityAttributeDesc = await this.commodityAttributeDesc.retrieveCommodityId(payload.commodityId);
        if (commodityAttributeDesc.success) {
            commodity.desc = payload.isLocale ? commodityAttributeDesc.data[payload.locale] : commodityAttributeDesc.data;
        }
        const commodityAttributeDetails = await this.commodityAttributeDetails.retrieveCommodityId(payload.commodityId);
        if (commodityAttributeDetails.success) {
            commodity.details = payload.isLocale ? commodityAttributeDetails.data[payload.locale] : commodityAttributeDetails.data;
        }
        const commodityAttributePostage = await this.commodityAttributePostage.retrieveCommodityId(payload.commodityId);
        if (commodityAttributePostage.success) {
            commodity.postage = payload.isLocale ? commodityAttributePostage.data[payload.locale] : commodityAttributePostage.data;
        }
        const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(payload.commodityId);
        if (commodityAttributeName.success) {
            commodity.name = payload.isLocale ? commodityAttributeName.data[payload.locale] : commodityAttributeName.data;
        }
        const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(payload.commodityId);
        if (commodityAttributePhoto.success) {
            commodity.photos = commodityAttributePhoto.data;
        }
        const commodityAttributeVideo = await this.commodityAttributeVideo.retrieveCommodityId(payload.commodityId);
        if (commodityAttributeVideo.success) {
            commodity.videos = commodityAttributeVideo.data;
        }
        const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(payload.commodityId);
        if (commodityAttributePrice.success) {
            commodity.price = payload.isLocale ? commodityAttributePrice.data[payload.locale] : commodityAttributePrice.data;
        }
        const commodityCategoryService = await this.commodityCategoryService.retrieveCommodityId(payload.commodityId);
        if (commodityCategoryService.success) {
            commodity.categorys = payload.isLocale ? commodityCategoryService.data.map(item => item.options[payload.locale]) : commodityCategoryService.data;
        }
        const commodityClassificationService = await this.commodityClassificationService.retrieveCommodityId(payload.commodityId);
        if (commodityClassificationService.success) {
            commodity.classifications = payload.isLocale ? commodityClassificationService.data.map(item => item.options[payload.locale]) : commodityClassificationService.data;
        }
        const commodityMaterialService = await this.commodityMaterialService.retrieveCommodityId(payload.commodityId);
        if (commodityMaterialService.success) {
            commodity.materials = payload.isLocale ? commodityMaterialService.data.map(item => item.options[payload.locale]) : commodityMaterialService.data;
        }
        const commodityModelService = await this.commodityModelService.retrieveCommodityId(payload.commodityId);
        if (commodityModelService.success) {
            commodity.models = payload.isLocale ? commodityModelService.data.map(item => item.options[payload.locale]) : commodityModelService.data;
        }
        const commodityPlaceService = await this.commodityPlaceService.retrieveCommodityId(payload.commodityId);
        if (commodityPlaceService.success) {
            commodity.places = payload.isLocale ? commodityPlaceService.data.map(item => item.options[payload.locale]) : commodityPlaceService.data;
        }
        const commodityRuiwuService = await this.commodityRuiwuService.retrieveCommodityId(payload.commodityId);
        if (commodityRuiwuService.success) {
            commodity.ruiwus = payload.isLocale ? commodityRuiwuService.data.map(item => item.options[payload.locale]) : commodityRuiwuService.data;
        }
        const commodityShapeService = await this.commodityShapeService.retrieveCommodityId(payload.commodityId);
        if (commodityShapeService.success) {
            commodity.shapes = payload.isLocale ? commodityShapeService.data.map(item => item.options[payload.locale]) : commodityShapeService.data;
        }
        const commoditySpecificationService = await this.commoditySpecificationService.retrieveCommodityId(payload.commodityId);
        if (commoditySpecificationService.success) {
            commodity.specifications = payload.isLocale ? commoditySpecificationService.data.map(item => item.options[payload.locale]) : commoditySpecificationService.data;
        }
        const commodityStyleService = await this.commodityStyleService.retrieveCommodityId(payload.commodityId);
        if (commodityStyleService.success) {
            commodity.styles = payload.isLocale ? commodityStyleService.data.map(item => item.options[payload.locale]) : commodityStyleService.data;
        }
        const commodityTechniqueService = await this.commodityTechniqueService.retrieveCommodityId(payload.commodityId);
        if (commodityTechniqueService.success) {
            commodity.techniques = payload.isLocale ? commodityTechniqueService.data.map(item => item.options[payload.locale]) : commodityTechniqueService.data;
        }
        const commodityThemeService = await this.commodityThemeService.retrieveCommodityId(payload.commodityId);
        if (commodityThemeService.success) {
            commodity.themes = payload.isLocale ? commodityThemeService.data.map(item => item.options[payload.locale]) : commodityThemeService.data;
        }
        const commodityTypeService = await this.commodityTypeService.retrieveCommodityId(payload.commodityId);
        if (commodityTypeService.success) {
            commodity.types = payload.isLocale ? commodityTypeService.data.map(item => item.options[payload.locale]) : commodityTypeService.data;
        }
        const commodityUseService = await this.commodityUseService.retrieveCommodityId(payload.commodityId);
        if (commodityUseService.success) {
            commodity.uses = payload.isLocale ? commodityUseService.data.map(item => item.options[payload.locale]) : commodityUseService.data;
        }
        if (commodity) {
            return {
                data: commodity,
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
    async searchTest(payload) {
        return await this.commoditySearchService.search(payload);
    }
    async clientSearch(payload) {
        const result = await this.commoditySearchService.search(payload);
        if (!result.success) {
            return result;
        }
        let data = result.data.list;
        let total = result.data.total;
        if (data) {
            for (let item of data) {
                const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                if (commodityAttributeName.success) {
                    item.name = commodityAttributeName.data;
                }
                const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
                if (commodityAttributePrice.success) {
                    item.price = commodityAttributePrice.data;
                }
                const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                if (commodityAttributePhoto.success) {
                    item.photos = commodityAttributePhoto.data;
                }
                const commodityAttributeVideo = await this.commodityAttributeVideo.retrieveCommodityId(item.commodityId);
                if (commodityAttributeVideo.success) {
                    item.videos = commodityAttributeVideo.data;
                }
                const commoditySeller = await this.retrieveSeller(item.commodityId);
                if (commoditySeller) {
                    if (commoditySeller.data.seller) {
                        const sellerCommoditysPhotos = await this.sellerService.baseRetrieveSellerCommoditysPhotos(commoditySeller.data.seller.sellerId);
                        if (!sellerCommoditysPhotos.success) {
                            return sellerCommoditysPhotos;
                        }
                        const commodityPhotos = sellerCommoditysPhotos.data.commodityPhotos.splice(0, 3);
                        item.commoditysPhotos = commodityPhotos.map(item => item.src);
                        const commodityAttributeSeller = await this.sellerService.sellerIdFind(commoditySeller.data.seller.sellerId);
                        if (commodityAttributeSeller) {
                            item.seller = commodityAttributeSeller.data;
                        }
                        let sellerFollowTotal = await this.sellerService.sellerFollowTotal(commoditySeller.data.seller.sellerId);
                        if (sellerFollowTotal.success) {
                            item.sellerFollowTotal = sellerFollowTotal.data;
                        }
                    }
                }
            }
            if (payload.isLocale) {
                data = this.searchFilter(payload.locale, data);
            }
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
    async ServiceSearch(payload) {
        const result = await this.commoditySearchService.search(payload);
        if (!result.success) {
            return result;
        }
        let data = result.data.list;
        let total = result.data.total;
        if (data) {
            for (let item of data) {
                const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                if (commodityAttributeName.success) {
                    item.name = commodityAttributeName.data;
                }
                const commodityAttributeDesc = await this.commodityAttributeDesc.retrieveCommodityId(item.commodityId);
                if (commodityAttributeDesc.success) {
                    item.desc = commodityAttributeDesc.data;
                }
                const commodityAttributeDetails = await this.commodityAttributeDetails.retrieveCommodityId(item.commodityId);
                if (commodityAttributeDetails.success) {
                    item.details = commodityAttributeDetails.data;
                }
                const commodityAttributePostage = await this.commodityAttributePostage.retrieveCommodityId(item.commodityId);
                if (commodityAttributePostage.success) {
                    item.postage = commodityAttributePostage.data;
                }
                const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
                if (commodityAttributePrice.success) {
                    item.price = commodityAttributePrice.data;
                }
                const commodityAttributeColor = await this.commodityAttributeColor.retrieveCommodityId(item.commodityId);
                if (commodityAttributeColor.success) {
                    item.colors = commodityAttributeColor.data;
                }
                const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                if (commodityAttributePhoto.success) {
                    item.photos = commodityAttributePhoto.data;
                }
                const commodityAttributeVideo = await this.commodityAttributeVideo.retrieveCommodityId(item.commodityId);
                if (commodityAttributeVideo.success) {
                    item.videos = commodityAttributeVideo.data;
                }
                const commoditySeller = await this.retrieveSeller(item.commodityId);
                if (commoditySeller) {
                    if (commoditySeller.data.seller) {
                        const commodityAttributeSeller = await this.sellerService.sellerIdFind(commoditySeller.data.seller.sellerId);
                        if (commodityAttributeSeller.success) {
                            item.seller = commodityAttributeSeller.data;
                        }
                    }
                }
            }
            if (payload.isLocale) {
                data = this.searchFilter(payload.locale, data);
            }
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
    async create(payload) {
        const commodity = await this.createMetadata({
            choice: payload.choice || 0,
            state: payload.state || '0',
            width: payload.width || 0,
            height: payload.height || 0,
            images: payload.images || '',
            likes: payload.likes || 0
        });
        if (!commodity.success) {
            return commodity;
        }
        payload.commodityId = commodity.commodityId;
        const commodityName = await this.commodityAttributeName.create({
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
        await this.relation({
            name: 'name',
            of: { commodityId: payload.commodityId },
            set: commodityName.id
        });
        const commodityDesc = await this.commodityAttributeDesc.create({
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
        await this.relation({
            name: 'desc',
            of: { commodityId: payload.commodityId },
            set: commodityDesc.id
        });
        const commodityDetails = await this.commodityAttributeDetails.create({
            commodityId: payload.commodityId,
            'zh-cn': payload.details['zh-cn'] || '',
            'en-us': payload.details['en-us'] || '',
            'ja-jp': payload.details['ja-jp'] || '',
            'fr-fr': payload.details['fr-fr'] || '',
            'es-es': payload.details['es-es'] || ''
        });
        if (!commodityDetails.success) {
            return commodityDetails;
        }
        await this.relation({
            name: 'details',
            of: { commodityId: payload.commodityId },
            set: commodityDetails.id
        });
        const commodityPostage = await this.commodityAttributePostage.create({
            commodityId: payload.commodityId,
            'zh-cn': payload.postage['zh-cn'] || '',
            'en-us': payload.postage['en-us'] || '',
            'ja-jp': payload.postage['ja-jp'] || '',
            'fr-fr': payload.postage['fr-fr'] || '',
            'es-es': payload.postage['es-es'] || ''
        });
        if (!commodityPostage.success) {
            return commodityPostage;
        }
        await this.relation({
            name: 'postage',
            of: { commodityId: payload.commodityId },
            set: commodityPostage.id
        });
        const commodityPrice = await this.commodityAttributePrice.create({
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
        await this.relation({
            name: 'price',
            of: { commodityId: payload.commodityId },
            set: commodityPrice.id
        });
        for (let item of payload.photos) {
            const commodityPhoto = await this.commodityAttributePhoto.create({
                commodityId: payload.commodityId,
                src: item.url,
                name: item.name
            });
            if (!commodityPhoto.success) {
                return commodityPhoto;
            }
            await this.relation({
                name: 'photos',
                of: { commodityId: payload.commodityId },
                add: commodityPhoto.id
            });
        }
        for (let item of payload.videos) {
            const commodityVideo = await this.commodityAttributeVideo.create({
                commodityId: payload.commodityId,
                video: item.video,
                ccId: item.ccId,
                siteId: item.siteId,
                videoPhoto: item.videoPhoto
            });
            if (!commodityVideo.success) {
                return commodityVideo;
            }
            await this.relation({
                name: 'videos',
                of: { commodityId: payload.commodityId },
                add: commodityVideo.id
            });
        }
        for (let item of payload.colors) {
            const commodityColor = await this.commodityAttributeColor.create({
                commodityId: payload.commodityId,
                startColor: item.startColor,
                startColorValue: item.startColor.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0),
                endColor: item.endColor,
                endColorValue: item.endColor.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0),
            });
            if (!commodityColor.success) {
                return commodityColor;
            }
            await this.relation({
                name: 'colors',
                of: { commodityId: payload.commodityId },
                add: commodityColor.id
            });
        }
        await this.relationCreate(payload);
        if (payload.seller) {
            await this.relation({
                name: 'seller',
                of: commodity.id,
                set: { sellerId: payload.seller.sellerId }
            });
        }
        if (commodity.id) {
            return {
                data: {
                    commodityId: payload.commodityId
                },
                success: true,
                code: 10003
            };
        }
        else {
            return {
                success: false,
                code: 10004
            };
        }
    }
    async createMetadata(payload) {
        const data = await this.baseCommodityService.BaseCreate(payload);
        if (data.identifiers[0].id) {
            return {
                data: data,
                id: data.identifiers[0].id,
                commodityId: data.generatedMaps[0].commodityId,
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
            return await this.baseCommodityService.BaseRelationSet({
                name: payload.name,
                of: payload.of,
                set: payload.set
            });
        }
        else if (payload.add) {
            return await this.baseCommodityService.BaseRelationAdd({
                name: payload.name,
                of: payload.of,
                add: payload.add
            });
        }
        else if (payload.remove) {
            return await this.baseCommodityService.BaseRelationRemove({
                name: payload.name,
                of: payload.of,
                remove: payload.remove
            });
        }
    }
    async relationCreate(payload) {
        if (payload.categorys && payload.categorys.length) {
            await this.commodityCategoryService.relationCreate({
                relation: payload.categorys,
                commodityId: payload.commodityId
            });
        }
        if (payload.classifications && payload.classifications.length) {
            await this.commodityClassificationService.relationCreate({
                relation: payload.classifications,
                commodityId: payload.commodityId
            });
        }
        if (payload.materials && payload.materials.length) {
            await this.commodityMaterialService.relationCreate({
                relation: payload.materials,
                commodityId: payload.commodityId
            });
        }
        if (payload.models && payload.models.length) {
            await this.commodityModelService.relationCreate({
                relation: payload.models,
                commodityId: payload.commodityId
            });
        }
        if (payload.places && payload.places.length) {
            await this.commodityPlaceService.relationCreate({
                relation: payload.places,
                commodityId: payload.commodityId
            });
        }
        if (payload.ruiwus && payload.ruiwus.length) {
            await this.commodityRuiwuService.relationCreate({
                relation: payload.ruiwus,
                commodityId: payload.commodityId
            });
        }
        if (payload.shapes && payload.shapes.length) {
            await this.commodityShapeService.relationCreate({
                relation: payload.shapes,
                commodityId: payload.commodityId
            });
        }
        if (payload.specifications && payload.specifications.length) {
            await this.commoditySpecificationService.relationCreate({
                relation: payload.specifications,
                commodityId: payload.commodityId
            });
        }
        if (payload.styles && payload.styles.length) {
            await this.commodityStyleService.relationCreate({
                relation: payload.styles,
                commodityId: payload.commodityId
            });
        }
        if (payload.techniques && payload.techniques.length) {
            await this.commodityTechniqueService.relationCreate({
                relation: payload.techniques,
                commodityId: payload.commodityId
            });
        }
        if (payload.themes && payload.themes.length) {
            await this.commodityThemeService.relationCreate({
                relation: payload.themes,
                commodityId: payload.commodityId
            });
        }
        if (payload.types && payload.types.length) {
            await this.commodityTypeService.relationCreate({
                relation: payload.types,
                commodityId: payload.commodityId
            });
        }
        if (payload.uses && payload.uses.length) {
            await this.commodityUseService.relationCreate({
                relation: payload.uses,
                commodityId: payload.commodityId
            });
        }
    }
    async relationUpdate(payload) {
        if (payload.categorys && payload.categorys.length) {
            await this.commodityCategoryService.relationUpdate({
                relation: payload.categorys,
                commodityId: payload.commodityId
            });
        }
        if (payload.classifications && payload.classifications.length) {
            await this.commodityClassificationService.relationUpdate({
                relation: payload.classifications,
                commodityId: payload.commodityId
            });
        }
        if (payload.materials && payload.materials.length) {
            await this.commodityMaterialService.relationUpdate({
                relation: payload.materials,
                commodityId: payload.commodityId
            });
        }
        if (payload.models && payload.models.length) {
            await this.commodityModelService.relationUpdate({
                relation: payload.models,
                commodityId: payload.commodityId
            });
        }
        if (payload.places && payload.places.length) {
            await this.commodityPlaceService.relationUpdate({
                relation: payload.places,
                commodityId: payload.commodityId
            });
        }
        if (payload.ruiwus && payload.ruiwus.length) {
            await this.commodityRuiwuService.relationUpdate({
                relation: payload.ruiwus,
                commodityId: payload.commodityId
            });
        }
        if (payload.shapes && payload.shapes.length) {
            await this.commodityShapeService.relationUpdate({
                relation: payload.shapes,
                commodityId: payload.commodityId
            });
        }
        if (payload.specifications && payload.specifications.length) {
            await this.commoditySpecificationService.relationUpdate({
                relation: payload.specifications,
                commodityId: payload.commodityId
            });
        }
        if (payload.styles && payload.styles.length) {
            await this.commodityStyleService.relationUpdate({
                relation: payload.styles,
                commodityId: payload.commodityId
            });
        }
        if (payload.techniques && payload.techniques.length) {
            await this.commodityTechniqueService.relationUpdate({
                relation: payload.techniques,
                commodityId: payload.commodityId
            });
        }
        if (payload.themes && payload.themes.length) {
            await this.commodityThemeService.relationUpdate({
                relation: payload.themes,
                commodityId: payload.commodityId
            });
        }
        if (payload.types && payload.types.length) {
            await this.commodityTypeService.relationUpdate({
                relation: payload.types,
                commodityId: payload.commodityId
            });
        }
        if (payload.uses && payload.uses.length) {
            await this.commodityUseService.relationUpdate({
                relation: payload.uses,
                commodityId: payload.commodityId
            });
        }
    }
    async hasCommodityPhoto(payload) {
        const data = await this.baseCommodityService.BaseHasRelation({
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
        const data = await this.baseCommodityService.BaseHasRelation({
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
        const data = await this.baseCommodityService.BaseHasRelation({
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
        const data = await this.baseCommodityService.BaseHasRelation({
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
        const data = await this.baseCommodityService.BaseHasRelation({
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
        const data = await this.baseCommodityService.BaseHasRelation({
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
        let data = await this.baseCommodityService.BaseRetrieve(payload.commodityId);
        if (data) {
            if (payload.isLocale) {
                const filterData = this.filter(payload.locale || 'zh-cn', [data]);
                data = filterData[0];
            }
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
        let result = await this.baseCommodityService.BaseRetrieveAll(payload);
        let data = result[0];
        let total = result[1];
        if (data) {
            if (payload.isLocale) {
                data = this.searchFilter(payload.locale, data);
            }
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
    async retrievePhoto(payload) {
        let result = await this.baseCommodityService.BaseRetrievePhoto(payload);
        let data = result[0];
        let total = result[1];
        if (data) {
            if (payload.isLocale) {
                data = this.searchFilter(payload.locale, data);
            }
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
    async retrieveSeller(commodityId) {
        let data = await this.baseCommodityService.BaseRetrieveSeller(commodityId);
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
    async retrieveCategory(id) {
        let data = await this.baseCommodityService.BaseRetrieveCategory(id);
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
        let result = await this.baseCommodityService.BaseSearch(payload);
        let data = result[0];
        let total = result[1];
        if (data) {
            if (payload.isLocale) {
                data = this.filter(payload.locale, data);
            }
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
    async searchs(payload) {
        let searchAll = true;
        if (payload.id) {
            searchAll = false;
        }
        if (payload.commodityId) {
            searchAll = false;
        }
        if (payload.sellerId) {
            searchAll = false;
        }
        if (payload.state) {
            searchAll = false;
        }
        if (payload.name) {
            searchAll = false;
        }
        if (payload.desc) {
            searchAll = false;
        }
        if (payload.price) {
            searchAll = false;
            let price = payload.price.split(',');
            if (price.length === 1) {
                payload.price = {
                    min: 0,
                    max: price[0]
                };
            }
            else if (price.length === 2) {
                payload.price = {
                    min: price[0],
                    max: price[1]
                };
            }
        }
        else {
            payload.price = '';
        }
        if (payload.colors) {
            searchAll = false;
            if (payload.colors.substr(1) == '#') {
                payload.colors = payload.colors.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
            }
            else {
                payload.colors = payload.colors.toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
            }
        }
        if (payload.categorys) {
            searchAll = false;
            if (typeof payload.categorys == 'string') {
                payload.categorys = payload.categorys.split(',');
            }
        }
        else {
            payload.categorys = [];
        }
        if (payload.classifications) {
            searchAll = false;
            if (typeof payload.classifications == 'string') {
                payload.classifications = payload.classifications.split(',');
            }
        }
        else {
            payload.classifications = [];
        }
        if (payload.materials) {
            searchAll = false;
            if (typeof payload.materials == 'string') {
                payload.materials = payload.materials.split(',');
            }
        }
        else {
            payload.materials = [];
        }
        if (payload.models) {
            searchAll = false;
            if (typeof payload.models == 'string') {
                payload.models = payload.models.split(',');
            }
        }
        else {
            payload.models = [];
        }
        if (payload.places) {
            searchAll = false;
            if (typeof payload.places == 'string') {
                payload.places = payload.places.split(',');
            }
        }
        else {
            payload.places = [];
        }
        if (payload.ruiwus) {
            searchAll = false;
            if (typeof payload.ruiwus == 'string') {
                payload.ruiwus = payload.ruiwus.split(',');
            }
        }
        else {
            payload.ruiwus = [];
        }
        if (payload.shapes) {
            searchAll = false;
            if (typeof payload.shapes == 'string') {
                payload.shapes = payload.shapes.split(',');
            }
        }
        else {
            payload.shapes = [];
        }
        if (payload.specifications) {
            searchAll = false;
            if (typeof payload.specifications == 'string') {
                payload.specifications = payload.specifications.split(',');
            }
        }
        else {
            payload.specifications = [];
        }
        if (payload.techniques) {
            searchAll = false;
            if (typeof payload.techniques == 'string') {
                payload.techniques = payload.techniques.split(',');
            }
        }
        else {
            payload.techniques = [];
        }
        if (payload.themes) {
            searchAll = false;
            if (typeof payload.themes == 'string') {
                payload.themes = payload.themes.split(',');
            }
        }
        else {
            payload.themes = [];
        }
        if (payload.types) {
            searchAll = false;
            if (typeof payload.types == 'string') {
                payload.types = payload.types.split(',');
            }
        }
        else {
            payload.types = [];
        }
        if (payload.uses) {
            searchAll = false;
            if (typeof payload.uses == 'string') {
                payload.uses = payload.uses.split(',');
            }
        }
        else {
            payload.uses = [];
        }
        let result;
        if (searchAll) {
            result = await this.baseCommodityService.BaseRetrieveAll(payload);
        }
        else {
            result = await this.baseCommodityService.BaseSearchs(payload);
        }
        return result;
    }
    searchFilter(locale, data) {
        return data.map((item) => {
            if (item.name) {
                item.name = item.name[locale];
            }
            if (item.desc) {
                item.desc = item.desc[locale];
            }
            if (item.price) {
                item.price = item.price[locale];
            }
            if (item.photos) {
                item.photos = item.photos.map(item => item.src);
            }
            return item;
        });
    }
    async deleteCommodityId(commodityId) {
        const data = await this.baseCommodityService.BaseDeleteCommodityId(commodityId);
        if (data.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async deleteAll() {
        const data = await this.baseCommodityService.BaseDeleteAll();
        if (data.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async hasCommodity(commodityId) {
        const data = await this.baseCommodityService.BaseHas(commodityId);
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
        const data = await this.baseCommodityService.BaseUpdate(payload);
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
    async retrieveCommmoditySellerId(sellerId) {
        const data = await this.baseCommodityService.baseRetrieveCommmodity(sellerId);
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
    async retrieveCommmoditySellerPagination(payload) {
        const result = await this.baseCommodityService.baseRetrieveCommmodityPagination({
            sellerId: payload.sellerId,
            pageSize: payload.pageSize,
            currentPage: payload.currentPage,
        });
        let data = result[0];
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
    async retrieveCommodityId(commodityId) {
        const data = await this.baseCommodityService.BaseRetrieveCommodityId(commodityId);
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
    async choiceCommodity(payload) {
        const data = await this.baseCommodityService.baseChoiceCommodity(payload);
        if (data) {
            for (let item of data) {
                const name = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                if (name.success) {
                    item.name = payload.isLocale ? name.data[payload.locale] : name.data;
                }
                const photos = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                if (photos.success) {
                    item.photos = photos.data.map(item => item.src);
                }
                const videos = await this.commodityAttributeVideo.retrieveCommodityId(item.commodityId);
                if (videos.success) {
                    item.videos = videos.data;
                }
            }
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
    async retrieveSellerCount(sellerId) {
        const data = await this.baseCommodityService.baseRetrieveSellerCount(sellerId);
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
    async likes(payload) {
        const data = await this.baseCommodityService.BaseUpdate({
            likes: payload.likes,
            commodityId: payload.commodityId
        });
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
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.BaseCommodityService)
], CommodityCommodityService.prototype, "baseCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", metadata_1.BaseSellerMetadataService)
], CommodityCommodityService.prototype, "baseSellerMetadataService", void 0);
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
    __metadata("design:type", details_1.CommodityAttributeDetails)
], CommodityCommodityService.prototype, "commodityAttributeDetails", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", postage_1.CommodityAttributePostage)
], CommodityCommodityService.prototype, "commodityAttributePostage", void 0);
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
    __metadata("design:type", video_1.CommodityAttributeVideo)
], CommodityCommodityService.prototype, "commodityAttributeVideo", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", color_1.CommodityAttributeColor)
], CommodityCommodityService.prototype, "commodityAttributeColor", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityCategoryService)
], CommodityCommodityService.prototype, "commodityCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", classification_1.CommodityClassificationService)
], CommodityCommodityService.prototype, "commodityClassificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", material_1.CommodityMaterialService)
], CommodityCommodityService.prototype, "commodityMaterialService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", model_1.CommodityModelService)
], CommodityCommodityService.prototype, "commodityModelService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", place_1.CommodityPlaceService)
], CommodityCommodityService.prototype, "commodityPlaceService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", ruiwu_1.CommodityRuiwuService)
], CommodityCommodityService.prototype, "commodityRuiwuService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityShapeService)
], CommodityCommodityService.prototype, "commodityShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", specification_1.CommoditySpecificationService)
], CommodityCommodityService.prototype, "commoditySpecificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", style_1.CommodityStyleService)
], CommodityCommodityService.prototype, "commodityStyleService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityTechniqueService)
], CommodityCommodityService.prototype, "commodityTechniqueService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityThemeService)
], CommodityCommodityService.prototype, "commodityThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_1.CommodityTypeService)
], CommodityCommodityService.prototype, "commodityTypeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", use_1.CommodityUseService)
], CommodityCommodityService.prototype, "commodityUseService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodityOption_1.CommodityOptionService)
], CommodityCommodityService.prototype, "commodityOptionService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], CommodityCommodityService.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_2.BaseSellerService)
], CommodityCommodityService.prototype, "baseSellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_search_1.CommoditySearchService)
], CommodityCommodityService.prototype, "commoditySearchService", void 0);
CommodityCommodityService = __decorate([
    decorator_1.Provide()
], CommodityCommodityService);
exports.CommodityCommodityService = CommodityCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsMkRBQW1FO0FBQ25FLDJDQUEwRDtBQUMxRCwyQ0FBMEQ7QUFDMUQsaURBQWdFO0FBQ2hFLGlEQUFnRTtBQUNoRSw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsMkRBQXdFO0FBQ3hFLHVFQUFvRjtBQUNwRiwyREFBd0U7QUFDeEUscURBQWtFO0FBQ2xFLHFEQUFrRTtBQUNsRSxxREFBa0U7QUFDbEUscURBQWtFO0FBQ2xFLHFFQUFrRjtBQUNsRixxREFBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLHFEQUFrRTtBQUNsRSxtREFBZ0U7QUFDaEUsaURBQThEO0FBQzlELHNEQUE2RTtBQUU3RSx1REFBMkQ7QUFDM0QsMkNBQXdEO0FBQ3hELGtEQUFtRTtBQUduRSx5REFBMkQ7QUFHM0QsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFvRnBDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVztRQUNwQixJQUFJLFNBQVMsR0FBTyxFQUFFLENBQUM7UUFDdkIsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRyxJQUFHLG9CQUFvQixFQUFFO1lBQ3ZCLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQTtZQUNoQyxJQUFHLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtnQkFDOUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7YUFDaEQ7U0FDRjtRQVFELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENB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Q0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUks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LENBQUMsRUFBRSxDQUFDO1lBRTVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNsRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25HLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUcsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFB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