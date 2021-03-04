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
exports.CommodityPackingLangEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const packing_1 = require("./packing");
const metadata_1 = require("./lang/metadata");
let CommodityPackingLangEntity = class CommodityPackingLangEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], CommodityPackingLangEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityPackingLangEntity.prototype, "lang", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommodityPackingLangEntity.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommodityPackingLangEntity.prototype, "number", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingLangEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], CommodityPackingLangEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => packing_1.CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.lang, {
        cascade: true
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'packingId'
    }),
    __metadata("design:type", packing_1.CommodityPackingEntity)
], CommodityPackingLangEntity.prototype, "packing", void 0);
__decorate([
    typeorm_1.OneToMany(type => metadata_1.CommodityPackingLangMetadataEntity, CommodityPackingLangMetadataEntity => CommodityPackingLangMetadataEntity.lang),
    __metadata("design:type", Array)
], CommodityPackingLangEntity.prototype, "metadata", void 0);
CommodityPackingLangEntity = __decorate([
    orm_1.EntityModel('commodity_packing_lang')
], CommodityPackingLangEntity);
exports.CommodityPackingLangEntity = CommodityPackingLangEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvY29tbW9kaXR5L3BhY2tpbmcvbGFuZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBNEM7QUFDNUMscUNBQStIO0FBQy9ILHVDQUFtRDtBQUNuRCw4Q0FBcUU7QUFHcEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7Q0EwQ3RDLENBQUE7QUF2Q0E7SUFEQyxnQ0FBc0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7c0RBQ2hDO0FBSVg7SUFEQyxnQkFBTSxFQUFFOzt3REFDSTtBQUliO0lBREMsZ0JBQU0sRUFBRTs7eURBQ0s7QUFJZDtJQURDLGdCQUFNLEVBQUU7OzBEQUNNO0FBTWY7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsrREFBQztBQU1sQjtJQUhDLDBCQUFnQixDQUFDO1FBQ2hCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQzs4QkFDVyxJQUFJOytEQUFDO0FBU2xCO0lBTkMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdDQUFzQixFQUFFLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUU7UUFDaEcsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0Qsb0JBQVUsQ0FBQztRQUNWLG9CQUFvQixFQUFFLFdBQVc7S0FDbEMsQ0FBQzs4QkFDTyxnQ0FBc0I7MkRBQUM7QUFJaEM7SUFEQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsNkNBQWtDLEVBQUUsa0NBQWtDLENBQUMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQzs7NERBQ3RGO0FBeENuQywwQkFBMEI7SUFEdEMsaUJBQVcsQ0FBQyx3QkFBd0IsQ0FBQztHQUN6QiwwQkFBMEIsQ0EwQ3RDO0FBMUNZLGdFQUEwQiJ9