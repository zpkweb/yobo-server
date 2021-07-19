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
exports.BaseInformationService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const information_1 = require("../../../entity/information/information");
const videoDetail_1 = require("../../../entity/information/videoDetail");
let BaseInformationService = class BaseInformationService {
    async BaseCreate({ zhcn = '', enus = '', jajp = '', eses = '', isTop = false, isDelete = false } = {}) {
        return this.informationEntity
            .createQueryBuilder()
            .insert()
            .into(information_1.InformationEntity)
            .values({
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
            isTop,
            isDelete
        })
            .execute();
    }
    async BaseRetrieve({ currentPage = 1, pageSize = 10, news = false, isTop = false } = {}) {
        return this.informationEntity
            .createQueryBuilder('information')
            .leftJoinAndSelect("information.detail", "detail")
            .leftJoinAndSelect("information.videos", "videos")
            .where("information.isDelete = :isDelete", { isDelete: false })
            .addSelect("information.isTop")
            .addSelect("information.createdDate")
            .orderBy({
            "information.id": news ? "DESC" : "ASC",
            "information.isTop": isTop ? "DESC" : "ASC"
        })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseRetrieveName({ zhcn = '', enus = '', jajp = '', eses = '', } = {}) {
        const where = {};
        if (zhcn) {
            where['zh-cn'] = zhcn;
        }
        if (enus) {
            where['en-us'] = enus;
        }
        if (jajp) {
            where['ja-jp'] = jajp;
        }
        if (eses) {
            where['es-es'] = eses;
        }
        return this.informationEntity
            .createQueryBuilder()
            .where(where)
            .getOne();
    }
    async BaseRetrieveInformationId(informationId) {
        return this.informationEntity
            .createQueryBuilder('information')
            .leftJoinAndSelect("information.detail", "detail")
            .leftJoinAndSelect("information.videos", "videos")
            .leftJoinAndMapOne('videos.detail', videoDetail_1.InformationVideoDetailEntity, "InformationVideoDetail", "InformationVideoDetail.informationVideoId = videos.id")
            .where("information.informationId = :informationId", { informationId: informationId })
            .andWhere("information.isDelete = :isDelete", { isDelete: false })
            .addSelect("information.isTop")
            .addSelect("information.createdDate")
            .getOne();
    }
    async BaseSearchInformation({ name = '', currentPage = 1, pageSize = 10, news = false, isTop = false } = {}) {
        const where = {
            isDelete: false,
        };
        if (name) {
            where['zh-cn'] = typeorm_1.Like(`%${name}%`);
        }
        return this.informationEntity
            .createQueryBuilder('information')
            .leftJoinAndSelect("information.detail", "detail")
            .leftJoinAndSelect("information.videos", "videos")
            .where(where)
            .addSelect("information.isTop")
            .addSelect("information.createdDate")
            .orderBy({
            "information.id": news ? "DESC" : "ASC",
            "information.isTop": isTop ? "DESC" : "ASC"
        })
            .skip((currentPage - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
    async BaseUpdate({ id = '', zhcn = '', enus = '', jajp = '', eses = '', isTop = false } = {}) {
        return this.informationEntity
            .createQueryBuilder()
            .update(information_1.InformationEntity)
            .set({
            'zh-cn': zhcn,
            'en-us': enus,
            'ja-jp': jajp,
            'es-es': eses,
            isTop
        })
            .where("id = :id", { id: id })
            .andWhere("isDelete = :isDelete", { isDelete: false })
            .execute();
    }
    async BaseDelete(id) {
        return this.informationEntity
            .createQueryBuilder()
            .update(information_1.InformationEntity)
            .set({
            isDelete: true
        })
            .where("id = :id", { id: id })
            .execute();
    }
    async BaseRelationSet(payload) {
        return await this.informationEntity
            .createQueryBuilder()
            .relation(information_1.InformationEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
    async BaseRelationAdd(payload) {
        return await this.informationEntity
            .createQueryBuilder()
            .relation(information_1.InformationEntity, payload.name)
            .of(payload.of)
            .add(payload.add);
    }
    async BaseRelationRemove(payload) {
        return await this.informationEntity
            .createQueryBuilder()
            .relation(information_1.InformationEntity, payload.name)
            .of(payload.of)
            .remove(payload.remove);
    }
};
__decorate([
    orm_1.InjectEntityModel(information_1.InformationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationService.prototype, "informationEntity", void 0);
BaseInformationService = __decorate([
    decorator_1.Provide()
], BaseInformationService);
exports.BaseInformationService = BaseInformationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQTJDO0FBQzNDLHlFQUF1RTtBQUN2RSx5RUFBa0Y7QUFFbEYsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFLakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUNmLElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsS0FBSyxHQUFHLEtBQUssRUFDYixRQUFRLEdBQUcsS0FBSyxFQUNqQixHQUFHLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxpQkFBaUI7YUFDMUIsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLCtCQUFpQixDQUFDO2FBQ3ZCLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSztZQUNMLFFBQVE7U0FDVCxDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUNqQixXQUFXLEdBQUcsQ0FBQyxFQUNmLFFBQVEsR0FBRyxFQUFFLEVBQ2IsSUFBSSxHQUFHLEtBQUssRUFDWixLQUFLLEdBQUcsS0FBSyxFQUNkLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjthQUMxQixrQkFBa0IsQ0FBQyxhQUFhLENBQUM7YUFDakMsaUJBQWlCLENBQUMsb0JBQW9C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