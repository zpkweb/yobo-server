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
exports.CommodityTechniqueService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const technique_1 = require("../../base/commodity/commodity-options/technique");
const technique_2 = require("../options/technique");
let CommodityTechniqueService = class CommodityTechniqueService {
    async create(payload) {
        const data = await this.baseCommodityTechniqueServer.BaseCreate(payload);
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
        const data = await this.baseCommodityTechniqueServer.BaseRetrieveID(payload);
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
        const data = await this.baseCommodityTechniqueServer.BaseRetrieveCommodityId(commodityId);
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
        const data = await this.baseCommodityTechniqueServer.BaseRetrieveID(payload);
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
        return await this.baseCommodityTechniqueServer.BaseRelationSet(payload);
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
                const categorysOption = await this.commodityOptionsTechniqueService.retrieveId(item);
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
    __metadata("design:type", technique_1.BaseCommodityTechniqueServer)
], CommodityTechniqueService.prototype, "baseCommodityTechniqueServer", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", technique_2.CommodityOptionsTechniqueService)
], CommodityTechniqueService.prototype, "commodityOptionsTechniqueService", void 0);
CommodityTechniqueService = __decorate([
    decorator_1.Provide()
], CommodityTechniqueService);
exports.CommodityTechniqueService = CommodityTechniqueService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5pcXVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvY29tbW9kaXR5L2NvbW1vZGl0eS1vcHRpb25zL3RlY2huaXF1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBc0Q7QUFDdEQsZ0ZBQXNHO0FBQ3RHLG9EQUF3RTtBQUd4RSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVFwQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7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