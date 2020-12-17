import { Provide, Inject, Config } from "@midwayjs/decorator";
import { Context } from "egg";

const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');

@Provide()

export class UploadImagesService {

  @Inject()
  ctx: Context;

  @Config('host')
  host;

  async uploadImages(payload) {
    console.log("uploadImages", payload, this.host.origin)
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    // console.log("stream", stream)
    // 创建目录
    fs.mkdirSync(`public/images/${stream.fields.type || 'other'}`, { recursive: true })
    let filename = path.basename(stream.filename).split('.');
    const name = `public/images/${stream.fields.type || 'other'}/${filename[0]}-${new Date().getTime()}.${ filename[1] }`;

    try {
      const writeStream = fs.createWriteStream(name);
      await stream.pipe(writeStream);
      stream.on('error', () => {
        return {
          success: false,
          code: 10016
        }
      })
      return {
        data: {
          src: `${this.host.origin}/${name.substr(7)}`,
          name: path.basename(stream.filename)
        },
        success: true,
        code: 10015
      }
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      return {
        success: false,
        code: 10016
      }
    }




  }
}
