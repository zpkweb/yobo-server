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
exports.CommodityNameEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityNameEntity = class CommodityNameEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityNameEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityNameEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityNameEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityNameEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityNameEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityNameEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityNameEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityNameEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.name, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityNameEntity.prototype, "commodity", void 0);
CommodityNameEntity = __decorate([
    orm_1.EntityModel('commodity_name')
], CommodityNameEntity);
exports.CommodityNameEntity = CommodityNameEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L2F0dHJpYnV0ZS9uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgsNENBQStDO0FBRy9DLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBOEMvQixDQUFBO0FBMUNDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7OytDQUM5QjtBQUlYO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztrREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O2tEQUNPO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7a0RBQ2M7QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztrREFDTztBQU1oQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3dEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7d0RBQUM7QUFVbEI7SUFQQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7UUFDMUUsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsYUFBYTtRQUNuQixvQkFBb0IsRUFBRSxhQUFhO0tBQ3BDLENBQUM7OEJBQ1MsMkJBQWU7c0RBQUM7QUE1Q2hCLG1CQUFtQjtJQUQvQixpQkFBVyxDQUFDLGdCQUFnQixDQUFDO0dBQ2pCLG1CQUFtQixDQThDL0I7QUE5Q1ksa0RBQW1CIn0=