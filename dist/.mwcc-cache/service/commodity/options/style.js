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
exports.CommodityOptionsStyleService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const style_1 = require("../../base/commodity/options/style");
let CommodityOptionsStyleService = class CommodityOptionsStyleService {
    async create(payload) {
        const data = await this.baseCommodityOptionsStyleServer.BaseCreate(payload);
        if (data.identifiers[0].id) {
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
    async retrieve(id) {
        const data = await this.baseCommodityOptionsStyleServer.BaseRetrieve(id);
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
    async retrieveId(payload) {
        const data = await this.baseCommodityOptionsStyleServer.BaseRetrieveId(payload);
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
    async retrieveAll({ isLocale = false, locale = 'zh-cn' } = {}) {
        let data = await this.baseCommodityOptionsStyleServer.BaseRetrieveAll();
        if (isLocale) {
            data = this.filter(locale, data);
        }
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
    async update(payload) {
        const data = await this.baseCommodityOptionsStyleServer.BaseUpdate(payload);
        if (data.affected) {
            return {
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
    async delete(id) {
        const data = await this.baseCommodityOptionsStyleServer.BaseDelete(id);
        if (data.affected) {
            return {
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
    filter(type, payload) {
        return payload.map(item => {
            const { id, img } = item;
            return { id, img, name: item[type] };
        });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", style_1.BaseCommodityOptionsStyleServer)
], CommodityOptionsStyleService.prototype, "baseCommodityOptionsStyleServer", void 0);
CommodityOptionsStyleService = __decorate([
    decorator_1.Provide()
], CommodityOptionsStyleService);
exports.CommodityOptionsStyleService = CommodityOptionsStyleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvb3B0aW9ucy9zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxtREFBc0Q7QUFDdEQsOERBQTJGO0FBRzNGLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBUXZDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUtELEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNmLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLCtCQUErQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBS0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FB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