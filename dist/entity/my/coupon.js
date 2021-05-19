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
exports.MyCouponEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const coupon_1 = require("../coupon/coupon");
let MyCouponEntity = class MyCouponEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyCouponEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], MyCouponEntity.prototype, "myCouponId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyCouponEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyCouponEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.myCoupons, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyCouponEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => coupon_1.CouponEntity, CouponEntity => CouponEntity.myCoupon, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'couponId'
    }),
    __metadata("design:type", coupon_1.CouponEntity)
], MyCouponEntity.prototype, "coupon", void 0);
MyCouponEntity = __decorate([
    orm_1.EntityModel('my_coupon')
], MyCouponEntity);
exports.MyCouponEntity = MyCouponEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9teS9jb3Vwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUErSDtBQUMvSCx1Q0FBa0Q7QUFDbEQsNkNBQXdEO0FBR3hELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0ErQzFCLENBQUE7QUF6Q0M7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzBDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2tEQUNDO0FBTW5CO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7bURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTttREFBQztBQVVsQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNqRSxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVOzRDQUFDO0FBVWpCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFZLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1FBQ3RFLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixvQkFBb0IsRUFBRSxVQUFVO0tBQ2pDLENBQUM7OEJBQ00scUJBQVk7OENBQUM7QUE3Q1YsY0FBYztJQUQxQixpQkFBVyxDQUFDLFdBQVcsQ0FBQztHQUNaLGNBQWMsQ0ErQzFCO0FBL0NZLHdDQUFjIn0=