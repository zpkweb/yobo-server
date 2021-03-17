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
let MyLikeCommodityService = class MyLikeCommodityService {
    async addMyLikeCommodity(payload) {
        console.log("addMyLikeCommodity", payload);
        const user = await this.userService.hasUser(payload.userId);
        console.log('user', user);
        if (!user.success) {
            return user;
        }
        const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
        console.log('commodity', commodity);
        if (!commodity.success) {
            return commodity;
        }
        const likeCommodity = await this.hasMyLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        console.log('likeCommodity', likeCommodity);
        if (likeCommodity.success) {
            return {
                success: false,
                code: 10010
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
        console.log('creatLikeCommodity', creatLikeCommodity);
        if (!creatLikeCommodity.success) {
            return creatLikeCommodity;
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
        let data = await this.baseMyLikeCommodityServer.BaseRetrieve(payload.userId);
        if (payload.isLocale) {
            data = this.filter(payload.locale, data);
        }
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
        console.log("hasMyLikeCommodity", payload);
        const likeCommodity = await this.baseMyLikeCommodityServer.BaseHas({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        console.log("likeCommodity", likeCommodity);
        if (likeCommodity) {
            return {
                data: likeCommodity,
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
    async createLikeCommodity(payload) {
        const data = await this.baseMyLikeCommodityServer.BaseCreate(payload);
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
        await this.baseMyLikeCommodityServer.BaseRelation({
            name: 'user',
            of: payload.of,
            set: { userId: payload.set }
        });
    }
    async relationCommodity(payload) {
        await this.baseMyLikeCommodityServer.BaseRelation({
            name: 'commodity',
            of: payload.of,
            set: { commodityId: payload.set }
        });
    }
    async delMyLikeCommodity(payload) {
        const likeCommodity = await this.hasMyLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        console.log('likeCommodity', likeCommodity);
        if (!likeCommodity.success) {
            return likeCommodity;
        }
        return await this.delLikeCommodity({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
    }
    async delLikeCommodity(payload) {
        const data = await this.baseMyLikeCommodityServer.BaseDelete(payload);
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
        const data = await this.baseMyLikeCommodityServer.BaseDeleteAll(userId);
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
    __metadata("design:type", likeCommodity_1.BaseMyLikeCommodityServer)
], MyLikeCommodityService.prototype, "baseMyLikeCommodityServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], MyLikeCommodityService.prototype, "userService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.CommodityCommodityService)
], MyLikeCommodityService.prototype, "commodityCommodityService", void 0);
MyLikeCommodityService = __decorate([
    decorator_1.Provide()
], MyLikeCommodityService);
exports.MyLikeCommodityService = MyLikeCommodityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZUNvbW1vZGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL215L2xpa2VDb21tb2RpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDREQUFxRTtBQUNyRSx1Q0FBMkM7QUFDM0Msc0RBQW1FO0FBRW5FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBV2pDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFHRCxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFB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LElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRSxPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFF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