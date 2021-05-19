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
        const myBrowsingHistory = await this.addMyBrowsingHistory(payload);
        if (!myBrowsingHistory.success) {
            return myBrowsingHistory;
        }
        const commodityBrowsingHistory = await this.addCommodityBrowsingHistory(payload);
        if (!commodityBrowsingHistory.success) {
            return commodityBrowsingHistory;
        }
        return {
            success: true,
            code: 10003
        };
    }
    async addMyBrowsingHistory(payload) {
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
            if (!browsingHistoryCountUpdate.success) {
                return browsingHistoryCountUpdate;
            }
        }
        else {
            browsingHistory = await this.createBrowsingHistory({
                count: 1,
                userId: payload.userId,
                commodityId: payload.commodityId,
            });
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
        return {
            success: true,
            code: 10003
        };
    }
    async addCommodityBrowsingHistory(payload) {
        const browsingCount = await this.retrieveBrowsingCount(payload.commodityId);
        if (browsingCount.success) {
            const browsingCountUpdate = await this.updateBrowsingCount({
                commodityId: payload.commodityId,
                count: browsingCount.data.count + 1
            });
            if (!browsingCountUpdate.success) {
                return browsingCountUpdate;
            }
        }
        else {
            const browsingCountCreate = await this.createBrowsingCount({
                commodityId: payload.commodityId,
            });
            if (!browsingCountCreate.success) {
                return browsingCountCreate;
            }
            await this.relationBrowsingCountCommodity({
                of: browsingCountCreate.data.identifiers[0].id,
                set: payload.commodityId
            });
        }
        return {
            success: true,
            code: 10003
        };
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
            pageSize: payload.pageSize,
        });
        if (result) {
            let data = result[0];
            let total = result[1];
            if (data) {
                if (payload.isLocale) {
                    data = this.filter(payload.locale, data);
                }
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
    async createBrowsingCount(commodityId) {
        const data = await this.baseCommodityBrowsingCountServer.BaseCreate(commodityId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvbXkvYnJvd3NpbmdIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCxnRUFBdUU7QUFDdkUscUZBQTRGO0FBRzVGLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBU25DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1FBRTlCLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUM3QixPQUFPLGlCQUFpQixDQUFDO1NBQzFCO1FBRUQsTUFBTSx3QkFBd0IsR0FBRyxNQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRixJQUFHLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sd0JBQXdCLENBQUM7U0FDakM7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUE7SUFLSCxDQUFDO0lBR0QsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU87UUFFaEMsSUFBSSxlQUFlLEdBQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDdEQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztTQUNqQyxDQUFDLENBQUM7UUFDSCxJQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUM7WUFHekIsTUFBTSwwQkFBMEIsR0FBRyxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dC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