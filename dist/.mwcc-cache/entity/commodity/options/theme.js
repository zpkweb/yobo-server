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
exports.CommodityOptionsThemeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsThemeEntity = class CommodityOptionsThemeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsThemeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsThemeEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsThemeEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsThemeEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.themes, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsThemeEntity.prototype, "commodity", void 0);
CommodityOptionsThemeEntity = __decorate([
    orm_1.EntityModel('commodity_options_theme')
], CommodityOptionsThemeEntity);
exports.CommodityOptionsThemeEntity = CommodityOptionsThemeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9vcHRpb25zL3RoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBeUc7QUFDekcsNENBQStDO0FBRy9DLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0NBNkN2QyxDQUFBO0FBekNDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O3VEQUM5QjtBQUlYO0lBREMsZ0JBQU0sRUFBRTs7d0RBQ0c7QUFJWjtJQURDLGdCQUFNLEVBQUU7OzBEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7MERBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzswREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7OzBEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7MERBQ087QUFNaEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtnRUFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2dFQUFDO0FBT2xCO0lBSkMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzlFLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQzs4QkFDUywyQkFBZTs4REFBQztBQTNDaEIsMkJBQTJCO0lBRHZDLGlCQUFXLENBQUMseUJBQXlCLENBQUM7R0FDMUIsMkJBQTJCLENBNkN2QztBQTdDWSxrRUFBMkIifQ==