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
exports.InformationReplyEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const comment_1 = require("./comment");
let InformationReplyEntity = class InformationReplyEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationReplyEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "replyId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "replyUserId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "replyUserName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "commentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InformationReplyEntity.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InformationReplyEntity.prototype, "replyNums", void 0);
__decorate([
    typeorm_1.ManyToOne(type => comment_1.InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.replys),
    typeorm_1.JoinColumn({
        name: 'informationCommentId'
    }),
    __metadata("design:type", comment_1.InformationCommentEntity)
], InformationReplyEntity.prototype, "comment", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationReplyEntity.prototype, "isShow", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationReplyEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationReplyEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationReplyEntity.prototype, "updatedDate", void 0);
InformationReplyEntity = __decorate([
    orm_1.EntityModel('information_reply')
], InformationReplyEntity);
exports.InformationReplyEntity = InformationReplyEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL3JlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBK0g7QUFDL0gsdUNBQW9EO0FBSXBELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBOEVsQyxDQUFBO0FBM0VDO0lBREMsZ0NBQXNCLEVBQUU7O2tEQUNkO0FBTVg7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O3VEQUNGO0FBTWhCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7dURBQ2M7QUFJaEI7SUFEQyxnQkFBTSxFQUFFOzsyREFDVztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OzZEQUNhO0FBSXRCO0lBREMsZ0JBQU0sRUFBRTs7c0RBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7O3dEQUNRO0FBSWpCO0lBREMsZ0JBQU0sRUFBRTs7eURBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOztxREFDSztBQUlkO0lBREMsZ0JBQU0sRUFBRTs7eURBQ1M7QUFPbEI7SUFKQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0NBQXdCLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztJQUN4RyxvQkFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLHNCQUFzQjtLQUM3QixDQUFDOzhCQUNPLGtDQUF3Qjt1REFBQztBQVVsQztJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7O3NEQUNjO0FBTWhCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7d0RBQ2dCO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQTVFUCxzQkFBc0I7SUFEbEMsaUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQztHQUNwQixzQkFBc0IsQ0E4RWxDO0FBOUVZLHdEQUFzQiJ9