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
exports.UserEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const address_1 = require("./address");
const thirdParty_1 = require("./thirdParty/thirdParty");
const ordinary_1 = require("./ordinary/ordinary");
const member_1 = require("./member/member");
const seller_1 = require("./seller/seller");
const customerService_1 = require("./customerService/customerService");
const admin_1 = require("./admin/admin");
const identity_1 = require("./identity/identity");
const shoppingCart_1 = require("../my/shoppingCart");
const order_1 = require("../my/order");
const browsingHistory_1 = require("../my/browsingHistory");
const likeSeller_1 = require("../my/likeSeller");
const likeCommodity_1 = require("../my/likeCommodity");
const coupon_1 = require("../my/coupon");
const activity_1 = require("../my/activity");
const order_2 = require("../order/order");
const subscriber_1 = require("../subscribe/subscriber");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        length: 11
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => identity_1.UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "identitys", void 0);
__decorate([
    typeorm_1.OneToMany(type => address_1.UserAddressEntity, UserAddressEntity => UserAddressEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(type => thirdParty_1.UserThirdPartyEntity, UserThirdPartyEntity => UserThirdPartyEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "thirdParty", void 0);
__decorate([
    typeorm_1.OneToOne(type => ordinary_1.UserOrdinaryEntity, UserOrdinaryEntity => UserOrdinaryEntity.user),
    __metadata("design:type", ordinary_1.UserOrdinaryEntity)
], UserEntity.prototype, "ordinary", void 0);
__decorate([
    typeorm_1.OneToOne(type => member_1.UserMemberEntity, UserMemberEntity => UserMemberEntity.user),
    __metadata("design:type", member_1.UserMemberEntity)
], UserEntity.prototype, "member", void 0);
__decorate([
    typeorm_1.OneToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.user),
    __metadata("design:type", seller_1.UserSellerEntity)
], UserEntity.prototype, "seller", void 0);
__decorate([
    typeorm_1.OneToOne(type => customerService_1.UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.user),
    __metadata("design:type", customerService_1.UserCustomerServiceEntity)
], UserEntity.prototype, "customerService", void 0);
__decorate([
    typeorm_1.OneToOne(type => admin_1.UserAdminEntity, UserAdminEntity => UserAdminEntity.user),
    __metadata("design:type", admin_1.UserAdminEntity)
], UserEntity.prototype, "admin", void 0);
__decorate([
    typeorm_1.OneToMany(type => browsingHistory_1.MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "likeSellers", void 0);
__decorate([
    typeorm_1.OneToMany(type => likeSeller_1.MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "likeCommoditys", void 0);
__decorate([
    typeorm_1.OneToMany(type => likeCommodity_1.MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "browsingHistory", void 0);
__decorate([
    typeorm_1.OneToMany(type => shoppingCart_1.MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "shoppingCart", void 0);
__decorate([
    typeorm_1.OneToMany(type => order_2.OrderEntity, OrderEntity => OrderEntity.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "orders", void 0);
__decorate([
    typeorm_1.OneToMany(type => order_1.MyOrderEntity, MyOrderEntity => MyOrderEntity.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "myOrders", void 0);
__decorate([
    typeorm_1.OneToMany(type => coupon_1.MyCouponEntity, MyCouponEntity => MyCouponEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "myCoupons", void 0);
__decorate([
    typeorm_1.OneToMany(type => activity_1.MyActivityEntity, MyActivityEntity => MyActivityEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "myActivitys", void 0);
__decorate([
    typeorm_1.OneToMany(type => subscriber_1.SubscriberEntity, SubscriberEntity => SubscriberEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriber", void 0);
UserEntity = __decorate([
    orm_1.EntityModel('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBNkg7QUFDN0gsdUNBQThDO0FBQzlDLHdEQUErRDtBQUMvRCxrREFBeUQ7QUFDekQsNENBQW1EO0FBQ25ELDRDQUFtRDtBQUNuRCx1RUFBOEU7QUFDOUUseUNBQWdEO0FBQ2hELGtEQUF5RDtBQUN6RCxxREFBa0U7QUFDbEUsdUNBQW9EO0FBQ3BELDJEQUF3RTtBQUN4RSxpREFBOEQ7QUFDOUQsdURBQW9FO0FBQ3BFLHlDQUFzRDtBQUN0RCw2Q0FBMEQ7QUFDMUQsMENBQXFEO0FBQ3JELHdEQUFtRTtBQUduRSxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBMEh0QixDQUFBO0FBdEhDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O3NDQUM5QjtBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOzswQ0FDSDtBQVVmO0lBREMsZ0JBQU0sRUFBRTs7MENBQ007QUFJZjtJQURDLGdCQUFNLEVBQUU7O3dDQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDSztBQU1kO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQzs7eUNBQ1k7QUFNZDtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OzRDQUNlO0FBSWpCO0lBREMsMEJBQWdCLEVBQUU7OEJBQ04sSUFBSTsrQ0FBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFD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