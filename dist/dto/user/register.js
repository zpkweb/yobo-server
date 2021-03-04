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
exports.AdminUserRegisterDTO = void 0;
const decorator_1 = require("@midwayjs/decorator");
class AdminUserRegisterDTO {
}
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().empty('')),
    __metadata("design:type", String)
], AdminUserRegisterDTO.prototype, "name", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().email().required()),
    __metadata("design:type", String)
], AdminUserRegisterDTO.prototype, "email", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().empty('').length(11)),
    __metadata("design:type", String)
], AdminUserRegisterDTO.prototype, "phone", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().required()),
    __metadata("design:type", String)
], AdminUserRegisterDTO.prototype, "password", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().empty('')),
    __metadata("design:type", String)
], AdminUserRegisterDTO.prototype, "identity", void 0);
exports.AdminUserRegisterDTO = AdminUserRegisterDTO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZHRvL3VzZXIvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQXFEO0FBRXJELE1BQWEsb0JBQW9CO0NBZWhDO0FBYkM7SUFEQyxnQkFBSSxDQUFDLG9CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztrREFDckI7QUFHYjtJQURDLGdCQUFJLENBQUMsb0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7bURBQzdCO0FBR2Q7SUFEQyxnQkFBSSxDQUFDLG9CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzs7bURBQy9CO0FBR2Q7SUFEQyxnQkFBSSxDQUFDLG9CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7O3NEQUNsQjtBQUdqQjtJQURDLGdCQUFJLENBQUMsb0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O3NEQUNqQjtBQWRuQixvREFlQyJ9