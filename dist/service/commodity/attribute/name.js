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
exports.CommodityAttributeName = void 0;
const decorator_1 = require("@midwayjs/decorator");
const name_1 = require("../../base/commodity/attribute/name");
let CommodityAttributeName = class CommodityAttributeName {
    async create(payload) {
        const data = await this.baseCommodityNameServer.BaseCreate(payload);
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
    async hasName(payload) {
        const data = await this.baseCommodityNameServer.BaseRetrieve({
            'zh-cn': payload['zh-cn'] || '',
            'en-us': payload['en-us'] || '',
            'ja-jp': payload['ja-jp'] || '',
            'fr-fr': payload['fr-fr'] || '',
            'es-es': payload['es-es'] || ''
        });
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async hasId(commodityId) {
        const data = await this.baseCommodityNameServer.BaseHas(commodityId);
        if (data) {
            return {
                data: data,
                success: true,
                code: 10501
            };
        }
        else {
            return {
                success: false,
                code: 10502
            };
        }
    }
    async update(payload) {
        const data = await this.baseCommodityNameServer.BaseUpdate(payload);
        if (data.affected) {
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
    async updateName(payload) {
        const updateName = await this.hasId(payload.commodityId);
        if (updateName.success) {
            return await this.update(payload);
        }
        else {
            return await this.create(payload);
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", name_1.BaseCommodityNameServer)
], CommodityAttributeName.prototype, "baseCommodityNameServer", void 0);
CommodityAttributeName = __decorate([
    decorator_1.Provide()
], CommodityAttributeName);
exports.CommodityAttributeName = CommodityAttributeName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2NvbW1vZGl0eS9hdHRyaWJ1dGUvbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsOERBQThFO0FBRzlFLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBTWpDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU9ELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztRQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7WUFDM0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBT0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUM7WUFDcEIsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDbEM7YUFBSTtZQUNILE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2xDO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUE3RkM7SUFEQyxrQkFBTSxFQUFFOzhCQUNnQiw4QkFBdUI7dUVBQUM7QUFIdEMsc0JBQXNCO0lBRGxDLG1CQUFPLEVBQUU7R0FDRyxzQkFBc0IsQ0FnR2xDO0FBaEdZLHdEQUFzQiJ9