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
exports.MyLikeSellerService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const likeSeller_1 = require("../base/my/likeSeller");
const user_1 = require("../user/user");
const seller_1 = require("../user/seller");
let MyLikeSellerService = class MyLikeSellerService {
    async addMyLikeSeller(payload) {
        console.log("addMyLikeSeller", payload);
        const user = await this.userService.hasUser(payload.userId);
        console.log('user', user);
        if (!user.success) {
            return user;
        }
        const seller = await this.sellerService.hasSeller(payload.sellerId);
        console.log('seller', seller);
        if (!seller.success) {
            return seller;
        }
        const likeSeller = await this.hasMyLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
        console.log('likeSeller', likeSeller);
        if (likeSeller.success) {
            return {
                success: false,
                code: 10602
            };
        }
        const creatLikeSeller = await this.createLikeSeller({
            userName: payload.name || user.data.name,
            userId: payload.userId,
            sellerName: payload.sellerName || seller.data.firstname + seller.data.lastname,
            sellerId: payload.sellerId
        });
        console.log('creatLikeSeller', creatLikeSeller);
        if (!creatLikeSeller.success) {
            return creatLikeSeller;
        }
        await this.relationUser({
            of: creatLikeSeller.data.identifiers[0].id,
            set: payload.userId
        });
        await this.relationSeller({
            of: creatLikeSeller.data.identifiers[0].id,
            set: payload.sellerId
        });
        return await this.myLikeSeller(payload.userId);
    }
    async myLikeSeller(userId) {
        const data = await this.baseMyLikeSellerServer.BaseRetrieve(userId);
        console.log("likeSeller", data);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async hasMyLikeSeller(payload) {
        console.log("hasMyLikeSeller", payload);
        const hasLikeSeller = await this.baseMyLikeSellerServer.BaseHas({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
        console.log("hasLikeSeller", hasLikeSeller);
        if (hasLikeSeller) {
            return {
                data: hasLikeSeller,
                success: true,
                code: 10601
            };
        }
        else {
            return {
                success: false,
                code: 10602
            };
        }
    }
    async createLikeSeller(payload) {
        const data = await this.baseMyLikeSellerServer.BaseCreate(payload);
        if (data.identifiers[0].id) {
            return {
                data: data,
                success: true,
                code: 10003
            };
        }
        else {
            return {
                success: false,
                code: 10004
            };
        }
    }
    async relationUser(payload) {
        await this.baseMyLikeSellerServer.BaseRelation({
            name: 'user',
            of: payload.of,
            set: { userId: payload.set }
        });
    }
    async relationSeller(payload) {
        await this.baseMyLikeSellerServer.BaseRelation({
            name: 'seller',
            of: payload.of,
            set: { sellerId: payload.set }
        });
    }
    async delMyLikeSeller(payload) {
        const likeSeller = await this.hasMyLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
        console.log('likeSeller', likeSeller);
        if (!likeSeller.success) {
            return likeSeller;
        }
        return await this.delLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
    }
    async delLikeSeller(payload) {
        const data = await this.baseMyLikeSellerServer.BaseDelete(payload);
        if (data.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async delLikeSellerAll(userId) {
        const data = await this.baseMyLikeSellerServer.BaseDeleteAll(userId);
        if (data.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likeSeller_1.BaseMyLikeSellerServer)
], MyLikeSellerService.prototype, "baseMyLikeSellerServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], MyLikeSellerService.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], MyLikeSellerService.prototype, "sellerService", void 0);
MyLikeSellerService = __decorate([
    decorator_1.Provide()
], MyLikeSellerService);
exports.MyLikeSellerService = MyLikeSellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL215L2xpa2VTZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHNEQUErRDtBQUMvRCx1Q0FBMkM7QUFDM0MsMkNBQStDO0FBRS9DLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBVzlCLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRXZDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFHRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBR0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDckMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBRXRCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7UUFHRCxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRCxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDeEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM5RSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQTtRQUMvQyxJQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUMzQixPQUFPLGVBQWUsQ0FBQztTQUN4QjtRQUdELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QixFQUFFLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFBO1FBR0YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3hCLEVBQUUsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFDLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUN0QixDQUFDLENBQUE7UUFHRixPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQU9ELEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUN2QixNQUFNLElBQUksR0FBRSxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDL0IsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU1ELEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sYUFBYSxHQUFJLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztZQUMvRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ3pDLElBQUcsYUFBYSxFQUFDO1lBQ2YsT0FBTztnQkFDTCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDTCxDQUFDO0lBTUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU87UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFPQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDO1lBQzdDLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ2QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlILEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztRQUMxQixNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7WUFDN0MsSUFBSSxFQUFFLFFBQVE7WUFDZCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDZCxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtTQUMvQixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBRTNCLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzNCLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDOUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDLENBQUE7SUFFSixDQUFDO0lBSUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFJQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDRCxDQUFDO0NBR0osQ0FBQTtBQXBOQztJQURDLGtCQUFNLEVBQUU7OEJBQ2UsbUNBQXNCO21FQUFDO0FBRy9DO0lBREMsa0JBQU0sRUFBRTs4QkFDSSxrQkFBVzt3REFBQztBQUd6QjtJQURDLGtCQUFNLEVBQUU7OEJBQ00sc0JBQWE7MERBQUM7QUFUbEIsbUJBQW1CO0lBRC9CLG1CQUFPLEVBQUU7R0FDRyxtQkFBbUIsQ0F1Ti9CO0FBdk5ZLGtEQUFtQiJ9