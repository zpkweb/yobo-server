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
exports.CommodityTypeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const type_1 = require("../../base/commodity/commodity-options/type");
const type_2 = require("../options/type");
let CommodityTypeService = class CommodityTypeService {
    async create(payload) {
        const data = await this.baseCommodityTypeServer.BaseCreate(payload);
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
        const data = await this.baseCommodityTypeServer.BaseRetrieveID(payload);
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
    async retrieveCommodityId(commodityId) {
        const data = await this.baseCommodityTypeServer.BaseRetrieveCommodityId(commodityId);
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
    async retrieveID(payload) {
        const data = await this.baseCommodityTypeServer.BaseRetrieveID(payload);
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
    async relation(payload) {
        return await this.baseCommodityTypeServer.BaseRelationSet(payload);
    }
    async relationCreate(payload) {
        for (let item of payload.relation) {
            const categoryOption = await this.retrieveID({
                commodityId: payload.commodityId,
                optionId: item
            });
            if (categoryOption.success) {
                await this.relation({
                    name: 'commoditys',
                    of: categoryOption.data.id,
                    set: payload.commodityId
                });
                await this.relation({
                    name: 'options',
                    of: categoryOption.data.id,
                    set: item
                });
            }
            else {
                const categorysOption = await this.commodityOptionsTypeService.retrieveId(item);
                if (categorysOption.success) {
                    const categorys = await this.create({
                        commodityId: payload.commodityId,
                        optionId: item,
                    });
                    if (categorys.success) {
                        await this.relation({
                            name: 'commoditys',
                            of: categorys.data.identifiers[0].id,
                            set: payload.commodityId
                        });
                        await this.relation({
                            name: 'options',
                            of: categorys.data.identifiers[0].id,
                            set: item
                        });
                    }
                }
            }
        }
    }
    async relationUpdate(payload) {
        const commodityCategorysOptions = await this.retrieveCommodityId(payload.commodityId);
        if (commodityCategorysOptions.success) {
            for (let item of commodityCategorysOptions.data) {
                if (item.options) {
                    await this.relation({
                        name: 'options',
                        of: item.id,
                        set: null
                    });
                }
            }
        }
        await this.relationCreate(payload);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_1.BaseCommodityTypeServer)
], CommodityTypeService.prototype, "baseCommodityTypeServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", type_2.CommodityOptionsTypeService)
], CommodityTypeService.prototype, "commodityOptionsTypeService", void 0);
CommodityTypeService = __decorate([
    decorator_1.Provide()
], CommodityTypeService);
exports.CommodityTypeService = CommodityTypeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2NvbW1vZGl0eS9jb21tb2RpdHktb3B0aW9ucy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCxzRUFBNEY7QUFDNUYsMENBQThEO0FBRzlELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUS9CLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztRQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEUsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUss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