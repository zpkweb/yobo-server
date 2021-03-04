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
exports.MyService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const likeSeller_1 = require("./likeSeller");
const likeCommodity_1 = require("./likeCommodity");
const browsingHistory_1 = require("./browsingHistory");
let MyService = class MyService {
    async setSeller(payload) {
        return await this.myLikeSellerService.addMyLikeSeller(payload);
    }
    async delSeller(payload) {
        return await this.myLikeSellerService.delMyLikeSeller(payload);
    }
    async delSellerAll(userId) {
        return await this.myLikeSellerService.delLikeSellerAll(userId);
    }
    async getSeller(userId) {
        return await this.myLikeSellerService.myLikeSeller(userId);
    }
    async hasSeller(payload) {
        return await this.myLikeSellerService.hasMyLikeSeller(payload);
    }
    async setCommodity(payload) {
        return await this.myLikeCommodityService.addMyLikeCommodity(payload);
    }
    async delCommodity(payload) {
        return await this.myLikeCommodityService.delMyLikeCommodity(payload);
    }
    async delCommodityAll(userId) {
        return await this.myLikeCommodityService.delLikeCommodityAll(userId);
    }
    async getCommodity(payload) {
        return await this.myLikeCommodityService.myLikeCommodity(payload);
    }
    async hasCommodity(payload) {
        return await this.myLikeCommodityService.hasMyLikeCommodity(payload);
    }
    async addBrowsingHistory(payload) {
        return await this.myBrowsingHistoryService.addBrowsingHistory(payload);
    }
    async findBrowsingHistory(userId) {
        return await this.myBrowsingHistoryService.retrieveBrowsingHistory(userId);
    }
    async findOrder() {
    }
    async findShoppingCart() {
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likeSeller_1.MyLikeSellerService)
], MyService.prototype, "myLikeSellerService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", likeCommodity_1.MyLikeCommodityService)
], MyService.prototype, "myLikeCommodityService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", browsingHistory_1.MyBrowsingHistoryService)
], MyService.prototype, "myBrowsingHistoryService", void 0);
MyService = __decorate([
    decorator_1.Provide()
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9teS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsNkNBQWtEO0FBQ2xELG1EQUF5RDtBQUN6RCx1REFBNkQ7QUFFN0QsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQVlwQixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDckIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUdELEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQ3ZCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUdELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtRQUNwQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBR0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ3JCLE9BQU8sTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFHRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBR0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTTtRQUMxQixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFHRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUdELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTztRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFNRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTztRQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFHRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBTTtRQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzVFLENBQUM7SUFJRCxLQUFLLENBQUMsU0FBUztJQUVmLENBQUM7SUFHRCxLQUFLLENBQUMsZ0JBQWdCO0lBRXRCLENBQUM7Q0FHRixDQUFBO0FBbEZDO0lBREMsa0JBQU0sRUFBRTs4QkFDWSxnQ0FBbUI7c0RBQUM7QUFHekM7SUFEQyxrQkFBTSxFQUFFOzhCQUNlLHNDQUFzQjt5REFBQztBQUcvQztJQURDLGtCQUFNLEVBQUU7OEJBQ2lCLDBDQUF3QjsyREFBQztBQVR4QyxTQUFTO0lBRHJCLG1CQUFPLEVBQUU7R0FDRyxTQUFTLENBcUZyQjtBQXJGWSw4QkFBUyJ9