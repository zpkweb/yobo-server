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
], CommodityClassificationEntity.prototype, "commodityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityClassificationEntity.prototype, "optionId", void 0);
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
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityClassificationEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => classification_1.CommodityOptionsClassificationEntity, CommodityOptionsClassificationEntity => CommodityOptionsClassificationEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'id'
    }),
    __metadata("design:type", classification_1.CommodityOptionsClassificationEntity)
], CommodityClassificationEntity.prototype, "options", void 0);
CommodityClassificationEntity = __decorate([
    orm_1.EntityModel('commodity_classification')
], CommodityClassificationEntity);
exports.CommodityClassificationEntity = CommodityClassificationEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9jbGFzc2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQyx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILDhEQUFpRjtBQUNqRiw0Q0FBK0M7QUFHL0MsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7Q0F3Q3pDLENBQUE7QUFyQ0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7eURBQzlCO0FBR1g7SUFEQyxnQkFBTSxFQUFFOztrRUFDVztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OytEQUNRO0FBTWpCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7a0VBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtrRUFBQztBQVNsQjtJQU5DLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRTtRQUNyRixRQUFRLEVBQUUsU0FBUztLQUNyQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNYLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDVywyQkFBZTtpRUFBQztBQVE3QjtJQU5FLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxREFBb0MsRUFBRSxvQ0FBb0MsQ0FBQyxFQUFFLENBQUMsb0NBQW9DLENBQUMsVUFBVSxFQUFFO1FBQ2pKLFFBQVEsRUFBRSxTQUFTO0tBQ25CLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDOzhCQUNPLHFEQUFvQzs4REFBQztBQXRDbEMsNkJBQTZCO0lBRHpDLGlCQUFXLENBQUMsMEJBQTBCLENBQUM7R0FDM0IsNkJBQTZCLENBd0N6QztBQXhDWSxzRUFBNkIifQ==