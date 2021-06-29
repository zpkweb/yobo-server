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
exports.InformationVideoEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const information_1 = require("./information");
const comment_1 = require("./comment");
let InformationVideoEntity = class InformationVideoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationVideoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "videoId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "videoSrc", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "ccId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "siteId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "videoPhoto", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InformationVideoEntity.prototype, "watchs", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.ManyToOne(type => information_1.InformationEntity, InformationEntity => InformationEntity.videos),
    __metadata("design:type", information_1.InformationEntity)
], InformationVideoEntity.prototype, "information", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_1.InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.video),
    __metadata("design:type", Array)
], InformationVideoEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationVideoEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationVideoEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationVideoEntity.prototype, "updatedDate", void 0);
InformationVideoEntity = __decorate([
    orm_1.EntityModel('information_video')
], InformationVideoEntity);
exports.InformationVideoEntity = InformationVideoEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL3ZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBOEg7QUFDOUgsK0NBQWtEO0FBQ2xELHVDQUFxRDtBQUdyRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtDQTBFbEMsQ0FBQTtBQXZFQztJQURDLGdDQUFzQixFQUFFOztrREFDZDtBQU1YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOzt1REFDRjtBQUloQjtJQURDLGdCQUFNLEVBQUU7O3dEQUNRO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7b0RBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3NEQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzswREFDVTtBQUluQjtJQURDLGdCQUFNLEVBQUU7O3NEQUNNO0FBS2Y7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztxREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O3FEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7cURBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztxREFDYztBQUloQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDOzhCQUN2RSwrQkFBaUI7MkRBQUM7QUFJL0I7SUFEQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0NBQXdCLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQzs7d0RBQ25FO0FBTXJDO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7d0RBQ2dCO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQXhFUCxzQkFBc0I7SUFEbEMsaUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQztHQUNwQixzQkFBc0IsQ0EwRWxDO0FBMUVZLHdEQUFzQiJ9