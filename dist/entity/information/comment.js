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
exports.InformationCommentEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const video_1 = require("./video");
const reply_1 = require("./reply");
let InformationCommentEntity = class InformationCommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationCommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], InformationCommentEntity.prototype, "commentId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationCommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationCommentEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationCommentEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationCommentEntity.prototype, "videoId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InformationCommentEntity.prototype, "likes", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_1.InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.comments),
    typeorm_1.JoinColumn({
        name: 'informationVideoId'
    }),
    __metadata("design:type", video_1.InformationVideoEntity)
], InformationCommentEntity.prototype, "video", void 0);
__decorate([
    typeorm_1.OneToMany(type => reply_1.InformationReplyEntity, InformationReplyEntity => InformationReplyEntity.comment),
    __metadata("design:type", Array)
], InformationCommentEntity.prototype, "replys", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationCommentEntity.prototype, "isShow", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationCommentEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationCommentEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationCommentEntity.prototype, "updatedDate", void 0);
InformationCommentEntity = __decorate([
    orm_1.EntityModel('information_comment')
], InformationCommentEntity);
exports.InformationCommentEntity = InformationCommentEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvaW5mb3JtYXRpb24vY29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNEM7QUFDNUMscUNBQTBJO0FBQzFJLG1DQUFpRDtBQUNqRCxtQ0FBaUQ7QUFFakQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7Q0FzRXBDLENBQUE7QUFuRUM7SUFEQyxnQ0FBc0IsRUFBRTs7b0RBQ2Q7QUFNWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7MkRBQ0E7QUFNbEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzt5REFDYztBQUloQjtJQURDLGdCQUFNLEVBQUU7O3dEQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzswREFDUTtBQUlqQjtJQURDLGdCQUFNLEVBQUU7O3lEQUNPO0FBSWhCO0lBREMsZ0JBQU0sRUFBRTs7dURBQ0s7QUFPZDtJQUpDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw4QkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO0lBQ3BHLG9CQUFVLENBQUM7UUFDVixJQUFJLEVBQUUsb0JBQW9CO0tBQzNCLENBQUM7OEJBQ0ssOEJBQXNCO3VEQUFDO0FBSTlCO0lBREMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDhCQUFzQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7O3dEQUNuRTtBQVFqQztJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7O3dEQUNjO0FBTWhCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7MERBQ2dCO0FBT2xCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7NkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs2REFBQztBQXBFUCx3QkFBd0I7SUFEcEMsaUJBQVcsQ0FBQyxxQkFBcUIsQ0FBQztHQUN0Qix3QkFBd0IsQ0FzRXBDO0FBdEVZLDREQUF3QiJ9