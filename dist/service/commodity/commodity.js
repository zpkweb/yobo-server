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
    async clientSearch(payload) {
        const result = await this.searchs(payload);
        let data = result[0];
        let total = result[1];
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
        const result = await this.searchs(payload);
        let data = result[0];
        let total = result[1];
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
CommodityCommodityService = __decorate([
    decorator_1.Provide()
], CommodityCommodityService);
exports.CommodityCommodityService = CommodityCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsMkRBQWtFO0FBQ2xFLDJDQUEwRDtBQUMxRCwyQ0FBMEQ7QUFDMUQsNkNBQTREO0FBQzVELDZDQUE0RDtBQUM1RCw2Q0FBNEQ7QUFDNUQsMkRBQXdFO0FBQ3hFLHVFQUFvRjtBQUNwRiwyREFBd0U7QUFDeEUscURBQWtFO0FBQ2xFLHFEQUFrRTtBQUNsRSxxREFBa0U7QUFDbEUscURBQWtFO0FBQ2xFLHFFQUFrRjtBQUNsRixxREFBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLHFEQUFrRTtBQUNsRSxtREFBZ0U7QUFDaEUsaURBQThEO0FBQzlELHNEQUE0RTtBQUU1RSx1REFBMkQ7QUFDM0QsMkNBQXdEO0FBQ3hELGtEQUFrRTtBQUdsRSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQXdFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO1FBQ3BCLElBQUksU0FBUyxHQUFPLEVBQUUsQ0FBQztRQUN2QixNQUFNLG1CQUFtQixHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hHLElBQUcsbUJBQW1CLEVBQUU7WUFDdEIsU0FBUyxHQUFHLG1CQUFtQixDQUFBO1lBQy9CLElBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFO2dCQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQzthQUMvQztTQUNGO1FBUUQsTUFBTSx1QkFBdUIsR0FBSSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRyxJQUFHLHVCQUF1QixFQUFFO1lBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1NBQ2pEO1FBRUQsTUFBTSxzQkFBc0IsR0FBSSxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRyxJQUFHLHNCQUFzQixFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1NBQzlDO1FBRUQsTUFBTSxzQkFBc0IsR0FBSSxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuRyxJQUFHLHNCQUFzQixFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1NBQzlDO1FBRUQsTUFBTSx1QkFBdUIsR0FBSSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRyxJQUFHLHVCQUF1QixFQUFFO1lBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1NBQ2pEO1FBRUQsTUFBTSx1QkFBdUIsR0FBSSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRyxJQUFHLHVCQUF1QixFQUFFO1lBQzFCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1NBQ2hEO1FBR0QsTUFBTSx3QkFBd0IsR0FBSSxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RyxJQUFHLHdCQUF3QixFQUFFO1lBQzNCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDO1NBQ3JEO1FBRUQsTUFBTSw4QkFBOEIsR0FBSSxNQUFNLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENB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