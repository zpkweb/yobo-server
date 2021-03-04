"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("@midwayjs/decorator");
const puppeteer = require('puppeteer');
let PuppeteerSellerService = class PuppeteerSellerService {
    async add(payload) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(`http://www.xinyiparis.cn/zh/artist/${payload.artist}`);
        await page.waitForTimeout(5000);
        browser.close();
        return {};
    }
};
PuppeteerSellerService = __decorate([
    decorator_1.Provide()
], PuppeteerSellerService);
exports.default = PuppeteerSellerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcHVwcGV0ZWVyL3NlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUE4QztBQUU5QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFHdkMsSUFBcUIsc0JBQXNCLEdBQTNDLE1BQXFCLHNCQUFzQjtJQUN6QyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU87UUFFZixNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsc0NBQXNDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQTtBQVhvQixzQkFBc0I7SUFEMUMsbUJBQU8sRUFBRTtHQUNXLHNCQUFzQixDQVcxQztrQkFYb0Isc0JBQXNCIn0=