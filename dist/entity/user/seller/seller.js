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
const commodity_1 = require("../../commodity/commodity");
const metadata_1 = require("./metadata");
const studio_1 = require("./studio");
const resume_1 = require("./resume");
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
    __metadata("design:type", String)
], UserSellerEntity.prototype, "banner", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], UserSellerEntity.prototype, "choice", void 0);
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
], UserSellerEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerEntity.prototype, "searchName", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "tags", void 0);
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
    typeorm_1.OneToOne(type => studio_1.UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller),
    typeorm_1.JoinColumn({
        name: 'studioId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", studio_1.UserSellerStudioEntity)
], UserSellerEntity.prototype, "studio", void 0);
__decorate([
    typeorm_1.OneToOne(type => resume_1.UserSellerResumeEntity, UserSellerResumeEntity => UserSellerResumeEntity.seller),
    __metadata("design:type", resume_1.UserSellerResumeEntity)
], UserSellerEntity.prototype, "resume", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_1.UserEntity, UserEntity => UserEntity.seller, {
        cascade: true,
        onDelete: 'SET NULL'
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
    typeorm_1.ManyToMany(type => order_1.OrderEntity, OrderEntity => OrderEntity.sellers),
    __metadata("design:type", Array)
], UserSellerEntity.prototype, "orders", void 0);
UserSellerEntity = __decorate([
    orm_1.EntityModel('user_seller')
], UserSellerEntity);
exports.UserSellerEntity = UserSellerEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsdUNBQTRDO0FBQzVDLHFDQUFxSjtBQUNySixrQ0FBa0Q7QUFFbEQseURBQWlFO0FBQ2pFLHlDQUFzRDtBQUN0RCxxQ0FBa0Q7QUFDbEQscUNBQWtEO0FBQ2xELDZDQUFxRDtBQUNyRCxvREFBOEQ7QUFJOUQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0EwSTVCLENBQUE7QUFwSUM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzRDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2tEQUNEO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7Z0RBQ007QUFJZjtJQURDLGdCQUFNLEVBQUU7O2dEQUNPO0FBSWhCO0lBREMsZ0JBQU0sRUFBRTs7K0NBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzhDQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOzttREFDUztBQUlsQjtJQURDLGdCQUFNLEVBQUU7O2tEQUNRO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7b0RBQ1U7QUFJbkI7SUFEQyxnQkFBTSxDQUFDLGNBQWMsQ0FBQzs7OENBQ1I7QUFNZjtJQURDLGdCQUFNLEVBQUU7O2dEQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOztpREFDTztBQU1oQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3FEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7cURBQUM7QUFJbEI7SUFEQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUNBQXdCLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQzs4QkFDOUYsbUNBQXdCO2tEQUFDO0FBUW5DO0lBTEMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUFzQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7SUFDakcsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxVQUFVO1FBQ2hCLG9CQUFvQixFQUFFLElBQUk7S0FDM0IsQ0FBQzs4QkFDTSwrQkFBc0I7Z0RBQUM7QUFjL0I7SUFEQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsK0JBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQzs4QkFDMUYsK0JBQXNCO2dEQUFDO0FBWS9CO0lBVEMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1FBQzdELE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztJQUVELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTs4Q0FBQztBQVFqQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDOztxREFDckQ7QUFJbEM7SUFEQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O29EQUNoRDtBQWtCOUI7SUFEQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7O2dEQUM5QztBQXZJWCxnQkFBZ0I7SUFENUIsaUJBQVcsQ0FBQyxhQUFhLENBQUM7R0FDZCxnQkFBZ0IsQ0EwSTVCO0FBMUlZLDRDQUFnQiJ9