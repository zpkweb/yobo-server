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
exports.apiController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const login_1 = require("../service/user/login");
const swagger_1 = require("@midwayjs/swagger");
const egg_1 = require("egg");
const index_1 = require("../service/upload/index");
let apiController = class apiController {
    async api(ctx) {
        await ctx.render('api.nj');
    }
    async test(ctx) {
        const images = await this.uploadService.getImages(`${process.cwd()}/public/`, `images/`);
        await ctx.render('images', { data: images });
    }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", egg_1.Application)
], apiController.prototype, "app", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", login_1.LoginService)
], apiController.prototype, "loginService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.UploadService)
], apiController.prototype, "uploadService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], apiController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], apiController.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], apiController.prototype, "jwtConfig", void 0);
__decorate([
    swagger_1.CreateApiDoc()
        .summary('接口')
        .description('描述')
        .param('user id')
        .param('user name')
        .respond(200, 'success', 'text', {
        example: 'hello world'
    })
        .respond(500, 'throw error')
        .build(),
    decorator_1.Get(),
    decorator_1.Get('/api'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], apiController.prototype, "api", null);
__decorate([
    decorator_1.Get('/images'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], apiController.prototype, "test", null);
apiController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/', { tagName: '文档', description: 'api' })
], apiController);
exports.apiController = apiController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEY7QUFFNUYsaURBQXNEO0FBQ3RELCtDQUFpRDtBQUNqRCw2QkFBa0M7QUFDbEMsbURBQW1EO0FBSW5ELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFpQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRztRQUNYLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXpGLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTtBQXhDQztJQURDLGVBQUcsRUFBRTs4QkFDRCxpQkFBVzswQ0FBQztBQUdqQjtJQURDLGtCQUFNLEVBQUU7OEJBQ0ssb0JBQVk7bURBQUM7QUFHM0I7SUFEQyxrQkFBTSxFQUFFOzhCQUNNLHFCQUFhO29EQUFDO0FBRzdCO0lBREMsa0JBQU0sRUFBRTs7MENBQ0k7QUFHYjtJQURDLGtCQUFNLEVBQUU7OzBDQUNMO0FBR0o7SUFEQyxrQkFBTSxDQUFDLEtBQUssQ0FBQzs7Z0RBQ0o7QUFlVjtJQWJDLHNCQUFZLEVBQUU7U0FDWixPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ2IsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNqQixLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2xCLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDaEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1FBQy9CLE9BQU8sRUFBRSxhQUFhO0tBQ3ZCLENBQUM7U0FDRCxPQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQztTQUMzQixLQUFLLEVBQUU7SUFFVCxlQUFHLEVBQUU7SUFDTCxlQUFHLENBQUMsTUFBTSxDQUFDOzs7O3dDQUdYO0FBR0Q7SUFEQyxlQUFHLENBQUMsU0FBUyxDQUFDOzs7O3lDQUtkO0FBMUNVLGFBQWE7SUFGekIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLENBQUM7R0FDekMsYUFBYSxDQTJDekI7QUEzQ1ksc0NBQWEifQ==