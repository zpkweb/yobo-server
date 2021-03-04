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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserIdentityController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const identityList_1 = require("../../../service/user/identityList");
let AdminUserIdentityController = class AdminUserIdentityController {
    async createIdentityList(identityListBody) {
        return await this.identityListService.createIdentityList(identityListBody);
    }
    async retrieveIdentity(retrieveQuery) {
        return await this.identityListService.retrieveIdentityList(retrieveQuery);
    }
    async updateIdentityList(identityListBody) {
        return await this.identityListService.updateIdentityList(identityListBody);
    }
    async deleteIdentityList(deleteQuery) {
        return await this.identityListService.deleteIdentityList(deleteQuery);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", identityList_1.IdentityListService)
], AdminUserIdentityController.prototype, "identityListService", void 0);
__decorate([
    decorator_1.Post('/', { summary: '创建身份列表' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserIdentityController.prototype, "createIdentityList", null);
__decorate([
    decorator_1.Get('/', { summary: '查询身份列表' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserIdentityController.prototype, "retrieveIdentity", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新身份列表' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserIdentityController.prototype, "updateIdentityList", null);
__decorate([
    decorator_1.Get('/delete', { summary: '删除身份列表' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserIdentityController.prototype, "deleteIdentityList", null);
AdminUserIdentityController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/identityList', { tagName: '后台管理-身份列表' })
], AdminUserIdentityController);
exports.AdminUserIdentityController = AdminUserIdentityController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL3VzZXIvaWRlbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRjtBQUMvRixxRUFBb0U7QUFJcEUsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFXdEMsS0FBSyxDQUFDLGtCQUFrQixDQUFZLGdCQUFnQjtRQUNsRCxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDNUUsQ0FBQztJQVFELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBYSxhQUFhO1FBQzlDLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQU9ELEtBQUssQ0FBQyxrQkFBa0IsQ0FBWSxnQkFBZ0I7UUFDbEQsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzVFLENBQUM7SUFXRCxLQUFLLENBQUMsa0JBQWtCLENBQWEsV0FBVztRQUM5QyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7Q0FFRixDQUFBO0FBNUNDO0lBREMsa0JBQU0sRUFBRTs4QkFDWSxrQ0FBbUI7d0VBQUM7QUFRekM7SUFEQyxnQkFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNKLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztxRUFFbEM7QUFRRDtJQURDLGVBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDSixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7bUVBRWpDO0FBT0Q7SUFEQyxnQkFBSSxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQztJQUNULFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztxRUFFbEM7QUFXRDtJQURDLGVBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7SUFDUixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7cUVBRW5DO0FBN0NVLDJCQUEyQjtJQUZ2QyxtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyx5QkFBeUIsRUFBQyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsQ0FBQztHQUMvQywyQkFBMkIsQ0ErQ3ZDO0FBL0NZLGtFQUEyQiJ9