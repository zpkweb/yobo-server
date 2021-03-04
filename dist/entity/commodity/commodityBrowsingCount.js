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
exports.CommodityBrowsingCountEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("./commodity");
let CommodityBrowsingCountEntity = class CommodityBrowsingCountEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityBrowsingCountEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityBrowsingCountEntity.prototype, "count", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityBrowsingCountEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityBrowsingCountEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.browsingCount, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityBrowsingCountEntity.prototype, "commodity", void 0);
CommodityBrowsingCountEntity = __decorate([
    orm_1.EntityModel('commodity_browsing_count')
], CommodityBrowsingCountEntity);
exports.CommodityBrowsingCountEntity = CommodityBrowsingCountEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5QnJvd3NpbmdDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L2NvbW1vZGl0eUJyb3dzaW5nQ291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCwyQ0FBOEM7QUFHOUMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7Q0E4QnhDLENBQUE7QUEzQkM7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7d0RBQ2hDO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzsyREFDSztBQU1kO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7aUVBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtpRUFBQztBQVVsQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRTtRQUNwRixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxhQUFhO1FBQ25CLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDUywyQkFBZTsrREFBQztBQTVCaEIsNEJBQTRCO0lBRHhDLGlCQUFXLENBQUMsMEJBQTBCLENBQUM7R0FDM0IsNEJBQTRCLENBOEJ4QztBQTlCWSxvRUFBNEIifQ==