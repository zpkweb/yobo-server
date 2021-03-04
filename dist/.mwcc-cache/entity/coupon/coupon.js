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
exports.CouponEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const coupon_1 = require("../my/coupon");
let CouponEntity = class CouponEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], CouponEntity.prototype, "couponId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CouponEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => coupon_1.MyCouponEntity, MyCouponEntity => MyCouponEntity.coupon),
    __metadata("design:type", coupon_1.MyCouponEntity)
], CouponEntity.prototype, "myCoupon", void 0);
CouponEntity = __decorate([
    orm_1.EntityModel('coupon')
], CouponEntity);
exports.CouponEntity = CouponEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb3Vwb24vY291cG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBa0g7QUFDbEgseUNBQXNEO0FBR3RELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FtQ3hCLENBQUE7QUE3QkM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O3dDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7OzhDQUNEO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7MENBQ0k7QUFNYjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2lEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7aURBQUM7QUFJbEI7SUFEQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7OEJBQ2hFLHVCQUFjOzhDQUFDO0FBakNkLFlBQVk7SUFEeEIsaUJBQVcsQ0FBQyxRQUFRLENBQUM7R0FDVCxZQUFZLENBbUN4QjtBQW5DWSxvQ0FBWSJ9