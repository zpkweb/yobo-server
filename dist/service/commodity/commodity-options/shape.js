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
exports.CommodityShapeService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const shape_1 = require("../../base/commodity/commodity-options/shape");
const shape_2 = require("../options/shape");
let CommodityShapeService = class CommodityShapeService {
    async search(payload) {
        const data = await this.baseCommodityShapeService.BaseSearch(payload);
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
    async create(payload) {
        const data = await this.baseCommodityShapeService.BaseCreate(payload);
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
        const data = await this.baseCommodityShapeService.BaseRetrieveID(payload);
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
        const data = await this.baseCommodityShapeService.BaseRetrieveCommodityId(commodityId);
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
        const data = await this.baseCommodityShapeService.BaseRetrieveID(payload);
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
        return await this.baseCommodityShapeService.BaseRelationSet(payload);
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
                const categorysOption = await this.commodityOptionsShapeService.retrieveId(item);
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
    __metadata("design:type", shape_1.BaseCommodityShapeService)
], CommodityShapeService.prototype, "baseCommodityShapeService", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", shape_2.CommodityOptionsShapeService)
], CommodityShapeService.prototype, "commodityOptionsShapeService", void 0);
CommodityShapeService = __decorate([
    decorator_1.Provide()
], CommodityShapeService);
exports.CommodityShapeService = CommodityShapeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9jb21tb2RpdHkvY29tbW9kaXR5LW9wdGlvbnMvc2hhcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHdFQUErRjtBQUMvRiw0Q0FBZ0U7QUFHaEUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFRaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzFCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FB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