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
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserSellerResumeEntity.prototype, "resume", void 0);
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
    typeorm_1.OneToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.resume, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'sellerId',
        referencedColumnName: 'sellerId'
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], UserSellerResumeEntity.prototype, "seller", void 0);
UserSellerResumeEntity = __decorate([
    orm_1.EntityModel('user_seller_resume')
], UserSellerResumeEntity);
exports.UserSellerResumeEntity = UserSellerResumeEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9yZXN1bWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUFtSDtBQUNuSCxxQ0FBNEM7QUFHNUMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FvQ2xDLENBQUE7QUEvQkM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O2tEQUNTO0FBTVg7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztzREFDYTtBQU1mO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQVdsQjtJQVJDLGtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQy9FLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsVUFBVTtRQUNoQixvQkFBb0IsRUFBRSxVQUFVO0tBQ2pDLENBQUM7OEJBQ00seUJBQWdCO3NEQUFDO0FBbENkLHNCQUFzQjtJQURsQyxpQkFBVyxDQUFDLG9CQUFvQixDQUFDO0dBQ3JCLHNCQUFzQixDQW9DbEM7QUFwQ1ksd0RBQXNCIn0=