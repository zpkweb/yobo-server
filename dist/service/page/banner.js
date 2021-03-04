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
exports.PageBannerServer = void 0;
const decorator_1 = require("@midwayjs/decorator");
const banner_1 = require("../base/page/banner");
let PageBannerServer = class PageBannerServer {
    async create(payload) {
        const data = await this.basePageBannerServer.BaseCreate({
            src: payload.src || '',
            title: payload.title || '',
            subTitle: payload.subTitle || '',
            desc: payload.desc || ''
        });
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
    async hasId(bannerId) {
        const data = await this.basePageBannerServer.BaseHas(bannerId);
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
    async get(bannerId) {
        const data = await this.basePageBannerServer.BaseRetrievebannerId(bannerId);
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
    async getAll() {
        const data = await this.basePageBannerServer.BaseRetrieveAll();
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
        const data = await this.basePageBannerServer.BaseUpdate({
            bannerId: payload.bannerId,
            src: payload.src || '',
            title: payload.title || '',
            subTitle: payload.subTitle || '',
            desc: payload.desc || ''
        });
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
    async delete(bannerId) {
        const data = await this.basePageBannerServer.BaseDelete(bannerId);
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
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", banner_1.BasePageBannerServer)
], PageBannerServer.prototype, "basePageBannerServer", void 0);
PageBannerServer = __decorate([
    decorator_1.Provide()
], PageBannerServer);
exports.PageBannerServer = PageBannerServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvcGFnZS9iYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELGdEQUEyRDtBQUczRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU0zQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO1lBQ3RELEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFDdEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQU9ELEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUtDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUTtRQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvRCxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7YUFBTTtZQUNMLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBSUgsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztZQUN0RCxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRTtZQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDaEMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRTtTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjthQUFNO1lBQ0wsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDbkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO0lBQ0gsQ0FBQztDQUdGLENBQUE7QUF6SEM7SUFEQyxrQkFBTSxFQUFFOzhCQUNhLDZCQUFvQjs4REFBQztBQUhoQyxnQkFBZ0I7SUFENUIsbUJBQU8sRUFBRTtHQUNHLGdCQUFnQixDQTRINUI7QUE1SFksNENBQWdCIn0=