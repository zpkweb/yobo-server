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
const shape_1 = require("./options/shape");
const theme_1 = require("./options/theme");
const category_1 = require("./options/category");
const technique_1 = require("./options/technique");
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
        onDelete: 'CASCADE'
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
    typeorm_1.ManyToMany(type => shape_1.CommodityOptionsShapeEntity, CommodityOptionsShapeEntity => CommodityOptionsShapeEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_shape',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "shapes", void 0);
__decorate([
    typeorm_1.ManyToMany(type => theme_1.CommodityOptionsThemeEntity, CommodityOptionsThemeEntity => CommodityOptionsThemeEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_theme',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "themes", void 0);
__decorate([
    typeorm_1.ManyToMany(type => category_1.CommodityOptionsCategoryEntity, CommodityOptionsCategoryEntity => CommodityOptionsCategoryEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_category',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "categorys", void 0);
__decorate([
    typeorm_1.ManyToMany(type => technique_1.CommodityOptionsTechniqueEntity, CommodityOptionsTechniqueEntity => CommodityOptionsTechniqueEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_technique',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "techniques", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLHVDQUE0QztBQUM1QyxxQ0FBMks7QUFDM0ssMkNBQXVEO0FBQ3ZELDJDQUF1RDtBQUN2RCw2Q0FBeUQ7QUFDekQsNkNBQXlEO0FBQ3pELDZDQUF5RDtBQUN6RCxxRUFBd0U7QUFFeEUsMkNBQThEO0FBQzlELDJDQUE4RDtBQUM5RCxpREFBb0U7QUFDcEUsbURBQXNFO0FBRXRFLGtEQUFpRTtBQUNqRSwyREFBd0U7QUFDeEUsdURBQW9FO0FBQ3BFLHFEQUFrRTtBQUNsRSx1Q0FBb0Q7QUFDcEQsMENBQXFEO0FBR3JELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0FpSzNCLENBQUE7QUEzSkM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzJDQUNTO0FBUVg7SUFMQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBRUQsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O29EQUNFO0FBSXBCO0lBREMsZ0JBQU0sRUFBRTs7OENBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzhDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDTTtBQU1mO0lBSEMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUFtQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7UUFDM0YsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDOzhCQUNJLDBCQUFtQjs2Q0FBQztBQU8xQjtJQUpDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywwQkFBbUIsRUFBRSxtQkFBbUIsQ0FB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