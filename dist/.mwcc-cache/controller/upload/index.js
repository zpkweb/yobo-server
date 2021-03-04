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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const index_1 = require("../../service/upload/index");
let UploadController = class UploadController {
    async uploadImages(uploadBody) {
        console.log("/api/upload/images", uploadBody);
        return await this.uploadService.images(uploadBody);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", index_1.UploadService)
], UploadController.prototype, "uploadService", void 0);
__decorate([
    decorator_1.Post('/images', { summary: '上传图片' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImages", null);
UploadController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/upload', { tagName: '上传' })
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci91cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1GO0FBRW5GLHNEQUFtRDtBQUluRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU8zQixLQUFLLENBQUMsWUFBWSxDQUFZLFVBQVU7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUM3QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7QUFSQztJQURDLGtCQUFNLEVBQUU7OEJBQ00scUJBQWE7dURBQUM7QUFJN0I7SUFEQyxnQkFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUNmLFdBQUEsZ0JBQUksQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztvREFHNUI7QUFWVSxnQkFBZ0I7SUFGNUIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0dBQzlCLGdCQUFnQixDQVc1QjtBQVhZLDRDQUFnQiJ9