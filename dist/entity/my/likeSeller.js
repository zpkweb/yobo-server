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
exports.MyLikeSellerEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const seller_1 = require("../user/seller/seller");
let MyLikeSellerEntity = class MyLikeSellerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyLikeSellerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeSellerEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeSellerEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeSellerEntity.prototype, "sellerName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeSellerEntity.prototype, "sellerId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyLikeSellerEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyLikeSellerEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.likeSellers, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyLikeSellerEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.likeSellers, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'sellerId'
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], MyLikeSellerEntity.prototype, "seller", void 0);
MyLikeSellerEntity = __decorate([
    orm_1.EntityModel('my_likeSeller')
], MyLikeSellerEntity);
exports.MyLikeSellerEntity = MyLikeSellerEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvbXkvbGlrZVNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILHVDQUFrRDtBQUNsRCxrREFBaUU7QUFHakUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0F1RDlCLENBQUE7QUFqREM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzhDQUNTO0FBTVg7SUFEQyxnQkFBTSxFQUFFOztvREFDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7O2tEQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOztzREFDVTtBQUduQjtJQURDLGdCQUFNLEVBQUU7O29EQUNRO0FBTWpCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7dURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt1REFBQztBQVVsQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtRQUNuRSxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVO2dEQUFDO0FBVWpCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFnQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7UUFDckYsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFVBQVU7S0FDakMsQ0FBQzs4QkFDTSx5QkFBZ0I7a0RBQUM7QUFyRGQsa0JBQWtCO0lBRDlCLGlCQUFXLENBQUMsZUFBZSxDQUFDO0dBQ2hCLGtCQUFrQixDQXVEOUI7QUF2RFksZ0RBQWtCIn0=