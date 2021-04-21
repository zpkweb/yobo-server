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
        return await this.uploadService.images(uploadBody);
    }
    async getUploadImages() {
        return await this.uploadService.getImages(`${process.cwd()}/public/`, `images/`);
    }
    async uploadImagesDelete(bodyAll) {
        return await this.uploadService.imagesDelete(`${process.cwd()}/public/${bodyAll.path}`);
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
__decorate([
    decorator_1.Get('/images', { summary: '获取上传图片' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getUploadImages", null);
__decorate([
    decorator_1.Post('/images/delete', { summary: '删除上传图片' }),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImagesDelete", null);
UploadController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api/upload', { tagName: '上传' })
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci91cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXdGO0FBRXhGLHNEQUFtRDtBQUluRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVEzQixLQUFLLENBQUMsWUFBWSxDQUFZLFVBQVU7UUFDdEMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCxLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBR0QsS0FBSyxDQUFDLGtCQUFrQixDQUFZLE9BQU87UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FFRixDQUFBO0FBbkJDO0lBREMsa0JBQU0sRUFBRTs4QkFDTSxxQkFBYTt1REFBQztBQUs3QjtJQURDLGdCQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO0lBQ2YsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O29EQUU1QjtBQUdEO0lBREMsZUFBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Ozt1REFHckM7QUFHRDtJQURDLGdCQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDcEIsV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7OzBEQUVsQztBQXBCVSxnQkFBZ0I7SUFGNUIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0dBQzlCLGdCQUFnQixDQXNCNUI7QUF0QlksNENBQWdCIn0=