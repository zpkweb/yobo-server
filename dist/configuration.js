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
exports.ContainerConfiguration = void 0;
const decorator_1 = require("@midwayjs/decorator");
const swagger = require("@midwayjs/swagger");
const identityList_1 = require("./service/user/identityList");
let ContainerConfiguration = class ContainerConfiguration {
    async onReady(container) {
        console.log("onReady");
        const identityList = await this.identityListService.retrieveIdentityList();
        if (identityList.data && !identityList.data.length) {
            await this.identityListService.createIdentityList([{
                    "zh-cn": "超级管理员",
                    "en-us": "superAdmin",
                    "ja-jp": "スーパーアドミニストレーター",
                    "fr-fr": "Super administrateur",
                    "es-es": "Superadministrador",
                    "index": 1
                }, {
                    "zh-cn": "管理员",
                    "en-us": "admin",
                    "ja-jp": "管理者",
                    "fr-fr": "administrateur",
                    "es-es": "administrador",
                    "index": 2
                }, {
                    "zh-cn": "客服",
                    "en-us": "customerService",
                    "ja-jp": "顧客サービス",
                    "fr-fr": "Service Clients",
                    "es-es": "Servicio al Cliente",
                    "index": 3
                }, {
                    "zh-cn": "艺术家",
                    "en-us": "seller",
                    "ja-jp": "アーティスト",
                    "fr-fr": "artiste",
                    "es-es": "artista",
                    "index": 5
                }, {
                    "zh-cn": "会员",
                    "en-us": "member",
                    "ja-jp": "メンバー",
                    "fr-fr": "membre",
                    "es-es": "miembro",
                    "index": 70
                }, {
                    "zh-cn": "用户",
                    "en-us": "ordinary",
                    "ja-jp": "ユーザー",
                    "fr-fr": "utilisateur",
                    "es-es": "usuario",
                    "index": 80
                }, {
                    "zh-cn": "第三方用户",
                    "en-us": "thirdParty",
                    "ja-jp": "サードパーティユーザー",
                    "fr-fr": "Utilisateur tiers",
                    "es-es": "Usuario de terceros",
                    "index": 90
                }]);
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", identityList_1.IdentityListService)
], ContainerConfiguration.prototype, "identityListService", void 0);
ContainerConfiguration = __decorate([
    decorator_1.Configuration({
        imports: [
            '@midwayjs/orm',
            swagger
        ]
    })
], ContainerConfiguration);
exports.ContainerConfiguration = ContainerConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLG1EQUE0RDtBQUU1RCw2Q0FBNkM7QUFDN0MsOERBQW9FO0FBUXBFLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSWpDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBMkI7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV0QixNQUFNLFlBQVksR0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRS9FLElBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2hELE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsT0FBTyxFQUFFLENBQUM7aUJBQ1gsRUFBQztvQkFDQSxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDO2lCQUNYLEVBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2lCQUNYLEVBQUM7b0JBQ0EsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxDQUFDO2lCQUNYLEVBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSxRQUFRO29CQUNqQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1osRUFBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsRUFBRTtpQkFDWixFQUFDO29CQUNBLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUMsQ0FBQyxDQUFBO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTNEQztJQURDLGtCQUFNLEVBQUU7OEJBQ1ksa0NBQW1CO21FQUFDO0FBSDlCLHNCQUFzQjtJQVBsQyx5QkFBYSxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNmLE9BQU87U0FDUjtLQUNGLENBQUM7R0FFVyxzQkFBc0IsQ0E4RGxDO0FBOURZLHdEQUFzQiJ9