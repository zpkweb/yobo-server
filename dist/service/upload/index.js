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
exports.UploadService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const images_1 = require("./images");
let UploadService = class UploadService {
    async images(payload) {
        return await this.uploadImagesService.uploadImages(payload);
    }
    async getImages(dir, path) {
        return await this.uploadImagesService.getUploadImages(dir, path);
    }
    async imagesDelete(path) {
        return await this.uploadImagesService.uploadImagesDelete(path);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", images_1.UploadImagesService)
], UploadService.prototype, "uploadImagesService", void 0);
UploadService = __decorate([
    decorator_1.Provide()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS91cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXNEO0FBQ3RELHFDQUErQztBQUUvQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBU3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBR0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSTtRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRixDQUFBO0FBbEJDO0lBREMsa0JBQU0sRUFBRTs4QkFDWSw0QkFBbUI7MERBQUM7QUFIOUIsYUFBYTtJQUR6QixtQkFBTyxFQUFFO0dBQ0csYUFBYSxDQXFCekI7QUFyQlksc0NBQWEifQ==