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
exports.CommodityOptionsTypeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsTypeEntity = class CommodityOptionsTypeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsTypeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsTypeEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsTypeEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsTypeEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.types, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsTypeEntity.prototype, "commodity", void 0);
CommodityOptionsTypeEntity = __decorate([
    orm_1.EntityModel('commodity_options_type')
], CommodityOptionsTypeEntity);
exports.CommodityOptionsTypeEntity = CommodityOptionsTypeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L29wdGlvbnMvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBNEM7QUFDNUMscUNBQXlHO0FBQ3pHLDRDQUErQztBQUcvQyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtDQXVEdEMsQ0FBQTtBQW5EQztJQURDLGdDQUFzQixDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOztzREFDOUI7QUFJWDtJQURDLGdCQUFNLEVBQUU7O3VEQUNHO0FBTVo7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzt5REFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7O3lEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7eURBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzt5REFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7O3lEQUNjO0FBTWhCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7K0RBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsrREFBQztBQU9sQjtJQUpDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtRQUM3RSxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7OEJBQ1MsMkJBQWU7NkRBQUM7QUFyRGhCLDBCQUEwQjtJQUR0QyxpQkFBVyxDQUFDLHdCQUF3QixDQUFDO0dBQ3pCLDBCQUEwQixDQXVEdEM7QUF2RFksZ0VBQTBCIn0=