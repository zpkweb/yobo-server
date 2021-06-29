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
exports.InformationFabulousEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let InformationFabulousEntity = class InformationFabulousEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationFabulousEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationFabulousEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationFabulousEntity.prototype, "typeId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationFabulousEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationFabulousEntity.prototype, "isCancel", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationFabulousEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationFabulousEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationFabulousEntity.prototype, "updatedDate", void 0);
InformationFabulousEntity = __decorate([
    orm_1.EntityModel('information_fabulous')
], InformationFabulousEntity);
exports.InformationFabulousEntity = InformationFabulousEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFidWxvdXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL2ZhYnVsb3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBNkY7QUFHN0YsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7Q0EyQ3JDLENBQUE7QUF4Q0M7SUFEQyxnQ0FBc0IsRUFBRTs7cURBQ2Q7QUFJWDtJQURDLGdCQUFNLEVBQUU7O3VEQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOzt5REFDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7eURBQ007QUFRZjtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OzJEQUNnQjtBQU1sQjtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OzJEQUNnQjtBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzhEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7OERBQUM7QUF6Q1AseUJBQXlCO0lBRHJDLGlCQUFXLENBQUMsc0JBQXNCLENBQUM7R0FDdkIseUJBQXlCLENBMkNyQztBQTNDWSw4REFBeUIifQ==