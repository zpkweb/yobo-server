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
exports.InformationVideoDetailEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const video_1 = require("./video");
let InformationVideoDetailEntity = class InformationVideoDetailEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], InformationVideoDetailEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoDetailEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoDetailEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoDetailEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], InformationVideoDetailEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.Column({
        select: false
    }),
    __metadata("design:type", Boolean)
], InformationVideoDetailEntity.prototype, "isDelete", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationVideoDetailEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], InformationVideoDetailEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => video_1.InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.detail),
    typeorm_1.JoinColumn({
        name: 'informationVideoId'
    }),
    __metadata("design:type", video_1.InformationVideoEntity)
], InformationVideoDetailEntity.prototype, "video", void 0);
InformationVideoDetailEntity = __decorate([
    orm_1.EntityModel('information_video_detail')
], InformationVideoDetailEntity);
exports.InformationVideoDetailEntity = InformationVideoDetailEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9EZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2luZm9ybWF0aW9uL3ZpZGVvRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVDQUE0QztBQUM1QyxxQ0FBbUg7QUFDbkgsbUNBQWlEO0FBR2pELElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0NBa0R4QyxDQUFBO0FBL0NDO0lBREMsZ0NBQXNCLEVBQUU7O3dEQUNkO0FBS1g7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzsyREFDYztBQUtoQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7OzJEQUNjO0FBS2hCO0lBSEMsZ0JBQU0sQ0FBQztRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQzs7MkRBQ2M7QUFLaEI7SUFIQyxnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDOzsyREFDYztBQU1oQjtJQUhDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OzhEQUNnQjtBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJO2lFQUFDO0FBTWxCO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7aUVBQUM7QUFPbEI7SUFKQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsOEJBQXNCLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztJQUNqRyxvQkFBVSxDQUFDO1FBQ1YsSUFBSSxFQUFFLG9CQUFvQjtLQUMzQixDQUFDOzhCQUNLLDhCQUFzQjsyREFBQztBQWhEbkIsNEJBQTRCO0lBRHhDLGlCQUFXLENBQUMsMEJBQTBCLENBQUM7R0FDM0IsNEJBQTRCLENBa0R4QztBQWxEWSxvRUFBNEIifQ==