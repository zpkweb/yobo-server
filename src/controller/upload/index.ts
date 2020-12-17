import { ALL, Body, Controller, Inject, Post, Provide } from "@midwayjs/decorator";

import { UploadService } from 'src/service/upload';

@Provide()
@Controller('/api/upload')
export class UploadController {

  @Inject()
  uploadService: UploadService;



  @Post('/images')
  async uploadImages(@Body(ALL) uploadBody) {
    console.log("/api/upload/images", uploadBody)
    return await this.uploadService.images(uploadBody);
  }
}
