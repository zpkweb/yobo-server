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
        console.log("commodityOptionsTypeCreate createData", createData);
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
    async commodityOptionsTypeRetrieve({ type = '', img = '', zhcn = '', enus = '', jajp = '', frfr = '', eses = '' } = {}) {
        let data;
        let retrieveData = { img, zhcn, enus, jajp, eses };
        console.log("commodityOptionsTypeRetrieve retrieveData", retrieveData);
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
        console.log("commodityOptionsTypeRetrieveAll", type);
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
        console.log("commodityOptionsTypeUpdate", updateData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5T3B0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eU9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFFdEQsaURBQXlGO0FBQ3pGLDZEQUFxRztBQUNyRyxpREFBeUY7QUFDekYsMkNBQW1GO0FBQ25GLDJDQUFtRjtBQUNuRiwyQ0FBbUY7QUFDbkYsMkNBQW1GO0FBQ25GLDJEQUFtRztBQUNuRywyQ0FBbUY7QUFDbkYsbURBQTJGO0FBQzNGLDJDQUFtRjtBQUNuRix5Q0FBaUY7QUFDakYsdUNBQStFO0FBSy9FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBNkNqQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsRUFDL0IsSUFBSSxHQUFHLEVBQUUsRUFDVCxHQUFHLEdBQUcsRUFBRSxFQUNSLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVixHQUFHLEVBQUU7UUFDSixJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ2hFLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxVQUFVO2dCQUNiLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU07WUFDUixLQUFLLGdCQUFnQjtnQkFDbkIs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QUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxlQUFlO2dCQUNsQixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsb0NBQW9DLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUUsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNSLEtBQUssV0FBVztnQkFDZCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakUsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEUsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGLENBQUE7QUF0WUM7SUFEQyxrQkFBTSxFQUFFOzhCQUN3QiwwQ0FBK0I7K0VBQUM7QUFHakU7SUFEQyxrQkFBTSxFQUFFOzhCQUM4QixzREFBcUM7cUZBQUM7QUFHN0U7SUFEQyxrQkFBTSxFQUFFOzhCQUN3QiwwQ0FBK0I7K0VBQUM7QUFHakU7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUM2QixvREFBb0M7b0ZBQUM7QUFHM0U7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUN5Qiw0Q0FBZ0M7Z0ZBQUM7QUFHbkU7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7NEVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNvQixrQ0FBMkI7MkVBQUM7QUFHekQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNtQixnQ0FBMEI7MEVBQUM7QUF0QzVDLHNCQUFzQjtJQURsQyxtQkFBTyxFQUFFO0dBQ0csc0JBQXNCLENBd1lsQztBQXhZWSx3REFBc0IifQ==