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
exports.informatinController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/information/index");
let informatinController = class informatinController {
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
    async videoComment(createBody) {
        return await this.serviceInformation.videoComment(createBody);
    }
    async commentReply(createBody) {
        return await this.serviceInformation.commentReply(createBody);
    }
    async replyReply(createBody) {
        return await this.serviceInformation.replyReply(createBody);
    }
    async commentList(findParams) {
        const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
        const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
        const news = (Boolean(findParams.news) && findParams.news == 'true') ? true : false;
        const isTop = (Boolean(findParams.isTop) && findParams.isTop == 'true') ? true : false;
        const locale = findParams.locale ? findParams.locale : 'zh-cn';
        const isLocale = (Boolean(findParams.isLocale) && findParams.isLocale == 'true') ? true : false;
        const videoId = findParams.videoId;
        const data = await this.serviceInformation.commentList({
            videoId,
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
    async videoCommentLikes(createBody) {
        return await this.serviceInformation.likes(createBody);
    }
    async videoWatchs(createBody) {
        return await this.serviceInformation.watchs(createBody);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.ServiceInformation)
], informatinController.prototype, "serviceInformation", void 0);
__decorate([
    decorator_1.Config('pagination'),
    __metadata("design:type", Object)
], informatinController.prototype, "pagination", void 0);
__decorate([
    decorator_1.Get('/', { summary: "资讯列表" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "informationList", null);
__decorate([
    decorator_1.Post('/video/comment', { summary: "视频评论" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "videoComment", null);
__decorate([
    decorator_1.Post('/video/comment/reply', { summary: "视频评论回复" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "commentReply", null);
__decorate([
    decorator_1.Post('/video/comment/reply/reply', { summary: "视频评论回复回复" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "replyReply", null);
__decorate([
    decorator_1.Get('/video/comment', { summary: "视频评论列表" }),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "commentList", null);
__decorate([
    decorator_1.Post('/video/comment/likes', { summary: "视频评论点赞" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "videoCommentLikes", null);
__decorate([
    decorator_1.Post('/video/watchs', { summary: "视频观看" }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], informatinController.prototype, "videoWatchs", null);
informatinController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller("/api/information", { tagName: "官网-资讯" })
], informatinController);
exports.informatinController = informatinController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvaW5mb3JtYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLDhEQUE0RDtBQUk1RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVMvQixLQUFLLENBQUMsZUFBZSxDQUFhLFVBQVU7UUFFMUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRixNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9ELE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLE1B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