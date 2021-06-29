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
    async BaseCreate({ content = '', replyUser = '', userId = '', commentId = '', isShow = true, isDelete = false } = {}) {
        return this.informationReplyEntity
            .createQueryBuilder()
            .insert()
            .into(reply_1.InformationReplyEntity)
            .values({
            content,
            replyUser,
            userId,
            commentId,
            isShow,
            isDelete
        })
            .execute();
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
    async BaseUpdate({ id = '', content = '', replyUser = '', userId = '', commentId = '', isShow = true } = {}) {
        return this.informationReplyEntity
            .createQueryBuilder()
            .update(reply_1.InformationReplyEntity)
            .set({
            content,
            replyUser,
            userId,
            commentId,
            isShow,
        })
            .where("id = :id", { id: id })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL3JlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDZEQUFzRTtBQUd0RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsT0FBTyxHQUFHLEVBQUUsRUFDWixTQUFTLEdBQUcsRUFBRSxFQUNkLE1BQU0sR0FBRyxFQUFFLEVBQ1gsU0FBUyxHQUFHLEVBQUUsRUFDZCxNQUFNLEdBQUcsSUFBSSxFQUNiLFFBQVEsR0FBRyxLQUFLLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsOEJBQXNCLENBQUM7YUFDNUIsTUFBTSxDQUFDO1lBQ04sT0FBTztZQUNQLFNBQVM7WUFDVCxNQUFNO1lBQ04sU0FBUztZQUNULE1BQU07WUFDTixRQUFRO1NBQ1QsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDakIsV0FBVyxHQUFHLENBQUMsRUFDZixRQUFRLEdBQUcsRUFBRSxFQUNkLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUcsS0FBSyxFQUFFLENBQUM7YUFDbkQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFHLElBQUksRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxFQUNQLE9BQU8sR0FBRyxFQUFFLEVBQ1osU0FBUyxHQUFHLEVBQUUsRUFDZCxNQUFNLEdBQUcsRUFBRSxFQUNYLFNBQVMsR0FBRyxFQUFFLEVBQ2QsTUFBTSxHQUFHLElBQUksRUFDZCxHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDhCQUFzQixDQUFDO2FBQzlCLEdBQUcsQ0FBQztZQUNILE9BQU87WUFDUCxTQUFTO1lBQ1QsTUFBTTtZQUNOLFNBQVM7WUFDVCxNQUFNO1NBQ1AsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsOEJBQXNCLENBQUM7YUFDOUIsR0FBRyxDQUFDO1lBQ0gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBRUYsQ0FBQTtBQXZFQztJQURDLHVCQUFpQixDQUFDLDhCQUFzQixDQUFDOzhCQUNsQixvQkFBVTsyRUFBeUI7QUFIaEQsMkJBQTJCO0lBRHZDLG1CQUFPLEVBQUU7R0FDRywyQkFBMkIsQ0EwRXZDO0FBMUVZLGtFQUEyQiJ9