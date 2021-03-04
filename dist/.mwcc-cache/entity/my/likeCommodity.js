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
exports.MyLikeCommodityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
let MyLikeCommodityEntity = class MyLikeCommodityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyLikeCommodityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyLikeCommodityEntity.prototype, "commodityId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyLikeCommodityEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyLikeCommodityEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.likeCommoditys, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyLikeCommodityEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.likeCommoditys, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], MyLikeCommodityEntity.prototype, "commodity", void 0);
MyLikeCommodityEntity = __decorate([
    orm_1.EntityModel('my_likeCommodity')
], MyLikeCommodityEntity);
exports.MyLikeCommodityEntity = MyLikeCommodityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZUNvbW1vZGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvbXkvbGlrZUNvbW1vZGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSx1Q0FBNEM7QUFDNUMscUNBQW9IO0FBQ3BILHVDQUFrRDtBQUNsRCxzREFBaUU7QUFHakUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7Q0FrRWpDLENBQUE7QUE1REM7SUFIQyxnQ0FBc0IsQ0FBQztRQUN0QixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O2lEQUNTO0FBSVg7SUFEQyxnQkFBTSxFQUFFOzt1REFDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7O3FEQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOztvREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O29EQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7b0RBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztvREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O29EQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7MERBQ1c7QUFNcEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTswREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzBEQUFDO0FBVWxCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO1FBQ3RFLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixvQkFBb0IsRUFBRSxRQUFRO0tBQy9CLENBQUM7OEJBQ0ksaUJBQVU7bURBQUM7QUFVakI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7UUFDckYsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLGFBQWE7S0FDcEMsQ0FBQzs4QkFDUywyQkFBZTt3REFBQztBQWhFaEIscUJBQXFCO0lBRGpDLGlCQUFXLENBQUMsa0JBQWtCLENBQUM7R0FDbkIscUJBQXFCLENBa0VqQztBQWxFWSxzREFBcUIifQ==