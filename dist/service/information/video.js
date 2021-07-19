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
exports.InformationVideoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const video_1 = require("../base/information/video");
const videoDetail_1 = require("./videoDetail");
let InformationVideoService = class InformationVideoService {
    async create(payload) {
        const videoData = await this.baseCreate(payload);
        if (!videoData.success) {
            return videoData;
        }
        const detailJSON = JSON.parse(payload.detail);
        const videoDetailData = await this.informationVideoDetailService.baseCreate({
            zhcn: detailJSON['zh-cn'],
            enus: detailJSON['en-us'],
            jajp: detailJSON['ja-jp'],
            eses: detailJSON['es-es'],
        });
        if (videoDetailData.success) {
            this.relationSet({
                name: 'detail',
                of: videoData.data.identifiers[0].id,
                set: videoDetailData.data.identifiers[0].id
            });
        }
        const data = await this.baseInformationVideoService.BaseRetrieveName({
            zhcn: payload['zh-cn'],
            enus: payload['en-us'],
            jajp: payload['ja-jp'],
            eses: payload['es-es'],
        });
        return {
            data,
            success: true,
            code: 10003
        };
    }
    async baseCreate(payload) {
        const isTitle = await this.baseInformationVideoService.BaseRetrieveName({
            zhcn: payload['zh-cn'],
            enus: payload['en-us'],
            jajp: payload['ja-jp'],
            eses: payload['es-es'],
        });
        if (isTitle) {
            return {
                success: false,
                code: 10013
            };
        }
        const data = await this.baseInformationVideoService.BaseCreate({
            zhcn: payload['zh-cn'],
            enus: payload['en-us'],
            jajp: payload['ja-jp'],
            eses: payload['es-es'],
            videoSrc: payload.videoSrc,
            ccId: payload.ccId,
            siteId: payload.siteId,
            videoPhoto: payload.videophoto,
            watchs: 0,
            isDelete: false
        });
        if (data) {
            return {
                data,
                success: true,
                code: 10003
            };
        }
        else {
            return {
                success: false,
                code: 10004
            };
        }
    }
    async retrieve(payload) {
        const data = await this.baseInformationVideoService.BaseRetrieve(payload);
        let list = data[0];
        let total = data[1];
        if (data) {
            if (payload.isLocale) {
                list = list.map(item => {
                    const title = item[payload.locale];
                    const detail = item.detail ? item.detail[payload.locale] : '';
                    return {
                        videoId: item.videoId,
                        videoSrc: item.videoSrc,
                        ccId: item.ccId,
                        siteId: item.siteId,
                        videoPhoto: item.videoPhoto,
                        watchs: item.watchs,
                        title,
                        detail,
                        createdDate: item.createdDate
                    };
                });
            }
            return {
                data: {
                    list,
                    total
                },
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveName(payload) {
        const data = await this.baseInformationVideoService.BaseRetrieveName(payload);
        if (data) {
            return {
                data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveVideoId(payload) {
        let data = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
        if (data) {
            if (payload.isLocale) {
                const title = data[payload.locale];
                const detail = data.detail ? data.detail[payload.locale] : '';
                data = {
                    videoId: data.videoId,
                    videoSrc: data.videoSrc,
                    ccId: data.ccId,
                    siteId: data.siteId,
                    videoPhoto: data.videoPhoto,
                    watchs: data.watchs,
                    title,
                    detail,
                    createdDate: data.createdDate
                };
            }
            return {
                data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async baseSearch(payload) {
        const data = await this.baseInformationVideoService.BaseSearch(payload);
        let list = data[0];
        let total = data[1];
        if (data) {
            if (payload.isLocale) {
                list = list.map(item => {
                    const title = item[payload.locale];
                    const detail = item.detail ? item.detail[payload.locale] : '';
                    return {
                        videoId: item.videoId,
                        videoSrc: item.videoSrc,
                        ccId: item.ccId,
                        siteId: item.siteId,
                        videoPhoto: item.videoPhoto,
                        watchs: item.watchs,
                        title,
                        detail,
                        createdDate: item.createdDate
                    };
                });
            }
            return {
                data: {
                    list,
                    total
                },
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async update(payload) {
        const videoUpdateData = await this.baseUpdate(payload);
        if (!videoUpdateData.success) {
            return videoUpdateData;
        }
        if (payload.detail) {
            const detailJSON = typeof payload.detail == 'string' ? JSON.parse(payload.detail) : payload.detail;
            if (detailJSON.id) {
                const videoDetailData = await this.informationVideoDetailService.baseUpdate({
                    id: detailJSON.id,
                    zhcn: detailJSON['zh-cn'],
                    enus: detailJSON['en-us'],
                    jajp: detailJSON['ja-jp'],
                    eses: detailJSON['es-es'],
                });
                if (!videoDetailData.success) {
                    return videoDetailData;
                }
            }
            else {
                const videoDetailData = await this.informationVideoDetailService.baseCreate({
                    zhcn: detailJSON['zh-cn'],
                    enus: detailJSON['en-us'],
                    jajp: detailJSON['ja-jp'],
                    eses: detailJSON['es-es'],
                });
                if (videoDetailData.success) {
                    this.relationSet({
                        name: 'detail',
                        of: payload.id,
                        set: videoDetailData.data.identifiers[0].id
                    });
                }
            }
        }
        return {
            success: true,
            code: 10007
        };
    }
    async baseUpdate(payload) {
        const isVideo = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
        if (!isVideo) {
            return {
                success: false,
                code: 10014
            };
        }
        const data = await this.baseInformationVideoService.BaseUpdate({
            videoId: payload.videoId,
            videoSrc: payload.videoSrc,
            ccId: payload.ccId,
            siteId: payload.siteId,
            videoPhoto: payload.videoPhoto,
            zhcn: payload['zh-cn'],
            enus: payload['en-us'],
            jajp: payload['ja-jp'],
            eses: payload['es-es'],
        });
        if (data.affected) {
            return {
                data,
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async watchs(payload) {
        const video = await this.baseInformationVideoService.BaseRetrieveVideoId(payload.videoId);
        if (video) {
            const watchs = video.watchs + 1;
            const data = await this.baseInformationVideoService.BaseUpdate({
                videoId: payload.videoId,
                watchs
            });
            if (data.affected) {
                return {
                    success: true,
                    code: 10007
                };
            }
            else {
                return {
                    success: false,
                    code: 10008
                };
            }
        }
        else {
            return {
                success: false,
                code: 10014
            };
        }
    }
    async baseDelete(videoId) {
        const data = await this.baseInformationVideoService.BaseDelete(videoId);
        if (data.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async relationSet(payload) {
        return this.baseInformationVideoService.BaseRelationSet(payload);
    }
    async relationAdd(payload) {
        return this.baseInformationVideoService.BaseRelationAdd(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", video_1.BaseInformationVideoService)
], InformationVideoService.prototype, "baseInformationVideoService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", videoDetail_1.InformationVideoDetailService)
], InformationVideoService.prototype, "informationVideoDetailService", void 0);
InformationVideoService = __decorate([
    decorator_1.Provide()
], InformationVideoService);
exports.InformationVideoService = InformationVideoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9pbmZvcm1hdGlvbi92aWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQscURBQWlGO0FBQ2pGLCtDQUE4RDtBQUU5RCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVFsQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFHbEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBSUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxDQUFDO1lBQzFFLElBQUksRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUMsQ0FBQTtRQUNGLElBQUcsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxHQUFHLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTth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