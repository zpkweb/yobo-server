import { Inject, Provide } from "@midwayjs/decorator";
import { UploadImagesService } from './images';
@Provide()
export class UploadService {

  @Inject()
  uploadImagesService: UploadImagesService;

  /**
   * 上传
   * @param payload
   */
  async images(payload) {
    return await this.uploadImagesService.uploadImages(payload);
  }


  async getImages(dir, path) {
    return await this.uploadImagesService.getUploadImages(dir, path);
  }

  async imagesDelete(path) {
    return await this.uploadImagesService.uploadImagesDelete(path);
  }
}
