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
const decorator_1 = require("@midwayjs/decorator");
const seller_1 = require("./seller");
let PuppeteerService = class PuppeteerService {
    async addSeller(payload) {
        const add = await this.puppeteerSellerService.add(payload);
        return add;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", seller_1.default)
], PuppeteerService.prototype, "puppeteerSellerService", void 0);
PuppeteerService = __decorate([
    decorator_1.Provide()
], PuppeteerService);
exports.default = PuppeteerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9wdXBwZXRlZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQscUNBQTZDO0FBRzdDLElBQXFCLGdCQUFnQixHQUFyQyxNQUFxQixnQkFBZ0I7SUFLbkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ3JCLE1BQU0sR0FBRyxHQUFJLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFBO0FBTkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNlLGdCQUFzQjtnRUFBQztBQUg1QixnQkFBZ0I7SUFEcEMsbUJBQU8sRUFBRTtHQUNXLGdCQUFnQixDQVNwQztrQkFUb0IsZ0JBQWdCIn0=