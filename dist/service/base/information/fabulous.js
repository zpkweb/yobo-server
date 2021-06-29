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
exports.BaseInformationFabulousService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const fabulous_1 = require("../../../entity/information/fabulous");
let BaseInformationFabulousService = class BaseInformationFabulousService {
    async BaseCreate({ type = '', typeId = '', userId = '', isCancel = true, isDelete = false } = {}) {
        return this.informationFabulousEntity
            .createQueryBuilder()
            .insert()
            .into(fabulous_1.InformationFabulousEntity)
            .values({
            type,
            typeId,
            userId,
            isCancel,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationFabulousEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .andWhere("isCancel = :isCancel", { isCancel: false })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', type = '', typeId = '', userId = '', isCancel = true, } = {}) {
        return this.informationFabulousEntity
            .createQueryBuilder()
            .update(fabulous_1.InformationFabulousEntity)
            .set({
            type,
            typeId,
            userId,
            isCancel,
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationFabulousEntity
            .createQueryBuilder()
            .update(fabulous_1.InformationFabulousEntity)
            .set({
            isDelete: false
        })
            .where("id = :id", { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(fabulous_1.InformationFabulousEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationFabulousService.prototype, "informationFabulousEntity", void 0);
BaseInformationFabulousService = __decorate([
    decorator_1.Provide()
], BaseInformationFabulousService);
exports.BaseInformationFabulousService = BaseInformationFabulousService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFidWxvdXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL2ZhYnVsb3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLG1FQUE0RTtBQUc1RSxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQUt6QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsSUFBSSxHQUFHLEVBQUUsRUFDVCxNQUFNLEdBQUcsRUFBRSxFQUNYLE1BQU0sR0FBRyxFQUFFLEVBQ1gsUUFBUSxHQUFHLElBQUksRUFDZixRQUFRLEdBQUcsS0FBSyxFQUNqQixHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyx5QkFBeUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLG9DQUF5QixDQUFDO2FBQy9CLE1BQU0sQ0FBQztZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sTUFBTTtZQUNOLFFBQVE7WUFDUixRQUFRO1NBQ1QsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDakIsV0FBVyxHQUFHLENBQUMsRUFDZixRQUFRLEdBQUcsRUFBRSxFQUNkLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUcsS0FBSyxFQUFFLENBQUM7YUFDbkQsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFHLEtBQUssRUFBRSxDQUFDO2FBQ3RELElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxFQUNQLElBQUksR0FBRyxFQUFFLEVBQ1QsTUFBTSxHQUFHLEVBQUUsRUFDWCxNQUFNLEdBQUcsRUFBRSxFQUNYLFFBQVEsR0FBRyxJQUFJLEdBQ2hCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsb0NBQXlCLENBQUM7YUFDakMsR0FBRyxDQUFDO1lBQ0gsSUFBSTtZQUNKLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUTtTQUNULENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyx5QkFBeUI7YUFDbEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLG9DQUF5QixDQUFDO2FBQ2pDLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUVGLENBQUE7QUFuRUM7SUFEQyx1QkFBaUIsQ0FBQyxvQ0FBeUIsQ0FBQzs4QkFDbEIsb0JBQVU7aUZBQTRCO0FBSHRELDhCQUE4QjtJQUQxQyxtQkFBTyxFQUFFO0dBQ0csOEJBQThCLENBc0UxQztBQXRFWSx3RUFBOEIifQ==