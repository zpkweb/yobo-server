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
exports.AdminPageController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/page/index");
let AdminPageController = class AdminPageController {
    async getBanner() {
        const data = await this.pageService.getBannerAll();
        return data;
    }
    async postBanner(body) {
        const data = await this.pageService.createBanner(body);
        return data;
    }
    async updateBanner(body) {
        const data = await this.pageService.updateBanner(body);
        return data;
    }
    async deleteBanner(bannerId) {
        const data = await this.pageService.deleteBanner(bannerId);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], AdminPageController.prototype, "pageService", void 0);
__decorate([
    decorator_1.Get('/banner', { summary: '获取轮播图' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminPageController.prototype, "getBanner", null);
__decorate([
    decorator_1.Post('/banner', { summary: '创建轮播图' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPageController.prototype, "postBanner", null);
__decorate([
    decorator_1.Post('/banner/update', { summary: '更新轮播图' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPageController.prototype, "updateBanner", null);
__decorate([
    decorator_1.Post('/banner/delete', { summary: '删除轮播图' }),
    __param(0, decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPageController.prototype, "deleteBanner", null);
AdminPageController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/page', { tagName: '后台管理-页面管理' })
], AdminPageController);
exports.AdminPageController = AdminPageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvcGFnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBd0Y7QUFDeEYsdURBQTBDO0FBSTFDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTTlCLEtBQUssQ0FBQyxTQUFTO1FBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxVQUFVLENBQVksSUFBSTtRQUM5QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQVksSUFBSTtRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQVMsUUFBUTtRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGLENBQUE7QUExQkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNJLGVBQVc7d0RBQUM7QUFHekI7SUFEQyxlQUFHLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDOzs7O29EQUlqQztBQUdEO0lBREMsZ0JBQUksQ0FBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7SUFDaEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3FEQUcxQjtBQUdEO0lBREMsZ0JBQUksQ0FBQyxnQkFBZ0IsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQztJQUNyQixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7dURBRzVCO0FBR0Q7SUFEQyxnQkFBSSxDQUFDLGdCQUFnQixFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO0lBQ3JCLFdBQUEsZ0JBQUksRUFBRSxDQUFBOzs7O3VEQUd6QjtBQTNCVSxtQkFBbUI7SUFGL0IsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLENBQUM7R0FDeEMsbUJBQW1CLENBNkIvQjtBQTdCWSxrREFBbUIifQ==