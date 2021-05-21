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
exports.BaseSellerStudioServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const studio_1 = require("../../../entity/user/seller/studio");
let BaseSellerStudioServer = class BaseSellerStudioServer {
    async baseCreate(payload) {
        return await this.userSellerStudioEntity
            .createQueryBuilder()
            .insert()
            .into(studio_1.UserSellerStudioEntity)
            .values({
            sellerId: payload.sellerId,
            name: payload.name,
            photo: payload.photo,
            video: payload.video,
            ccId: payload.ccId,
            siteId: payload.siteId,
            videoPhoto: payload.videoPhoto,
            banner: payload.banner,
            introduce: payload.introduce,
        })
            .execute();
    }
    async baseRetrieve(sellerId) {
        return await this.userSellerStudioEntity
            .createQueryBuilder()
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async baseUpdate(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerStudioEntity
            .createQueryBuilder()
            .update(studio_1.UserSellerStudioEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async relation(payload) {
        return await this.userSellerStudioEntity
            .createQueryBuilder()
            .relation(studio_1.UserSellerStudioEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(studio_1.UserSellerStudioEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerStudioServer.prototype, "userSellerStudioEntity", void 0);
BaseSellerStudioServer = __decorate([
    decorator_1.Provide()
], BaseSellerStudioServer);
exports.BaseSellerStudioServer = BaseSellerStudioServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGlvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9zZWxsZXIvc3R1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLCtEQUF1RTtBQUl2RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQVNoQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLCtCQUFzQixDQUFDO2FBQzVCLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQzdCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFTQSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVE7UUFDMUIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3JELE1BQU0sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQVNELEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3JDLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQywrQkFBc0IsQ0FBQzthQUM5QixHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3JELE9BQU8sRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUdELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUNwQixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsRUFBRTthQUNwQixRQUFRLENBQUMsK0JBQXNCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM5QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGLENBQUE7QUFqRUM7SUFEQyx1QkFBaUIsQ0FBQywrQkFBc0IsQ0FBQzs4QkFDbEIsb0JBQVU7c0VBQXdCO0FBSC9DLHNCQUFzQjtJQURsQyxtQkFBTyxFQUFFO0dBQ0csc0JBQXNCLENBb0VsQztBQXBFWSx3REFBc0IifQ==