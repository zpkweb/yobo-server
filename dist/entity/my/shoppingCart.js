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
exports.MyShoppingCartEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
let MyShoppingCartEntity = class MyShoppingCartEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyShoppingCartEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], MyShoppingCartEntity.prototype, "myShoppingCartId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyShoppingCartEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyShoppingCartEntity.prototype, "commodityid", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyShoppingCartEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyShoppingCartEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.shoppingCart, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyShoppingCartEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.shoppingCart, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinTable({
        joinColumn: {
            referencedColumnName: 'myShoppingCartId'
        },
        inverseJoinColumn: {
            referencedColumnName: 'commodityId'
        }
    }),
    __metadata("design:type", Array)
], MyShoppingCartEntity.prototype, "commoditys", void 0);
MyShoppingCartEntity = __decorate([
    orm_1.EntityModel('my_shoppingCart')
], MyShoppingCartEntity);
exports.MyShoppingCartEntity = MyShoppingCartEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmdDYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9teS9zaG9wcGluZ0NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUFzSjtBQUN0Six1Q0FBa0Q7QUFDbEQsc0RBQWlFO0FBR2pFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBNERoQyxDQUFBO0FBdERDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOztnREFDUztBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOzs4REFDTztBQUd6QjtJQURDLGdCQUFNLEVBQUU7O29EQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzt5REFDVztBQU1wQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3lEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7eURBQUM7QUFVbEI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDcEUsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTtrREFBQztBQWVqQjtJQVpDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTtRQUNwRixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxtQkFBUyxDQUFDO1FBQ1QsVUFBVSxFQUFFO1lBQ1Ysb0JBQW9CLEVBQUUsa0JBQWtCO1NBQ3pDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsYUFBYTtTQUNwQztLQUNGLENBQUM7O3dEQUM0QjtBQXhEbkIsb0JBQW9CO0lBRGhDLGlCQUFXLENBQUMsaUJBQWlCLENBQUM7R0FDbEIsb0JBQW9CLENBNERoQztBQTVEWSxvREFBb0IifQ==