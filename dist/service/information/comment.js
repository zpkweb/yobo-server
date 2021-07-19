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
exports.InformationCommentService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const comment_1 = require("../base/information/comment");
const reply_1 = require("./reply");
const likes_1 = require("./likes");
let InformationCommentService = class InformationCommentService {
    async create(payload) {
        const data = await this.baseCreate(payload);
        if (!data.success) {
            return data;
        }
        const result = await this.baseRetrieveCommentId(data.data.generatedMaps[0].commentId);
        if (!result.success) {
            return result;
        }
        return {
            data: result.data,
            success: true,
            code: 10003
        };
    }
    async baseCreate(payload) {
        const data = await this.baseInformationCommentService.BaseCreate(payload);
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
    async baseRetrieveCommentId(commentId) {
        const data = await this.baseInformationCommentService.BaseRetrieveCommentId(commentId);
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
        const data = await this.baseInformationCommentService.BaseRetrieve(payload);
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
    async retrieveList(payload) {
        const data = await this.baseInformationCommentService.BaseRetrieveList(payload);
        let list = data[0];
        let total = data[1];
        if (list) {
            for (let item of list) {
                const replyData = await this.informationReplyService.retrieveCommentId({
                    commentId: item.commentId
                });
                item.reply = replyData.success ? replyData.data : [];
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
        const data = await this.baseInformationCommentService.BaseUpdate(payload);
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
    async likes({ type = 'comment', commentId = '', userId = '', userName = '' } = {}) {
        const comment = await this.baseRetrieveCommentId(commentId);
        if (!comment.success) {
            return comment;
        }
        const likesNum = comment.data.likes + 1;
        const commentLikes = await this.baseUpdateCommentId({
            commentId: commentId,
            likes: likesNum
        });
        if (!commentLikes.success) {
            return commentLikes;
        }
        const likes = await this.informationLikesService.create({
            userId: userId,
            userName,
            type,
            typeId: commentId
        });
        if (!likes.success) {
            return likes;
        }
        return {
            success: true,
            code: 10009
        };
    }
    async baseUpdateCommentId(payload) {
        const data = await this.baseInformationCommentService.BaseUpdateCommentId(payload);
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
        const data = await this.baseInformationCommentService.BaseDelete(id);
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
        return this.baseInformationCommentService.BaseRelationSet(payload);
    }
    async relationAdd(payload) {
        return this.baseInformationCommentService.BaseRelationAdd(payload);
    }
    async relationRemove(payload) {
        return this.baseInformationCommentService.BaseRelationRemove(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", comment_1.BaseInformationCommentService)
], InformationCommentService.prototype, "baseInformationCommentService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", reply_1.InformationReplyService)
], InformationCommentService.prototype, "informationReplyService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likes_1.InformationLikesService)
], InformationCommentService.prototype, "informationLikesService", void 0);
InformationCommentService = __decorate([
    decorator_1.Provide()
], InformationCommentService);
exports.InformationCommentService = InformationCommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2luZm9ybWF0aW9uL2NvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHlEQUFxRjtBQUNyRixtQ0FBa0Q7QUFDbEQsbUNBQWtEO0FBRWxELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBV3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUVsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQVNELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JGLElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFBO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBRyxJQUFJLEVBQUU7WUFDUCxPQUFPO2dCQUNMLElBQUk7Z0JBQ0osT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBSTtZ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