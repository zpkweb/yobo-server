import { ALL, Body, Controller, Get, Inject, Post, Provide } from "@midwayjs/decorator";

import { UploadService } from 'src/service/upload';

@Provide()
@Controller('/api/upload', {tagName: '上传'})
export class UploadController {

  @Inject()
  uploadService: UploadService;



  @Post('/images', {summary: '上传图片'})
  async uploadImages(@Body(ALL) uploadBody) {
    return await this.uploadService.images(uploadBody);
  }

  @Get('/images', { summary: '获取上传图片' })
  async getUploadImages() {
    return await this.uploadService.getImages(`${process.cwd()}/public/`, `images/`);
  }

  @Post('/images/delete', { summary: '删除上传图片' })
  async uploadImagesDelete(@Body(ALL) bodyAll) {
    return await this.uploadService.imagesDelete(`${process.cwd()}/public/${bodyAll.path}`);
  }

}
