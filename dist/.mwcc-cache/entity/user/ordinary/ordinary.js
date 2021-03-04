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
exports.UserOrdinaryEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
let UserOrdinaryEntity = class UserOrdinaryEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserOrdinaryEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserOrdinaryEntity.prototype, "ordinaryId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserOrdinaryEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserOrdinaryEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_1.UserEntity, UserEntity => UserEntity.ordinary, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserOrdinaryEntity.prototype, "user", void 0);
UserOrdinaryEntity = __decorate([
    orm_1.EntityModel('user_ordinary')
], UserOrdinaryEntity);
exports.UserOrdinaryEntity = UserOrdinaryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkaW5hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L3VzZXIvb3JkaW5hcnkvb3JkaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUE4SDtBQUM5SCxrQ0FBa0Q7QUFHbEQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0FvQzlCLENBQUE7QUE5QkM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzhDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O3NEQUNDO0FBTW5CO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7dURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt1REFBQztBQVNsQjtJQU5DLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUMvRCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVO2dEQUFDO0FBbENOLGtCQUFrQjtJQUQ5QixpQkFBVyxDQUFDLGVBQWUsQ0FBQztHQUNoQixrQkFBa0IsQ0FvQzlCO0FBcENZLGdEQUFrQiJ9