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
exports.UserCustomerServiceEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
const seller_1 = require("../seller/seller");
const admin_1 = require("../admin/admin");
let UserCustomerServiceEntity = class UserCustomerServiceEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserCustomerServiceEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], UserCustomerServiceEntity.prototype, "costomerServiceId", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_1.UserEntity, UserEntity => UserEntity.customerService, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserCustomerServiceEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserCustomerServiceEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserCustomerServiceEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.customerServices),
    __metadata("design:type", Array)
], UserCustomerServiceEntity.prototype, "sellers", void 0);
__decorate([
    typeorm_1.ManyToOne(type => admin_1.UserAdminEntity, UserAdminEntity => UserAdminEntity.customerService, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'adminId'
    }),
    __metadata("design:type", admin_1.UserAdminEntity)
], UserCustomerServiceEntity.prototype, "admin", void 0);
UserCustomerServiceEntity = __decorate([
    orm_1.EntityModel('user_customerService')
], UserCustomerServiceEntity);
exports.UserCustomerServiceEntity = UserCustomerServiceEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL2N1c3RvbWVyU2VydmljZS9jdXN0b21lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUFxSjtBQUNySixrQ0FBa0Q7QUFDbEQsNkNBQWlFO0FBQ2pFLDBDQUE4RDtBQUc5RCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtDQW1EckMsQ0FBQTtBQTdDQztJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7cURBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7b0VBQ1E7QUFTMUI7SUFOQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUU7UUFDdEUsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTt1REFBQztBQU1qQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzhEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7OERBQUM7QUFLbEI7SUFGQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQWdCLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDOzswREFFaEU7QUFTNUI7SUFOQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7UUFDdEYsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFNBQVM7S0FDaEMsQ0FBQzs4QkFDSyx1QkFBZTt3REFBQztBQWhEWix5QkFBeUI7SUFEckMsaUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQztHQUN2Qix5QkFBeUIsQ0FtRHJDO0FBbkRZLDhEQUF5QiJ9