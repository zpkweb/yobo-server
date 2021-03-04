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
exports.MyActivityEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../user/user");
const activity_1 = require("../activity/activity");
let MyActivityEntity = class MyActivityEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MyActivityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], MyActivityEntity.prototype, "myActivityId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyActivityEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MyActivityEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.UserEntity, UserEntity => UserEntity.myActivitys, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'userId'
    }),
    __metadata("design:type", user_1.UserEntity)
], MyActivityEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => activity_1.ActivityEntity, ActivityEntity => ActivityEntity.myActivity, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'activityId'
    }),
    __metadata("design:type", activity_1.ActivityEntity)
], MyActivityEntity.prototype, "activity", void 0);
MyActivityEntity = __decorate([
    orm_1.EntityModel('my_activity')
], MyActivityEntity);
exports.MyActivityEntity = MyActivityEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L215L2FjdGl2aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBK0g7QUFDL0gsdUNBQWtEO0FBQ2xELG1EQUE4RDtBQUc5RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQTZDNUIsQ0FBQTtBQXZDQztJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7NENBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7c0RBQ0c7QUFNckI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTtxREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO3FEQUFDO0FBU2xCO0lBTkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ25FLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNELG9CQUFVLENBQUM7UUFDVixvQkFBb0IsRUFBRSxRQUFRO0tBQy9CLENBQUM7OEJBQ0ksaUJBQVU7OENBQUM7QUFTakI7SUFOQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQWMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7UUFDOUUsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFlBQVk7S0FDbkMsQ0FBQzs4QkFDUSx5QkFBYztrREFBQztBQTNDZCxnQkFBZ0I7SUFENUIsaUJBQVcsQ0FBQyxhQUFhLENBQUM7R0FDZCxnQkFBZ0IsQ0E2QzVCO0FBN0NZLDRDQUFnQiJ9