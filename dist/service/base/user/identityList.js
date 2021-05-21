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
const list_1 = require("../../../entity/user/identity/list");
const typeorm_1 = require("typeorm");
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
        return await this.userIdentityListEntity
            .createQueryBuilder('identityList')
            .where("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS91c2VyL2lkZW50aXR5TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQWtEO0FBQ2xELDZEQUF1RTtBQUN2RSxxQ0FBcUM7QUFFckMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFZakMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU87UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLDZCQUFzQixDQUFDO2FBQzVCLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBVUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLE9BQU87UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDdkMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUsvRCxPQUFPLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hFLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDcEQsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBSUQsS0FBSyxDQUFDLDJCQUEyQjtRQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUN2QyxrQkFBa0IsRUFBRTthQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFNRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsT0FBTztRQUNsQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ25DLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3ZDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyw2QkFBc0IsQ0FBQzthQVM5QixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUM3QixPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFVRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsT0FBTztRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUN2QyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFLL0QsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuRCxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN2QyxPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMseUJBQXlCO1FBQzdCLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3ZDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLE9BQU8sRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUtGLENBQUE7QUE3R0M7SUFEQyx1QkFBaUIsQ0FBQyw2QkFBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7c0VBQXlCO0FBSGhELHNCQUFzQjtJQURsQyxtQkFBTyxFQUFFO0dBQ0csc0JBQXNCLENBZ0hsQztBQWhIWSx3REFBc0IifQ==