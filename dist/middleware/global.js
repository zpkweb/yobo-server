"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
let GlobalMiddleware = class GlobalMiddleware {
    resolve() {
        return async (ctx, next) => {
            const startTime = Date.now();
            await next();
            if (ctx.body && ctx.body.code) {
                ctx.body = {
                    ...ctx.body,
                    status: ctx.body.success ? 200 : 500,
                    message: ctx.__(ctx.body.code)
                };
            }
            ctx.logger.info('响应时间 %d ms', Date.now() - startTime);
        };
    }
};
GlobalMiddleware = __decorate([
    decorator_1.Provide()
], GlobalMiddleware);
exports.GlobalMiddleware = GlobalMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUk5QyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUczQixPQUFPO1FBQ0wsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQW9CLEVBQUUsRUFBRTtZQU9sRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQU1iLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztnQkFDM0IsR0FBRyxDQUFDLElBQUksR0FBRztvQkFDVCxHQUFHLEdBQUcsQ0FBQyxJQUFJO29CQUNYLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNwQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDL0IsQ0FBQTthQUNGO1lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUM7SUFDSixDQUFDO0NBRUYsQ0FBQTtBQTlCWSxnQkFBZ0I7SUFENUIsbUJBQU8sRUFBRTtHQUNHLGdCQUFnQixDQThCNUI7QUE5QlksNENBQWdCIn0=