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
exports.UserSellerEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
const customerService_1 = require("../customerService/customerService");
const commodity_1 = require("../../commodity/commodity");
const metadata_1 = require("./metadata");
const studio_1 = require("./studio");
const order_1 = require("../../order/order");
const likeSeller_1 = require("../../my/likeSeller");
let UserSellerEntity = class UserSellerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserSellerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "sellerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserSellerEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserSellerEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "typeName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "label", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "country", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => metadata_1.UserSellerMetadataEntity, UserSellerMetadataEntity => UserSellerMetadataEntity.seller),
    __metadata("design:type", metadata_1.UserSellerMetadataEntity)
], UserSellerEntity.prototype, "metadata", void 0);
__decorate([
    typeorm_1.ManyToMany(type => studio_1.UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller, {
        cascade: true
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'sellerId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "studios", void 0);
__decorate([
    typeorm_1.OneToMany(type => studio_1.UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "resumes", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_1.UserEntity, UserEntity => UserEntity.seller, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'userId',
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserSellerEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => likeSeller_1.MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.seller),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "likeSellers", void 0);
__decorate([
    typeorm_1.OneToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.seller),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToMany(type => customerService_1.UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.sellers, {
        cascade: true
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'sellerId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'costomerServiceId'
        }
    }),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "customerServices", void 0);
__decorate([
    typeorm_1.ManyToMany(type => order_1.OrderEntity, OrderEntity => OrderEntity.sellers),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "orders", void 0);
UserSellerEntity = __decorate([
    orm_1.EntityModel('user_seller')
], UserSellerEntity);
exports.UserSellerEntity = UserSellerEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsdUNBQTRDO0FBQzVDLHFDQUFnSztBQUNoSyxrQ0FBa0Q7QUFDbEQsd0VBQTRGO0FBQzVGLHlEQUFpRTtBQUNqRSx5Q0FBc0Q7QUFDdEQscUNBQWtEO0FBQ2xELDZDQUFxRDtBQUNyRCxvREFBOEQ7QUFHOUQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0E2SDVCLENBQUE7QUF2SEM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzRDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2tEQUNEO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7K0NBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzhDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOztrREFDUTtBQUlqQjtJQURDLGdCQUFNLEVBQUU7O21EQUNTO0FBSWxCO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ1E7QUFJakI7SUFEQyxnQkFBTSxDQUFDLGNBQWMsQ0FBQzs7OENBQ1I7QUFHZjtJQURDLGdCQUFNLEVBQUU7OytDQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOztnREFDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7aURBQ087QUFNaEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtxREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3FEQUFDO0FBS2xCO0lBRkMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1DQUF3QixFQUFFLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUM7OEJBRTlGLG1DQUF3QjtrREFBQztBQWNuQztJQVhDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFO1FBQ25HLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNELG1CQUFTLENBQUM7UUFDVCxVQUFVLEVBQUU7WUFDVixvQkFBb0IsRUFBRSxVQUFVO1NBQ2pDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsSUFBSTtTQUMzQjtLQUNGLENBQUM7O2lEQUNnQztBQU1sQztJQUhDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFO1FBQ2xHLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7O2lEQUNnQztBQVdsQztJQVJDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUM3RCxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLFFBQVE7UUFDZCxvQkFBb0IsRUFBRSxRQUFRO0tBQy9CLENBQUM7OEJBQ0ksaUJBQVU7OENBQUM7QUFJakI7SUFEQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsK0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs7cURBQ3JEO0FBS2xDO0lBRkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDOztvREFFaEQ7QUFjOUI7SUFYQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkNBQXlCLEVBQUUseUJBQXlCLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRTtRQUM3RyxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRCxtQkFBUyxDQUFDO1FBQ1QsVUFBVSxFQUFFO1lBQ1Ysb0JBQW9CLEVBQUUsVUFBVTtTQUNqQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLG9CQUFvQixFQUFFLG1CQUFtQjtTQUMxQztLQUNGLENBQUM7OzBEQUM0QztBQUk5QztJQURDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzs7Z0RBQzlDO0FBMUhYLGdCQUFnQjtJQUQ1QixpQkFBVyxDQUFDLGFBQWEsQ0FBQztHQUNkLGdCQUFnQixDQTZINUI7QUE3SFksNENBQWdCIn0=