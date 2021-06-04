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
exports.UserSellerMetadataEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const seller_1 = require("./seller");
let UserSellerMetadataEntity = class UserSellerMetadataEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], UserSellerMetadataEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "findUs", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "isFullTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "onlineSell", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "sold", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "gallery", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "medium", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "galleryInfo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "recommend", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "prize", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "website", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "profileZhcn", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "profileEnus", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "profileJajp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserSellerMetadataEntity.prototype, "profileEses", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerMetadataEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserSellerMetadataEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => seller_1.UserSellerEntity, UserSellerEntity => UserSellerEntity.metadata, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({
        name: 'sellerId',
        referencedColumnName: 'sellerId'
    }),
    __metadata("design:type", seller_1.UserSellerEntity)
], UserSellerMetadataEntity.prototype, "seller", void 0);
UserSellerMetadataEntity = __decorate([
    orm_1.EntityModel('user_seller_metadata')
], UserSellerMetadataEntity);
exports.UserSellerMetadataEntity = UserSellerMetadataEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L3VzZXIvc2VsbGVyL21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgscUNBQTRDO0FBRzVDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0NBa0dwQyxDQUFBO0FBOUZDO0lBREMsZ0NBQXNCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O29EQUNoQztBQUlYO0lBREMsZ0JBQU0sRUFBRTs7MERBQ1E7QUFJakI7SUFEQyxnQkFBTSxFQUFFOzt3REFDTTtBQUlmO0lBREMsZ0JBQU0sRUFBRTs7NERBQ1U7QUFJbkI7SUFEQyxnQkFBTSxFQUFFOzs0REFDVTtBQUluQjtJQURDLGdCQUFNLEVBQUU7O3NEQUNJO0FBSWI7SUFEQyxnQkFBTSxFQUFFOzt5REFDTztBQUloQjtJQURDLGdCQUFNLEVBQUU7O3lEQUNPO0FBSWhCO0lBREMsZ0JBQU0sRUFBRTs7d0RBQ007QUFJZjtJQURDLGdCQUFNLEVBQUU7OzZEQUNXO0FBSXBCO0lBREMsZ0JBQU0sRUFBRTs7MkRBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOzt1REFDSztBQUlkO0lBREMsZ0JBQU0sRUFBRTs7eURBQ087QUFNaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzs2REFDa0I7QUFLcEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzs2REFDa0I7QUFLcEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzs2REFDa0I7QUFLcEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzs2REFDa0I7QUFNcEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTs2REFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOzZEQUFDO0FBV2xCO0lBUkMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFnQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUM7UUFDaEYsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLElBQUksRUFBRSxVQUFVO1FBQ2hCLG9CQUFvQixFQUFFLFVBQVU7S0FDakMsQ0FBQzs4QkFDTSx5QkFBZ0I7d0RBQUM7QUFoR2Qsd0JBQXdCO0lBRHBDLGlCQUFXLENBQUMsc0JBQXNCLENBQUM7R0FDdkIsd0JBQXdCLENBa0dwQztBQWxHWSw0REFBd0IifQ==