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
exports.BaseInformationVideoDetailService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const videoDetail_1 = require("../../../entity/information/videoDetail");
let BaseInformationVideoDetailService = class BaseInformationVideoDetailService {
    async BaseCreate({ zhcn = '', enus = '', jajp = '', eses = '', isDelete = false } = {}) {
        return this.informationVideoDetailEntity
            .createQueryBuilder()
            .insert()
            .into(videoDetail_1.InformationVideoDetailEntity)
            .values({
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10 } = {}) {
        return this.informationVideoDetailEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', zhcn = '', enus = '', jajp = '', eses = '', } = {}) {
        return this.informationVideoDetailEntity
            .createQueryBuilder()
            .update(videoDetail_1.InformationVideoDetailEntity)
            .set({
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationVideoDetailEntity
            .createQueryBuilder()
            .update(videoDetail_1.InformationVideoDetailEntity)
            .set({
            isDelete: true
        })
            .where("id = :id", { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(videoDetail_1.InformationVideoDetailEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationVideoDetailService.prototype, "informationVideoDetailEntity", void 0);
BaseInformationVideoDetailService = __decorate([
    decorator_1.Provide()
], BaseInformationVideoDetailService);
exports.BaseInformationVideoDetailService = BaseInformationVideoDetailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9EZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL3ZpZGVvRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHlFQUFrRjtBQUdsRixJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQUs1QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxRQUFRLEdBQUcsS0FBSyxFQUNqQixHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyw0QkFBNEI7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDBDQUE0QixDQUFDO2FBQ2xDLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDZCxHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyw0QkFBNEI7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFHLEtBQUssRUFBRSxDQUFDO2FBQ25ELElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNkLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUlELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxFQUNQLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEdBQ1YsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsNEJBQTRCO2FBQ3JDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQywwQ0FBNEIsQ0FBQzthQUNwQyxHQUFHLENBQUM7WUFDSCxPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyw0QkFBNEI7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLDBDQUE0QixDQUFDO2FBQ3BDLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBRUYsQ0FBQTtBQXBFQztJQURDLHVCQUFpQixDQUFDLDBDQUE0QixDQUFDOzhCQUNsQixvQkFBVTt1RkFBK0I7QUFINUQsaUNBQWlDO0lBRDdDLG1CQUFPLEVBQUU7R0FDRyxpQ0FBaUMsQ0F1RTdDO0FBdkVZLDhFQUFpQyJ9