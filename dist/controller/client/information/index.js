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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9jbGllbnQvaW5mb3JtYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVHO0FBQ3ZHLDhEQUE0RDtBQUk1RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVMvQixLQUFLLENBQUMsWUFBWSxDQUFZLFVBQVU7UUFDdEMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQVksVUFBVTtRQUN0QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBR0QsS0FBSyxDQUFDLFVBQVUsQ0FBWSxVQUFVO1FBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFHRCxLQUFLLENBQUMsV0FBVyxDQUFhLFVBQVU7UUFFdEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FB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