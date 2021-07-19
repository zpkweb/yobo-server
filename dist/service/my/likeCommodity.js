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
exports.MyLikeCommodityService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const likeCommodity_1 = require("../base/my/likeCommodity");
const user_1 = require("../user/user");
const commodity_1 = require("../commodity/commodity");
const name_1 = require("../commodity/attribute/name");
const photo_1 = require("../commodity/attribute/photo");
let MyLikeCommodityService = class MyLikeCommodityService {
    async addMyLikeCommodity(payload) {
        const user = await this.userService.hasUser(payload.userId);
        if (!user.success) {
            return user;
        }
        const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
        if (!commodity.success) {
            return commodity;
        }
        const likeCommodity = await this.hasMyLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        if (likeCommodity.success) {
            return {
                success: false,
                code: 10013
            };
        }
        const creatLikeCommodity = await this.createLikeCommodity({
            userName: payload.userName || user.data.name,
            userId: payload.userId,
            'zh-cn': payload['zh-cn'] || commodity.data.name['zh-cn'],
            'en-us': payload['en-us'] || commodity.data.name['en-us'],
            'ja-jp': payload['ja-jp'] || commodity.data.name['ja-jp'],
            'fr-fr': payload['fr-fr'] || commodity.data.name['fr-fr'],
            'es-es': payload['es-es'] || commodity.data.name['es-es'],
            commodityId: payload.commodityId
        });
        if (!creatLikeCommodity.success) {
            return creatLikeCommodity;
        }
        const commodityLikes = await this.commodityCommodityService.likes({
            likes: commodity.data.likes + 1,
            commodityId: payload.commodityId
        });
        if (!commodityLikes.success) {
            return commodityLikes;
        }
        await this.relationUser({
            of: creatLikeCommodity.data.identifiers[0].id,
            set: payload.userId
        });
        await this.relationCommodity({
            of: creatLikeCommodity.data.identifiers[0].id,
            set: payload.commodityId
        });
        return {
            success: true,
            code: 10003
        };
    }
    async myLikeCommodity(payload) {
        let commoditys = await this.baseMyLikeCommodityService.BaseRetrieve(payload.userId);
        if (commoditys && commoditys.length) {
            for (let item of commoditys) {
                const commodityData = await this.commodityCommodityService.retrieveCommodityId(item.commodityId);
                if (commodityData.success) {
                    item = Object.assign(item, commodityData.data);
                    const commodityAttributeName = await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
                    if (commodityAttributeName) {
                        item.name = commodityAttributeName.data[payload.locale];
                    }
                    const commodityAttributePhoto = await this.commodityAttributePhoto.retrieveCommodityId(item.commodityId);
                    if (commodityAttributePhoto) {
                        item.photos = commodityAttributePhoto.data.map(item => item.src);
                    }
                }
            }
        }
        if (commoditys) {
            return {
                data: commoditys,
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
    async commodityLikes(commodityId) {
    }
    filter(type, payload) {
        return payload.map(item => {
            let name = item.name ? item.name[type] : '';
            let desc = item.desc ? item.desc[type] : '';
            let price = item.price;
            let shapes = item.shapes ? item.shapes.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let themes = item.themes ? item.themes.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let categorys = item.categorys ? item.categorys.map(item => { return { id: item.id, name: item[type] }; }) : '';
            let techniques = item.techniques ? item.techniques.map(item => { return { id: item.id, name: item[type] }; }) : '';
            return Object.assign(item, {
                name,
                desc,
                price,
                shapes,
                themes,
                categorys,
                techniques,
            });
        });
    }
    async hasMyLikeCommodity(payload) {
        const likeCommodity = await this.baseMyLikeCommodityService.BaseHas({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        if (likeCommodity) {
            return {
                data: likeCommodity,
                success: true,
                code: 10013
            };
        }
        else {
            return {
                success: false,
                code: 10014
            };
        }
    }
    async createLikeCommodity(payload) {
        const data = await this.baseMyLikeCommodityService.BaseCreate(payload);
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
        await this.baseMyLikeCommodityService.BaseRelation({
            name: 'user',
            of: payload.of,
            set: { userId: payload.set }
        });
    }
    async relationCommodity(payload) {
        await this.baseMyLikeCommodityService.BaseRelation({
            name: 'commodity',
            of: payload.of,
            set: { commodityId: payload.set }
        });
    }
    async delMyLikeCommodity(payload) {
        const user = await this.userService.hasUser(payload.userId);
        if (!user.success) {
            return user;
        }
        const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
        if (!commodity.success) {
            return commodity;
        }
        const likeCommodity = await this.hasMyLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        if (!likeCommodity.success) {
            return likeCommodity;
        }
        const delLikeCommodity = await this.delLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        if (!delLikeCommodity.success) {
            return delLikeCommodity;
        }
        const likes = commodity.data.likes - 1;
        const commodityLikes = await this.commodityCommodityService.likes({
            likes: likes > 0 ? likes : 0,
            commodityId: payload.commodityId
        });
        if (!commodityLikes.success) {
            return commodityLikes;
        }
        return {
            success: true,
            code: 10001
        };
    }
    async delLikeCommodity(payload) {
        const data = await this.baseMyLikeCommodityService.BaseDelete(payload);
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
    async delLikeCommodityAll(userId) {
        const data = await this.baseMyLikeCommodityService.BaseDeleteAll(userId);
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
    __metadata("design:type", likeCommodity_1.BaseMyLikeCommodityService)
], MyLikeCommodityService.prototype, "baseMyLikeCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], MyLikeCommodityService.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.CommodityCommodityService)
], MyLikeCommodityService.prototype, "commodityCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.CommodityAttributeName)
], MyLikeCommodityService.prototype, "commodityAttributeName", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", photo_1.CommodityAttributePhoto)
], MyLikeCommodityService.prototype, "commodityAttributePhoto", void 0);
MyLikeCommodityService = __decorate([
    decorator_1.Provide()
], MyLikeCommodityService);
exports.MyLikeCommodityService = MyLikeCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZUNvbW1vZGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL215L2xpa2VDb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDREQUFzRTtBQUN0RSx1Q0FBMkM7QUFFM0Msc0RBQTRFO0FBQzVFLHNEQUE4RTtBQUM5RSx3REFBZ0Y7QUFHaEYsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFrQmpDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1FBRTlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFHRCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3RCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBSUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztTQUNqQyxDQUFDLENBQUE7UUFFRixJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDekIsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtRQVFELE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDeEQsUUFB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