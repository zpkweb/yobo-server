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
exports.CommodityOptionsCategoryEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsCategoryEntity = class CommodityOptionsCategoryEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsCategoryEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsCategoryEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsCategoryEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsCategoryEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.categorys, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsCategoryEntity.prototype, "commodity", void 0);
CommodityOptionsCategoryEntity = __decorate([
    orm_1.EntityModel('commodity_options_category')
], CommodityOptionsCategoryEntity);
exports.CommodityOptionsCategoryEntity = CommodityOptionsCategoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9vcHRpb25zL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBeUc7QUFDekcsNENBQStDO0FBRy9DLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0NBNkMxQyxDQUFBO0FBekNDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7OzBEQUM5QjtBQUlYO0lBREMsZ0JBQU0sRUFBRTs7MkRBQ0c7QUFJWjtJQURDLGdCQUFNLEVBQUU7OzZEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7NkRBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzs2REFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7OzZEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7NkRBQ087QUFNaEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTttRUFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO21FQUFDO0FBT2xCO0lBSkMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO1FBQ2pGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQzs4QkFDUywyQkFBZTtpRUFBQztBQTNDaEIsOEJBQThCO0lBRDFDLGlCQUFXLENBQUMsNEJBQTRCLENBQUM7R0FDN0IsOEJBQThCLENBNkMxQztBQTdDWSx3RUFBOEIifQ==