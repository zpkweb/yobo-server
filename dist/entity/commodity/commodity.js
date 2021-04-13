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
exports.CommodityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const name_1 = require("./attribute/name");
const desc_1 = require("./attribute/desc");
const photo_1 = require("./attribute/photo");
const price_1 = require("./attribute/price");
const color_1 = require("./attribute/color");
const commodityBrowsingCount_1 = require("./commodityBrowsingCount");
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
const seller_1 = require("../user/seller/seller");
const browsingHistory_1 = require("../my/browsingHistory");
const likeCommodity_1 = require("../my/likeCommodity");
const shoppingCart_1 = require("../my/shoppingCart");
const order_1 = require("../my/order");
const order_2 = require("../order/order");
let CommodityEntity = class CommodityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], CommodityEntity.prototype, "commodityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "width", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "height", void 0);
__decorate([
    typeorm_1.OneToOne(type => name_1.CommodityNameEntity, CommodityNameEntity => CommodityNameEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", name_1.CommodityNameEntity)
], CommodityEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(type => desc_1.CommodityDescEntity, CommodityDescEntity => CommodityDescEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", desc_1.CommodityDescEntity)
], CommodityEntity.prototype, "desc", void 0);
__decorate([
    typeorm_1.OneToOne(type => price_1.CommodityPriceEntity, CommodityPriceEntity => CommodityPriceEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", price_1.CommodityPriceEntity)
], CommodityEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.OneToMany(type => color_1.CommodityColorEntity, CommodityColorEntity => CommodityColorEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "colors", void 0);
__decorate([
    typeorm_1.OneToMany(type => photo_1.CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "photos", void 0);
__decorate([
    typeorm_1.OneToMany(type => category_1.CommodityCategoryEntity, CommodityCategoryEntity => CommodityCategoryEntity.commoditys, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "categorys", void 0);
__decorate([
    typeorm_1.OneToMany(type => classification_1.CommodityClassificationEntity, CommodityClassificationEntity => CommodityClassificationEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "classifications", void 0);
__decorate([
    typeorm_1.OneToMany(type => material_1.CommodityMaterialEntity, CommodityMaterialEntity => CommodityMaterialEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "materials", void 0);
__decorate([
    typeorm_1.OneToMany(type => model_1.CommodityModelEntity, CommodityModelEntity => CommodityModelEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "models", void 0);
__decorate([
    typeorm_1.OneToMany(type => place_1.CommodityPlaceEntity, CommodityPlaceEntity => CommodityPlaceEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "places", void 0);
__decorate([
    typeorm_1.OneToMany(type => ruiwu_1.CommodityRuiwuEntity, CommodityRuiwuEntity => CommodityRuiwuEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "ruiwus", void 0);
__decorate([
    typeorm_1.OneToMany(type => shape_1.CommodityShapeEntity, CommodityShapeEntity => CommodityShapeEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "shapes", void 0);
__decorate([
    typeorm_1.OneToMany(type => specification_1.CommoditySpecificationEntity, CommoditySpecificationEntity => CommoditySpecificationEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "specifications", void 0);
__decorate([
    typeorm_1.OneToMany(type => style_1.CommodityStyleEntity, CommodityStyleEntity => CommodityStyleEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "styles", void 0);
__decorate([
    typeorm_1.OneToMany(type => technique_1.CommodityTechniqueEntity, CommodityTechniqueEntity => CommodityTechniqueEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "techniques", void 0);
__decorate([
    typeorm_1.OneToMany(type => theme_1.CommodityThemeEntity, CommodityThemeEntity => CommodityThemeEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "themes", void 0);
__decorate([
    typeorm_1.OneToMany(type => type_1.CommodityTypeEntity, CommodityTypeEntity => CommodityTypeEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "types", void 0);
__decorate([
    typeorm_1.OneToMany(type => use_1.CommodityUseEntity, CommodityUseEntity => CommodityUseEntity.commoditys, {
        cascade: true
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "uses", void 0);
__decorate([
    typeorm_1.ManyToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.commoditys, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        name: 'sellerId',
        referencedColumnName: 'sellerId'
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], CommodityEntity.prototype, "seller", void 0);
__decorate([
    typeorm_1.OneToMany(type => likeCommodity_1.MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.commodity),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "likeCommoditys", void 0);
__decorate([
    typeorm_1.OneToOne(type => commodityBrowsingCount_1.CommodityBrowsingCountEntity, CommodityBrowsingCountEntity => CommodityBrowsingCountEntity.commodity),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "browsingCount", void 0);
__decorate([
    typeorm_1.OneToMany(type => browsingHistory_1.MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.commodity),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "browsingHistory", void 0);
__decorate([
    typeorm_1.ManyToMany(type => order_2.OrderEntity, OrderEntity => OrderEntity.commoditys),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "orders", void 0);
__decorate([
    typeorm_1.ManyToMany(type => order_1.MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "myOrders", void 0);
__decorate([
    typeorm_1.ManyToMany(type => shoppingCart_1.MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "shoppingCart", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityEntity.prototype, "updatedDate", void 0);
CommodityEntity = __decorate([
    orm_1.EntityModel('commodity')
], CommodityEntity);
exports.CommodityEntity = CommodityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJDQSx1Q0FBNEM7QUFDNUMscUNBQWdLO0FBQ2hLLDJDQUF1RDtBQUN2RCwyQ0FBdUQ7QUFDdkQsNkNBQXlEO0FBQ3pELDZDQUF5RDtBQUN6RCw2Q0FBeUQ7QUFDekQscUVBQXdFO0FBRXhFLDJEQUEwRjtBQUMxRix1RUFBc0c7QUFDdEcsMkRBQTBGO0FBQzFGLHFEQUFvRjtBQUNwRixxREFBb0Y7QUFDcEYscURBQW9GO0FBQ3BGLHFEQUFvRjtBQUNwRixxRUFBb0c7QUFDcEcscURBQW9GO0FBQ3BGLDZEQUE0RjtBQUM1RixxREFBb0Y7QUFDcEYsbURBQWtGO0FBQ2xGLGlEQUFnRjtBQUdoRixrREFBaUU7QUFDakUsMkRBQXdFO0FBQ3hFLHVEQUFvRTtBQUNwRSxxREFBa0U7QUFDbEUsdUNBQW9EO0FBQ3BELDBDQUFxRDtBQUdyRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBNEwzQixDQUFBO0FBdExDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOzsyQ0FDUztBQVFYO0lBTEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVELG1CQUFTLENBQUMsTUFBTSxDQUFDOztvREFDRTtBQUlwQjtJQURDLGdCQUFNLEVBQUU7OzhDQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOzs4Q0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7K0NBQ007QUFNZjtJQUhDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywwQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxF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