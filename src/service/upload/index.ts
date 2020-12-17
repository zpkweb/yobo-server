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
}
