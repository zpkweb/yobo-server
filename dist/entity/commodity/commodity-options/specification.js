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
exports.CommoditySpecificationEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const specification_1 = require("../options/specification");
const commodity_1 = require("../commodity");
let CommoditySpecificationEntity = class CommoditySpecificationEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommoditySpecificationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommoditySpecificationEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommoditySpecificationEntity.prototype, "specificationName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommoditySpecificationEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommoditySpecificationEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.specifications, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommoditySpecificationEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => specification_1.CommodityOptionsSpecificationEntity, CommodityOptionsSpecificationEntity => CommodityOptionsSpecificationEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'specificationId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", specification_1.CommodityOptionsSpecificationEntity)
], CommoditySpecificationEntity.prototype, "specifications", void 0);
CommoditySpecificationEntity = __decorate([
    orm_1.EntityModel('commodity_specification')
], CommoditySpecificationEntity);
exports.CommoditySpecificationEntity = CommoditySpecificationEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L2NvbW1vZGl0eS1vcHRpb25zL3NwZWNpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUMsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCw0REFBK0U7QUFDL0UsNENBQStDO0FBRy9DLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0NBMEN4QyxDQUFBO0FBdkNDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O3dEQUM5QjtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7bUVBQ2E7QUFHdEI7SUFEQyxnQkFBTSxFQUFFOzt1RUFDaUI7QUFNMUI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtpRUFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2lFQUFDO0FBVWxCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO1FBQ3BGLFFBQVEsRUFBRSxTQUFTO0tBQ3JCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsb0JBQW9CLEVBQUUsYUFBYTtLQUNwQyxDQUFDOzhCQUNXLDJCQUFlO2dFQUFDO0FBUzVCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1EQUFtQyxFQUFFLG1DQUFtQyxDQUFDLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLEVBQUU7UUFDOUksUUFBUSxFQUFFLFNBQVM7S0FDbkIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDWCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLG9CQUFvQixFQUFFLElBQUk7S0FDM0IsQ0FBQzs4QkFDZSxtREFBbUM7b0VBQUM7QUF4Q3pDLDRCQUE0QjtJQUR4QyxpQkFBVyxDQUFDLHlCQUF5QixDQUFDO0dBQzFCLDRCQUE0QixDQTBDeEM7QUExQ1ksb0VBQTRCIn0=