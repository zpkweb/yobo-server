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
exports.BaseIdentityListServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const list_1 = require("../../../../entity/user/identity/list");
let BaseIdentityListServer = class BaseIdentityListServer {
    async baseCreateIdentityList(payload) {
        return await this.userIdentityListEntity
            .createQueryBuilder()
            .insert()
            .into(list_1.UserIdentityListEntity)
            .values({
            'zh-cn': payload['zh-cn'] || '',
            'en-us': payload['en-us'] || '',
            'ja-jp': payload['ja-jp'] || '',
            'fr-fr': payload['fr-fr'] || '',
            'es-es': payload['es-es'] || '',
            menu: payload.menu,
            index: payload.index
        })
            .execute();
    }
    async baseRetrieveIdentityList(payload) {
        console.log("baseRetrieveIdentityList", payload);
        return await this.userIdentityListEntity
            .createQueryBuilder('identityList')
            .where("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
            .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
            .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
            .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
            .orWhere("identityList.es-es = :eses", { eses: payload['es-es'] })
            .orWhere("identityList.index = :index", { index: payload.index })
            .orWhere("identityList.id = :id", { id: payload.id })
            .getOne();
    }
    async baseRetrieveIdentityListAll() {
        return await this.userIdentityListEntity
            .createQueryBuilder()
            .getMany();
    }
    async baseUpdateIdentityList(payload) {
        const { id, ...setData } = payload;
        return await this.userIdentityListEntity
            .createQueryBuilder()
            .update(list_1.UserIdentityListEntity)
            .set(setData)
            .where("id = :id", { id: id })
            .execute();
    }
    async baseDeleteIdentityList(payload) {
        return await this.userIdentityListEntity
            .createQueryBuilder()
            .delete()
            .where("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
            .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
            .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
            .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
            .orWhere("identityList.es-es = :eses", { eses: payload['es-es'] })
            .orWhere("index = :index", { index: payload.index })
            .orWhere("id = :id", { id: payload.id })
            .execute();
    }
    async baseDeleteIdentityListAll() {
        return await this.userIdentityListEntity
            .createQueryBuilder()
            .delete()
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(list_1.UserIdentityListEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseIdentityListServer.prototype, "userIdentityListEntity", void 0);
BaseIdentityListServer = __decorate([
    decorator_1.Provide()
], BaseIdentityListServer);
exports.BaseIdentityListServer = BaseIdentityListServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvdXNlci9pZGVudGl0eS9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGdFQUF1RTtBQUV2RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQVlqQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsT0FBTztRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsNkJBQXNCLENBQUM7YUFDNUIsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3JCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFVRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3ZDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQzthQUNsQyxLQUFL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