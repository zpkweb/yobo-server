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
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationVideoEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', videoSrc = '', ccId = '', siteId = '', videoPhoto = '', watchs = 0, zhcn = '', enus = '', jajp = '', eses = '', } = {}) {
        return this.informationVideoEntity
            .createQueryBuilder()
            .update(video_1.InformationVideoEntity)
            .set({
            videoSrc,
            ccId,
            siteId,
            videoPhoto,
            watchs,
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationVideoEntity
            .createQueryBuilder()
            .update(video_1.InformationVideoEntity)
            .set({
            isDelete: false
        })
            .where("id = :id", { id: id })
            .execute();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL3ZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLDZEQUFzRTtBQUd0RSxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixJQUFJLEdBQUcsRUFBRSxFQUNULE1BQU0sR0FBRyxFQUFFLEVBQ1gsVUFBVSxHQUFHLEVBQUUsRUFDZixNQUFNLEdBQUcsQ0FBQyxFQUNWLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsUUFBUSxHQUFHLEtBQUssRUFDakIsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQy9CLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw4QkFBc0IsQ0FBQzthQUM1QixNQUFNLENBQUM7WUFDTixRQUFRO1lBQ1IsSUFBSTtZQUNKLE1BQU07WUFDTixVQUFVO1lBQ1YsTUFBTTtZQUNOLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDZCxHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFHLEtBQUssRUFBRSxDQUFDO2FBQ25ELElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxFQUNQLFFBQVEsR0FBRyxFQUFFLEVBQ2IsSUFBSSxHQUFHLEVBQUUsRUFDVCxNQUFNLEdBQUcsRUFBRSxFQUNYLFVBQVUsR0FBRyxFQUFFLEVBQ2YsTUFBTSxHQUFHLENBQUMsRUFDVixJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxHQUNWLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjthQUMvQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsOEJBQXNCLENBQUM7YUFDOUIsR0FBRyxDQUFDO1lBQ0gsUUFBUTtZQUNSLElBQUk7WUFDSixNQUFNO1lBQ04sVUFBVTtZQUNWLE1BQU07WUFDTixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDL0Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDhCQUFzQixDQUFDO2FBQzlCLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUVGLENBQUE7QUF0RkM7SUFEQyx1QkFBaUIsQ0FBQyw4QkFBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7MkVBQXlCO0FBSGhELDJCQUEyQjtJQUR2QyxtQkFBTyxFQUFFO0dBQ0csMkJBQTJCLENBeUZ2QztBQXpGWSxrRUFBMkIifQ==