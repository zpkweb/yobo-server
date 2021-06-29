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
const fabulous_1 = require("./fabulous");
const information_1 = require("./information");
const reply_1 = require("./reply");
const video_1 = require("./video");
let ServiceInformation = class ServiceInformation {
    async createInformation({ zhcn = '', enus = '', jajp = '', eses = '', zhcnDetail = '', enusDetail = '', jajpDetail = '', esesDetail = '', videoSrc = '', ccId = '', siteId = '', videoPhoto = '', watchs = 0, zhcnVideo = '', enusVideo = '', jajpVideo = '', esesVideo = '', } = {}) {
        if (!zhcn && !enus && !jajp && !eses) {
            return {
                success: false,
                code: 10104
            };
        }
        let information = await this.informationService.retrieveName({
            zhcn,
            enus,
            jajp,
            eses
        });
        if (information.success) {
            return {
                success: false,
                code: 10013
            };
        }
        else {
            information = await this.informationService.create({
                zhcn,
                enus,
                jajp,
                eses
            });
            if (!information.success) {
                return information;
            }
        }
        let detail = await this.informationDetailService.create({
            zhcn: zhcnDetail,
            enus: enusDetail,
            jajp: jajpDetail,
            eses: esesDetail,
        });
        if (!detail.success) {
            return detail;
        }
        await this.informationService.relationSet({
            name: 'detail',
            of: information.data.identifiers[0].id,
            set: detail.data.identifiers[0].id
        });
        let video = await this.informationVideoService.create({
            videoSrc,
            ccId,
            siteId,
            videoPhoto,
            watchs,
            zhcn: zhcnVideo,
            enus: enusVideo,
            jajp: jajpVideo,
            eses: esesVideo,
        });
        if (!video.success) {
            return video;
        }
        await this.informationService.relationAdd({
            name: 'videos',
            of: information.data.identifiers[0].id,
            add: video.data.identifiers[0].id
        });
        return {
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
    __metadata("design:type", fabulous_1.InformationFabulousService)
], ServiceInformation.prototype, "informationFabulousService", void 0);
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
ServiceInformation = __decorate([
    decorator_1.Provide()
], ServiceInformation);
exports.ServiceInformation = ServiceInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9pbmZvcm1hdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsdUNBQXNEO0FBQ3RELHFDQUFvRDtBQUNwRCx5Q0FBd0Q7QUFDeEQsK0NBQW1EO0FBQ25ELG1DQUFrRDtBQUNsRCxtQ0FBa0Q7QUFHbEQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUE2QjdCLEtBQUssQ0FBRSxpQkFBaUIsQ0FBQyxFQUN2QixJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUVULFVBQVUsR0FBRyxFQUFFLEVBQ2YsVUFBVSxHQUFHLEVBQUUsRUFDZixVQUFVLEdBQUcsRUFBRSxFQUNmLFVBQVUsR0FBRyxFQUFFLEVBRWYsUUFBUSxHQUFHLEVBQUUsRUFDYixJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sR0FBRyxFQUFFLEVBQ1gsVUFBVSxHQUFHLEVBQUUsRUFDZixNQUFNLEdBQUcsQ0FBQyxFQUNWLFNBQVMsR0FBRyxFQUFFLEVBQ2QsU0FBUyxHQUFHLEVBQUUsRUFDZCxTQUFTLEdBQUcsRUFBRSxFQUNkLFNBQVMsR0FBRyxFQUFFLEdBR2YsR0FBRyxFQUFFO1FBRUosSUFBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNuQyxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBRUQsSUFBSSxXQUFXLEdBQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1lBQy9ELElBQUk7WUFDSixJ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