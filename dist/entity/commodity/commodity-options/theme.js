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
exports.CommodityThemeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const theme_1 = require("../options/theme");
const commodity_1 = require("../commodity");
let CommodityThemeEntity = class CommodityThemeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityThemeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityThemeEntity.prototype, "commodityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityThemeEntity.prototype, "optionId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityThemeEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityThemeEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.themes, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityThemeEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => theme_1.CommodityOptionsThemeEntity, CommodityOptionsThemeEntity => CommodityOptionsThemeEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'id'
    }),
    __metadata("design:type", theme_1.CommodityOptionsThemeEntity)
], CommodityThemeEntity.prototype, "options", void 0);
CommodityThemeEntity = __decorate([
    orm_1.EntityModel('commodity_theme')
], CommodityThemeEntity);
exports.CommodityThemeEntity = CommodityThemeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQyx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILDRDQUErRDtBQUMvRCw0Q0FBK0M7QUFHL0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0EwQ2hDLENBQUE7QUF2Q0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7Z0RBQzlCO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzt5REFDVztBQUlwQjtJQURDLGdCQUFNLEVBQUU7O3NEQUNRO0FBT2pCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7eURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt5REFBQztBQVNsQjtJQU5DLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtRQUM1RSxRQUFRLEVBQUUsU0FBUztLQUNyQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNYLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDVywyQkFBZTt3REFBQztBQVE3QjtJQU5FLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQ0FBMkIsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsVUFBVSxFQUFFO1FBQ3RILFFBQVEsRUFBRSxTQUFTO0tBQ25CLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDOzhCQUNPLG1DQUEyQjtxREFBQztBQXhDekIsb0JBQW9CO0lBRGhDLGlCQUFXLENBQUMsaUJBQWlCLENBQUM7R0FDbEIsb0JBQW9CLENBMENoQztBQTFDWSxvREFBb0IifQ==