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
exports.BaseInformationDetailService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const detail_1 = require("../../../entity/information/detail");
let BaseInformationDetailService = class BaseInformationDetailService {
    async BaseCreate({ zhcn = '', enus = '', jajp = '', eses = '', isDelete = false } = {}) {
        return this.informationDetailEntity
            .createQueryBuilder()
            .insert()
            .into(detail_1.InformationDetailEntity)
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
        return this.informationDetailEntity
            .createQueryBuilder()
            .where("isDelete = :isDelete", { isDelete: false })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getMany();
    }
    async BaseUpdate({ id = '', zhcn = '', enus = '', jajp = '', eses = '', } = {}) {
        return this.informationDetailEntity
            .createQueryBuilder()
            .update(detail_1.InformationDetailEntity)
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
        return this.informationDetailEntity
            .createQueryBuilder()
            .update(detail_1.InformationDetailEntity)
            .set({
            isDelete: false
        })
            .where("id = :id", { id: id })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(detail_1.InformationDetailEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationDetailService.prototype, "informationDetailEntity", void 0);
BaseInformationDetailService = __decorate([
    decorator_1.Provide()
], BaseInformationDetailService);
exports.BaseInformationDetailService = BaseInformationDetailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9pbmZvcm1hdGlvbi9kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsK0RBQXdFO0FBR3hFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBS3ZDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDZixJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULFFBQVEsR0FBRyxLQUFLLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHVCQUF1QjthQUNoQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsZ0NBQXVCLENBQUM7YUFDN0IsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRO1NBQ1QsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDakIsV0FBVyxHQUFHLENBQUMsRUFDZixRQUFRLEdBQUcsRUFBRSxFQUNkLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLHVCQUF1QjthQUNoQyxrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUcsS0FBSyxFQUFFLENBQUM7YUFDbkQsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBSUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUNmLEVBQUUsR0FBRyxFQUFFLEVBQ1AsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsR0FDVixHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyx1QkFBdUI7YUFDaEMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLGdDQUF1QixDQUFDO2FBQy9CLEdBQUcsQ0FBQztZQUNILE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QjthQUNoQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsZ0NBQXVCLENBQUM7YUFDL0IsR0FBRyxDQUFDO1lBQ0gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUcsRUFBRSxFQUFFLENBQUM7YUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBRUYsQ0FBQTtBQXBFQztJQURDLHVCQUFpQixDQUFDLGdDQUF1QixDQUFDOzhCQUNsQixvQkFBVTs2RUFBMEI7QUFIbEQsNEJBQTRCO0lBRHhDLG1CQUFPLEVBQUU7R0FDRyw0QkFBNEIsQ0F1RXhDO0FBdkVZLG9FQUE0QiJ9