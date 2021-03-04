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
exports.CommodityPackingLangMetadataEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const lang_1 = require("../lang");
let CommodityPackingLangMetadataEntity = class CommodityPackingLangMetadataEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityPackingLangMetadataEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityPackingLangMetadataEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityPackingLangMetadataEntity.prototype, "width", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityPackingLangMetadataEntity.prototype, "height", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityPackingLangMetadataEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingLangMetadataEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingLangMetadataEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lang_1.CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.metadata, {
        cascade: true
    }),
    __metadata("design:type", lang_1.CommodityPackingLangEntity)
], CommodityPackingLangMetadataEntity.prototype, "lang", void 0);
CommodityPackingLangMetadataEntity = __decorate([
    orm_1.EntityModel('commodity_packing_lang_matedata')
], CommodityPackingLangMetadataEntity);
exports.CommodityPackingLangMetadataEntity = CommodityPackingLangMetadataEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9wYWNraW5nL2xhbmcvbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUF3RztBQUN4RyxrQ0FBcUQ7QUFHckQsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7Q0F1QzlDLENBQUE7QUFuQ0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7OERBQzlCO0FBSVg7SUFEQyxnQkFBTSxFQUFFOztnRUFDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7aUVBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O2tFQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOztpRUFDSztBQU1kO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7dUVBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt1RUFBQztBQU1sQjtJQUhDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQ0FBMEIsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFO1FBQ2hILE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQzs4QkFDSSxpQ0FBMEI7Z0VBQUM7QUFwQ3RCLGtDQUFrQztJQUQ5QyxpQkFBVyxDQUFDLGlDQUFpQyxDQUFDO0dBQ2xDLGtDQUFrQyxDQXVDOUM7QUF2Q1ksZ0ZBQWtDIn0=