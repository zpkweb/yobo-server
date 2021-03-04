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
exports.UserThirdPartyEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
let UserThirdPartyEntity = class UserThirdPartyEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserThirdPartyEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserThirdPartyEntity.prototype, "identityThirdPartyId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserThirdPartyEntity.prototype, "source", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserThirdPartyEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserThirdPartyEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.thirdParty, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserThirdPartyEntity.prototype, "user", void 0);
UserThirdPartyEntity = __decorate([
    orm_1.EntityModel('user_thirdParty')
], UserThirdPartyEntity);
exports.UserThirdPartyEntity = UserThirdPartyEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmRQYXJ0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvdXNlci90aGlyZFBhcnR5L3RoaXJkUGFydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUErSDtBQUMvSCxrQ0FBa0Q7QUFHbEQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0F3Q2hDLENBQUE7QUFsQ0M7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O2dEQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2tFQUNXO0FBSTdCO0lBREMsZ0JBQU0sRUFBRTs7b0RBQ007QUFNZjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3lEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7eURBQUM7QUFTbEI7SUFOQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7UUFDbEUsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTtrREFBQztBQXRDTixvQkFBb0I7SUFEaEMsaUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztHQUNsQixvQkFBb0IsQ0F3Q2hDO0FBeENZLG9EQUFvQiJ9