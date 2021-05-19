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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL2N1c3RvbWVyU2VydmljZS9jdXN0b21lclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsdUNBQTRDO0FBQzVDLHFDQUF3STtBQUN4SSxrQ0FBa0Q7QUFFbEQsMENBQThEO0FBRzlELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBb0RyQyxDQUFBO0FBOUNDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOztxREFDUztBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOztvRUFDUTtBQVMxQjtJQU5DLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtRQUN0RSxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsUUFBUTtLQUMvQixDQUFDOzhCQUNJLGlCQUFVO3VEQUFDO0FBTWpCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7OERBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs4REFBQztBQWVsQjtJQU5DLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRTtRQUN0RixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsU0FBUztLQUNoQyxDQUFDOzhCQUNLLHVCQUFlO3dEQUFDO0FBakRaLHlCQUF5QjtJQURyQyxpQkFBVyxDQUFDLHNCQUFzQixDQUFDO0dBQ3ZCLHlCQUF5QixDQW9EckM7QUFwRFksOERBQXlCIn0=