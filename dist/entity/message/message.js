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
exports.MessageEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let MessageEntity = class MessageEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], MessageEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], MessageEntity.prototype, "messageId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "href", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessageEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], MessageEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], MessageEntity.prototype, "contentHtml", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MessageEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], MessageEntity.prototype, "updatedDate", void 0);
MessageEntity = __decorate([
    orm_1.EntityModel('message')
], MessageEntity);
exports.MessageEntity = MessageEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvbWVzc2FnZS9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVDLHVDQUE0QztBQUM1QyxxQ0FBd0c7QUFHeEcsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQWlFekIsQ0FBQTtBQTNEQztJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7eUNBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7Z0RBQ0E7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDSTtBQUliO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0k7QUFJYjtJQURDLGdCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDSztBQU1kO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7OENBQ2M7QUFNakI7SUFIRSxnQkFBTSxDQUFDO1FBQ1AsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOztrREFDa0I7QUFJcEI7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDUztBQVVqQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2tEQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7a0RBQUM7QUE3RFAsYUFBYTtJQUR6QixpQkFBVyxDQUFDLFNBQVMsQ0FBQztHQUNWLGFBQWEsQ0FpRXpCO0FBakVZLHNDQUFhIn0=