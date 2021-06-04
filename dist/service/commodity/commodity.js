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
        const baseCommodityServer = await this.baseCommodityServer.BaseRetrieveCommodityId(commodityId);
        if (baseCommodityServer) {
            commodity = baseCommodityServer;
            if (baseCommodityServer.seller) {
                commodity.seller = baseCommodityServer.seller;
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
        const baseCommodityServer = await this.baseCommodityServer.BaseRetrieveCommodityId(payload.commodityId);
        if (baseCommodityServer) {
            const { seller, ...commodityData } = baseCommodityServer;
            commodity = commodityData;
            if (seller && seller.sellerId) {
                const sellerData = await this.baseSellerServer.baseRetrieveSeller(seller.sellerId);
                if (sellerData && sellerData.user) {
                    seller.user = sellerData.user;
                }
                const sellerMetadata = await this.baseSellerMetadataServer.baseRetrieve(seller.sellerId);
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
    async serverSearch(payload) {
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
            height: payload.height || 0
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
            name: 'details',
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
            console.log("video item", item);
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
        const data = await this.baseCommodityServer.BaseCreate(payload);
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
        else if (payload.remove) {
            return await this.baseCommodityServer.BaseRelationRemove({
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
        let data = await this.baseCommodityServer.BaseRetrieve(payload.commodityId);
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
        let result = await this.baseCommodityServer.BaseRetrieveAll(payload);
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
        let result = await this.baseCommodityServer.BaseRetrievePhoto(payload);
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
        let data = await this.baseCommodityServer.BaseRetrieveSeller(commodityId);
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
        let data = await this.baseCommodityServer.BaseRetrieveCategory(id);
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
        let result = await this.baseCommodityServer.BaseSearch(payload);
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
            result = await this.baseCommodityServer.BaseRetrieveAll(payload);
        }
        else {
            result = await this.baseCommodityServer.BaseSearchs(payload);
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
        const data = await this.baseCommodityServer.BaseDeleteCommodityId(commodityId);
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
        const data = await this.baseCommodityServer.BaseDeleteAll();
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
    async retrieveCommmoditySellerId(sellerId) {
        const data = await this.baseCommodityServer.baseRetrieveCommmodity(sellerId);
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
        const result = await this.baseCommodityServer.baseRetrieveCommmodityPagination({
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
        const data = await this.baseCommodityServer.BaseRetrieveCommodityId(commodityId);
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
        const data = await this.baseCommodityServer.baseChoiceCommodity(payload);
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
        const data = await this.baseCommodityServer.baseRetrieveSellerCount(sellerId);
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
    __metadata("design:type", commodity_1.BaseCommodityServer)
], CommodityCommodityService.prototype, "baseCommodityServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", metadata_1.BaseSellerMetadataServer)
], CommodityCommodityService.prototype, "baseSellerMetadataServer", void 0);
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
    __metadata("design:type", seller_2.BaseSellerServer)
], CommodityCommodityService.prototype, "baseSellerServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_search_1.CommoditySearchService)
], CommodityCommodityService.prototype, "commoditySearchService", void 0);
CommodityCommodityService = __decorate([
    decorator_1.Provide()
], CommodityCommodityService);
exports.CommodityCommodityService = CommodityCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsMkRBQWtFO0FBQ2xFLDJDQUEwRDtBQUMxRCwyQ0FBMEQ7QUFDMUQsaURBQWdFO0FBQ2hFLGlEQUFnRTtBQUNoRSw2Q0FBNEQ7QUFDNUQsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsMkRBQXdFO0FBQ3hFLHVFQUFvRjtBQUNwRiwyREFBd0U7QUFDeEUscURBQWtFO0FBQ2xFLHFEQUFrRTtBQUNsRSxxREFBa0U7QUFDbEUscURBQWtFO0FBQ2xFLHFFQUFrRjtBQUNsRixxREFBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLHFEQUFrRTtBQUNsRSxtREFBZ0U7QUFDaEUsaURBQThEO0FBQzlELHNEQUE0RTtBQUU1RSx1REFBMkQ7QUFDM0QsMkNBQXdEO0FBQ3hELGtEQUFrRTtBQUdsRSx5REFBMkQ7QUFHM0QsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFvRnBDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVztRQUNwQixJQUFJLFNBQVMsR0FBTyxFQUFFLENBQUM7UUFDdkIsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRyxJQUFHLG1CQUFtQixFQUFFO1lBQ3RCLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQTtZQUMvQixJQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtnQkFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7YUFDL0M7U0FDRjtRQVFELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENB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Q0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0sNkJBQTZCLEdBQUksTUFBTSxJQUFJLENBQUMsNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpILElBQUcsNkJBQTZCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQztTQUNqSztRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0seUJBQXlCLEdBQUksTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpILElBQUcseUJBQXlCLENBQUMsT0FBTyxFQUFFO1lBQ3BDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztTQUNySjtRQUVELE1BQU0scUJBQXFCLEdBQUksTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpHLElBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztTQUN6STtRQUVELE1BQU0sb0JBQW9CLEdBQUksTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZHLElBQUcsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1lBQy9CLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztTQUN0STtRQUVELE1BQU0sbUJBQW1CLEdBQUksTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJHLElBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFO1lBQzlCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNuSTtRQUtELElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTztnQkFDTCxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFHRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUV4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDakIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUcsSUFBSSxFQUFDO1lBQ0osS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sc0JBQXNCLEdBQUksTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RyxJQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDO2dCQUtELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzNDO2dCQU1ELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVDO2dCQUVELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVDO2dCQUdELE1BQU0sZUFBZSxHQUFRLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pFLElBQUcsZUFBZSxFQUFFO29CQUNsQixJQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUM5QixNQUFNLHdCQUF3QixHQUFJLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlHLElBQUcsd0JBQXdCLEVBQUU7NEJBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDO3lCQUM3Qzt3QkFFRCxJQUFJLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekcsSUFBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUM7NEJBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7eUJBQ2pEO3FCQUNGO2lCQUNGO2FBQ0Y7WUFFSCxJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUM7Z0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDL0M7WUFDRCxPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLO2lCQUNOO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUVGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUl4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDakIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUcsSUFBSSxFQUFDO1lBQ0osS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sc0JBQXNCLEdBQUksTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RyxJQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDO2dCQUNELE1BQU0sc0JBQXNCLEdBQUksTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RyxJQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDO2dCQUVELE1BQU0seUJBQXlCLEdBQUksTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RyxJQUFHLHlCQUF5QixDQUFDLE9BQU8sRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7aUJBQy9DO2dCQUVELE1BQU0seUJBQXlCLEdBQUksTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RyxJQUFHLHlCQUF5QixDQUFDLE9BQU8sRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7aUJBQy9DO2dCQUVELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzNDO2dCQUNELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVDO2dCQUVELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVDO2dCQUVELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRyxJQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVDO2dCQUVELE1BQU0sZUFBZSxHQUFRLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pFLElBQUcsZUFBZSxFQUFFO29CQUNsQixJQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUM5QixNQUFNLHdCQUF3QixHQUFJLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlHLElBQUcsd0JBQXdCLENBQUMsT0FBTyxFQUFFOzRCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLElBQUksQ0FBQzt5QkFDN0M7cUJBTUY7aUJBQ0Y7YUFDRjtZQUVILElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztnQkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTthQUMvQztZQUNELE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUs7aUJBQ047Z0JBQ0QsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBRUY7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBTUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBSWxCLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMxQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQzNCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUc7WUFDM0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQztZQUN6QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO1NBQzVCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3RCLE9BQU8sU0FBUyxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBRzVDLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztZQUM3RCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1NBQ3JDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sYUFBYSxDQUFBO1NBQ3JCO1FBR0QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xCLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDeEMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1NBQ3RCLENBQUMsQ0FBQTtRQUdGLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztZQUM3RCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1NBQ3JDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sYUFBYSxDQUFBO1NBQ3JCO1FBS0QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xCLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDeEMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1NBQ3RCLENBQUMsQ0FBQTtRQUdGLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDO1lBQ25FLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDeEMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM3QixPQUFPLGdCQUFnQixDQUFBO1NBQ3hCO1FBR0QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDeEMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEVBQUU7U0FDekIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7WUFDbkUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtTQUN4QyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzdCLE9BQU8sZ0JBQWdCLENBQUE7U0FDeEI7UUFHRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7WUFDZixFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN4QyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtTQUN6QixDQUFDLENBQUE7UUFHRixNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7WUFDL0QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNwQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUNyQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUMzQixPQUFPLGNBQWMsQ0FBQTtTQUN0QjtRQUdELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3hDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTtTQUN2QixDQUFDLENBQUE7UUFJRixLQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDN0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO2dCQUMvRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7Z0JBQ2hDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sY0FBYyxDQUFBO2FBQ3RCO1lBRUQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDeEMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO2FBQ3ZCLENBQUMsQ0FBQTtTQUNIO1FBRUQsS0FBSSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQy9CLE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztnQkFDL0QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDM0IsT0FBTyxjQUFjLENBQUE7YUFDdEI7WUFFRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2xCLElBQUksRUFBRSxRQUFRO2dCQUNkLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN4QyxHQUFHLEVBQUUsY0FBYyxDQUFDLEVBQUU7YUFDdkIsQ0FBQyxDQUFBO1NBQ0g7UUFHRCxLQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDN0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO2dCQUMvRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7Z0JBQ2hDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEssUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9KLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMzQixPQUFPLGNBQWMsQ0FBQTthQUN0QjtZQUVELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTthQUN2QixDQUFDLENBQUE7U0FDSDtRQUVELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBRWhCLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTthQUMzQyxDQUFDLENBQUE7U0FDSDtRQUdELElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNoQixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBRUgsQ0FBQztJQUdELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7Z0JBQzlDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUlELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUNwQixJQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztnQkFDcEQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUNsQixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ2QsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO2FBQ2pCLENBQUMsQ0FBQTtTQUNIO2FBQUssSUFBRyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO2dCQUNwRCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ2xCLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDZCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7YUFBSyxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDdkQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUNsQixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3ZCLENBQUMsQ0FBQTtTQUNIO0lBRUgsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixJQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVM7Z0JBQzNCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUVELElBQUcsT0FBTyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBQztZQUMzRCxNQUFNLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZELFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZTtnQkFDakMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBRUQsSUFBRyxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQztnQkFDakQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTO2dCQUMzQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUVELElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUN6QyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7Z0JBQzlDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztnQkFDOUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsT0FBTyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQztZQUN6RCxNQUFNLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxjQUFjLENBQUM7Z0JBQ3RELFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYztnQkFDaEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztnQkFDOUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7WUFDakQsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDO2dCQUNsRCxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVU7Z0JBQzVCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUN6QyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7Z0JBQzlDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztnQkFDN0MsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUN2QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDckMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO2dCQUM1QyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ3RCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtJQUVILENBQUM7SUFPRCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU87UUFFMUIsSUFBRyxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQy9DLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQztnQkFDakQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTO2dCQUMzQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxJQUFHLE9BQU8sQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsY0FBYyxDQUFDO2dCQUN2RCxRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWU7Z0JBQ2pDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUVELElBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztZQUMvQyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pELFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUztnQkFDM0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBRUQsSUFBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztnQkFDOUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUN6QyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7Z0JBQzlDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3pDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztnQkFDOUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN4QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDekQsTUFBTSxJQUFJLENBQUMsNkJBQTZCLENBQUMsY0FBYyxDQUFDO2dCQUN0RCxRQUFRLEVBQUUsT0FBTyxDQUFDLGNBQWM7Z0JBQ2hDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUN6QyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUM7Z0JBQzlDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO1lBQ2pELE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQztnQkFDbEQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxVQUFVO2dCQUM1QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7WUFDekMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDO2dCQUM5QyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDdkIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ3JDLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztnQkFDNUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUN0QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFBO1NBQ0g7SUFJSCxDQUFDO0lBU0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU87UUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1lBQzFELElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFPRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTztRQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxFQUFFLFFBQVE7WUFDZCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQVFELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztZQUMxRCxJQUFJLEVBQUUsV0FBVztZQUNqQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7WUFDaEMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU9ELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPO1FBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztZQUMxRCxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBT0QsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU87UUFDakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1lBQzFELElBQUksRUFBRSxZQUFZO1lBQ2xCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztZQUNoQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBT0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU87UUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1lBQzFELElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFTRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDcEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1RSxJQUFJLElBQUksRUFBRTtZQUNSLElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7WUFDRCxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQVNDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTztRQUV2QixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztnQkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTthQUMvQztZQUNELE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUs7aUJBQ047Z0JBQ0QsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1FBQ3pCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUM7Z0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDL0M7WUFDRCxPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLO2lCQUNOO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVztRQUM5QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDdkIsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQVFELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUVsQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRTVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUU1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNuRyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVHLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFL0csT0FBTztnQkFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJO2dCQUNKLElBQUk7Z0JBQ0osS0FBSztnQkFDTCxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sU0FBUztnQkFDVCxVQUFVO2dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFHLEVBQUU7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzthQUM5QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBSUgsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO2dCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3pDO1lBQ0QsT0FBTztnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSztpQkFDTjtnQkFDRCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFFbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNkLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdkIsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUM7WUFDZCxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsSUFBRyxPQUFPLENBQUMsSUFBSSxFQUFDO1lBQ2QsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUNELElBQUcsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNoQixTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRWxCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRXBDLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLENBQUM7b0JBQ04sR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2QsQ0FBQTthQUNGO2lCQUFLLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sQ0FBQyxLQUFLLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2QsQ0FBQTthQUNGO1NBRUY7YUFBSTtZQUNILE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1NBQ25CO1FBRUQsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ2hCLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbks7aUJBQUk7Z0JBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pKO1NBR0Y7UUFHRCxJQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUM7WUFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEQ7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7U0FDdkI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUM7WUFDekIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLGVBQWUsSUFBSSxRQUFRLEVBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUQ7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUE7U0FDN0I7UUFJRCxJQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUM7WUFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEQ7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7U0FDdkI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDcEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDcEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDcEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDcEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUM7WUFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLGNBQWMsSUFBSSxRQUFRLEVBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUQ7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUE7U0FDNUI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUM7WUFDcEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLFVBQVUsSUFBSSxRQUFRLEVBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEQ7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7U0FDeEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFHLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFJO1lBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDcEI7UUFFRCxJQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUM7WUFDZixTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUcsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBQztnQkFDbEMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQztTQUNGO2FBQUk7WUFDSCxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtTQUNuQjtRQUVELElBQUcsT0FBTyxDQUFDLElBQUksRUFBQztZQUNkLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBRyxPQUFPLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO2dCQUNqQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7YUFBSTtZQUNILE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1NBQ2xCO1FBRUQsSUFBSSxNQUFNLENBQUM7UUFFWCxJQUFHLFNBQVMsRUFBQztZQUNYLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEU7YUFBSTtZQUNILE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FFOUQ7UUFpQkQsT0FBTyxNQUFNLENBQUM7SUFzQmhCLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDdkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFFdkIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO2dCQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUM5QjtZQUVELElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztnQkFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDOUI7WUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2hDO1lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDaEQ7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTO1FBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXO1FBQzVCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBSUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFHRCxLQUFLLENBQUMsMEJBQTBCLENBQUMsUUFBUTtRQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLE9BQU87UUFDOUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUM7WUFDN0UsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsV0FBVztRQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRixJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxHQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdFLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckYsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3RFO2dCQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEYsSUFBRyxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRDtnQkFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hGLElBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFBO2lCQUMxQjthQUNGO1lBQ0QsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsUUFBUTtRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTV3REM7SUFEQyxrQkFBTSxFQUFFOzhCQUNZLCtCQUFtQjtzRUFBQztBQUd6QztJQURDLGtCQUFNLEVBQUU7OEJBQ2lCLG1DQUF3QjsyRUFBQztBQUduRDtJQURDLGtCQUFNLEVBQUU7OEJBQ2UsNkJBQXNCO3lFQUFDO0FBRy9DO0lBREMsa0JBQU0sRUFBRTs4QkFDZSw2QkFBc0I7eUVBQUM7QUFHL0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNrQixtQ0FBeUI7NEVBQUM7QUFHckQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNrQixtQ0FBeUI7NEVBQUM7QUFHckQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQiwrQkFBdUI7MEVBQUM7QUFHakQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQiwrQkFBdUI7MEVBQUM7QUFHakQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQiwrQkFBdUI7MEVBQUM7QUFHakQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQiwrQkFBdUI7MEVBQUM7QUFHakQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNpQixtQ0FBd0I7MkVBQUM7QUFHbkQ7SUFEQyxrQkFBTSxFQUFFOzhCQUN1QiwrQ0FBOEI7aUZBQUM7QUFHL0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNpQixtQ0FBd0I7MkVBQUM7QUFHbkQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNjLDZCQUFxQjt3RUFBQztBQUc3QztJQURDLGtCQUFNLEVBQUU7OEJBQ2MsNkJBQXFCO3dFQUFDO0FBRzdDO0lBREMsa0JBQU0sRUFBRTs4QkFDYyw2QkFBcUI7d0VBQUM7QUFHN0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNjLDZCQUFxQjt3RUFBQztBQUc3QztJQURDLGtCQUFNLEVBQUU7OEJBQ3NCLDZDQUE2QjtnRkFBQztBQUc3RDtJQURDLGtCQUFNLEVBQUU7OEJBQ2MsNkJBQXFCO3dFQUFDO0FBRzdDO0lBREMsa0JBQU0sRUFBRTs4QkFDa0IscUNBQXlCOzRFQUFDO0FBR3JEO0lBREMsa0JBQU0sRUFBRTs4QkFDYyw2QkFBcUI7d0VBQUM7QUFHN0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNhLDJCQUFvQjt1RUFBQztBQUczQztJQURDLGtCQUFNLEVBQUU7OEJBQ1kseUJBQW1CO3NFQUFDO0FBR3pDO0lBREMsa0JBQU0sRUFBRTs4QkFDZSx3Q0FBc0I7eUVBQUM7QUFHL0M7SUFEQyxrQkFBTSxFQUFFOzhCQUNNLHNCQUFhO2dFQUFDO0FBRzdCO0lBREMsa0JBQU0sRUFBRTs4QkFDUyx5QkFBZ0I7bUVBQUM7QUFHbkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNlLHlDQUFzQjt5RUFBQztBQWpGcEMseUJBQXlCO0lBRHJDLG1CQUFPLEVBQUU7R0FDRyx5QkFBeUIsQ0Erd0RyQztBQS93RFksOERBQXlCIn0=