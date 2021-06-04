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
exports.CommodityPostageEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityPostageEntity = class CommodityPostageEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityPostageEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], CommodityPostageEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], CommodityPostageEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], CommodityPostageEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "text"
    }),
    __metadata("design:type", String)
], CommodityPostageEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], CommodityPostageEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPostageEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPostageEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.postage, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityPostageEntity.prototype, "commodity", void 0);
CommodityPostageEntity = __decorate([
    orm_1.EntityModel('commodity_postage')
], CommodityPostageEntity);
exports.CommodityPostageEntity = CommodityPostageEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L2F0dHJpYnV0ZS9wb3N0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlDLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgsNENBQStDO0FBRy9DLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBdURsQyxDQUFBO0FBbkRDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O2tEQUM5QjtBQU9YO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7cURBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztxREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O3FEQUNjO0FBTWhCO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztxREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O3FEQUNjO0FBTWhCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQVNsQjtJQVBDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtRQUM3RSxRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxhQUFhO1FBQ25CLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDUywyQkFBZTt5REFBQztBQXJEaEIsc0JBQXNCO0lBRGxDLGlCQUFXLENBQUMsbUJBQW1CLENBQUM7R0FDcEIsc0JBQXNCLENBdURsQztBQXZEWSx3REFBc0IifQ==