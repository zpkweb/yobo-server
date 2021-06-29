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
exports.BannerService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../page/index");
let BannerService = class BannerService {
    async get() {
        return await this.pageService.getBannerAll();
    }
};
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], BannerService.prototype, "host", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], BannerService.prototype, "pageService", void 0);
BannerService = __decorate([
    decorator_1.Provide()
], BannerService);
exports.BannerService = BannerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvQkZGL2Jhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFDOUQseUNBQWtDO0FBR2xDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFReEIsS0FBSyxDQUFDLEdBQUc7UUFDUCxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJDO0lBREMsa0JBQU0sQ0FBQyxNQUFNLENBQUM7OzJDQUNWO0FBR0w7SUFEQyxrQkFBTSxFQUFFOzhCQUNJLGVBQVc7a0RBQUM7QUFOZCxhQUFhO0lBRHpCLG1CQUFPLEVBQUU7R0FDRyxhQUFhLENBV3pCO0FBWFksc0NBQWEifQ==