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
        const sellerLikes = await this.sellerService.likes({
            likes: seller.data.likes + 1,
            sellerId: payload.sellerId
        });
        if (!sellerLikes.success) {
            return sellerLikes;
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
    async delMyLikeSeller(payload) {
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
        if (!likeSeller.success) {
            return {
                success: true,
                code: 10602
            };
        }
        const delLikeSeller = await this.delLikeSeller({
            userId: payload.userId,
            sellerId: payload.sellerId
        });
        if (!delLikeSeller.success) {
            return delLikeSeller;
        }
        const likes = seller.data.likes - 1;
        const sellerLikes = await this.sellerService.likes({
            likes: (likes > 0) ? likes : 0,
            sellerId: payload.sellerId
        });
        if (!sellerLikes.success) {
            return sellerLikes;
        }
        return {
            success: true,
            code: 10001
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZVNlbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL215L2xpa2VTZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHNEQUFnRTtBQUNoRSx1Q0FBMkM7QUFDM0MsMkNBQStDO0FBQy9DLHNEQUE0RTtBQUc1RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWU5QixLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU87UUFHM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFHRCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDNUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtTQUMzQixDQUFDLENBQUE7UUFFRixJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFFdEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtRQU9ELE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVB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