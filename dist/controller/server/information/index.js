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
exports.adminInformatinController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/information/index");
let adminInformatinController = class adminInformatinController {
    async createInformation(createBody) {
        return await this.serviceInformation.createInformation(createBody);
    }
    async informationList(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
        const isTop = (Boolean(findParams.isTop) && findParams.isTop == 'true') ? true : false;
        const locale = findParams.locale ? findParams.locale : 'zh-cn';
        const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
        const data = await this.serviceInformation.informationList({
            news,
            isTop,
            pageSize,
            currentPage,
            isLocale,
            locale
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async informationEdit(editQuery) {
        const data = await this.serviceInformation.informationDetail({
            informationId: editQuery.informationId
        });
        return data;
    }
    async updateInformation(updateBody) {
        return await this.serviceInformation.updateInformation(updateBody);
    }
    async searchInformation(searchQuery) {
        const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
        const isTop = (Boolean(searchQuery.isTop) && searchQuery.isTop == 'true') ? true : false;
        const locale = searchQuery.locale ? searchQuery.locale : 'zh-cn';
        const isLocale = (Boolean(searchQuery.isLocale) && searchQuery.isLocale == 'true') ? true : false;
        const data = await this.serviceInformation.searchInformation({
            name: searchQuery.name,
            news,
            isTop,
            pageSize,
            currentPage,
            isLocale,
            locale
        });
        if (data.success) {
            data.data.pageSize = pageSize;
            data.data.currentPage = currentPage;
        }
        return data;
    }
    async deleteInformation(query) {
        return await this.serviceInformation.deleteInformation(query.informationId);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.ServiceInformation)
], adminInformatinController.prototype, "serviceInformation", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], adminInformatinController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Post('/', { summary: "创建资讯" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "createInformation", null);
__decorate([
    decorator_1.Get('/', { summary: "资讯列表" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "informationList", null);
__decorate([
    decorator_1.Get('/detail', { summary: "资讯详情" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "informationEdit", null);
__decorate([
    decorator_1.Post('/update', { summary: "更新资讯" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "updateInformation", null);
__decorate([
    decorator_1.Get('/search', { summary: "搜索资讯" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "searchInformation", null);
__decorate([
    decorator_1.Post('/delete', { summary: "删除资讯" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinController.prototype, "deleteInformation", null);
adminInformatinController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller("/api/admin/information", { tagName: "后台管理-资讯" })
], adminInformatinController);
exports.adminInformatinController = adminInformatinController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvaW5mb3JtYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLDhEQUE0RDtBQUk1RCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVNwQyxLQUFLLENBQUMsaUJBQWlCLENBQVksVUFBVTtRQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFHRCxLQUFLLENBQUMsZUFBZSxDQUFhLFVBQVU7UUFFMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRixNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0s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