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
exports.PageBannerEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let PageBannerEntity = class PageBannerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], PageBannerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], PageBannerEntity.prototype, "bannerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageBannerEntity.prototype, "src", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageBannerEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageBannerEntity.prototype, "subTitle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageBannerEntity.prototype, "desc", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], PageBannerEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], PageBannerEntity.prototype, "updatedDate", void 0);
PageBannerEntity = __decorate([
    orm_1.EntityModel('page_banner')
], PageBannerEntity);
exports.PageBannerEntity = PageBannerEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9wYWdlL2Jhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBOEM7QUFDOUMscUNBQXdHO0FBR3hHLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBd0M1QixDQUFBO0FBcENDO0lBREMsZ0NBQXNCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OzRDQUNoQztBQU9YO0lBSkMsZ0JBQU0sQ0FBQztRQUNOLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNELG1CQUFTLENBQUMsTUFBTSxDQUFDOztrREFDRDtBQUlqQjtJQURDLGdCQUFNLEVBQUU7OzZDQUNHO0FBSVo7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDSztBQUlkO0lBREMsZ0JBQU0sRUFBRTs7a0RBQ1E7QUFJakI7SUFEQyxnQkFBTSxFQUFFOzs4Q0FDSTtBQUtiO0lBREMsMEJBQWdCLEVBQUU7OEJBQ04sSUFBSTtxREFBQztBQUlsQjtJQURDLDBCQUFnQixFQUFFOzhCQUNOLElBQUk7cURBQUM7QUFwQ1AsZ0JBQWdCO0lBRDVCLGlCQUFXLENBQUMsYUFBYSxDQUFDO0dBQ2QsZ0JBQWdCLENBd0M1QjtBQXhDWSw0Q0FBZ0IifQ==