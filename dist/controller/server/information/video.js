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
exports.adminInformatinVideoController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/information/index");
let adminInformatinVideoController = class adminInformatinVideoController {
    async createInformation(createBody) {
        return await this.serviceInformation.createInformationVideo(createBody);
    }
    async informationList(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
        const locale = findParams.locale ? findParams.locale : 'zh-cn';
        const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
        const data = await this.serviceInformation.informationVideoList({
            news,
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
    async informationFind(query) {
        const locale = query.locale ? query.locale : 'zh-cn';
        const isLocale = (Boolean(query.isLocale) && query.isLocale == 'true') ? true : false;
        const data = await this.serviceInformation.informationVideoDetail({
            videoId: query.videoId,
            locale,
            isLocale,
        });
        return data;
    }
    async updateInformation(updateBody) {
        return await this.serviceInformation.updateInformationVideo(updateBody);
    }
    async searchInformation(searchQuery) {
        const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
        const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
        const news = (Boolean(searchQuery.news) && searchQuery.news == 'true') ? true : false;
        const isTop = (Boolean(searchQuery.isTop) && searchQuery.isTop == 'true') ? true : false;
        const locale = searchQuery.locale ? searchQuery.locale : 'zh-cn';
        const isLocale = (Boolean(searchQuery.isLocale) && searchQuery.isLocale == 'true') ? true : false;
        const data = await this.serviceInformation.searchInformationVideo({
            title: searchQuery.title,
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
        return await this.serviceInformation.deleteInformationVideo(query.videoId);
    }
    async informationFindVideoId(videoId) {
        const data = await this.serviceInformation.informationVideoDetail({
            videoId
        });
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.ServiceInformation)
], adminInformatinVideoController.prototype, "serviceInformation", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], adminInformatinVideoController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Post('/', { summary: "创建资讯视频" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "createInformation", null);
__decorate([
    decorator_1.Get('/', { summary: "资讯视频列表" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "informationList", null);
__decorate([
    decorator_1.Get('/detail', { summary: "资讯视频detail" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "informationFind", null);
__decorate([
    decorator_1.Post('/update', { summary: "更新资讯视频" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "updateInformation", null);
__decorate([
    decorator_1.Get('/search', { summary: "搜索资讯视频" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "searchInformation", null);
__decorate([
    decorator_1.Post('/delete', { summary: "删除资讯视频" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "deleteInformation", null);
__decorate([
    decorator_1.Get('/:videoId', { summary: "编辑资讯视频" }),
    __param(0, decorator_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], adminInformatinVideoController.prototype, "informationFindVideoId", null);
adminInformatinVideoController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller("/api/admin/information/video", { tagName: "后台管理-资讯视频" })
], adminInformatinVideoController);
exports.adminInformatinVideoController = adminInformatinVideoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvaW5mb3JtYXRpb24vdmlkZW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThHO0FBQzlHLDhEQUE0RDtBQUk1RCxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQVN6QyxLQUFLLENBQUMsaUJBQWlCLENBQVksVUFBVTtRQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFHRCxLQUFLLENBQUMsZUFBZSxDQUFhLFVBQVU7UUFFMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUks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