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
exports.CommodityOptionsUseEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const commodity_1 = require("../commodity");
let CommodityOptionsUseEntity = class CommodityOptionsUseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityOptionsUseEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "img", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], CommodityOptionsUseEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsUseEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityOptionsUseEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToMany(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.uses, {
        cascade: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityOptionsUseEntity.prototype, "commodity", void 0);
CommodityOptionsUseEntity = __decorate([
    orm_1.EntityModel('commodity_options_use')
], CommodityOptionsUseEntity);
exports.CommodityOptionsUseEntity = CommodityOptionsUseEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvb3B0aW9ucy91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsdUNBQTRDO0FBQzVDLHFDQUF5RztBQUN6Ryw0Q0FBK0M7QUFHL0MsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7Q0F1RHJDLENBQUE7QUFuREM7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7cURBQzlCO0FBSVg7SUFEQyxnQkFBTSxFQUFFOztzREFDRztBQU1aO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7d0RBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzt3REFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7O3dEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7d0RBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzt3REFDYztBQU1oQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzhEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7OERBQUM7QUFPbEI7SUFKQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsMkJBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7UUFDNUUsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDOzhCQUNTLDJCQUFlOzREQUFDO0FBckRoQix5QkFBeUI7SUFEckMsaUJBQVcsQ0FBQyx1QkFBdUIsQ0FBQztHQUN4Qix5QkFBeUIsQ0F1RHJDO0FBdkRZLDhEQUF5QiJ9