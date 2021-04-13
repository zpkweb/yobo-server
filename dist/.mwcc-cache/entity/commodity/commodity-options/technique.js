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
exports.CommodityTechniqueEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const technique_1 = require("../options/technique");
const commodity_1 = require("../commodity");
let CommodityTechniqueEntity = class CommodityTechniqueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityTechniqueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityTechniqueEntity.prototype, "commodityName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityTechniqueEntity.prototype, "techniqueName", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityTechniqueEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityTechniqueEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commodity_1.CommodityEntity, CommodityEntity => CommodityEntity.techniques, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'commodityId',
        referencedColumnName: 'commodityId'
    }),
    __metadata("design:type", commodity_1.CommodityEntity)
], CommodityTechniqueEntity.prototype, "commoditys", void 0);
__decorate([
    typeorm_1.ManyToOne(type => technique_1.CommodityOptionsTechniqueEntity, CommodityOptionsTechniqueEntity => CommodityOptionsTechniqueEntity.commoditys, {
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({
        name: 'techniqueId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", technique_1.CommodityOptionsTechniqueEntity)
], CommodityTechniqueEntity.prototype, "techniques", void 0);
CommodityTechniqueEntity = __decorate([
    orm_1.EntityModel('commodity_technique')
], CommodityTechniqueEntity);
exports.CommodityTechniqueEntity = CommodityTechniqueEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvdGVjaG5pcXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlDLHVDQUE0QztBQUM1QyxxQ0FBb0g7QUFDcEgsb0RBQXVFO0FBQ3ZFLDRDQUErQztBQUcvQyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtDQTBDcEMsQ0FBQTtBQXZDQztJQURDLGdDQUFzQixDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOztvREFDOUI7QUFHWDtJQURDLGdCQUFNLEVBQUU7OytEQUNhO0FBR3RCO0lBREMsZ0JBQU0sRUFBRTs7K0RBQ2E7QUFNdEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs2REFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzZEQUFDO0FBVWxCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO1FBQ2hGLFFBQVEsRUFBRSxTQUFTO0tBQ3JCLENBQUM7SUFDRCxvQkFBVSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsb0JBQW9CLEVBQUUsYUFBYTtLQUNwQyxDQUFDOzhCQUNXLDJCQUFlOzREQUFDO0FBUzVCO0lBUEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDJDQUErQixFQUFFLCtCQUErQixDQUFDLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLEVBQUU7UUFDbEksUUFBUSxFQUFFLFNBQVM7S0FDbkIsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixvQkFBb0IsRUFBRSxJQUFJO0tBQzNCLENBQUM7OEJBQ1csMkNBQStCOzREQUFDO0FBeENqQyx3QkFBd0I7SUFEcEMsaUJBQVcsQ0FBQyxxQkFBcUIsQ0FBQztHQUN0Qix3QkFBd0IsQ0EwQ3BDO0FBMUNZLDREQUF3QiJ9