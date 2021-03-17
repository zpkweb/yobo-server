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
exports.CommodityOptionsMaterialService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const material_1 = require("../../base/commodity/options/material");
let CommodityOptionsMaterialService = class CommodityOptionsMaterialService {
    async create(payload) {
        const data = await this.baseCommodityOptionsMaterialServer.BaseCreate(payload);
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
    async retrieve(payload) {
        const data = await this.baseCommodityOptionsMaterialServer.BaseRetrieve(payload);
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
        const data = await this.baseCommodityOptionsMaterialServer.BaseRetrieveId(payload);
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
        let data = await this.baseCommodityOptionsMaterialServer.BaseRetrieveAll();
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
        const data = await this.baseCommodityOptionsMaterialServer.BaseUpdate(payload);
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
    async delete(payload) {
        const data = await this.baseCommodityOptionsMaterialServer.BaseDelete(payload);
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
    __metadata("design:type", material_1.BaseCommodityOptionsMaterialServer)
], CommodityOptionsMaterialService.prototype, "baseCommodityOptionsMaterialServer", void 0);
CommodityOptionsMaterialService = __decorate([
    decorator_1.Provide()
], CommodityOptionsMaterialService);
exports.CommodityOptionsMaterialService = CommodityOptionsMaterialService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvb3B0aW9ucy9tYXRlcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxtREFBc0Q7QUFDdEQsb0VBQWlHO0FBR2pHLElBQWEsK0JBQStCLEdBQTVDLE1BQWEsK0JBQStCO0lBUTFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUtELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakYsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVLENBQUMs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