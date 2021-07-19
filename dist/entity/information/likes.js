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
exports.InformationLikesEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let InformationLikesEntity = class InformationLikesEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationLikesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationLikesEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationLikesEntity.prototype, "typeId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationLikesEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationLikesEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationLikesEntity.prototype, "isCancel", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationLikesEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationLikesEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationLikesEntity.prototype, "updatedDate", void 0);
InformationLikesEntity = __decorate([
    orm_1.EntityModel('information_likes')
], InformationLikesEntity);
exports.InformationLikesEntity = InformationLikesEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL2xpa2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBNkY7QUFHN0YsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0E0Q2xDLENBQUE7QUF6Q0M7SUFEQyxnQ0FBc0IsRUFBRTs7a0RBQ2Q7QUFJWDtJQURDLGdCQUFNLEVBQUU7O29EQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOztzREFDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7c0RBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7O3dEQUNRO0FBTWpCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7d0RBQ2dCO0FBTWxCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7d0RBQ2dCO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQTFDUCxzQkFBc0I7SUFEbEMsaUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQztHQUNwQixzQkFBc0IsQ0E0Q2xDO0FBNUNZLHdEQUFzQiJ9