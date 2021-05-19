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
exports.OrderEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
const seller_1 = require("../user/seller/seller");
let OrderEntity = class OrderEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], OrderEntity.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.orders, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], OrderEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.orders, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'orderId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'commodityId'
        }
    }),
    __metadata("design:type", Array)
], OrderEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToMany(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.orders, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'orderId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'sellerId'
        }
    }),
    __metadata("design:type", Array)
], OrderEntity.prototype, "sellers", void 0);
OrderEntity = __decorate([
    orm_1.EntityModel('order')
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L29yZGVyL29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBc0o7QUFDdEosdUNBQWtEO0FBQ2xELHNEQUFpRTtBQUNqRSxrREFBaUU7QUFHakUsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQWdGdkIsQ0FBQTtBQTFFQztJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7dUNBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7NENBQ0Y7QUFJaEI7SUFEQyxnQkFBTSxFQUFFOzs2Q0FDUTtBQUlqQjtJQURDLGdCQUFNLEVBQUU7OzBDQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDTTtBQU1mO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7Z0RBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtnREFBQztBQVVsQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUM5RCxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNLLGlCQUFVOzBDQUFDO0FBZWxCO0lBWkMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzlFLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG1CQUFTLENBQUM7UUFDVCxVQUFVLEVBQUU7WUFDVixvQkFBb0IsRUFBRSxTQUFTO1NBQ2hDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsYUFBYTtTQUNwQztLQUNGLENBQUM7OytDQUM0QjtBQWU5QjtJQVpDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQ2pGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG1CQUFTLENBQUM7UUFDVCxVQUFVLEVBQUU7WUFDVixvQkFBb0IsRUFBRSxTQUFTO1NBQ2hDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsVUFBVTtTQUNqQztLQUNGLENBQUM7OzRDQUMwQjtBQTdFakIsV0FBVztJQUR2QixpQkFBVyxDQUFDLE9BQU8sQ0FBQztHQUNSLFdBQVcsQ0FnRnZCO0FBaEZZLGtDQUFXIn0=