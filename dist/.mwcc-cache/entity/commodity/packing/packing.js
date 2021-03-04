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
exports.CommodityPackingEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const lang_1 = require("./lang");
let CommodityPackingEntity = class CommodityPackingEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], CommodityPackingEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], CommodityPackingEntity.prototype, "packingId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityPackingEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => lang_1.CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.packing),
    __metadata("design:type", Array)
], CommodityPackingEntity.prototype, "lang", void 0);
CommodityPackingEntity = __decorate([
    orm_1.EntityModel('commodity_packing')
], CommodityPackingEntity);
exports.CommodityPackingEntity = CommodityPackingEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L3BhY2tpbmcvcGFja2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBNEM7QUFDNUMscUNBQW1IO0FBQ25ILGlDQUFvRDtBQUduRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtDQW1DbEMsQ0FBQTtBQTdCQTtJQUhDLGdDQUFzQixDQUFDO1FBQ3RCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7a0RBQ1M7QUFPWDtJQUpDLGdCQUFNLENBQUM7UUFDTixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRCxtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7eURBQ0E7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOztvREFDSTtBQU1iO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQUlsQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQ0FBMEIsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDOztvREFDN0U7QUFqQ3ZCLHNCQUFzQjtJQURsQyxpQkFBVyxDQUFDLG1CQUFtQixDQUFDO0dBQ3BCLHNCQUFzQixDQW1DbEM7QUFuQ1ksd0RBQXNCIn0=