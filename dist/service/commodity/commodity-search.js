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
exports.CommoditySearchService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const commodity_1 = require("../base/commodity/commodity");
const name_1 = require("./attribute/name");
const desc_1 = require("./attribute/desc");
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
let CommoditySearchService = class CommoditySearchService {
    async search(payload) {
        console.log("search", payload);
        var commodityIds = [];
        let isSearchCommodityIds = false;
        let searchResule = true;
        if (searchResule && payload.name) {
            isSearchCommodityIds = true;
            commodityIds = await this.getCommodityId('name', payload.name, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.desc) {
            isSearchCommodityIds = true;
            commodityIds = await this.getCommodityId('desc', payload.desc, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.colors) {
            isSearchCommodityIds = true;
            let color;
            if (payload.colors.substr(0, 1) == '#') {
                color = payload.colors.substr(1).toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
            }
            else {
                color = payload.colors.toLowerCase().split('').reduce((result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
            }
            commodityIds = await this.getCommodityId('color', color, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.price) {
            isSearchCommodityIds = true;
            let price = payload.price.split(',');
            let priceMin = '';
            let priceMax = '';
            if (price.length === 1) {
                priceMin = '0';
                priceMax = price[0];
            }
            else if (price.length === 2) {
                priceMin = price[0];
                priceMax = price[1];
            }
            commodityIds = await this.getCommodityId('price', [priceMin, priceMax], commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.categorys && payload.categorys.length) {
            isSearchCommodityIds = true;
            if (typeof payload.categorys == 'string') {
                payload.categorys = payload.categorys.split(',');
            }
            commodityIds = await this.getCommodityId('categorys', payload.categorys, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.classifications && payload.classifications.length) {
            isSearchCommodityIds = true;
            if (typeof payload.classifications == 'string') {
                payload.classifications = payload.classifications.split(',');
            }
            commodityIds = await this.getCommodityId('classifications', payload.classifications, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.materials && payload.materials.length) {
            isSearchCommodityIds = true;
            if (typeof payload.materials == 'string') {
                payload.materials = payload.materials.split(',');
            }
            commodityIds = await this.getCommodityId('materials', payload.materials, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.models && payload.models.length) {
            isSearchCommodityIds = true;
            if (typeof payload.models == 'string') {
                payload.models = payload.models.split(',');
            }
            commodityIds = await this.getCommodityId('models', payload.models, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.places && payload.places.length) {
            isSearchCommodityIds = true;
            if (typeof payload.places == 'string') {
                payload.places = payload.places.split(',');
            }
            commodityIds = await this.getCommodityId('places', payload.places, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.ruiwus && payload.ruiwus.length) {
            isSearchCommodityIds = true;
            if (typeof payload.ruiwus == 'string') {
                payload.ruiwus = payload.ruiwus.split(',');
            }
            commodityIds = await this.getCommodityId('ruiwus', payload.ruiwus, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.shapes && payload.shapes.length) {
            isSearchCommodityIds = true;
            if (typeof payload.shapes == 'string') {
                payload.shapes = payload.shapes.split(',');
            }
            commodityIds = await this.getCommodityId('shapes', payload.shapes, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.specifications && payload.specifications.length) {
            isSearchCommodityIds = true;
            if (typeof payload.specifications == 'string') {
                payload.specifications = payload.specifications.split(',');
            }
            commodityIds = await this.getCommodityId('specifications', payload.specifications, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.techniques && payload.techniques.length) {
            isSearchCommodityIds = true;
            if (typeof payload.techniques == 'string') {
                payload.techniques = payload.techniques.split(',');
            }
            commodityIds = await this.getCommodityId('techniques', payload.techniques, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.themes && payload.themes.length) {
            isSearchCommodityIds = true;
            if (typeof payload.themes == 'string') {
                payload.themes = payload.themes.split(',');
            }
            commodityIds = await this.getCommodityId('themes', payload.themes, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.types && payload.types.length) {
            isSearchCommodityIds = true;
            if (typeof payload.types == 'string') {
                payload.types = payload.types.split(',');
            }
            commodityIds = await this.getCommodityId('types', payload.types, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        if (searchResule && payload.uses && payload.uses.length) {
            isSearchCommodityIds = true;
            if (typeof payload.uses == 'string') {
                payload.uses = payload.uses.split(',');
            }
            commodityIds = await this.getCommodityId('uses', payload.uses, commodityIds);
            searchResule = commodityIds.length ? true : false;
        }
        return await this.searchCommodity({
            id: payload.id,
            commodityId: payload.commodityId,
            sellerId: payload.sellerId,
            state: payload.state,
            width: payload.width,
            height: payload.height,
            choice: payload.choice,
            pageSize: payload.pageSize,
            currentPage: payload.currentPage,
            isSearchCommodityIds: isSearchCommodityIds,
            commodityIds
        });
        return {
            data: commodityIds,
            success: true,
            code: 10009
        };
        let result;
        if (commodityIds.length) {
        }
        else {
        }
        return result;
    }
    async getCommodityId(type, payload, commodityIds) {
        let dataIds = [];
        let data;
        switch (type) {
            case 'name':
                data = await this.commodityAttributeName.search(payload);
                break;
            case 'desc':
                data = await this.commodityAttributeDesc.search(payload);
                break;
            case 'color':
                data = await this.commodityAttributeColor.search(payload);
                break;
            case 'categorys':
                data = await this.commodityCategoryService.search(payload);
                break;
            case 'classifications':
                data = await this.commodityClassificationService.search(payload);
                break;
            case 'materials':
                data = await this.commodityMaterialService.search(payload);
                break;
            case 'models':
                data = await this.commodityModelService.search(payload);
                break;
            case 'places':
                data = await this.commodityPlaceService.search(payload);
                break;
            case 'ruiwus':
                data = await this.commodityRuiwuService.search(payload);
                break;
            case 'shapes':
                data = await this.commodityShapeService.search(payload);
                break;
            case 'specifications':
                data = await this.commoditySpecificationService.search(payload);
                break;
            case 'styles':
                data = await this.commodityStyleService.search(payload);
                break;
            case 'techniques':
                data = await this.commodityTechniqueService.search(payload);
                break;
            case 'themes':
                data = await this.commodityThemeService.search(payload);
                break;
            case 'types':
                data = await this.commodityTypeService.search(payload);
                break;
            case 'uses':
                data = await this.commodityUseService.search(payload);
                break;
        }
        dataIds = data.success ? data.data.map(item => item.commodityId) : [];
        console.log("dataIds", type, dataIds);
        if (dataIds.length) {
            if (commodityIds && commodityIds.length) {
                let newIds = [];
                for (let item of commodityIds) {
                    for (let dataItem of dataIds) {
                        if (item == dataItem) {
                            newIds.push(dataItem);
                        }
                    }
                }
                commodityIds = newIds;
            }
            else {
                commodityIds = [...dataIds];
            }
        }
        else {
            commodityIds = [];
        }
        return commodityIds;
    }
    async searchCommodity(payload) {
        console.log("searchCommodity", payload);
        const result = await this.baseCommodityServer.BaseSearchCommodity(payload);
        let data = result[0];
        let total = result[1];
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
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.BaseCommodityServer)
], CommoditySearchService.prototype, "baseCommodityServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.CommodityAttributeName)
], CommoditySearchService.prototype, "commodityAttributeName", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", desc_1.CommodityAttributeDesc)
], CommoditySearchService.prototype, "commodityAttributeDesc", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", color_1.CommodityAttributeColor)
], CommoditySearchService.prototype, "commodityAttributeColor", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityCategoryService)
], CommoditySearchService.prototype, "commodityCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", classification_1.CommodityClassificationService)
], CommoditySearchService.prototype, "commodityClassificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", material_1.CommodityMaterialService)
], CommoditySearchService.prototype, "commodityMaterialService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", model_1.CommodityModelService)
], CommoditySearchService.prototype, "commodityModelService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", place_1.CommodityPlaceService)
], CommoditySearchService.prototype, "commodityPlaceService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", ruiwu_1.CommodityRuiwuService)
], CommoditySearchService.prototype, "commodityRuiwuService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityShapeService)
], CommoditySearchService.prototype, "commodityShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", specification_1.CommoditySpecificationService)
], CommoditySearchService.prototype, "commoditySpecificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", style_1.CommodityStyleService)
], CommoditySearchService.prototype, "commodityStyleService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityTechniqueService)
], CommoditySearchService.prototype, "commodityTechniqueService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityThemeService)
], CommoditySearchService.prototype, "commodityThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_1.CommodityTypeService)
], CommoditySearchService.prototype, "commodityTypeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", use_1.CommodityUseService)
], CommoditySearchService.prototype, "commodityUseService", void 0);
CommoditySearchService = __decorate([
    decorator_1.Provide()
], CommoditySearchService);
exports.CommoditySearchService = CommoditySearchService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LXNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2NvbW1vZGl0eS9jb21tb2RpdHktc2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCwyREFBa0U7QUFDbEUsMkNBQThFO0FBQzlFLDJDQUE4RTtBQUM5RSw2Q0FBZ0Y7QUFFaEYsMkRBQXdFO0FBQ3hFLHVFQUFvRjtBQUNwRiwyREFBd0U7QUFDeEUscURBQWtFO0FBQ2xFLHFEQUFrRTtBQUNsRSxxREFBa0U7QUFDbEUscURBQWtFO0FBQ2xFLHFFQUFrRjtBQUNsRixxREFBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLHFEQUFrRTtBQUNsRSxtREFBZ0U7QUFDaEUsaURBQThEO0FBRzlELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBdURqQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDOUIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFHLFlBQVksSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUM1QixZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzdFLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNuRDtRQUVELElBQUcsWUFBWSxJQUFJ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