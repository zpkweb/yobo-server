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
    async BaseCreate({ content = '', userId = '', videoId = '', isShow = true, isDelete = false } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .insert()
            .into(comment_1.InformationCommentEntity)
            .values({
            content,
            userId,
            videoId,
            isShow,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .andWhere("isShow = :isShow", { isShow: true })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', content = '', userId = '', videoId = '', isShow = true, commentId = '' } = {}) {
        return this.informationCommentEntity
            .createQueryBuilder()
            .update(comment_1.InformationCommentEntity)
            .set({
            content,
            userId,
            videoId,
            isShow,
            commentId
        })
            .where("id = :id", { id: id })
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
};
__decorate([
    orm_1.InjectEntityModel(comment_1.InformationCommentEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationCommentService.prototype, "informationCommentEntity", void 0);
BaseInformationCommentService = __decorate([
    decorator_1.Provide()
], BaseInformationCommentService);
exports.BaseInformationCommentService = BaseInformationCommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvaW5mb3JtYXRpb24vY29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxpRUFBMEU7QUFHMUUsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFLeEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUNmLE9BQU8sR0FBRyxFQUFFLEVBQ1osTUFBTSxHQUFHLEVBQUUsRUFDWCxPQUFPLEdBQUcsRUFBRSxFQUNaLE1BQU0sR0FBRyxJQUFJLEVBQ2IsUUFBUSxHQUFHLEtBQUssRUFDakIsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsd0JBQXdCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyxrQ0FBd0IsQ0FBQzthQUM5QixNQUFNLENBQUM7WUFDTixPQUFPO1lBQ1AsTUFBTTtZQUNOLE9BQU87WUFDUCxNQUFNO1lBQ04sUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDZCxHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFHLEtBQUssRUFBRSxDQUFDO2FBQ25ELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRyxJQUFJLEVBQUUsQ0FBQzthQUMvQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsUUFBUSxDQUFDO2FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDZCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsRUFBRSxHQUFHLEVBQUUsRUFDUCxPQUFPLEdBQUcsRUFBRSxFQUNaLE1BQU0sR0FBRyxFQUFFLEVBQ1gsT0FBTyxHQUFHLEVBQUUsRUFDWixNQUFNLEdBQUcsSUFBSSxFQUNiLFNBQVMsR0FBRyxFQUFFLEVBQ2YsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsd0JBQXdCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxrQ0FBd0IsQ0FBQzthQUNoQyxHQUFHLENBQUM7WUFDSCxPQUFPO1lBQ1AsTUFBTTtZQUNOLE9BQU87WUFDUCxNQUFNO1lBQ04sU0FBUztTQUNWLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDakMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLGtDQUF3QixDQUFDO2FBQ2hDLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUVGLENBQUE7QUFyRUM7SUFEQyx1QkFBaUIsQ0FBQyxrQ0FBd0IsQ0FBQzs4QkFDbEIsb0JBQVU7K0VBQTJCO0FBSHBELDZCQUE2QjtJQUR6QyxtQkFBTyxFQUFFO0dBQ0csNkJBQTZCLENBd0V6QztBQXhFWSxzRUFBNkIifQ==