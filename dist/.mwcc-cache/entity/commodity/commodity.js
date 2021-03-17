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
const category_1 = require("./options/category");
const classification_1 = require("./options/classification");
const material_1 = require("./options/material");
const model_1 = require("./options/model");
const place_1 = require("./options/place");
const shape_1 = require("./options/shape");
const specification_1 = require("./options/specification");
const style_1 = require("./options/style");
const technique_1 = require("./options/technique");
const theme_1 = require("./options/theme");
const type_1 = require("./options/type");
const use_1 = require("./options/use");
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
    typeorm_1.ManyToMany(type => classification_1.CommodityOptionsClassificationEntity, CommodityOptionsClassificationEntity => CommodityOptionsClassificationEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_classification',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "classifications", void 0);
__decorate([
    typeorm_1.ManyToMany(type => material_1.CommodityOptionsMaterialEntity, CommodityOptionsMaterialEntity => CommodityOptionsMaterialEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_material',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "materials", void 0);
__decorate([
    typeorm_1.ManyToMany(type => model_1.CommodityOptionsModelEntity, CommodityOptionsModelEntity => CommodityOptionsModelEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_model',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "models", void 0);
__decorate([
    typeorm_1.ManyToMany(type => place_1.CommodityOptionsPlaceEntity, CommodityOptionsPlaceEntity => CommodityOptionsPlaceEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_place',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "places", void 0);
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
    typeorm_1.ManyToMany(type => specification_1.CommodityOptionsSpecificationEntity, CommodityOptionsSpecificationEntity => CommodityOptionsSpecificationEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_specification',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "specifications", void 0);
__decorate([
    typeorm_1.ManyToMany(type => style_1.CommodityOptionsStyleEntity, CommodityOptionsStyleEntity => CommodityOptionsStyleEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_style',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "styles", void 0);
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
    typeorm_1.ManyToMany(type => type_1.CommodityOptionsTypeEntity, CommodityOptionsTypeEntity => CommodityOptionsTypeEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_type',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], CommodityEntity.prototype, "types", void 0);
__decorate([
    typeorm_1.ManyToMany(type => use_1.CommodityOptionsUseEntity, CommodityOptionsUseEntity => CommodityOptionsUseEntity.commodity),
    typeorm_1.JoinTable({
        name: 'commodity_use',
        joinColumn: {
            referencedColumnName: 'commodityId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWtDQSx1Q0FBNEM7QUFDNUMscUNBQTJLO0FBQzNLLDJDQUF1RDtBQUN2RCwyQ0FBdUQ7QUFDdkQsNkNBQXlEO0FBQ3pELDZDQUF5RDtBQUN6RCw2Q0FBeUQ7QUFDekQscUVBQXdFO0FBRXhFLGlEQUF1RjtBQUN2Riw2REFBbUc7QUFDbkcsaURBQXVGO0FBQ3ZGLDJDQUFpRjtBQUNqRiwyQ0FBaUY7QUFDakYsMkNBQWlGO0FBQ2pGLDJEQUFpRztBQUNqRywyQ0FBaUY7QUFDakYsbURBQXlGO0FBQ3pGLDJDQUFpRjtBQUNqRix5Q0FBK0U7QUFDL0UsdUNBQTZFO0FBRzdFLGtEQUFpRTtBQUNqRSwyREFBd0U7QUFDeEUsdURBQW9FO0FBQ3BFLHFEQUFrRTtBQUNsRSx1Q0FBb0Q7QUFDcEQsMENBQXFEO0FBR3JELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0E2UTNCLENBQUE7QUF2UUM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzJDQUNTO0FBUVg7SUFMQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBRUQsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O29EQUNFO0FBSXBCO0lBREMsZ0JBQU0sRUFBRTs7OENBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzhDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDTTtBQU1mO0lBSEMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUFtQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7UUFDM0YsT0FB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