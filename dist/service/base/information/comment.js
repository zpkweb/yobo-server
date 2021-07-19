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
exports.BaseInformationCommentService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const comment_1 = require("../../../entity/information/comment");
let BaseInformationCommentService = class BaseInformationCommentService {
    async BaseCreate({ content = '', userId = '', userName = '', videoId = '', likes = 0, isShow = true, isDelete = false } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .insert()
            .into(comment_1.InformationCommentEntity)
            .values({
            content,
            userId,
            userName,
            videoId,
            likes,
            isShow,
            isDelete
        })
            .execute();
    }
    async BaseRetrieveCommentId(commentId) {
        const where = {
            isDelete: false,
            isShow: true,
            commentId
        };
        return this.informationCommentEntity
            .createQueryBuilder("comment")
            .where(where)
            .addSelect("comment.createdDate")
            .getOne();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .andWhere("isShow = :isShow", { isShow: true })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseRetrieveList({ videoId = '', currentPage = 1, pageSize = 10 } = {}) {
        const where = {
            isDelete: false,
            isShow: true
        };
        if (videoId) {
            where.videoId = videoId;
        }
        return this.informationCommentEntity
            .createQueryBuilder('comment')
            .where(where)
            .addSelect("comment.createdDate")
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseUpdate({ id = '', content = '', userId = '', userName = '', videoId = '', likes = 0, isShow = true, commentId = '' } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .update(comment_1.InformationCommentEntity)
            .set({
            content,
            userId,
            userName,
            likes,
            videoId,
            isShow,
            commentId
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseUpdateCommentId({ content = '', userId = '', userName = '', videoId = '', likes = 0, isShow = true, commentId = '' } = {}) {
        const set = {};
        if (content) {
            set.content = content;
        }
        if (likes) {
            set.likes = likes;
        }
        return this.informationCommentEntity
            .createQueryBuilder()
            .update(comment_1.InformationCommentEntity)
            .set(set)
            .where("commentId = :commentId", { commentId: commentId })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .update(comment_1.InformationCommentEntity)
            .set({
            isDelete: false
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseRelationSet(payload) {
        return await this.informationCommentEntity
            .createQueryBuilder()
            .relation(comment_1.InformationCommentEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseRelationAdd(payload) {
        return await this.informationCommentEntity
            .createQueryBuilder()
            .relation(comment_1.InformationCommentEntity, payload.name)
            .of(payload.of)
            .add(payload.add);
    }
    async BaseRelationRemove(payload) {
        return await this.informationCommentEntity
            .createQueryBuilder()
            .relation(comment_1.InformationCommentEntity, payload.name)
            .of(payload.of)
            .remove(payload.remove);
    }
};
__decorate([
    orm_1.InjectEntityModel(comment_1.InformationCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationCommentService.prototype, "informationCommentEntity", void 0);
BaseInformationCommentService = __decorate([
    decorator_1.Provide()
], BaseInformationCommentService);
exports.BaseInformationCommentService = BaseInformationCommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvaW5mb3JtYXRpb24vY29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxpRUFBMEU7QUFHMUUsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFLeEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUNmLE9BQU8sR0FBRyxFQUFFLEVBQ1osTUFBTSxHQUFHLEVBQUUsRUFDWCxRQUFRLEdBQUcsRUFBRSxFQUNiLE9BQU8sR0FBRyxFQUFFLEVBQ1osS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsSUFBSSxFQUNiLFFBQVEsR0FBRyxLQUFLLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHdCQUF3QjthQUNqQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsa0NBQXdCLENBQUM7YUFDOUIsTUFBTSxDQUFDO1lBQ04sT0FBTztZQUNQLE1BQU07WUFDTixRQUFRO1lBQ1IsT0FBTztZQUNQLEtBQUs7WUFDTCxNQUFNO1lBQ04sUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMscUJBQXFCLENBQUMsU0FBUztRQUNuQyxNQUFNLEtBQUssR0FBTztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUztTQUNWLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDakMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixTQUFTLENBQUMscUJBQXFCLENBQUM7YUFDaEMsTUFB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