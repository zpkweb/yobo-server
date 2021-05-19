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
exports.UserAdminEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
const customerService_1 = require("../customerService/customerService");
let UserAdminEntity = class UserAdminEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserAdminEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserAdminEntity.prototype, "adminId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserAdminEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserAdminEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_1.UserEntity, UserEntity => UserEntity.admin, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserAdminEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => customerService_1.UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.admin),
    __metadata("design:type", Array)
], UserAdminEntity.prototype, "customerService", void 0);
UserAdminEntity = __decorate([
    orm_1.EntityModel('user_admin')
], UserAdminEntity);
exports.UserAdminEntity = UserAdminEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L3VzZXIvYWRtaW4vYWRtaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUF5STtBQUN6SSxrQ0FBa0Q7QUFDbEQsd0VBQTRGO0FBRzVGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0F5QzNCLENBQUE7QUFuQ0M7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7OzJDQUNTO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2dEQUNGO0FBTWhCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7b0RBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtvREFBQztBQVVsQjtJQVBDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtRQUM1RCxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVOzZDQUFDO0FBSWpCO0lBREMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJDQUF5QixFQUFFLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7O3dEQUM5RDtBQXZDbEMsZUFBZTtJQUQzQixpQkFBVyxDQUFDLFlBQVksQ0FBQztHQUNiLGVBQWUsQ0F5QzNCO0FBekNZLDBDQUFlIn0=