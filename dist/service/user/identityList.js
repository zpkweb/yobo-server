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
exports.IdentityListService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const identityList_1 = require("../base/user/identityList");
let IdentityListService = class IdentityListService {
    async createIdentityList(payload) {
        for (let item of payload) {
            let identity = await this.baseIdentityListService.baseRetrieveIdentityList(item);
            if (!identity) {
                let newIdentity = await this.baseIdentityListService.baseCreateIdentityList({
                    "zh-cn": item['zh-cn'] || '',
                    "en-us": item['en-us'] || '',
                    "ja-jp": item['ja-jp'] || '',
                    "fr-fr": item['fr-fr'] || '',
                    "es-es": item['es-es'] || '',
                    "index": item.index || '',
                    "menu": item.menu || ''
                });
                if (!newIdentity.identifiers[0].id) {
                    return {
                        success: false,
                        code: 10004
                    };
                }
            }
        }
        const userIdentity = await this.baseIdentityListService.baseRetrieveIdentityListAll();
        if (userIdentity) {
            return {
                data: userIdentity,
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
    async retrieveIdentityList(payload) {
        if (payload && Object.keys(payload).length) {
            const retrieveIdentityList = await this.baseIdentityListService.baseRetrieveIdentityList(payload);
            if (retrieveIdentityList) {
                return {
                    data: retrieveIdentityList,
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
        else {
            const retrieveIdentityListAll = await this.baseIdentityListService.baseRetrieveIdentityListAll();
            if (retrieveIdentityListAll) {
                return {
                    data: retrieveIdentityListAll,
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
    async updateIdentityList(payload) {
        const identityList = await this.baseIdentityListService.baseRetrieveIdentityList({
            "zh-cn": payload['zh-cn'] || '',
            "en-us": payload['en-us'] || '',
            "ja-jp": payload['ja-jp'] || '',
            "fr-fr": payload['fr-fr'] || '',
            "es-es": payload['es-es'] || '',
            index: payload.index || '',
            id: payload.id || ''
        });
        if (!identityList) {
            return {
                success: false,
                code: 10202
            };
        }
        const newIdentityList = await this.baseIdentityListService.baseUpdateIdentityList(Object.assign({
            "zh-cn": identityList['zh-cn'] || '',
            "en-us": identityList['en-us'] || '',
            "ja-jp": identityList['ja-jp'] || '',
            "fr-fr": identityList['fr-fr'] || '',
            "es-es": identityList['es-es'] || '',
            index: identityList.index,
            menu: identityList.menu,
            id: identityList.id
        }, payload));
        if (newIdentityList.affected) {
            const identityList = await this.baseIdentityListService.baseRetrieveIdentityList({
                "zh-cn": payload['zh-cn'] || '',
                "en-us": payload['en-us'] || '',
                "ja-jp": payload['ja-jp'] || '',
                "fr-fr": payload['fr-fr'] || '',
                "es-es": payload['es-es'] || '',
                index: payload.index || '',
                id: payload.id || ''
            });
            return {
                data: identityList,
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
    async deleteIdentityList(payload) {
        if (payload && Object.keys(payload).length) {
            const identityList = await this.baseIdentityListService.baseDeleteIdentityList(payload);
            if (identityList.affected) {
                return {
                    data: identityList,
                    success: true,
                    code: 10005
                };
            }
            else {
                return {
                    success: false,
                    code: 10006
                };
            }
        }
        else {
            const identityListAll = await this.baseIdentityListService.baseDeleteIdentityListAll();
            if (identityListAll.affected) {
                return {
                    data: identityListAll,
                    success: true,
                    code: 10005
                };
            }
            else {
                return {
                    success: false,
                    code: 10006
                };
            }
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", identityList_1.BaseIdentityListService)
], IdentityListService.prototype, "baseIdentityListService", void 0);
IdentityListService = __decorate([
    decorator_1.Provide()
], IdentityListService);
exports.IdentityListService = IdentityListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXNlci9pZGVudGl0eUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELDREQUE2RTtBQUU3RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVM5QixLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTztRQUM5QixLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLFFBQVEsR0FBTyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDO29CQUMxRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtpQkFDeEIsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsT0FBTzt3QkFDTCxPQUFPLEVBQUUs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