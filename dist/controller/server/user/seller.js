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
    async create(createBody) {
        const data = await this.sellerService.create(createBody);
        return data;
    }
    async edit(editQuery) {
        const data = await this.sellerService.edit(editQuery);
        return data;
    }
    async update(registerBody) {
        return await this.sellerService.update(registerBody);
    }
    async find(findQuery) {
        return await this.sellerService.find(findQuery);
    }
    async setState(stateBody) {
        return await this.sellerService.updateSellerState(stateBody);
    }
    async search(searchParams) {
        const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
        const data = await this.sellerService.searchSeller({
            ...searchParams,
            news,
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
    async updateMetadata(queryAll) {
        return await this.sellerService.updateMetadata(queryAll);
    }
    async updateResume(queryAll) {
        return await this.sellerService.updateResume(queryAll);
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
    decorator_1.Post('/create', { summary: '创建艺术家' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "create", null);
__decorate([
    decorator_1.Get('/edit', { summary: '编辑艺术家' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "edit", null);
__decorate([
    decorator_1.Post('/update', { summary: '更新艺术家信息' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "update", null);
__decorate([
    decorator_1.Get('/', { summary: '获取艺术家详细信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "find", null);
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
__decorate([
    decorator_1.Post('/update/metadata', { summary: '更新艺术家个人信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "updateMetadata", null);
__decorate([
    decorator_1.Post('/update/resume', { summary: '更新艺术家个人信息' }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUserSellerController.prototype, "updateResume", null);
AdminUserSellerController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/seller', { tagName: '后台管理-艺术家' })
], AdminUserSellerController);
exports.AdminUserSellerController = AdminUserSellerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvc2VydmVyL3VzZXIvc2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRztBQUUvRyw2REFBZ0U7QUFDaEUseURBQXdEO0FBSXhELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBc0JwQyxLQUFLLENBQUMsTUFBTSxDQUFZLFVBQVU7UUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxLQUFLLENBQUMsSUFBSSxDQUFhLFNBQVM7UUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFJRCxLQUFLLENBQUMsTUFBTSxDQUFZLFlBQVk7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXZELENBQUM7SUFJRCxLQUFLLENBQUMsSUFBSSxDQUFhLFNBQVM7UUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFhRCxLQUFLLENBQUMsUUFBUSxDQUFZLFNBQVM7UUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUlELEtBQUssQ0FBQyxNQUFNLENBQWEsWUFBWTtRQUVuQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxD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