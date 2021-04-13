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
exports.CommodityClassificationEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const classification_1 = require("../options/classification");
const commodity_1 = require("../commodity");
let CommodityClassificationEntity = class CommodityClassificationEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityClassificationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityClassificationEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityClassificationEntity.prototype, "classificationName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityClassificationEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityClassificationEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.classifications, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityClassificationEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => classification_1.CommodityOptionsClassificationEntity, CommodityOptionsClassificationEntity => CommodityOptionsClassificationEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'classificationId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", classification_1.CommodityOptionsClassificationEntity)
], CommodityClassificationEntity.prototype, "classifications", void 0);
CommodityClassificationEntity = __decorate([
    orm_1.EntityModel('commodity_classification')
], CommodityClassificationEntity);
exports.CommodityClassificationEntity = CommodityClassificationEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9jbGFzc2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQyx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILDhEQUFpRjtBQUNqRiw0Q0FBK0M7QUFHL0MsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7Q0EwQ3pDLENBQUE7QUF2Q0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7eURBQzlCO0FBR1g7SUFEQyxnQkFBTSxFQUFFOztvRUFDYTtBQUd0QjtJQURDLGdCQUFNLEVBQUU7O3lFQUNrQjtBQU0zQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2tFQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7a0VBQUM7QUFVbEI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7UUFDckYsUUFBUSxFQUFFLFNBQVM7S0FDckIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixvQkFBb0IsRUFBRSxhQUFhO0tBQ3BDLENBQUM7OEJBQ1csMkJBQWU7aUVBQUM7QUFTNUI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMscURBQW9DLEVBQUUsb0NBQW9DLENBQUMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDLFVBQVUsRUFBRTtRQUNqSixRQUFRLEVBQUUsU0FBUztLQUNuQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNYLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDOzhCQUNnQixxREFBb0M7c0VBQUM7QUF4QzNDLDZCQUE2QjtJQUR6QyxpQkFBVyxDQUFDLDBCQUEwQixDQUFDO0dBQzNCLDZCQUE2QixDQTBDekM7QUExQ1ksc0VBQTZCIn0=