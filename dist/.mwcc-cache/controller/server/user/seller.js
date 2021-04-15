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
exports.AdminUserSellerController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const register_1 = require("../../../service/user/register");
const seller_1 = require("../../../service/user/seller");
let AdminUserSellerController = class AdminUserSellerController {
    async find(findQuery) {
        return await this.sellerService.find(findQuery);
    }
    async update(registerBody) {
        return await this.sellerService.updateSeller(registerBody);
    }
    async setState(stateBody) {
        return await this.sellerService.updateSellerState(stateBody);
    }
    async search(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const data = await this.sellerService.searchSeller({
            ...searchParams,
            pageSize: pageSize,
            currentPage: currentPage,
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async delete(sellerId) {
        return await this.sellerService.deleteSeller(sellerId);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", register_1.UserRegisterService)
], AdminUserSellerController.prototype, "userRegisterService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], AdminUserSellerController.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], AdminUserSellerController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AdminUserSellerController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AdminUserSellerController.prototype, "jwtConfig", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], AdminUserSellerController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('/', { summary: '获取艺术家详细信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "find", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新艺术家信息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "update", null);
__decorate([
    decorator_1.Post('/setState', { summary: '设置艺术家状态' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "setState", null);
__decorate([
    decorator_1.Get('/search', { summary: '艺术家搜索' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "search", null);
__decorate([
    decorator_1.Get('/delete', { summary: '删除艺术家' }),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "delete", null);
AdminUserSellerController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/user/seller', { tagName: '后台管理-艺术家' })
], AdminUserSellerController);
exports.AdminUserSellerController = AdminUserSellerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL3VzZXIvc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRztBQUUvRyw2REFBZ0U7QUFDaEUseURBQXdEO0FBSXhELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBc0JwQyxLQUFLLENBQUMsSUFBSSxDQUFhLFNBQVM7UUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFJRCxLQUFLLENBQUMsTUFBTSxDQUFZLFlBQVk7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFhRCxLQUFLLENBQUMsUUFBUSxDQUFZLFNBQVM7UUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUlELEtBQUssQ0FBQyxNQUFNLENBQWEsWUFBWTtRQUduQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDcEYsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUNyRCxHQUFHLFlBQVk7WUFDZixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSUQsS0FBSyxDQUFDLE1BQU0sQ0FBVSxRQUFRO1FBQzVCLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBS0YsQ0FBQTtBQXhFQztJQURDLGtCQUFNLEVBQUU7OEJBQ1ksOEJBQW1CO3NFQUFDO0FBR3pDO0lBREMsa0JBQU0sRUFBRTs4QkFDTSxzQkFBYTtnRUFBQztBQUc3QjtJQURDLGtCQUFNLEVBQUU7O3NEQUNJO0FBR2I7SUFEQyxrQkFBTSxFQUFFOztzREFDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7OzREQUNKO0FBR1Y7SUFEQyxrQkFBTSxDQUFDLFlBQVksQ0FBQzs7NkRBQ1Y7QUFJWDtJQURDLGVBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLENBQUM7SUFDbkIsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3FEQUVyQjtBQUlEO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3VEQUV0QjtBQWFEO0lBREMsZ0JBQUksQ0FBQyxXQUFXLEVBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3lEQUV4QjtBQUlEO0lBREMsZUFBRyxDQUFDLFNBQVMsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQztJQUNuQixXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7dURBZXZCO0FBSUQ7SUFEQyxlQUFHLENBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO0lBQ25CLFdBQUEsaUJBQUssRUFBRSxDQUFBOzs7O3VEQUVwQjtBQXRFVSx5QkFBeUI7SUFGckMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsd0JBQXdCLEVBQUMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLENBQUM7R0FDN0MseUJBQXlCLENBMkVyQztBQTNFWSw4REFBeUIifQ==