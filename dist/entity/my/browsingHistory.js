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
exports.MyBrowsingHistoryEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
let MyBrowsingHistoryEntity = class MyBrowsingHistoryEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyBrowsingHistoryEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyBrowsingHistoryEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MyBrowsingHistoryEntity.prototype, "commodityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MyBrowsingHistoryEntity.prototype, "count", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyBrowsingHistoryEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyBrowsingHistoryEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.browsingHistory, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyBrowsingHistoryEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.browsingHistory, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], MyBrowsingHistoryEntity.prototype, "commodity", void 0);
MyBrowsingHistoryEntity = __decorate([
    orm_1.EntityModel('my_browsingHistory')
], MyBrowsingHistoryEntity);
exports.MyBrowsingHistoryEntity = MyBrowsingHistoryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9teS9icm93c2luZ0hpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUFvSDtBQUNwSCx1Q0FBa0Q7QUFDbEQsc0RBQWlFO0FBR2pFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBbURuQyxDQUFBO0FBN0NDO0lBSEMsZ0NBQXNCLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDOzttREFDUztBQUlYO0lBREMsZ0JBQU0sRUFBRTs7dURBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7OzREQUNXO0FBSXBCO0lBREMsZ0JBQU0sRUFBRTs7c0RBQ0s7QUFNZDtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzREQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7NERBQUM7QUFVbEI7SUFQQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUU7UUFDdkUsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFFBQVE7S0FDL0IsQ0FBQzs4QkFDSSxpQkFBVTtxREFBQztBQVVqQjtJQVBDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRTtRQUN0RixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsYUFBYTtLQUNwQyxDQUFDOzhCQUNTLDJCQUFlOzBEQUFDO0FBakRoQix1QkFBdUI7SUFEbkMsaUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQztHQUNyQix1QkFBdUIsQ0FtRG5DO0FBbkRZLDBEQUF1QiJ9