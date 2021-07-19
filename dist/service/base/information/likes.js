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
exports.BaseInformationLikesService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const likes_1 = require("../../../entity/information/likes");
let BaseInformationLikesService = class BaseInformationLikesService {
    async BaseCreate({ type = '', typeId = '', userId = '', userName = '', isCancel = true, isDelete = false } = {}) {
        return this.informationLikesEntity
            .createQueryBuilder()
            .insert()
            .into(likes_1.InformationLikesEntity)
            .values({
            type,
            typeId,
            userId,
            userName,
            isCancel,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationLikesEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .andWhere("isCancel = :isCancel", { isCancel: false })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', type = '', typeId = '', userId = '', userName = '', isCancel = true, } = {}) {
        return this.informationLikesEntity
            .createQueryBuilder()
            .update(likes_1.InformationLikesEntity)
            .set({
            type,
            typeId,
            userId,
            userName,
            isCancel,
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationLikesEntity
            .createQueryBuilder()
            .update(likes_1.InformationLikesEntity)
            .set({
            isDelete: true
        })
            .where("id = :id", { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(likes_1.InformationLikesEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationLikesService.prototype, "informationLikesEntity", void 0);
BaseInformationLikesService = __decorate([
    decorator_1.Provide()
], BaseInformationLikesService);
exports.BaseInformationLikesService = BaseInformationLikesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL2xpa2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDZEQUFzRTtBQUd0RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsSUFBSSxHQUFHLEVBQUUsRUFDVCxNQUFNLEdBQUcsRUFBRSxFQUNYLE1BQU0sR0FBRyxFQUFFLEVBQ1gsUUFBUSxHQUFHLEVBQUUsRUFDYixRQUFRLEdBQUcsSUFBSSxFQUNmLFFBQVEsR0FBRyxLQUFLLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsOEJBQXNCLENBQUM7YUFDNUIsTUFBTSxDQUFDO1lBQ04sSUFBSTtZQUNKLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1NBQ1QsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDakIsV0FBVyxHQUFHLENBQUMsRUFDZixRQUFRLEdBQUcsRUFBRSxFQUNkLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUcsS0FBSyxFQUFFLENBQUM7YUFDbkQsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFHLEtBQUssRUFBRSxDQUFDO2FBQ3RELElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxFQUNQLElBQUksR0FBRyxFQUFFLEVBQ1QsTUFBTSxHQUFHLEVBQUUsRUFDWCxNQUFNLEdBQUcsRUFBRSxFQUNYLFFBQVEsR0FBRyxFQUFFLEVBQ2IsUUFBUSxHQUFHLElBQUksR0FDaEIsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyw4QkFBc0IsQ0FBQzthQUM5QixHQUFHLENBQUM7WUFDSCxJQUFJO1lBQ0osTUFBTTtZQUNOLE1BQU07WUFDTixRQUFRO1lBQ1IsUUFBUTtTQUNULENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDhCQUFzQixDQUFDO2FBQzlCLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBRUYsQ0FBQTtBQXZFQztJQURDLHVCQUFpQixDQUFDLDhCQUFzQixDQUFDOzhCQUNsQixvQkFBVTsyRUFBeUI7QUFIaEQsMkJBQTJCO0lBRHZDLG1CQUFPLEVBQUU7R0FDRywyQkFBMkIsQ0EwRXZDO0FBMUVZLGtFQUEyQiJ9