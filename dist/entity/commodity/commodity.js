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
const details_1 = require("./attribute/details");
const postage_1 = require("./attribute/postage");
const photo_1 = require("./attribute/photo");
const video_1 = require("./attribute/video");
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
    __metadata("design:type", Boolean)
], CommodityEntity.prototype, "choice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "width", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityEntity.prototype, "height", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityEntity.prototype, "images", void 0);
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
    typeorm_1.OneToOne(type => details_1.CommodityDetailsEntity, CommodityDetailsEntity => CommodityDetailsEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", details_1.CommodityDetailsEntity)
], CommodityEntity.prototype, "details", void 0);
__decorate([
    typeorm_1.OneToOne(type => postage_1.CommodityPostageEntity, CommodityPostageEntity => CommodityPostageEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", postage_1.CommodityPostageEntity)
], CommodityEntity.prototype, "postage", void 0);
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
    typeorm_1.OneToMany(type => video_1.CommodityVideoEntity, CommodityVideoEntity => CommodityVideoEntity.commodity, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "videos", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJDQSx1Q0FBNEM7QUFDNUMscUNBQWdLO0FBQ2hLLDJDQUF1RDtBQUN2RCwyQ0FBdUQ7QUFDdkQsaURBQTZEO0FBQzdELGlEQUE2RDtBQUM3RCw2Q0FBeUQ7QUFDekQsNkNBQXlEO0FBQ3pELDZDQUF5RDtBQUN6RCw2Q0FBeUQ7QUFDekQscUVBQXdFO0FBRXhFLDJEQUEwRjtBQUMxRix1RUFBc0c7QUFDdEcsMkRBQTBGO0FBQzFGLHFEQUFvRjtBQUNwRixxREFBb0Y7QUFDcEYscURBQW9GO0FBQ3BGLHFEQUFvRjtBQUNwRixxRUFBb0c7QUFDcEcscURBQW9GO0FBQ3BGLDZEQUE0RjtBQUM1RixxREFBb0Y7QUFDcEYsbURBQWtGO0FBQ2xGLGlEQUFnRjtBQUdoRixrREFBaUU7QUFDakUsMkRBQXdFO0FBQ3hFLHVEQUFvRTtBQUNwRSxxREFBa0U7QUFDbEUsdUNBQW9EO0FBQ3BELDBDQUFxRDtBQUdyRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBZ04zQixDQUFBO0FBMU1DO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOzsyQ0FDUztBQVFYO0lBTEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVELG1CQUFTLENBQUMsTUFBTSxDQUFDOztvREFDRTtBQUlwQjtJQURDLGdCQUFNLEVBQUU7OzhDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7OzhDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7K0NB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