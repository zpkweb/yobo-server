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
], InformationReplyEntity.prototype, "replyUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InformationReplyEntity.prototype, "commentId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => comment_1.InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.replys),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL3JlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgsdUNBQW9EO0FBRXBELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBeURsQyxDQUFBO0FBdERDO0lBREMsZ0NBQXNCLEVBQUU7O2tEQUNkO0FBTVg7SUFKQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0QsbUJBQVMsQ0FBQyxNQUFNLENBQUM7O3VEQUNGO0FBTWhCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7dURBQ2M7QUFJaEI7SUFEQyxnQkFBTSxFQUFFOzt5REFDUztBQUlsQjtJQURDLGdCQUFNLEVBQUU7O3NEQUNNO0FBSWY7SUFEQyxnQkFBTSxFQUFFOzt5REFDUztBQUlsQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQ0FBd0IsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDOzhCQUNoRyxrQ0FBd0I7dURBQUM7QUFNbEM7SUFIQyxnQkFBTSxDQUFDO1FBQ04sTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOztzREFDYztBQU1oQjtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7O3dEQUNnQjtBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzJEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUF2RFAsc0JBQXNCO0lBRGxDLGlCQUFXLENBQUMsbUJBQW1CLENBQUM7R0FDcEIsc0JBQXNCLENBeURsQztBQXpEWSx3REFBc0IifQ==