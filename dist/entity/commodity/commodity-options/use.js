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
exports.CommodityUseEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const use_1 = require("../options/use");
const commodity_1 = require("../commodity");
let CommodityUseEntity = class CommodityUseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityUseEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityUseEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityUseEntity.prototype, "useName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityUseEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityUseEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.uses, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityUseEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => use_1.CommodityOptionsUseEntity, CommodityOptionsUseEntity => CommodityOptionsUseEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'useId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", use_1.CommodityOptionsUseEntity)
], CommodityUseEntity.prototype, "uses", void 0);
CommodityUseEntity = __decorate([
    orm_1.EntityModel('commodity_use')
], CommodityUseEntity);
exports.CommodityUseEntity = CommodityUseEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlDLHVDQUE0QztBQUM1QyxxQ0FBb0g7QUFDcEgsd0NBQTJEO0FBQzNELDRDQUErQztBQUcvQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQTBDOUIsQ0FBQTtBQXZDQztJQURDLGdDQUFzQixDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOzs4Q0FDOUI7QUFHWDtJQURDLGdCQUFNLEVBQUU7O3lEQUNhO0FBR3RCO0lBREMsZ0JBQU0sRUFBRTs7bURBQ087QUFNaEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTt1REFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3VEQUFDO0FBVWxCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFO1FBQzFFLFFBQVEsRUFBRSxTQUFTO0tBQ3JCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsb0JBQW9CLEVBQUUsYUFBYTtLQUNwQyxDQUFDOzhCQUNXLDJCQUFlO3NEQUFDO0FBUzVCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUF5QixFQUFFLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUU7UUFDaEgsUUFBUSxFQUFFLFNBQVM7S0FDbkIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLG9CQUFvQixFQUFFLElBQUk7S0FDM0IsQ0FBQzs4QkFDSywrQkFBeUI7Z0RBQUM7QUF4Q3JCLGtCQUFrQjtJQUQ5QixpQkFBVyxDQUFDLGVBQWUsQ0FBQztHQUNoQixrQkFBa0IsQ0EwQzlCO0FBMUNZLGdEQUFrQiJ9