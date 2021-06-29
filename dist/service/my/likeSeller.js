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
const commodity_1 = require("../commodity/commodity");
let MyLikeSellerService = class MyLikeSellerService {
    async addMyLikeSeller(payload) {
        const user = await this.userService.hasUser(payload.userId);
        if (!user.success) {
            return user;
        }
        const seller = await this.sellerService.hasSeller(payload.sellerId);
        if (!seller.success) {
            return seller;
        }
        const likeSeller = await this.hasMyLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
        if (likeSeller.success) {
            return {
                success: true,
                code: 10601
            };
        }
        const creatLikeSeller = await this.createLikeSeller({
            banner: payload.banner || '',
            choice: payload.choice || false,
            userName: payload.name || user.data.name,
            userId: payload.userId,
            sellerName: payload.sellerName || seller.data.firstname + seller.data.lastname,
            sellerId: payload.sellerId
        });
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
        const data = await this.baseMyLikeSellerService.BaseRetrieve(userId);
        if (data) {
            for (let item of data) {
                if (item.sellerId) {
                    const userData = await this.sellerService.retrieveSeller(item.sellerId);
                    if (userData.success) {
                        item.seller = userData.data;
                    }
                    const commodityCount = await this.commodityCommodityService.retrieveSellerCount(item.sellerId);
                    if (commodityCount.success) {
                        item.commodityCount = commodityCount.data;
                    }
                }
            }
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
        const hasLikeSeller = await this.baseMyLikeSellerService.BaseHas({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
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
    async retrieveFollow(sellerId) {
        const followTotal = await this.baseMyLikeSellerService.BaseRetrieveFollow(sellerId);
        if (followTotal) {
            return {
                data: followTotal,
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
    async createLikeSeller(payload) {
        const data = await this.baseMyLikeSellerService.BaseCreate(payload);
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
        await this.baseMyLikeSellerService.BaseRelation({
            name: 'user',
            of: payload.of,
            set: { userId: payload.set }
        });
    }
    async relationSeller(payload) {
        await this.baseMyLikeSellerService.BaseRelation({
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
        if (!likeSeller.success) {
            return {
                success: true,
                code: 10602
            };
        }
        return await this.delLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
    }
    async delLikeSeller(payload) {
        const data = await this.baseMyLikeSellerService.BaseDelete(payload);
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
        const data = await this.baseMyLikeSellerService.BaseDeleteAll(userId);
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
    __metadata("design:type", likeSeller_1.BaseMyLikeSellerService)
], MyLikeSellerService.prototype, "baseMyLikeSellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], MyLikeSellerService.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.SellerService)
], MyLikeSellerService.prototype, "sellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.CommodityCommodityService)
], MyLikeSellerService.prototype, "commodityCommodityService", void 0);
MyLikeSellerService = __decorate([
    decorator_1.Provide()
], MyLikeSellerService);
exports.MyLikeSellerService = MyLikeSellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL215L2xpa2VTZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHNEQUFnRTtBQUNoRSx1Q0FBMkM7QUFDM0MsMkNBQStDO0FBQy9DLHNEQUE0RTtBQUc1RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWM5QixLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFHM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFHRCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDNUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDLENBQUE7UUFFRixJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFFdEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtRQUdELE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDNUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSztZQUMvQixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDeEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM5RSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsT0FBTyxlQUFlLENBQUM7U0FDeEI7UUFHRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdEIsRUFBRSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3BCLENBQUMsQ0FBQTtRQUdGLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUN4QixFQUFFLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDdEIsQ0FBQyxDQUFBO1FBR0YsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFPRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDdkIsTUFBTSxJQUFJLEdBQU8sTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDaEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ3ZFLElBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO3FCQUM3QjtvQkFDRCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9GLElBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUMzQztpQkFDRjthQUVGO1lBQ0QsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFNRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFDM0IsTUFBTSxhQUFhLEdBQUksTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1lBQ2hFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO1FBQ0EsSUFBRyxhQUFhLEVBQUM7WUFDZixPQUFPO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVE7UUFDM0IsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEYsSUFBRyxXQUFXLEVBQUM7WUFDYixPQUFPO2dCQUNMLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNMLENBQUM7SUFNRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTztRQUM1QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU9DLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7WUFDOUMsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDZCxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtTQUM3QixDQUFDLENBQUE7SUFDSixDQUFDO0lBSUgsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQzFCLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQztZQUM5QyxJQUFJLEVBQUUsUUFBUTtZQUNkLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNkLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO1NBQy9CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFFM0IsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtRQUVELE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzlCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTztRQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBSUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU07UUFDM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0QsQ0FBQztDQUdKLENBQUE7QUFuUEM7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQixvQ0FBdUI7b0VBQUM7QUFHakQ7SUFEQyxrQkFBTSxFQUFFOzhCQUNJLGtCQUFXO3dEQUFDO0FBR3pCO0lBREMsa0JBQU0sRUFBRTs4QkFDTSxzQkFBYTswREFBQztBQUc3QjtJQURDLGtCQUFNLEVBQUU7OEJBQ2tCLHFDQUF5QjtzRUFBQztBQVoxQyxtQkFBbUI7SUFEL0IsbUJBQU8sRUFBRTtHQUNHLG1CQUFtQixDQXNQL0I7QUF0UFksa0RBQW1CIn0=