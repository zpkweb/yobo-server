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
exports.AdminUserLoginDTO = void 0;
const decorator_1 = require("@midwayjs/decorator");
class AdminUserLoginDTO {
}
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string()),
    __metadata("design:type", String)
], AdminUserLoginDTO.prototype, "name", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().required()),
    __metadata("design:type", String)
], AdminUserLoginDTO.prototype, "password", void 0);
exports.AdminUserLoginDTO = AdminUserLoginDTO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiZHRvL3VzZXIvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQXFEO0FBRXJELE1BQWEsaUJBQWlCO0NBUTdCO0FBTkM7SUFEQyxnQkFBSSxDQUFDLG9CQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7OytDQUNYO0FBSWI7SUFEQyxnQkFBSSxDQUFDLG9CQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7O21EQUNsQjtBQU5uQiw4Q0FRQyJ9