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
exports.InformationReplyService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const reply_1 = require("../base/information/reply");
const likes_1 = require("./likes");
let InformationReplyService = class InformationReplyService {
    async create(payload) {
        const data = await this.baseCreate(payload);
        if (data) {
            const result = await this.baseRetrieveReplyId(data.data.generatedMaps[0].replyId);
            if (!result.success) {
                return result;
            }
            return {
                data: result.data,
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
    async reply(payload) {
        const data = await this.baseCreate(payload);
        if (data) {
            const replyData = await this.baseRetrieveReplyId(payload.replyId);
            if (!replyData.success) {
                return replyData;
            }
            const replyNumsNew = replyData.data.replyNums + 1;
            const replyNumsData = await this.baseUpdateReplyId({
                replyId: payload.replyId,
                replyNums: replyNumsNew
            });
            if (!replyNumsData.success) {
                return replyNumsData;
            }
            const result = await this.baseRetrieveReplyId(data.data.generatedMaps[0].replyId);
            if (!result.success) {
                return result;
            }
            return {
                data: result.data,
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
    async likes({ type = 'reply', replyId = '', userId = '', userName = '' } = {}) {
        const comment = await this.baseRetrieveReplyId(replyId);
        if (!comment.success) {
            return comment;
        }
        const likesNum = comment.data.likes + 1;
        const commentLikes = await this.baseUpdateReplyId({
            replyId: replyId,
            likes: likesNum
        });
        if (!commentLikes.success) {
            return commentLikes;
        }
        const likes = await this.informationLikesService.create({
            userId: userId,
            userName,
            type,
            typeId: replyId
        });
        if (!likes.success) {
            return likes;
        }
        return {
            success: true,
            code: 10009
        };
    }
    async baseCreate(payload) {
        const data = await this.baseInformationReplyService.BaseCreate(payload);
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
    async baseRetrieveReplyId(replytId) {
        const data = await this.baseInformationReplyService.BaseRetrieveReplyId(replytId);
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
    async retrieve(payload) {
        const data = await this.baseInformationReplyService.BaseRetrieve(payload);
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
    async retrieveCommentId(payload) {
        const data = await this.baseInformationReplyService.BaseRetrieveCommentId(payload);
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
    async baseUpdate(payload) {
        const data = await this.baseInformationReplyService.BaseUpdate(payload);
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
    async baseUpdateReplyId(payload) {
        const data = await this.baseInformationReplyService.BaseUpdatereplyId(payload);
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
    async delete(id) {
        const data = await this.baseInformationReplyService.BaseDelete(id);
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
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", reply_1.BaseInformationReplyService)
], InformationReplyService.prototype, "baseInformationReplyService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likes_1.InformationLikesService)
], InformationReplyService.prototype, "informationLikesService", void 0);
InformationReplyService = __decorate([
    decorator_1.Provide()
], InformationReplyService);
exports.InformationReplyService = InformationReplyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9pbmZvcm1hdGlvbi9yZXBseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQscURBQWlGO0FBQ2pGLG1DQUFrRDtBQUdsRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVFsQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFFbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUcsSUFBSSxFQUFFO1lBRVAsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakYsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxPQUFPO2dCQUNMLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBRWpCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFHLElBQUksRUFBRTtZQUVQLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZ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