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
exports.UserSellerResumeEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const seller_1 = require("./seller");
let UserSellerResumeEntity = class UserSellerResumeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserSellerResumeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerResumeEntity.prototype, "year", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerResumeEntity.prototype, "something", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerResumeEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerResumeEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.resumes, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'sellerId'
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], UserSellerResumeEntity.prototype, "seller", void 0);
UserSellerResumeEntity = __decorate([
    orm_1.EntityModel('user_seller_resume')
], UserSellerResumeEntity);
exports.UserSellerResumeEntity = UserSellerResumeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9yZXN1bWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCxxQ0FBNEM7QUFHNUMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FvQ2xDLENBQUE7QUEvQkM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O2tEQUNTO0FBSVg7SUFEQyxnQkFBTSxFQUFFOztvREFDSTtBQUliO0lBREMsZ0JBQU0sRUFBRTs7eURBQ1M7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzJEQUFDO0FBU2xCO0lBTkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFnQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDakYsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFVBQVU7S0FDakMsQ0FBQzs4QkFDTSx5QkFBZ0I7c0RBQUM7QUFsQ2Qsc0JBQXNCO0lBRGxDLGlCQUFXLENBQUMsb0JBQW9CLENBQUM7R0FDckIsc0JBQXNCLENBb0NsQztBQXBDWSx3REFBc0IifQ==