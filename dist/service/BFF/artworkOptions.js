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
exports.ArtworkOptionsService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const category_1 = require("../commodity/options/category");
const classification_1 = require("../commodity/options/classification");
const material_1 = require("../commodity/options/material");
const model_1 = require("../commodity/options/model");
const place_1 = require("../commodity/options/place");
const ruiwu_1 = require("../commodity/options/ruiwu");
const shape_1 = require("../commodity/options/shape");
const specification_1 = require("../commodity/options/specification");
const style_1 = require("../commodity/options/style");
const technique_1 = require("../commodity/options/technique");
const theme_1 = require("../commodity/options/theme");
const type_1 = require("../commodity/options/type");
const use_1 = require("../commodity/options/use");
let ArtworkOptionsService = class ArtworkOptionsService {
    async get(payload) {
        const category = await this.commodityOptionsCategoryService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!category.success) {
            return category;
        }
        const classification = await this.commodityOptionsClassificationService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!classification.success) {
            return classification;
        }
        const material = await this.commodityOptionsMaterialService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!material.success) {
            return material;
        }
        const model = await this.commodityOptionsModelService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!model.success) {
            return model;
        }
        const place = await this.commodityOptionsPlaceService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!place.success) {
            return place;
        }
        const ruiwu = await this.commodityOptionsRuiwuService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!ruiwu.success) {
            return ruiwu;
        }
        const shape = await this.commodityOptionsShapeService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        console.log("artworkOptions", shape);
        if (!shape.success) {
            return shape;
        }
        const specification = await this.commodityOptionsSpecificationService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!specification.success) {
            return specification;
        }
        const style = await this.commodityOptionsStyleService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!style.success) {
            return style;
        }
        const technique = await this.commodityOptionsTechniqueService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!technique.success) {
            return technique;
        }
        const theme = await this.commodityOptionsThemeService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!theme.success) {
            return theme;
        }
        const type = await this.commodityOptionsTypeService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!type.success) {
            return type;
        }
        const use = await this.commodityOptionsUseService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!use.success) {
            return use;
        }
        return {
            success: true,
            code: 10009,
            data: {
                category: category.data,
                classification: classification.data,
                material: material.data,
                model: model.data,
                place: place.data,
                ruiwu: ruiwu.data,
                shape: shape.data,
                specification: specification.data,
                style: style.data,
                technique: technique.data,
                theme: theme.data,
                type: type.data,
                use: use.data,
            }
        };
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityOptionsCategoryService)
], ArtworkOptionsService.prototype, "commodityOptionsCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", classification_1.CommodityOptionsClassificationService)
], ArtworkOptionsService.prototype, "commodityOptionsClassificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", material_1.CommodityOptionsMaterialService)
], ArtworkOptionsService.prototype, "commodityOptionsMaterialService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", model_1.CommodityOptionsModelService)
], ArtworkOptionsService.prototype, "commodityOptionsModelService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", place_1.CommodityOptionsPlaceService)
], ArtworkOptionsService.prototype, "commodityOptionsPlaceService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", ruiwu_1.CommodityOptionsRuiwuService)
], ArtworkOptionsService.prototype, "commodityOptionsRuiwuService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityOptionsShapeService)
], ArtworkOptionsService.prototype, "commodityOptionsShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", specification_1.CommodityOptionsSpecificationService)
], ArtworkOptionsService.prototype, "commodityOptionsSpecificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", style_1.CommodityOptionsStyleService)
], ArtworkOptionsService.prototype, "commodityOptionsStyleService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityOptionsTechniqueService)
], ArtworkOptionsService.prototype, "commodityOptionsTechniqueService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityOptionsThemeService)
], ArtworkOptionsService.prototype, "commodityOptionsThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_1.CommodityOptionsTypeService)
], ArtworkOptionsService.prototype, "commodityOptionsTypeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", use_1.CommodityOptionsUseService)
], ArtworkOptionsService.prototype, "commodityOptionsUseService", void 0);
ArtworkOptionsService = __decorate([
    decorator_1.Provide()
], ArtworkOptionsService);
exports.ArtworkOptionsService = ArtworkOptionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0d29ya09wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvYXJ0d29ya09wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBSXRELDREQUF5RjtBQUN6Rix3RUFBcUc7QUFDckcsNERBQXlGO0FBQ3pGLHNEQUFtRjtBQUNuRixzREFBbUY7QUFDbkYsc0RBQW1GO0FBQ25GLHNEQUFtRjtBQUNuRixzRUFBbUc7QUFDbkcsc0RBQW1GO0FBQ25GLDhEQUEyRjtBQUMzRixzREFBbUY7QUFDbkYsb0RBQWlGO0FBQ2pGLGtEQUErRTtBQUcvRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQXlDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBRWYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDO1lBQ3RFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxXQUFXLENBQUM7WUFDbEYsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUMxQixPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQztZQUN0RSxRQUFRLEVB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