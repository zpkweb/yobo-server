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
exports.UserIdentityListEntity = void 0;
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const identity_1 = require("./identity");
let UserIdentityListEntity = class UserIdentityListEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], UserIdentityListEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "zh-cn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "en-us", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "ja-jp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "fr-fr", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "es-es", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text'
    }),
    __metadata("design:type", String)
], UserIdentityListEntity.prototype, "menu", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserIdentityListEntity.prototype, "index", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserIdentityListEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        select: false
    }),
    __metadata("design:type", Date)
], UserIdentityListEntity.prototype, "updatedDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => identity_1.UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.identityList),
    __metadata("design:type", Array)
], UserIdentityListEntity.prototype, "identitys", void 0);
UserIdentityListEntity = __decorate([
    orm_1.EntityModel('user_identity_list')
], UserIdentityListEntity);
exports.UserIdentityListEntity = UserIdentityListEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJlbnRpdHkvdXNlci9pZGVudGl0eS9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLHVDQUE0QztBQUM1QyxxQ0FBd0c7QUFDeEcseUNBQWdEO0FBRWhELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBaURsQyxDQUFBO0FBN0NDO0lBREMsZ0NBQXNCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O2tEQUNoQztBQUlYO0lBREMsZ0JBQU0sRUFBRTs7cURBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztxREFDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O3FEQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7cURBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztxREFDTztBQU1oQjtJQUhDLGdCQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7O29EQUNXO0FBS2I7SUFEQyxnQkFBTSxFQUFFOztxREFDSztBQU1kO0lBSEMsMEJBQWdCLENBQUM7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDOzhCQUNXLElBQUk7MkRBQUM7QUFNbEI7SUFIQywwQkFBZ0IsQ0FBQztRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7OEJBQ1csSUFBSTsyREFBQztBQUlsQjtJQURDLG1CQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2QkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDOzt5REFDN0Q7QUEvQ3JCLHNCQUFzQjtJQURsQyxpQkFBVyxDQUFDLG9CQUFvQixDQUFDO0dBQ3JCLHNCQUFzQixDQWlEbEM7QUFqRFksd0RBQXNCIn0=