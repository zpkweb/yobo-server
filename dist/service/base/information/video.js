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
exports.BaseInformationVideoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const video_1 = require("../../../entity/information/video");
let BaseInformationVideoService = class BaseInformationVideoService {
    async BaseCreate({ videoSrc = '', ccId = '', siteId = '', videoPhoto = '', watchs = 0, zhcn = '', enus = '', jajp = '', eses = '', isDelete = false } = {}) {
        return this.informationVideoEntity
            .createQueryBuilder()
            .insert()
            .into(video_1.InformationVideoEntity)
            .values({
            videoSrc,
            ccId,
            siteId,
            videoPhoto,
            watchs,
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10, news = false, } = {}) {
        return this.informationVideoEntity
            .createQueryBuilder('informationVideo')
            .leftJoinAndSelect("informationVideo.detail", "detail")
            .where("informationVideo.isDelete = :isDelete", { isDelete: false })
            .addSelect("informationVideo.createdDate")
            .orderBy({
            "informationVideo.id": news ? "DESC" : "ASC"
        })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseRetrieveName({ zhcn = '', enus = '', jajp = '', eses = '', } = {}) {
        const where = {};
        if (zhcn) {
            where['zh-cn'] = zhcn;
        }
        if (enus) {
            where['en-us'] = enus;
        }
        if (jajp) {
            where['ja-jp'] = jajp;
        }
        if (eses) {
            where['es-es'] = eses;
        }
        return this.informationVideoEntity
            .createQueryBuilder('informationVideo')
            .where(where)
            .andWhere("informationVideo.isDelete = :isDelete", { isDelete: false })
            .getOne();
    }
    async BaseRetrieveVideoId(videoId) {
        return this.informationVideoEntity
            .createQueryBuilder('informationVideo')
            .leftJoinAndSelect("informationVideo.detail", "detail")
            .where("informationVideo.videoId = :videoId", { videoId: videoId })
            .andWhere("informationVideo.isDelete = :isDelete", { isDelete: false })
            .addSelect("informationVideo.createdDate")
            .getOne();
    }
    async BaseSearch({ title = '', currentPage = 1, pageSize = 10, news = false, } = {}) {
        const where = {
            isDelete: false
        };
        if (title) {
            where['zh-cn'] = typeorm_1.Like(`%${title}%`);
        }
        return this.informationVideoEntity
            .createQueryBuilder('informationVideo')
            .leftJoinAndSelect("informationVideo.detail", "detail")
            .where(where)
            .andWhere("informationVideo.isDelete = :isDelete", { isDelete: false })
            .addSelect("informationVideo.createdDate")
            .orderBy({
            "informationVideo.id": news ? "DESC" : "ASC",
        })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseUpdate(payload) {
        const { videoId, ...setData } = payload;
        const set = {};
        if (setData.videoSrc) {
            set.videoSrc = setData.videoSrc;
        }
        if (setData.ccId) {
            set.ccId = setData.ccId;
        }
        if (setData.siteId) {
            set.siteId = setData.siteId;
        }
        if (setData.videoPhoto) {
            set.videoPhoto = setData.videoPhoto;
        }
        if (setData.zhcn) {
            set['zh-cn'] = setData.zhcn;
        }
        if (setData.enus) {
            set['en-us'] = setData.enus;
        }
        if (setData.jajp) {
            set['ja-jp'] = setData.jajp;
        }
        if (setData.eses) {
            set['es-es'] = setData.eses;
        }
        if (setData.watchs) {
            set.watchs = setData.watchs;
        }
        return this.informationVideoEntity
            .createQueryBuilder()
            .update(video_1.InformationVideoEntity)
            .set(set)
            .where("videoId = :videoId", { videoId: videoId })
            .andWhere("isDelete = :isDelete", { isDelete: false })
            .execute();
    }
    async BaseDelete(videoId) {
        return this.informationVideoEntity
            .createQueryBuilder()
            .update(video_1.InformationVideoEntity)
            .set({
            isDelete: true
        })
            .where("videoId = :videoId", { videoId: videoId })
            .execute();
    }
    async BaseRelationSet(payload) {
        return await this.informationVideoEntity
            .createQueryBuilder()
            .relation(video_1.InformationVideoEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseRelationAdd(payload) {
        return await this.informationVideoEntity
            .createQueryBuilder()
            .relation(video_1.InformationVideoEntity, payload.name)
            .of(payload.of)
            .add(payload.add);
    }
};
__decorate([
    orm_1.InjectEntityModel(video_1.InformationVideoEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationVideoService.prototype, "informationVideoEntity", void 0);
BaseInformationVideoService = __decorate([
    decorator_1.Provide()
], BaseInformationVideoService);
exports.BaseInformationVideoService = BaseInformationVideoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL3ZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQTJDO0FBQzNDLDZEQUFzRTtBQUd0RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sR0FBRyxFQUFFLEVBQ1gsVUFBVSxHQUFHLEVBQUUsRUFDZixNQUFNLEdBQUcsQ0FBQyxFQUNWLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsUUFBUSxHQUFHLEtBQUssRUFDakIsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw4QkFBc0IsQ0FBQzthQUM1QixNQUFNLENBQUM7WUFDTixRQUFRO1lBQ1IsSUFBSTtZQUNKLE1BQU07WUFDTixVQUFVO1lBQ1YsTUFBTTtZQUNOLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFJRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixJQUFJLEdBQUcsS0FBSyxHQUNiLEdBQUcsRUFBRTtRQUNK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