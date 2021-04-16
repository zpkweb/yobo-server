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
exports.UserIdentityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
const list_1 = require("./list");
const seller_1 = require("../seller/seller");
let UserIdentityEntity = class UserIdentityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserIdentityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "identityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserIdentityEntity.prototype, "index", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "userEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityEntity.prototype, "userPhone", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.identitys, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'userId',
        referencedColumnName: "userId"
    }),
    __metadata("design:type", user_1.UserEntity)
], UserIdentityEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.identitys, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'sellerId',
        referencedColumnName: "sellerId"
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], UserIdentityEntity.prototype, "seller", void 0);
__decorate([
    typeorm_1.ManyToOne(type => list_1.UserIdentityListEntity, userIdentityListEntity => userIdentityListEntity.identitys, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        name: 'identityListId',
        referencedColumnName: "id"
    }),
    __metadata("design:type", list_1.UserIdentityListEntity)
], UserIdentityEntity.prototype, "identityList", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserIdentityEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserIdentityEntity.prototype, "updatedDate", void 0);
UserIdentityEntity = __decorate([
    orm_1.EntityModel('user_identity')
], UserIdentityEntity);
exports.UserIdentityEntity = UserIdentityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L3VzZXIvaWRlbnRpdHkvaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUErSDtBQUMvSCxrQ0FBa0Q7QUFDbEQsaUNBQWdEO0FBQ2hELDZDQUFpRTtBQUdqRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQTJGOUIsQ0FBQTtBQXJGQztJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7OENBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7c0RBQ0M7QUFJbkI7SUFEQyxnQkFBTSxFQUFFOztpREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O2lEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7aURBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztpREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O2lEQUNPO0FBSWhCO0lBREMsZ0JBQU0sRUFBRTs7aURBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7O29EQUNRO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7cURBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOztxREFDUztBQVdsQjtJQVJDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNqRSxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLFFBQVE7UUFDZCxvQkFBb0IsRUFBRSxRQUFRO0tBQy9CLENBQUM7OEJBQ0ksaUJBQVU7Z0RBQUM7QUFXakI7SUFSQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQWdCLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtRQUNuRixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsb0JBQW9CLEVBQUUsVUFBVTtLQUNqQyxDQUFDOzhCQUNNLHlCQUFnQjtrREFBQztBQVd6QjtJQVJDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2QkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFO1FBQ3JHLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLG9CQUFvQixFQUFFLElBQUk7S0FDM0IsQ0FBQzs4QkFDWSw2QkFBc0I7d0RBQUM7QUFNckM7SUFEQywwQkFBZ0IsRUFBRTs4QkFDTixJQUFJO3VEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7dURBQUM7QUExRlAsa0JBQWtCO0lBRDlCLGlCQUFXLENBQUMsZUFBZSxDQUFDO0dBQ2hCLGtCQUFrQixDQTJGOUI7QUEzRlksZ0RBQWtCIn0=