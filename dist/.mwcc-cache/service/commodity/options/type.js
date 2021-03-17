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
exports.CommodityOptionsTypeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const type_1 = require("../../base/commodity/options/type");
let CommodityOptionsTypeService = class CommodityOptionsTypeService {
    async create(payload) {
        const data = await this.baseCommodityOptionsTypeServer.BaseCreate(payload);
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
        const data = await this.baseCommodityOptionsTypeServer.BaseRetrieve(payload);
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
        const data = await this.baseCommodityOptionsTypeServer.BaseRetrieveId(payload);
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
        let data = await this.baseCommodityOptionsTypeServer.BaseRetrieveAll();
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
        const data = await this.baseCommodityOptionsTypeServer.BaseUpdate(payload);
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
        const data = await this.baseCommodityOptionsTypeServer.BaseDelete(payload);
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
    __metadata("design:type", type_1.BaseCommodityOptionsTypeServer)
], CommodityOptionsTypeService.prototype, "baseCommodityOptionsTypeServer", void 0);
CommodityOptionsTypeService = __decorate([
    decorator_1.Provide()
], CommodityOptionsTypeService);
exports.CommodityOptionsTypeService = CommodityOptionsTypeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2NvbW1vZGl0eS9vcHRpb25zL3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsbURBQXNEO0FBQ3RELDREQUF5RjtBQUd6RixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQVF0QyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFLRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFLRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFLRCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQ2hCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLE1BQU0sR0FBRyxPQUFPLEVBQ2pCLEdBQUcsRUFBRTtRQUNKLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZFLElBQUcsUUFBUSxFQUFDO1lBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU1ELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87Z0JBRUwsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBTUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztnQkFFTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFPRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDbEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFBO0FBeElDO0lBREMsa0JBQU0sRUFBRTs4QkFDdUIscUNBQThCO21GQUFDO0FBSHBELDJCQUEyQjtJQUR2QyxtQkFBTyxFQUFFO0dBQ0csMkJBQTJCLENBMkl2QztBQTNJWSxrRUFBMkIifQ==