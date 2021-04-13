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
exports.CommodityMaterialEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const material_1 = require("../options/material");
const commodity_1 = require("../commodity");
let CommodityMaterialEntity = class CommodityMaterialEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityMaterialEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityMaterialEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityMaterialEntity.prototype, "materialName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityMaterialEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityMaterialEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.materials, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityMaterialEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => material_1.CommodityOptionsMaterialEntity, CommodityOptionsMaterialEntity => CommodityOptionsMaterialEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'materialId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", material_1.CommodityOptionsMaterialEntity)
], CommodityMaterialEntity.prototype, "materials", void 0);
CommodityMaterialEntity = __decorate([
    orm_1.EntityModel('commodity_material')
], CommodityMaterialEntity);
exports.CommodityMaterialEntity = CommodityMaterialEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy9tYXRlcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQyx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILGtEQUFxRTtBQUNyRSw0Q0FBK0M7QUFHL0MsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0EwQ25DLENBQUE7QUF2Q0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7bURBQzlCO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzs4REFDYTtBQUd0QjtJQURDLGdCQUFNLEVBQUU7OzZEQUNZO0FBTXJCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7NERBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs0REFBQztBQVVsQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtRQUMvRSxRQUFRLEVBQUUsU0FBUztLQUNyQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDVywyQkFBZTsyREFBQztBQVM1QjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5Q0FBOEIsRUFBRSw4QkFBOEIsQ0FBQyxFQUFFLENBQUMsOEJBQThCLENBQUMsVUFBVSxFQUFFO1FBQy9ILFFBQVEsRUFBRSxTQUFTO0tBQ25CLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFlBQVk7UUFDbEIsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDOzhCQUNVLHlDQUE4QjswREFBQztBQXhDL0IsdUJBQXVCO0lBRG5DLGlCQUFXLENBQUMsb0JBQW9CLENBQUM7R0FDckIsdUJBQXVCLENBMENuQztBQTFDWSwwREFBdUIifQ==