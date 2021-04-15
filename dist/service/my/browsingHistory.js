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
exports.MyBrowsingHistoryService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const browsingHistory_1 = require("../base/my/browsingHistory");
const commodityBrowsingCount_1 = require("../base/commodity/commodityBrowsingCount");
let MyBrowsingHistoryService = class MyBrowsingHistoryService {
    async addBrowsingHistory(payload) {
        console.log("set", payload);
        let browsingHistory = await this.hasBrowsingHistory({
            userId: payload.userId,
            commodityId: payload.commodityId
        });
        if (browsingHistory.success) {
            const browsingHistoryCountUpdate = await this.updateBrowsingHistoryCount({
                userId: payload.userId,
                commodityId: payload.commodityId,
                count: browsingHistory.data.count + 1
            });
            console.log("browsingHistoryCountUpdate", browsingHistoryCountUpdate);
            if (!browsingHistoryCountUpdate.success) {
                return browsingHistoryCountUpdate;
            }
        }
        else {
            browsingHistory = await this.createBrowsingHistory({
                count: 1,
            });
            console.log("createBrowsingHistory", browsingHistory);
            if (!browsingHistory.success) {
                return browsingHistory;
            }
            await this.relationUser({
                of: browsingHistory.data.identifiers[0].id,
                set: payload.userId
            });
            await this.relationCommodity({
                of: browsingHistory.data.identifiers[0].id,
                set: payload.commodityId
            });
        }
        const browsingCount = await this.retrieveBrowsingCount(payload.commodityId);
        console.log("browsingCount", browsingCount);
        if (browsingCount.success) {
            const browsingCountUpdate = await this.updateBrowsingCount({
                commodityId: payload.commodityId,
                count: browsingCount.data.count + 1
            });
            console.log("browsingCountUpdate", browsingCountUpdate);
            if (!browsingCountUpdate.success) {
                return browsingCountUpdate;
            }
        }
        else {
            const browsingCountCreate = await this.createBrowsingCount();
            console.log("browsingCountCreate", browsingCountCreate);
            if (!browsingCountCreate.success) {
                return browsingCountCreate;
            }
            await this.relationBrowsingCountCommodity({
                of: browsingCountCreate.data.identifiers[0].id,
                set: payload.commodityId
            });
        }
        return browsingHistory;
    }
    async createBrowsingHistory(payload) {
        const data = await this.baseBrowsingHistoryServer.BaseCreate(payload);
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
    async hasBrowsingHistory(payload) {
        const data = await this.baseBrowsingHistoryServer.BaseHas(payload);
        if (data) {
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
    async updateBrowsingHistoryCount(payload) {
        const data = await this.baseBrowsingHistoryServer.BaseUpdate(payload);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async retrieveBrowsingHistory(payload) {
        let result = await this.baseBrowsingHistoryServer.BaseRetrieve({
            userId: payload.userId,
            currentPage: payload.currentPage,
            pageSize: payload.pageSize
        });
        let data = result[0];
        let total = result[1];
        if (payload.isLocale) {
            data = this.filter(payload.locale, data);
        }
        if (data) {
            return {
                data: {
                    list: data,
                    total
                },
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
    async relationUser(payload) {
        await this.baseBrowsingHistoryServer.BaseRelation({
            name: 'user',
            of: payload.of,
            set: { userId: payload.set }
        });
    }
    async relationCommodity(payload) {
        await this.baseBrowsingHistoryServer.BaseRelation({
            name: 'commodity',
            of: payload.of,
            set: { commodityId: payload.set }
        });
    }
    async createBrowsingCount() {
        const data = await this.baseCommodityBrowsingCountServer.BaseCreate();
        if (data) {
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
    async retrieveBrowsingCount(commodityId) {
        const data = await this.baseCommodityBrowsingCountServer.BaseRetrieve(commodityId);
        console.log("retrieveBrowsingCount", data);
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
    async updateBrowsingCount(payload) {
        const data = await this.baseCommodityBrowsingCountServer.BaseUpdate(payload);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async relationBrowsingCountCommodity(payload) {
        await this.baseCommodityBrowsingCountServer.BaseRelation({
            name: 'commodity',
            of: payload.of,
            set: { commodityId: payload.set }
        });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", browsingHistory_1.BaseBrowsingHistoryServer)
], MyBrowsingHistoryService.prototype, "baseBrowsingHistoryServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodityBrowsingCount_1.BaseCommodityBrowsingCountServer)
], MyBrowsingHistoryService.prototype, "baseCommodityBrowsingCountServer", void 0);
MyBrowsingHistoryService = __decorate([
    decorator_1.Provide()
], MyBrowsingHistoryService);
exports.MyBrowsingHistoryService = MyBrowsingHistoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvbXkvYnJvd3NpbmdIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCxnRUFBdUU7QUFDdkUscUZBQTRGO0FBRzVGLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBU25DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRzNCLElBQUksZUFBZSxHQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxlQUFlLENBQUMsT0FBTyxFQUFDO1lBR3pCLE1BQU0sMEJBQTBCLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUNoQyxLQUFLLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQzthQUNwQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLDBCQUEwQixDQUFDLENBQUE7WUFDckUsSUFBRyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBQztnQkFDckMsT0FBTywwQkFBMEIsQ0FBQzthQUNuQztTQUNGO2FBQUk7WUFFSCxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1lBQ0gs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