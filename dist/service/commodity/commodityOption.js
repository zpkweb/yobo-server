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
exports.CommodityOptionService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const category_1 = require("./options/category");
const classification_1 = require("./options/classification");
const material_1 = require("./options/material");
const model_1 = require("./options/model");
const place_1 = require("./options/place");
const ruiwu_1 = require("./options/ruiwu");
const shape_1 = require("./options/shape");
const specification_1 = require("./options/specification");
const style_1 = require("./options/style");
const technique_1 = require("./options/technique");
const theme_1 = require("./options/theme");
const type_1 = require("./options/type");
const use_1 = require("./options/use");
let CommodityOptionService = class CommodityOptionService {
    async commodityOptionsTypeCreate({ type = '', img = '', zhcn = '', enus = '', jajp = '', frfr = '', eses = '' } = {}) {
        let data;
        let createData = { img, zhcn, enus, jajp, frfr, eses };
        switch (type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.create(createData);
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.create(createData);
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.create(createData);
                break;
            case 'model':
                data = await this.commodityOptionsModelService.create(createData);
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.create(createData);
                break;
            case 'ruiwu':
                data = await this.commodityOptionsRuiwuService.create(createData);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.create(createData);
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.create(createData);
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.create(createData);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.create(createData);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.create(createData);
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.create(createData);
                break;
            case 'use':
                data = await this.commodityOptionsUseService.create(createData);
                break;
            default:
                break;
        }
        return data;
    }
    async commodityOptionsRetrieve({ isLocale = false, locale = 'zh-cn' }) {
        const options = {};
        const categorys = await this.commodityOptionsCategoryService.retrieveAll({ isLocale, locale });
        if (categorys.success) {
            options.categorys = categorys.data;
        }
        const classifications = await this.commodityOptionsClassificationService.retrieveAll({ isLocale, locale });
        if (classifications.success) {
            options.classifications = classifications.data;
        }
        const materials = await this.commodityOptionsMaterialService.retrieveAll({ isLocale, locale });
        if (materials.success) {
            options.materials = materials.data;
        }
        const models = await this.commodityOptionsModelService.retrieveAll({ isLocale, locale });
        if (models.success) {
            options.models = models.data;
        }
        const places = await this.commodityOptionsPlaceService.retrieveAll({ isLocale, locale });
        if (places.success) {
            options.places = places.data;
        }
        const ruiwus = await this.commodityOptionsRuiwuService.retrieveAll({ isLocale, locale });
        if (ruiwus.success) {
            options.ruiwus = ruiwus.data;
        }
        const shapes = await this.commodityOptionsShapeService.retrieveAll({ isLocale, locale });
        if (shapes.success) {
            options.shapes = shapes.data;
        }
        const specifications = await this.commodityOptionsSpecificationService.retrieveAll({ isLocale, locale });
        if (specifications.success) {
            options.specifications = specifications.data;
        }
        const styles = await this.commodityOptionsStyleService.retrieveAll({ isLocale, locale });
        if (styles.success) {
            options.styles = styles.data;
        }
        const techniques = await this.commodityOptionsTechniqueService.retrieveAll({ isLocale, locale });
        if (techniques.success) {
            options.techniques = techniques.data;
        }
        const themes = await this.commodityOptionsThemeService.retrieveAll({ isLocale, locale });
        if (themes.success) {
            options.themes = themes.data;
        }
        const types = await this.commodityOptionsTypeService.retrieveAll({ isLocale, locale });
        if (types.success) {
            options.types = types.data;
        }
        const uses = await this.commodityOptionsUseService.retrieveAll({ isLocale, locale });
        if (uses.success) {
            options.uses = uses.data;
        }
        return {
            data: options,
            success: true,
            code: 10009
        };
    }
    async commodityOptionsTypeRetrieve({ type = '', img = '', zhcn = '', enus = '', jajp = '', frfr = '', eses = '' } = {}) {
        let data;
        let retrieveData = { img, zhcn, enus, jajp, eses };
        switch (type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieve(retrieveData);
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.retrieve(retrieveData);
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.retrieve(retrieveData);
                break;
            case 'model':
                data = await this.commodityOptionsModelService.retrieve(retrieveData);
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.retrieve(retrieveData);
                break;
            case 'ruiwu':
                data = await this.commodityOptionsRuiwuService.retrieve(retrieveData);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieve(retrieveData);
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.retrieve(retrieveData);
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.retrieve(retrieveData);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieve(retrieveData);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieve(retrieveData);
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.retrieve(retrieveData);
                break;
            case 'use':
                data = await this.commodityOptionsUseService.retrieve(retrieveData);
                break;
            default:
                break;
        }
        return data;
    }
    async commodityOptionsTypeRetrieveId({ type = '', id = '' } = {}) {
        let data;
        switch (type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieveId(id);
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.retrieveId(id);
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.retrieveId(id);
                break;
            case 'model':
                data = await this.commodityOptionsModelService.retrieveId(id);
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.retrieveId(id);
                break;
            case 'ruiwu':
                data = await this.commodityOptionsRuiwuService.retrieveId(id);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieveId(id);
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.retrieveId(id);
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.retrieveId(id);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieveId(id);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieveId(id);
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.retrieveId(id);
                break;
            case 'use':
                data = await this.commodityOptionsUseService.retrieveId(id);
                break;
            default:
                break;
        }
        return data;
    }
    async commodityOptionsTypeRetrieveAll({ type = '', isLocale = false, locale = 'zh-cn' } = {}) {
        let data;
        switch (type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.retrieveAll({ isLocale, locale });
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.retrieveAll({ isLocale, locale });
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.retrieveAll({ isLocale, locale });
                break;
            case 'model':
                data = await this.commodityOptionsModelService.retrieveAll({ isLocale, locale });
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.retrieveAll({ isLocale, locale });
                break;
            case 'ruiwu':
                data = await this.commodityOptionsRuiwuService.retrieveAll({ isLocale, locale });
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.retrieveAll({ isLocale, locale });
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.retrieveAll({ isLocale, locale });
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.retrieveAll({ isLocale, locale });
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.retrieveAll({ isLocale, locale });
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.retrieveAll({ isLocale, locale });
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.retrieveAll({ isLocale, locale });
                break;
            case 'use':
                data = await this.commodityOptionsUseService.retrieveAll({ isLocale, locale });
                break;
            default:
                break;
        }
        return data;
    }
    async commodityOptionsTypeUpdate({ type = '', id = '', img = '', zhcn = '', enus = '', jajp = '', frfr = '', eses = '', } = {}) {
        let data;
        let updateData = { id, img, zhcn, enus, jajp, frfr, eses };
        switch (type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.update(updateData);
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.update(updateData);
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.update(updateData);
                break;
            case 'model':
                data = await this.commodityOptionsModelService.update(updateData);
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.update(updateData);
                break;
            case 'Ruiwu':
                data = await this.commodityOptionsRuiwuService.update(updateData);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.update(updateData);
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.update(updateData);
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.update(updateData);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.update(updateData);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.update(updateData);
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.update(updateData);
                break;
            case 'use':
                data = await this.commodityOptionsUseService.update(updateData);
                break;
            default:
                break;
        }
        return data;
    }
    async commodityOptionsTypeDelete(payload) {
        let data;
        switch (payload.type) {
            case 'category':
                data = await this.commodityOptionsCategoryService.delete(payload.id);
                break;
            case 'classification':
                data = await this.commodityOptionsClassificationService.delete(payload.id);
                break;
            case 'material':
                data = await this.commodityOptionsMaterialService.delete(payload.id);
                break;
            case 'model':
                data = await this.commodityOptionsModelService.delete(payload.id);
                break;
            case 'place':
                data = await this.commodityOptionsPlaceService.delete(payload.id);
                break;
            case 'Ruiwu':
                data = await this.commodityOptionsRuiwuService.delete(payload.id);
                break;
            case 'shape':
                data = await this.commodityOptionsShapeService.delete(payload.id);
                break;
            case 'specification':
                data = await this.commodityOptionsSpecificationService.delete(payload.id);
                break;
            case 'style':
                data = await this.commodityOptionsStyleService.delete(payload.id);
                break;
            case 'technique':
                data = await this.commodityOptionsTechniqueService.delete(payload.id);
                break;
            case 'theme':
                data = await this.commodityOptionsThemeService.delete(payload.id);
                break;
            case 'type':
                data = await this.commodityOptionsTypeService.delete(payload.id);
                break;
            case 'use':
                data = await this.commodityOptionsUseService.delete(payload.id);
                break;
            default:
                break;
        }
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityOptionsCategoryService)
], CommodityOptionService.prototype, "commodityOptionsCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", classification_1.CommodityOptionsClassificationService)
], CommodityOptionService.prototype, "commodityOptionsClassificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", material_1.CommodityOptionsMaterialService)
], CommodityOptionService.prototype, "commodityOptionsMaterialService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", model_1.CommodityOptionsModelService)
], CommodityOptionService.prototype, "commodityOptionsModelService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", place_1.CommodityOptionsPlaceService)
], CommodityOptionService.prototype, "commodityOptionsPlaceService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", ruiwu_1.CommodityOptionsRuiwuService)
], CommodityOptionService.prototype, "commodityOptionsRuiwuService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityOptionsShapeService)
], CommodityOptionService.prototype, "commodityOptionsShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", specification_1.CommodityOptionsSpecificationService)
], CommodityOptionService.prototype, "commodityOptionsSpecificationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", style_1.CommodityOptionsStyleService)
], CommodityOptionService.prototype, "commodityOptionsStyleService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityOptionsTechniqueService)
], CommodityOptionService.prototype, "commodityOptionsTechniqueService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityOptionsThemeService)
], CommodityOptionService.prototype, "commodityOptionsThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_1.CommodityOptionsTypeService)
], CommodityOptionService.prototype, "commodityOptionsTypeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", use_1.CommodityOptionsUseService)
], CommodityOptionService.prototype, "commodityOptionsUseService", void 0);
CommodityOptionService = __decorate([
    decorator_1.Provide()
], CommodityOptionService);
exports.CommodityOptionService = CommodityOptionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5T3B0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eU9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFFdEQsaURBQXlGO0FBQ3pGLDZEQUFxRztBQUNyRyxpREFBeUY7QUFDekYsMkNBQW1GO0FBQ25GLDJDQUFtRjtBQUNuRiwyQ0FBbUY7QUFDbkYsMkNBQW1GO0FBQ25GLDJEQUFtRztBQUNuRywyQ0FBbUY7QUFDbkYsbURBQTJGO0FBQzNGLDJDQUFtRjtBQUNuRix5Q0FBaUY7QUFDakYsdUNBQStFO0FBSy9FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBNkNqQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsRUFDL0IsSUFBSSxHQUFHLEVBQUUsRUFDVCxHQUFHLEdBQUcsRUFBRSxFQUNSLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVixHQUFHLEVBQUU7UUFDSixJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2RCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssVUFBVTtnQkFDYixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsK0JBQStCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyRSxNQUFNO1lBQ1IsS0FBSyxnQkFBZ0I7Z0JBQ25CLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxD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