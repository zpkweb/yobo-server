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
exports.BaseIdentityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const identity_1 = require("../../../entity/user/identity/identity");
let BaseIdentityService = class BaseIdentityService {
    async baseCreateUserIdentity(index) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .insert()
            .into(identity_1.UserIdentityEntity)
            .values({
            identityIndex: index
        })
            .execute();
    }
    async baseRetrieveUserIdentity(userId) {
        return await this.userIdentityEntity
            .createQueryBuilder('userIdentity')
            .where('userIdentity.userId = :userId', { userId: userId })
            .getMany();
    }
    async baseRetrieveIdentityUserId(userId) {
        return await this.userIdentityEntity
            .createQueryBuilder('identity')
            .where('identity.userId = :userId', { userId: userId })
            .getMany();
    }
    async baseRetrieveUserIdentityList(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder('userIdentity')
            .where('userIdentity.userId = :userId', { userId: payload.userId })
            .andWhere("userIdentity.identityIndex = :identityIndex", { identityIndex: payload.identityIndex })
            .getOne();
    }
    async baseDeleteUserIdentity(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .delete()
            .where("userId = :userId", { userId: payload.userId })
            .execute();
    }
    async baseDeleteIdentityId(payload) {
        return await this.userIdentityEntity
            .createQueryBuilder()
            .delete()
            .where('userId = :userId', { userId: payload.userId })
            .andWhere("identityIndex = :identityIndex", { identityIndex: payload.identityIndex })
            .execute();
    }
    async BaseRelationSet(payload) {
        await this.userIdentityEntity
            .createQueryBuilder()
            .relation(identity_1.UserIdentityEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(identity_1.UserIdentityEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseIdentityService.prototype, "userIdentityEntity", void 0);
BaseIdentityService = __decorate([
    decorator_1.Provide()
], BaseIdentityService);
exports.BaseIdentityService = BaseIdentityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9iYXNlL3VzZXIvaWRlbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHVDQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMscUVBQXVFO0FBSXZFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBVzdCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLO1FBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sRUFBRTthQUNSLElBQUksQ0FBQyw2QkFBa0IsQ0FBQzthQUN4QixNQUFNLENBQUM7WUFDTixhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUE7SUFDZCxDQUFDO0lBS0EsS0FBSyxDQUFDLHdCQUF3QixDQUFDLE1BQU07UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDbkMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2FBQ2xDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUUxRCxPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsMEJBQTBCLENBQUMsTUFBTTtRQUNyQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNqQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFFOUIsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ3RELE9BQU8sRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPO1FBQ3hDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCO2FBQ25DLGtCQUFrQixDQUFDLGNBQWMsQ0FBQzthQUNsQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xFLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDakcsTUFBTSxFQUFFLENBQUM7SUFDWixDQUFDO0lBTUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU87UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0I7YUFDbkMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQU1yRCxPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsT0FBTztRQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUNuQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixLQUFLLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JELFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDcEYsT0FBTyxFQUFFLENBQUM7SUFDYixDQUFDO0lBSUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQjthQUMxQixrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsNkJBQWtCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUdKLENBQUE7QUFuRkM7SUFEQyx1QkFBaUIsQ0FBQyw2QkFBa0IsQ0FBQzs4QkFDbEIsb0JBQVU7K0RBQXFCO0FBSnhDLG1CQUFtQjtJQUQvQixtQkFBTyxFQUFFO0dBQ0csbUJBQW1CLENBdUYvQjtBQXZGWSxrREFBbUIifQ==