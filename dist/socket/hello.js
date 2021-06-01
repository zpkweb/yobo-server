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
exports.HelloSocketController = void 0;
const decorator_1 = require("@midwayjs/decorator");
let HelloSocketController = class HelloSocketController {
    async onConnectionMethod() {
        console.log('on client connect', this.ctx.id);
    }
    async gotMessage(data) {
        console.log('on data got', this.ctx.id, data);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], HelloSocketController.prototype, "ctx", void 0);
__decorate([
    decorator_1.OnWSConnection(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HelloSocketController.prototype, "onConnectionMethod", null);
__decorate([
    decorator_1.OnWSMessage('myEvent'),
    decorator_1.WSEmit('myEventResult'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HelloSocketController.prototype, "gotMessage", null);
HelloSocketController = __decorate([
    decorator_1.Provide(),
    decorator_1.WSController('/')
], HelloSocketController);
exports.HelloSocketController = HelloSocketController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic29ja2V0L2hlbGxvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RztBQUt6RyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxLQUFLLENBQUMsa0JBQWtCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FFRixDQUFBO0FBYkM7SUFEQyxrQkFBTSxFQUFFOztrREFDSTtBQUdiO0lBREMsMEJBQWMsRUFBRTs7OzsrREFHaEI7QUFJRDtJQUZDLHVCQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3RCLGtCQUFNLENBQUMsZUFBZSxDQUFDOzs7O3VEQUd2QjtBQWRVLHFCQUFxQjtJQUZqQyxtQkFBTyxFQUFFO0lBQ1Qsd0JBQVksQ0FBQyxHQUFHLENBQUM7R0FDTCxxQkFBcUIsQ0FnQmpDO0FBaEJZLHNEQUFxQiJ9