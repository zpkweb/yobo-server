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
exports.UserAddressEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
let UserAddressEntity = class UserAddressEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], UserAddressEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAddressEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        length: 11
    }),
    __metadata("design:type", String)
], UserAddressEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAddressEntity.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAddressEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserAddressEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserAddressEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserAddressEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.address, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'userId',
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], UserAddressEntity.prototype, "user", void 0);
UserAddressEntity = __decorate([
    orm_1.EntityModel('user_address')
], UserAddressEntity);
exports.UserAddressEntity = UserAddressEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvdXNlci9hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBb0g7QUFDcEgsaUNBQW9DO0FBR3BDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBK0M3QixDQUFBO0FBM0NDO0lBREMsZ0NBQXNCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OzZDQUNoQztBQUlYO0lBREMsZ0JBQU0sRUFBRTs7K0NBQ0k7QUFNYjtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsRUFBRTtLQUNYLENBQUM7O2dEQUNZO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOztrREFDTztBQUloQjtJQURDLGdCQUFNLEVBQUU7OytDQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOztrREFDTztBQUloQjtJQURDLDBCQUFnQixFQUFFOzhCQUNOLElBQUk7c0RBQUM7QUFJbEI7SUFEQywwQkFBZ0IsRUFBRTs4QkFDTixJQUFJO3NEQUFDO0FBV2xCO0lBUkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQy9ELE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTsrQ0FBQztBQTdDTixpQkFBaUI7SUFEN0IsaUJBQVcsQ0FBQyxjQUFjLENBQUM7R0FDZixpQkFBaUIsQ0ErQzdCO0FBL0NZLDhDQUFpQiJ9