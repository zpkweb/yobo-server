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
const shape_1 = require("../commodity/options/shape");
const theme_1 = require("../commodity/options/theme");
const category_1 = require("../commodity/options/category");
const technique_1 = require("../commodity/options/technique");
let ArtworkOptionsService = class ArtworkOptionsService {
    async get(payload) {
        const shape = await this.commodityOptionsShapeService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!shape.success) {
            return shape;
        }
        const theme = await this.commodityOptionsThemeService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!theme.success) {
            return theme;
        }
        const category = await this.commodityOptionsCategoryService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!category.success) {
            return category;
        }
        const technique = await this.commodityOptionsTechniqueService.retrieveAll({
            isLocale: payload.isLocale,
            locale: payload.locale
        });
        if (!technique.success) {
            return technique;
        }
        return {
            success: true,
            code: 10009,
            data: {
                shape: shape.data,
                theme: theme.data,
                category: category.data,
                technique: technique.data
            }
        };
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_1.CommodityOptionsShapeService)
], ArtworkOptionsService.prototype, "commodityOptionsShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", theme_1.CommodityOptionsThemeService)
], ArtworkOptionsService.prototype, "commodityOptionsThemeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", category_1.CommodityOptionsCategoryService)
], ArtworkOptionsService.prototype, "commodityOptionsCategoryService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_1.CommodityOptionsTechniqueService)
], ArtworkOptionsService.prototype, "commodityOptionsTechniqueService", void 0);
ArtworkOptionsService = __decorate([
    decorator_1.Provide()
], ArtworkOptionsService);
exports.ArtworkOptionsService = ArtworkOptionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0d29ya09wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9CRkYvYXJ0d29ya09wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHNEQUEwRTtBQUMxRSxzREFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLDhEQUFrRjtBQUdsRixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU87UUFFZixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUM7WUFDaEUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDO1lBQ2hFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQztZQUN0RSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsV0FBVyxDQUFDO1lBQ3hFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFHRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUN2QixTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7YUFDMUI7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF6REM7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7MkVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUNxQixvQ0FBNEI7MkVBQUM7QUFHM0Q7SUFEQyxrQkFBTSxFQUFFOzhCQUN3QiwwQ0FBK0I7OEVBQUM7QUFHakU7SUFEQyxrQkFBTSxFQUFFOzhCQUN5Qiw0Q0FBZ0M7K0VBQUM7QUFaeEQscUJBQXFCO0lBRGpDLG1CQUFPLEVBQUU7R0FDRyxxQkFBcUIsQ0E0RGpDO0FBNURZLHNEQUFxQiJ9