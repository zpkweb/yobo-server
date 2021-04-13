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
exports.CommodityTypeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const type_1 = require("../options/type");
const commodity_1 = require("../commodity");
let CommodityTypeEntity = class CommodityTypeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityTypeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityTypeEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityTypeEntity.prototype, "typeName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityTypeEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityTypeEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.types, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityTypeEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => type_1.CommodityOptionsTypeEntity, CommodityOptionsTypeEntity => CommodityOptionsTypeEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'typeId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", type_1.CommodityOptionsTypeEntity)
], CommodityTypeEntity.prototype, "types", void 0);
CommodityTypeEntity = __decorate([
    orm_1.EntityModel('commodity_type')
], CommodityTypeEntity);
exports.CommodityTypeEntity = CommodityTypeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L2NvbW1vZGl0eS1vcHRpb25zL3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUMsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCwwQ0FBNkQ7QUFDN0QsNENBQStDO0FBRy9DLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBMEMvQixDQUFBO0FBdkNDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7OytDQUM5QjtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7MERBQ2E7QUFHdEI7SUFEQyxnQkFBTSxFQUFFOztxREFDUTtBQU1qQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3dEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7d0RBQUM7QUFVbEI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUU7UUFDM0UsUUFBUSxFQUFFLFNBQVM7S0FDckIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixvQkFBb0IsRUFBRSxhQUFhO0tBQ3BDLENBQUM7OEJBQ1csMkJBQWU7dURBQUM7QUFTNUI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUNBQTBCLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsRUFBRTtRQUNuSCxRQUFRLEVBQUUsU0FBUztLQUNuQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNYLElBQUksRUFBRSxRQUFRO1FBQ2Qsb0JBQW9CLEVBQUUsSUFBSTtLQUMzQixDQUFDOzhCQUNNLGlDQUEwQjtrREFBQztBQXhDdkIsbUJBQW1CO0lBRC9CLGlCQUFXLENBQUMsZ0JBQWdCLENBQUM7R0FDakIsbUJBQW1CLENBMEMvQjtBQTFDWSxrREFBbUIifQ==