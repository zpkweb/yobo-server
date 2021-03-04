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
exports.UserSellerStudioEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const seller_1 = require("./seller");
let UserSellerStudioEntity = class UserSellerStudioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], UserSellerStudioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerStudioEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerStudioEntity.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerStudioEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerStudioEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerStudioEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerStudioEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.studios, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Array)
], UserSellerStudioEntity.prototype, "seller", void 0);
UserSellerStudioEntity = __decorate([
    orm_1.EntityModel('user_seller_studio')
], UserSellerStudioEntity);
exports.UserSellerStudioEntity = UserSellerStudioEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGlvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS91c2VyL3NlbGxlci9zdHVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUF5RztBQUN6RyxxQ0FBNEM7QUFHNUMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0F3Q2xDLENBQUE7QUFuQ0M7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O2tEQUNTO0FBSVg7SUFEQyxnQkFBTSxFQUFFOztvREFDSTtBQUliO0lBREMsZ0JBQU0sRUFBRTs7cURBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7O3FEQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOztvREFDSTtBQU1iO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQU1sQjtJQUhDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDO1FBQ2pGLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7O3NEQUN5QjtBQXZDaEIsc0JBQXNCO0lBRGxDLGlCQUFXLENBQUMsb0JBQW9CLENBQUM7R0FDckIsc0JBQXNCLENBd0NsQztBQXhDWSx3REFBc0IifQ==