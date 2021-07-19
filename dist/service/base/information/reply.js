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
exports.BaseInformationReplyService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const reply_1 = require("../../../entity/information/reply");
let BaseInformationReplyService = class BaseInformationReplyService {
    async BaseCreate({ content = '', replyUserId = '', replyUserName = '', userId = '', userName = '', commentId = '', likes = 0, replyNums = 0, isShow = true, isDelete = false } = {}) {
        return this.informationReplyEntity
            .createQueryBuilder()
            .insert()
            .into(reply_1.InformationReplyEntity)
            .values({
            content,
            replyUserId,
            replyUserName,
            userId,
            userName,
            commentId,
            likes,
            replyNums,
            isShow,
            isDelete
        })
            .execute();
    }
    async BaseRetrieveReplyId(replyId) {
        const where = {
            isDelete: false,
            isShow: true,
            replyId
        };
        return this.informationReplyEntity
            .createQueryBuilder("reply")
            .where(where)
            .addSelect("reply.createdDate")
            .getOne();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationReplyEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .andWhere("isShow = :isShow", { isShow: true })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseRetrieveCommentId({ commentId = '', currentPage = 1, pageSize = 10 } = {}) {
        return this.informationReplyEntity
            .createQueryBuilder('reply')
            .where("commentId = :commentId", { commentId: commentId })
            .andWhere("isDelete = :isDelete", { isDelete: false })
            .andWhere("isShow = :isShow", { isShow: true })
            .addSelect('reply.createdDate')
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', content = '', replyUserId = '', replyUserName = '', userId = '', userName = '', commentId = '', likes = 0, replyNums = 0, isShow = true } = {}) {
        const set = {};
        if (content) {
            set.content = content;
        }
        if (likes) {
            set.likes = likes;
        }
        if (replyNums) {
            set.replyNums = replyNums;
        }
        return this.informationReplyEntity
            .createQueryBuilder()
            .update(reply_1.InformationReplyEntity)
            .set(set)
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseUpdatereplyId({ replyId = '', content = '', replyUserId = '', replyUserName = '', userId = '', userName = '', commentId = '', likes = 0, replyNums = 0, isShow = true } = {}) {
        const set = {};
        if (content) {
            set.content = content;
        }
        if (likes) {
            set.likes = likes;
        }
        if (replyNums) {
            set.replyNums = replyNums;
        }
        return this.informationReplyEntity
            .createQueryBuilder()
            .update(reply_1.InformationReplyEntity)
            .set(set)
            .where("replyId = :replyId", { replyId: replyId })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationReplyEntity
            .createQueryBuilder()
            .update(reply_1.InformationReplyEntity)
            .set({
            isDelete: false
        })
            .where("id = :id", { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(reply_1.InformationReplyEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationReplyService.prototype, "informationReplyEntity", void 0);
BaseInformationReplyService = __decorate([
    decorator_1.Provide()
], BaseInformationReplyService);
exports.BaseInformationReplyService = BaseInformationReplyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL3JlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDZEQUFzRTtBQUd0RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsT0FBTyxHQUFHLEVBQUUsRUFDWixXQUFXLEdBQUcsRUFBRSxFQUNoQixhQUFhLEdBQUcsRUFBRSxFQUNsQixNQUFNLEdBQUcsRUFBRSxFQUNYLFFBQVEsR0FBRyxFQUFFLEVBQ2IsU0FBUyxHQUFHLEVBQUUsRUFDZCxLQUFLLEdBQUcsQ0FBQyxFQUNULFNBQVMsR0FBRyxDQUFDLEVBQ2IsTUFBTSxHQUFHLElBQUksRUFDYixRQUFRLEdBQUcsS0FBSyxFQUNqQixHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDhCQUFzQixDQUFDO2FBQzVCLE1BQU0sQ0FBQztZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gsYUFBYTtZQUNiLE1BQU07WUFDTixRQUFRO1lBQ1IsU0FBUztZQUNULEtBQUs7WUFDTCxTQUFTO1lBQ1QsTUFBTTtZQUNOLFFBQVE7U0FDVCxDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0QsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU87UUFDL0IsTUFBTSxLQUFLLEdBQU87WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU87U0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FB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