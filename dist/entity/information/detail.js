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
exports.InformationDetailEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const information_1 = require("./information");
let InformationDetailEntity = class InformationDetailEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationDetailEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationDetailEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationDetailEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationDetailEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationDetailEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.OneToOne(type => information_1.InformationEntity, InformationEntity => InformationEntity.detail),
    typeorm_1.JoinColumn({
        name: 'informationId'
    }),
    __metadata("design:type", information_1.InformationEntity)
], InformationDetailEntity.prototype, "information", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationDetailEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationDetailEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationDetailEntity.prototype, "updatedDate", void 0);
InformationDetailEntity = __decorate([
    orm_1.EntityModel('information_detail')
], InformationDetailEntity);
exports.InformationDetailEntity = InformationDetailEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9pbmZvcm1hdGlvbi9kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQTRDO0FBQzVDLHFDQUFtSDtBQUNuSCwrQ0FBa0Q7QUFHbEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FrRG5DLENBQUE7QUEvQ0M7SUFEQyxnQ0FBc0IsRUFBRTs7bURBQ2Q7QUFLWDtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O3NEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7c0RBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztzREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O3NEQUNjO0FBT2hCO0lBSkMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDbEYsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxlQUFlO0tBQ3RCLENBQUM7OEJBQ1csK0JBQWlCOzREQUFDO0FBTS9CO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7eURBQ2dCO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7NERBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs0REFBQztBQWhEUCx1QkFBdUI7SUFEbkMsaUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQztHQUNyQix1QkFBdUIsQ0FrRG5DO0FBbERZLDBEQUF1QiJ9