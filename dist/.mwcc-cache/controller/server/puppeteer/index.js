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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPuppeteerController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../../service/puppeteer/index");
let AdminPuppeteerController = class AdminPuppeteerController {
    async puppeteer(query) {
        const data = await this.puppeteerService.addSeller(query);
        return data;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.default)
], AdminPuppeteerController.prototype, "puppeteerService", void 0);
__decorate([
    decorator_1.Get('/addSeller'),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminPuppeteerController.prototype, "puppeteer", null);
AdminPuppeteerController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/admin/puppeteer', { tagName: '后台管理-爬虫' })
], AdminPuppeteerController);
exports.AdminPuppeteerController = AdminPuppeteerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9zZXJ2ZXIvcHVwcGV0ZWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtRjtBQUNuRiw0REFBb0Q7QUFJcEQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFNbkMsS0FBSyxDQUFDLFNBQVMsQ0FBYSxLQUFLO1FBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBUEM7SUFEQyxrQkFBTSxFQUFFOzhCQUNTLGVBQWdCO2tFQUFDO0FBR25DO0lBREMsZUFBRyxDQUFDLFlBQVksQ0FBQztJQUNELFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozt5REFHMUI7QUFUVSx3QkFBd0I7SUFGcEMsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLENBQUM7R0FDM0Msd0JBQXdCLENBVXBDO0FBVlksNERBQXdCIn0=