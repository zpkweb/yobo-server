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
exports.CommodityOptionsSpecificationEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsSpecificationEntity = class CommodityOptionsSpecificationEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsSpecificationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsSpecificationEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsSpecificationEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsSpecificationEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.specifications, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsSpecificationEntity.prototype, "commodity", void 0);
CommodityOptionsSpecificationEntity = __decorate([
    orm_1.EntityModel('commodity_options_specification')
], CommodityOptionsSpecificationEntity);
exports.CommodityOptionsSpecificationEntity = CommodityOptionsSpecificationEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L29wdGlvbnMvc3BlY2lmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBNEM7QUFDNUMscUNBQXlHO0FBQ3pHLDRDQUErQztBQUcvQyxJQUFhLG1DQUFtQyxHQUFoRCxNQUFhLG1DQUFtQztDQXVEL0MsQ0FBQTtBQW5EQztJQURDLGdDQUFzQixDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOzsrREFDOUI7QUFJWDtJQURDLGdCQUFNLEVBQUU7O2dFQUNHO0FBTVo7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOztrRUFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7O2tFQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7a0VBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOztrRUFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7O2tFQUNjO0FBTWhCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7d0VBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt3RUFBQztBQU9sQjtJQUpDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtRQUN0RixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7OEJBQ1MsMkJBQWU7c0VBQUM7QUFyRGhCLG1DQUFtQztJQUQvQyxpQkFBVyxDQUFDLGlDQUFpQyxDQUFDO0dBQ2xDLG1DQUFtQyxDQXVEL0M7QUF2RFksa0ZBQW1DIn0=