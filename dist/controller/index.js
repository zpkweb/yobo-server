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
let apiController = class apiController {
    async api(ctx) {
        await ctx.render('api.nj');
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
apiController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/', { tagName: '文档', description: 'api' })
], apiController);
exports.apiController = apiController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBNEY7QUFFNUYsaURBQXNEO0FBQ3RELCtDQUFpRDtBQUNqRCw2QkFBa0M7QUFJbEMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQThCeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHO1FBQ1gsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBO0FBOUJDO0lBREMsZUFBRyxFQUFFOzhCQUNELGlCQUFXOzBDQUFDO0FBR2pCO0lBREMsa0JBQU0sRUFBRTs4QkFDSyxvQkFBWTttREFBQztBQUczQjtJQURDLGtCQUFNLEVBQUU7OzBDQUNJO0FBR2I7SUFEQyxrQkFBTSxFQUFFOzswQ0FDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7O2dEQUNKO0FBZVY7SUFiQyxzQkFBWSxFQUFFO1NBQ1osT0FBTyxDQUFDLElBQUksQ0FBQztTQUNiLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDakIsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNsQixLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtRQUMvQixPQUFPLEVBQUUsYUFBYTtLQUN2QixDQUFDO1NBQ0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUM7U0FDM0IsS0FBSyxFQUFFO0lBRVQsZUFBRyxFQUFFO0lBQ0wsZUFBRyxDQUFDLE1BQU0sQ0FBQzs7Ozt3Q0FHWDtBQWhDVSxhQUFhO0lBRnpCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxDQUFDO0dBQ3pDLGFBQWEsQ0FpQ3pCO0FBakNZLHNDQUFhIn0=