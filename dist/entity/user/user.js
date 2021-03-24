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
    typeorm_1.OneToMany(type => identity_1.UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.user, {
        onDelete: "CASCADE"
    }),
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
    typeorm_1.OneToMany(type => subscriber_1.SubscriberEntity, SubscriberEntity => SubscriberEntity.user, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriber", void 0);
UserEntity = __decorate([
    orm_1.EntityModel('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBNkg7QUFDN0gsdUNBQThDO0FBQzlDLHdEQUErRDtBQUMvRCxrREFBeUQ7QUFDekQsNENBQW1EO0FBQ25ELDRDQUFtRDtBQUNuRCx1RUFBOEU7QUFDOUUseUNBQWdEO0FBQ2hELGtEQUF5RDtBQUN6RCxxREFBa0U7QUFDbEUsdUNBQW9EO0FBQ3BELDJEQUF3RTtBQUN4RSxpREFBOEQ7QUFDOUQsdURBQW9FO0FBQ3BFLHlDQUFzRDtBQUN0RCw2Q0FBMEQ7QUFDMUQsMENBQXFEO0FBQ3JELHdEQUFtRTtBQUduRSxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBNkh0QixDQUFBO0FBekhDO0lBREMsZ0NBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7O3NDQUM5QjtBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOzswQ0FDSDtBQVVmO0lBREMsZ0JBQU0sRUFBRTs7MENBQ007QUFJZjtJQURDLGdCQUFNLEVBQUU7O3dDQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDSztBQU1kO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQzs7eUNBQ1k7QUFNZDtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OzRDQUNlO0FBSWpCO0lBREMsMEJBQWdCLEVBQUU7OEJBQ04sSUFBSTsrQ0FBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFD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