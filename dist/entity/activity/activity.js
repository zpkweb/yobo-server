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
exports.ActivityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const activity_1 = require("../my/activity");
let ActivityEntity = class ActivityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], ActivityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], ActivityEntity.prototype, "activityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ActivityEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ActivityEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ActivityEntity.prototype, "time", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => activity_1.MyActivityEntity, MyActivityEntity => MyActivityEntity.activity),
    __metadata("design:type", Array)
], ActivityEntity.prototype, "myActivity", void 0);
ActivityEntity = __decorate([
    orm_1.EntityModel('activity')
], ActivityEntity);
exports.ActivityEntity = ActivityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2FjdGl2aXR5L2FjdGl2aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgsNkNBQTBEO0FBRzFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0F5QzFCLENBQUE7QUFyQ0M7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQzs7MENBQzlCO0FBT1g7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O2tEQUNDO0FBSW5CO0lBREMsZ0JBQU0sRUFBRTs7NENBQ0k7QUFJYjtJQURDLGdCQUFNLEVBQUU7OzhDQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDSTtBQU1iO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7bURBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTttREFBQztBQUlsQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztrREFDcEQ7QUF2Q3BCLGNBQWM7SUFEMUIsaUJBQVcsQ0FBQyxVQUFVLENBQUM7R0FDWCxjQUFjLENBeUMxQjtBQXpDWSx3Q0FBYyJ9