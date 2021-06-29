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
], InformationCommentEntity.prototype, "videoId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => video_1.InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.comments),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvaW5mb3JtYXRpb24vY29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNEM7QUFDNUMscUNBQThIO0FBQzlILG1DQUFpRDtBQUNqRCxtQ0FBaUQ7QUFFakQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7Q0FnRXBDLENBQUE7QUE3REM7SUFEQyxnQ0FBc0IsRUFBRTs7b0RBQ2Q7QUFNWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7MkRBQ0E7QUFNbEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzt5REFDYztBQUloQjtJQURDLGdCQUFNLEVBQUU7O3dEQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOzt5REFDTztBQVFoQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw4QkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDOzhCQUM5Riw4QkFBc0I7dURBQUM7QUFJOUI7SUFEQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsOEJBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQzs7d0RBQ25FO0FBUWpDO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs7d0RBQ2M7QUFNaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzswREFDZ0I7QUFPbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs2REFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzZEQUFDO0FBOURQLHdCQUF3QjtJQURwQyxpQkFBVyxDQUFDLHFCQUFxQixDQUFDO0dBQ3RCLHdCQUF3QixDQWdFcEM7QUFoRVksNERBQXdCIn0=