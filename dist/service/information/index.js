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
exports.ServiceInformation = void 0;
const decorator_1 = require("@midwayjs/decorator");
const comment_1 = require("./comment");
const detail_1 = require("./detail");
const likes_1 = require("./likes");
const information_1 = require("./information");
const reply_1 = require("./reply");
const video_1 = require("./video");
const videoDetail_1 = require("./videoDetail");
let ServiceInformation = class ServiceInformation {
    async createInformation({ name = {}, desc = {}, videos = [], } = {}) {
        let information = await this.informationService.retrieveName({
            zhcn: name['zh-cn'],
            enus: name['en-us'],
            jajp: name['ja-jp'],
            eses: name['es-es']
        });
        if (information.success) {
            return {
                success: false,
                code: 10013
            };
        }
        else {
            information = await this.informationService.create({
                zhcn: name['zh-cn'],
                enus: name['en-us'],
                jajp: name['ja-jp'],
                eses: name['es-es']
            });
            if (!information.success) {
                return information;
            }
        }
        let detailData = await this.informationDetailService.create({
            zhcn: desc['zh-cn'],
            enus: desc['en-us'],
            jajp: desc['ja-jp'],
            eses: desc['es-es'],
        });
        if (!detailData.success) {
            return detailData;
        }
        await this.informationService.relationSet({
            name: 'detail',
            of: information.data.identifiers[0].id,
            set: detailData.data.identifiers[0].id
        });
        if (videos && videos.length) {
            for (let item of videos) {
                await this.informationService.relationAdd({
                    name: 'videos',
                    of: information.data.identifiers[0].id,
                    add: item.id
                });
            }
        }
        const data = await this.informationService.retrieveName({
            zhcn: name['zh-cn'],
            enus: name['en-us'],
            jajp: name['ja-jp'],
            eses: name['es-es']
        });
        return {
            data: data.data,
            success: true,
            code: 10003
        };
    }
    async informationList({ currentPage = 1, pageSize = 10, news = false, isTop = false, isLocale = false, locale = 'zh-cn' } = {}) {
        return await this.informationService.retrieve({
            currentPage,
            pageSize,
            news,
            isTop,
            isLocale,
            locale
        });
    }
    async informationDetail(payload) {
        return await this.informationService.retrieveInformationDetail(payload);
    }
    async searchInformation(payload) {
        return await this.informationService.searchInformation(payload);
    }
    async updateInformation({ informationId = '', name = {}, desc = {}, videos = [], removeVideos = [] } = {}) {
        const information = await this.informationService.retrieveInformationId(informationId);
        if (!information.success) {
            return {
                success: false,
                code: 10014
            };
        }
        const informationUpdate = await this.informationService.update({
            id: name['id'],
            zhcn: name['zh-cn'],
            enus: name['en-us'],
            jajp: name['ja-jp'],
            eses: name['es-es']
        });
        if (!informationUpdate.success) {
            return informationUpdate;
        }
        const detailData = await this.informationDetailService.update({
            id: desc['id'],
            zhcn: desc['zh-cn'],
            enus: desc['en-us'],
            jajp: desc['ja-jp'],
            eses: desc['es-es'],
        });
        if (!detailData.success) {
            return detailData;
        }
        if (removeVideos && removeVideos.length) {
            for (let item of removeVideos) {
                await this.informationService.relationRemove({
                    name: 'videos',
                    of: information.data.id,
                    remove: item.id
                });
            }
        }
        if (videos && videos.length) {
            for (let item of videos) {
                await this.informationService.relationAdd({
                    name: 'videos',
                    of: information.data.id,
                    add: item.id
                });
            }
        }
        return {
            success: true,
            code: 10007
        };
    }
    async deleteInformation(informationId) {
        return await this.informationService.baseDelete(informationId);
    }
    async createInformationVideo(payload) {
        return await this.informationVideoService.create(payload);
    }
    async informationVideoList({ currentPage = 1, pageSize = 10, news = false, isLocale = false, locale = 'zh-cn' } = {}) {
        return await this.informationVideoService.retrieve({
            currentPage,
            pageSize,
            news,
            isLocale,
            locale
        });
    }
    async informationVideoDetail(payload) {
        return await this.informationVideoService.retrieveVideoId(payload);
    }
    async searchInformationVideo(payload) {
        return await this.informationVideoService.baseSearch(payload);
    }
    async informationTopVideo() {
        return await this.informationVideoService.topVideo();
    }
    async informationNewVideo() {
        return await this.informationVideoService.newVideo();
    }
    async updateInformationVideo(payload) {
        return await this.informationVideoService.update(payload);
    }
    async deleteInformationVideo(videoId) {
        return await this.informationVideoService.baseDelete(videoId);
    }
    async videoComment(payload) {
        return await this.informationCommentService.create(payload);
    }
    async commentList(payload) {
        return await this.informationCommentService.retrieveList(payload);
    }
    async commentReply(payload) {
        return await this.informationReplyService.create(payload);
    }
    async replyReply(payload) {
        return await this.informationReplyService.reply(payload);
    }
    async likes({ type = '', typeId = '', userName = '', userId = '' } = {}) {
        switch (type) {
            case "comment":
                return await this.informationCommentService.likes({
                    type,
                    userId,
                    userName,
                    commentId: typeId
                });
                break;
            case "reply":
            default:
                return await this.informationReplyService.likes({
                    type,
                    userId,
                    userName,
                    replyId: typeId
                });
                break;
        }
    }
    async bffInformationDetail(payload) {
        return await this.informationService.retrieveInformationDetail(payload);
    }
    async watchs(payload) {
        return await this.informationVideoService.watchs(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", comment_1.InformationCommentService)
], ServiceInformation.prototype, "informationCommentService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", detail_1.InformationDetailService)
], ServiceInformation.prototype, "informationDetailService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likes_1.InformationLikesService)
], ServiceInformation.prototype, "informationLikesService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", information_1.InformationService)
], ServiceInformation.prototype, "informationService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", reply_1.InformationReplyService)
], ServiceInformation.prototype, "informationReplyService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", video_1.InformationVideoService)
], ServiceInformation.prototype, "informationVideoService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", videoDetail_1.InformationVideoDetailService)
], ServiceInformation.prototype, "informationVideoDetailService", void 0);
ServiceInformation = __decorate([
    decorator_1.Provide()
], ServiceInformation);
exports.ServiceInformation = ServiceInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9pbmZvcm1hdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsdUNBQXNEO0FBQ3RELHFDQUFvRDtBQUNwRCxtQ0FBa0Q7QUFDbEQsK0NBQW1EO0FBQ25ELG1DQUFrRDtBQUNsRCxtQ0FBa0Q7QUFDbEQsK0NBQThEO0FBRTlELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBd0I3QixLQUFLLENBQUUsaUJBQWlCLENBQUMsRUFDdkIsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sR0FBRyxFQUFFLEdBQ1osR0FBRyxFQUFFO1FBR0osSUFBSSxXQUFXLEdBQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1lBQy9ELElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCLENBQUMsQ0FBQTtRQUVGLElBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUV0QixPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQUk7WUFFSCxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxD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