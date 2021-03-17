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
exports.CommodityOptionsPlaceEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsPlaceEntity = class CommodityOptionsPlaceEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsPlaceEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsPlaceEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsPlaceEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsPlaceEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.places, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsPlaceEntity.prototype, "commodity", void 0);
CommodityOptionsPlaceEntity = __decorate([
    orm_1.EntityModel('commodity_options_place')
], CommodityOptionsPlaceEntity);
exports.CommodityOptionsPlaceEntity = CommodityOptionsPlaceEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9vcHRpb25zL3BsYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBeUc7QUFDekcsNENBQStDO0FBRy9DLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0NBdUR2QyxDQUFBO0FBbkRDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O3VEQUM5QjtBQUlYO0lBREMsZ0JBQU0sRUFBRTs7d0RBQ0c7QUFNWjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7OzBEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7MERBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzswREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7OzBEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7MERBQ2M7QUFNaEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtnRUFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2dFQUFDO0FBT2xCO0lBSkMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzlFLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQzs4QkFDUywyQkFBZTs4REFBQztBQXJEaEIsMkJBQTJCO0lBRHZDLGlCQUFXLENBQUMseUJBQXlCLENBQUM7R0FDMUIsMkJBQTJCLENBdUR2QztBQXZEWSxrRUFBMkIifQ==