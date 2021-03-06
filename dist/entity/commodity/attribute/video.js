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
exports.CommodityVideoEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityVideoEntity = class CommodityVideoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityVideoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityVideoEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityVideoEntity.prototype, "ccId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityVideoEntity.prototype, "siteId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityVideoEntity.prototype, "videoPhoto", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityVideoEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityVideoEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.videos, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityVideoEntity.prototype, "commodity", void 0);
CommodityVideoEntity = __decorate([
    orm_1.EntityModel('commodity_video')
], CommodityVideoEntity);
exports.CommodityVideoEntity = CommodityVideoEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2NvbW1vZGl0eS9hdHRyaWJ1dGUvdmlkZW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUMsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCw0Q0FBK0M7QUFHL0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0F3Q2hDLENBQUE7QUFyQ0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Z0RBQ2hDO0FBSVo7SUFEQyxnQkFBTSxFQUFFOzttREFDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O29EQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzt3REFDVTtBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3lEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7eURBQUM7QUFVbEI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDN0UsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsYUFBYTtRQUNuQixvQkFBb0IsRUFBRSxhQUFhO0tBQ3BDLENBQUM7OEJBQ1MsMkJBQWU7dURBQUM7QUF0Q2hCLG9CQUFvQjtJQURoQyxpQkFBVyxDQUFDLGlCQUFpQixDQUFDO0dBQ2xCLG9CQUFvQixDQXdDaEM7QUF4Q1ksb0RBQW9CIn0=