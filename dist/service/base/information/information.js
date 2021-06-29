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
            .execute();
    }
    async BaseDelete(id) {
        return this.informationEntity
            .createQueryBuilder()
            .update(information_1.InformationEntity)
            .set({
            isDelete: false
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
};
__decorate([
    orm_1.InjectEntityModel(information_1.InformationEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseInformationService.prototype, "informationEntity", void 0);
BaseInformationService = __decorate([
    decorator_1.Provide()
], BaseInformationService);
exports.BaseInformationService = BaseInformationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLHlFQUF1RTtBQUd2RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUtqQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQ2YsSUFBSSxHQUFHLEVBQUUsRUFDVCxJQUFJLEdBQUcsRUFBRSxFQUNULElBQUksR0FBRyxFQUFFLEVBQ1QsSUFBSSxHQUFHLEVBQUUsRUFDVCxLQUFLLEdBQUcsS0FBSyxFQUNiLFFBQVEsR0FBRyxLQUFLLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjthQUMxQixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsK0JBQWlCLENBQUM7YUFDdkIsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLO1lBQ0wsUUFBUTtTQUNULENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsUUFBUSxHQUFHLEVBQUUsRUFDYixJQUFJLEdBQUcsS0FBSyxFQUNaLEtBQUssR0FBRyxLQUFLLEVBQ2QsR0FBRyxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsaUJBQWlCO2FBQzFCLGtCQUFrQixDQUFDLGFBQWEsQ0FBQzthQUNqQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENB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