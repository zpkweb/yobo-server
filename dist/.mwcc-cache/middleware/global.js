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
            console.log("接口响应时间:", Date.now() - startTime);
        };
    }
};
GlobalMiddleware = __decorate([
    decorator_1.Provide()
], GlobalMiddleware);
exports.GlobalMiddleware = GlobalMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUs5QyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUUzQixPQUFPO1FBQ0wsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQW9CLEVBQUUsRUFBRTtZQU9sRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUM7SUFDSixDQUFDO0NBRUYsQ0FBQTtBQWhCWSxnQkFBZ0I7SUFENUIsbUJBQU8sRUFBRTtHQUNHLGdCQUFnQixDQWdCNUI7QUFoQlksNENBQWdCIn0=