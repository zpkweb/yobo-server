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
exports.MyOrderEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
let MyOrderEntity = class MyOrderEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyOrderEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], MyOrderEntity.prototype, "myOrderId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyOrderEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MyOrderEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyOrderEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyOrderEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyOrderEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.myOrders, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyOrderEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.orders, {
        cascade: true
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'myOrderId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'commodityId'
        }
    }),
    __metadata("design:type", Array)
], MyOrderEntity.prototype, "commoditys", void 0);
MyOrderEntity = __decorate([
    orm_1.EntityModel('my_order')
], MyOrderEntity);
exports.MyOrderEntity = MyOrderEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L215L29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBc0o7QUFDdEosdUNBQWtEO0FBQ2xELHNEQUFpRTtBQUdqRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBZ0V6QixDQUFBO0FBM0RDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOzt5Q0FDUztBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOztnREFDQTtBQUlsQjtJQURDLGdCQUFNLEVBQUU7OytDQUNRO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7NENBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzZDQUNNO0FBTWY7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtrREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2tEQUFDO0FBU2xCO0lBTkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ2hFLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixvQkFBb0IsRUFBRSxRQUFRO0tBQy9CLENBQUM7OEJBQ0ssaUJBQVU7NENBQUM7QUFjbEI7SUFYQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDOUUsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0QsbUJBQVMsQ0FBQztRQUNULFVBQVUsRUFBRTtZQUNWLG9CQUFvQixFQUFFLFdBQVc7U0FDbEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixvQkFBb0IsRUFBRSxhQUFhO1NBQ3BDO0tBQ0YsQ0FBQzs7aURBQzRCO0FBM0RuQixhQUFhO0lBRHpCLGlCQUFXLENBQUMsVUFBVSxDQUFDO0dBQ1gsYUFBYSxDQWdFekI7QUFoRVksc0NBQWEifQ==