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
const commodity_1 = require("../base/commodity/commodity");
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
            if (data && data.length) {
                for (let item of data) {
                    let commodity = await this.baseCommodityServer.BaseRetrieveCommodityPhoto(item.commodityId);
                    if (commodity) {
                        if (payload.isLocale) {
                            commodity.name = commodity.name[payload.locale || 'zh-cn'];
                            commodity.photos = commodity.photos.map(item => item.src);
                        }
                        item.commodity = commodity;
                    }
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
            return Object.assign(item, {
                name,
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
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", commodity_1.BaseCommodityServer)
], MyBrowsingHistoryService.prototype, "baseCommodityServer", void 0);
MyBrowsingHistoryService = __decorate([
    decorator_1.Provide()
], MyBrowsingHistoryService);
exports.MyBrowsingHistoryService = MyBrowsingHistoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NpbmdIaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvbXkvYnJvd3NpbmdIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCxnRUFBdUU7QUFDdkUscUZBQTRGO0FBQzVGLDJEQUEyRTtBQUczRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQVluQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTztRQUU5QixNQUFNLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjtRQUVELE1BQU0sd0JBQXdCLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakYsSUFBRyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLHdCQUF3QixDQUFDO1NBQ2pDO1FBRUQsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFBO0lBS0gsQ0FBQztJQUdELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO1FBRWhDLElBQUksZUFBZSxHQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RELE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7U0FDakMsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxlQUFlLENBQUMsT0FBTyxFQUFDO1lBR3pCLE1BQU0sMEJBQTBCLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZFLE1BQU0sRUFBRSxPQUFP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