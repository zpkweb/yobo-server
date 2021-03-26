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
const identity_1 = require("../identity/identity");
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
    typeorm_1.OneToMany(type => identity_1.UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.seller),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "identitys", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsdUNBQTRDO0FBQzVDLHFDQUFnSztBQUNoSyxrQ0FBa0Q7QUFDbEQsd0VBQTRGO0FBQzVGLHlEQUFpRTtBQUNqRSx5Q0FBc0Q7QUFDdEQscUNBQWtEO0FBQ2xELDZDQUFxRDtBQUNyRCxvREFBOEQ7QUFDOUQsbURBQXVFO0FBR3ZFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBaUk1QixDQUFBO0FBM0hDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOzs0Q0FDUztBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOztrREFDRDtBQUlqQjtJQURDLGdCQUFNLEVBQUU7OytDQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOzs4Q0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ1E7QUFJakI7SUFEQyxnQkFBTSxFQUFFOzttREFDUztBQUlsQjtJQURDLGdCQUFNLEVBQUU7O2tEQUNRO0FBSWpCO0lBREMsZ0JBQU0sQ0FBQyxjQUFjLENBQUM7OzhDQUNSO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDSztBQUlkO0lBREMsZ0JBQU0sRUFBRTs7Z0RBQ007QUFJZjtJQURDLGdCQUFNLEVBQUU7O2lEQUNPO0FBTWhCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7cURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtxREFBQztBQUtsQjtJQUZDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQ0FBd0IsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDOzhCQUU5RixtQ0FBd0I7a0RBQUM7QUFjbkM7SUFYQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsK0JBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTtRQUNuRyxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRCxtQkFBUyxDQUFDO1FBQ1QsVUFBVSxFQUFFO1lBQ1Ysb0JBQW9CLEVBQUUsVUFBVTtTQUNqQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLG9CQUFvQixFQUFFLElBQUk7U0FDM0I7S0FDRixDQUFDOztpREFDZ0M7QUFNbEM7SUFIQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsK0JBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTtRQUNsRyxRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDOztpREFDZ0M7QUFXbEM7SUFSQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDN0QsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxRQUFRO1FBQ2Qsb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVOzhDQUFDO0FBSWpCO0lBREMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDZCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7O21EQUN2RDtBQUloQztJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDOztxREFDckQ7QUFLbEM7SUFGQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O29EQUVoRDtBQWM5QjtJQVhDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQ0FBeUIsRUFBRSx5QkFBeUIsQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFO1FBQzdHLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNELG1CQUFTLENBQUM7UUFDVCxVQUFVLEVBQUU7WUFDVixvQkFBb0IsRUFBRSxVQUFVO1NBQ2pDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsbUJBQW1CO1NBQzFDO0tBQ0YsQ0FBQzs7MERBQzRDO0FBSTlDO0lBREMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDOztnREFDOUM7QUE5SFgsZ0JBQWdCO0lBRDVCLGlCQUFXLENBQUMsYUFBYSxDQUFDO0dBQ2QsZ0JBQWdCLENBaUk1QjtBQWpJWSw0Q0FBZ0IifQ==