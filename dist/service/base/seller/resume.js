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
exports.BaseSellerResumeServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const resume_1 = require("../../../entity/user/seller/resume");
let BaseSellerResumeServer = class BaseSellerResumeServer {
    async baseCreate(payload) {
        return await this.userSellerResumeEntity
            .createQueryBuilder()
            .insert()
            .into(resume_1.UserSellerResumeEntity)
            .values({
            resume: payload.resume,
        })
            .execute();
    }
    async baseRetrieve(sellerId) {
        return await this.userSellerResumeEntity
            .createQueryBuilder()
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .getOne();
    }
    async baseUpdate(payload) {
        const { sellerId, ...setData } = payload;
        return await this.userSellerResumeEntity
            .createQueryBuilder()
            .update(resume_1.UserSellerResumeEntity)
            .set(setData)
            .where("sellerId = :sellerId", { sellerId: sellerId })
            .execute();
    }
    async baseUpdateResume(payload) {
        return await this.userSellerResumeEntity
            .createQueryBuilder()
            .update(resume_1.UserSellerResumeEntity)
            .set({ ...payload })
            .execute();
    }
    async relation(payload) {
        return await this.userSellerResumeEntity
            .createQueryBuilder()
            .relation(resume_1.UserSellerResumeEntity, payload.name)
            .of(payload.of)
            .set(payload.set);
    }
};
__decorate([
    orm_1.InjectEntityModel(resume_1.UserSellerResumeEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseSellerResumeServer.prototype, "userSellerResumeEntity", void 0);
BaseSellerResumeServer = __decorate([
    decorator_1.Provide()
], BaseSellerResumeServer);
exports.BaseSellerResumeServer = BaseSellerResumeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmFzZS9zZWxsZXIvcmVzdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLCtEQUF1RTtBQUl2RSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQVNoQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLCtCQUFzQixDQUFDO2FBQzVCLE1BQU0sQ0FBQztZQUNOLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBU0EsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRO1FBQzFCLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCO2FBQ3JDLGtCQUFrQixFQUFFO2FBQ3BCLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNyRCxNQUFNLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFTRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN6QyxPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsK0JBQXNCLENBQUM7YUFDOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNyRCxPQUFPLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTztRQUM1QixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsK0JBQXNCLENBQUM7YUFDOUIsR0FBRyxDQUFDLEVBQUMsR0FBRyxPQUFPLEVBQUMsQ0FBQzthQUNqQixPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDcEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsa0JBQWtCLEVBQUU7YUFDcEIsUUFBUSxDQUFDLCtCQUFzQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDOUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FFRixDQUFBO0FBakVDO0lBREMsdUJBQWlCLENBQUMsK0JBQXNCLENBQUM7OEJBQ2xCLG9CQUFVO3NFQUF3QjtBQUgvQyxzQkFBc0I7SUFEbEMsbUJBQU8sRUFBRTtHQUNHLHNCQUFzQixDQW9FbEM7QUFwRVksd0RBQXNCIn0=