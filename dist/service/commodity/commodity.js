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
        if (commodityAttributeColor) {
            commodity.colors = commodityAttributeColor.data;
        }
        const commodityAttributeDesc = await this.commodityAttributeDesc.retrieveCommodityId(commodityId);
        if (commodityAttributeDesc) {
            commodity.desc = commodityAttributeDesc.data;
        }
        const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(commodityId);
        if (commodityAttributeName) {
            commodity.name = commodityAttributeName.data;
        }
        const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(commodityId);
        if (commodityAttributePhoto) {
            commodity.photos = commodityAttributePhoto.data;
        }
        const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(commodityId);
        if (commodityAttributePrice) {
            commodity.price = commodityAttributePrice.data;
        }
        const commodityCategoryService = await this.commodityCategoryService.retrieveCommodityId(commodityId);
        if (commodityCategoryService) {
            commodity.categorys = commodityCategoryService.data;
        }
        const commodityClassificationService = await this.commodityClassificationService.retrieveCommodityId(commodityId);
        if (commodityClassificationService) {
            commodity.classifications = commodityClassificationService.data;
        }
        const commodityMaterialService = await this.commodityMaterialService.retrieveCommodityId(commodityId);
        if (commodityMaterialService) {
            commodity.materials = commodityMaterialService.data;
        }
        const commodityModelService = await this.commodityModelService.retrieveCommodityId(commodityId);
        if (commodityModelService) {
            commodity.models = commodityModelService.data;
        }
        const commodityPlaceService = await this.commodityPlaceService.retrieveCommodityId(commodityId);
        if (commodityPlaceService) {
            commodity.places = commodityPlaceService.data;
        }
        const commodityRuiwuService = await this.commodityRuiwuService.retrieveCommodityId(commodityId);
        if (commodityRuiwuService) {
            commodity.ruiwus = commodityRuiwuService.data;
        }
        const commodityShapeService = await this.commodityShapeService.retrieveCommodityId(commodityId);
        if (commodityShapeService) {
            commodity.shapes = commodityShapeService.data;
        }
        const commoditySpecificationService = await this.commoditySpecificationService.retrieveCommodityId(commodityId);
        if (commoditySpecificationService) {
            commodity.specifications = commoditySpecificationService.data;
        }
        const commodityStyleService = await this.commodityStyleService.retrieveCommodityId(commodityId);
        if (commodityStyleService) {
            commodity.styles = commodityStyleService.data;
        }
        const commodityTechniqueService = await this.commodityTechniqueService.retrieveCommodityId(commodityId);
        if (commodityTechniqueService) {
            commodity.techniques = commodityTechniqueService.data;
        }
        const commodityThemeService = await this.commodityThemeService.retrieveCommodityId(commodityId);
        if (commodityThemeService) {
            commodity.themes = commodityThemeService.data;
        }
        const commodityTypeService = await this.commodityTypeService.retrieveCommodityId(commodityId);
        if (commodityTypeService) {
            commodity.types = commodityTypeService.data;
        }
        const commodityUseService = await this.commodityUseService.retrieveCommodityId(commodityId);
        if (commodityUseService) {
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
                            if (commodityAttributeName) {
                                item.name = commodityAttributeName.data[payload.locale];
                            }
                            const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                            if (commodityAttributePhoto) {
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
        if (commodityAttributeDesc) {
            commodity.desc = payload.isLocale ? commodityAttributeDesc.data[payload.locale] : commodityAttributeDesc.data;
        }
        const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(payload.commodityId);
        if (commodityAttributeName) {
            commodity.name = payload.isLocale ? commodityAttributeName.data[payload.locale] : commodityAttributeName.data;
        }
        const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(payload.commodityId);
        if (commodityAttributePhoto) {
            commodity.photos = commodityAttributePhoto.data;
        }
        const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(payload.commodityId);
        if (commodityAttributePrice) {
            commodity.price = payload.isLocale ? commodityAttributePrice.data[payload.locale] : commodityAttributePrice.data;
        }
        const commodityCategoryService = await this.commodityCategoryService.retrieveCommodityId(payload.commodityId);
        if (commodityCategoryService) {
            commodity.categorys = payload.isLocale ? commodityCategoryService.data.map(item => item.options[payload.locale]) : commodityCategoryService.data;
        }
        const commodityClassificationService = await this.commodityClassificationService.retrieveCommodityId(payload.commodityId);
        if (commodityClassificationService) {
            commodity.classifications = payload.isLocale ? commodityClassificationService.data.map(item => item.options[payload.locale]) : commodityClassificationService.data;
        }
        const commodityMaterialService = await this.commodityMaterialService.retrieveCommodityId(payload.commodityId);
        if (commodityMaterialService) {
            commodity.materials = payload.isLocale ? commodityMaterialService.data.map(item => item.options[payload.locale]) : commodityMaterialService.data;
        }
        const commodityModelService = await this.commodityModelService.retrieveCommodityId(payload.commodityId);
        if (commodityModelService) {
            commodity.models = payload.isLocale ? commodityModelService.data.map(item => item.options[payload.locale]) : commodityModelService.data;
        }
        const commodityPlaceService = await this.commodityPlaceService.retrieveCommodityId(payload.commodityId);
        if (commodityPlaceService) {
            commodity.places = payload.isLocale ? commodityPlaceService.data.map(item => item.options[payload.locale]) : commodityPlaceService.data;
        }
        const commodityRuiwuService = await this.commodityRuiwuService.retrieveCommodityId(payload.commodityId);
        if (commodityRuiwuService) {
            commodity.ruiwus = payload.isLocale ? commodityRuiwuService.data.map(item => item.options[payload.locale]) : commodityRuiwuService.data;
        }
        const commodityShapeService = await this.commodityShapeService.retrieveCommodityId(payload.commodityId);
        if (commodityShapeService) {
            commodity.shapes = payload.isLocale ? commodityShapeService.data.map(item => item.options[payload.locale]) : commodityShapeService.data;
        }
        const commoditySpecificationService = await this.commoditySpecificationService.retrieveCommodityId(payload.commodityId);
        if (commoditySpecificationService) {
            commodity.specifications = payload.isLocale ? commoditySpecificationService.data.map(item => item.options[payload.locale]) : commoditySpecificationService.data;
        }
        const commodityStyleService = await this.commodityStyleService.retrieveCommodityId(payload.commodityId);
        if (commodityStyleService) {
            commodity.styles = payload.isLocale ? commodityStyleService.data.map(item => item.options[payload.locale]) : commodityStyleService.data;
        }
        const commodityTechniqueService = await this.commodityTechniqueService.retrieveCommodityId(payload.commodityId);
        if (commodityTechniqueService) {
            commodity.techniques = payload.isLocale ? commodityTechniqueService.data.map(item => item.options[payload.locale]) : commodityTechniqueService.data;
        }
        const commodityThemeService = await this.commodityThemeService.retrieveCommodityId(payload.commodityId);
        if (commodityThemeService) {
            commodity.themes = payload.isLocale ? commodityThemeService.data.map(item => item.options[payload.locale]) : commodityThemeService.data;
        }
        const commodityTypeService = await this.commodityTypeService.retrieveCommodityId(payload.commodityId);
        if (commodityTypeService) {
            commodity.types = payload.isLocale ? commodityTypeService.data.map(item => item.options[payload.locale]) : commodityTypeService.data;
        }
        const commodityUseService = await this.commodityUseService.retrieveCommodityId(payload.commodityId);
        if (commodityUseService) {
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
                if (commodityAttributeName) {
                    item.name = commodityAttributeName.data;
                }
                const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
                if (commodityAttributePrice) {
                    item.price = commodityAttributePrice.data;
                }
                const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                if (commodityAttributePhoto) {
                    item.photos = commodityAttributePhoto.data;
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
                if (commodityAttributeName) {
                    item.name = commodityAttributeName.data;
                }
                const commodityAttributeDesc = await this.commodityAttributeDesc.retrieveCommodityId(item.commodityId);
                if (commodityAttributeDesc) {
                    item.desc = commodityAttributeDesc.data;
                }
                const commodityAttributePrice = await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
                if (commodityAttributePrice) {
                    item.price = commodityAttributePrice.data;
                }
                const commodityAttributeColor = await this.commodityAttributeColor.retrieveCommodityId(item.commodityId);
                if (commodityAttributeColor) {
                    item.colors = commodityAttributeColor.data;
                }
                const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                if (commodityAttributePhoto) {
                    item.photos = commodityAttributePhoto.data;
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
        payload.commodityId = commodity.data.generatedMaps[0].commodityId;
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
            set: commodityName.data.identifiers[0].id
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
            set: commodityDesc.data.identifiers[0].id
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
            set: commodityPrice.data.identifiers[0].id
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
                add: commodityPhoto.data.identifiers[0].id
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
                add: commodityColor.data.identifiers[0].id
            });
        }
        await this.relationCreate(payload);
        if (payload.seller) {
            await this.relation({
                name: 'seller',
                of: commodity.data.identifiers[0].id,
                set: { sellerId: payload.seller.sellerId }
            });
        }
        if (commodity.data.identifiers[0].id) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsMkRBQWtFO0FBQ2xFLDJDQUEwRDtBQUMxRCwyQ0FBMEQ7QUFDMUQsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsMkRBQXdFO0FBQ3hFLHVFQUFvRjtBQUNwRiwyREFBd0U7QUFDeEUscURBQWtFO0FBQ2xFLHFEQUFrRTtBQUNsRSxxREFBa0U7QUFDbEUscURBQWtFO0FBQ2xFLHFFQUFrRjtBQUNsRixxREFBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLHFEQUFrRTtBQUNsRSxtREFBZ0U7QUFDaEUsaURBQThEO0FBQzlELHNEQUE0RTtBQUU1RSx1REFBMkQ7QUFDM0QsMkNBQXdEO0FBQ3hELGtEQUFrRTtBQUdsRSx5REFBMkQ7QUFHM0QsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUEyRXBDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVztRQUNwQixJQUFJLFNBQVMsR0FBTyxFQUFFLENBQUM7UUFDdkIsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRyxJQUFHLG1CQUFtQixFQUFFO1lBQ3RCLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQTtZQUMvQixJQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtnQkFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7YUFDL0M7U0FDRjtRQVFELE1BQU0sdUJBQXVCLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENB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LElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUU1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFB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