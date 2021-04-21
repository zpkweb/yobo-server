import { Provide, Inject, Config } from "@midwayjs/decorator";
import { Context } from "egg";

const fs = require('fs');
// const path = require('path');
import * as path from 'path';
const sendToWormhole = require('stream-wormhole');

@Provide()

export class UploadImagesService {

  @Inject()
  ctx: Context;

  @Config('host')
  host;

  async uploadImages(payload) {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    // 创建目录
    fs.mkdirSync(`public/images/${stream.fields.type || 'other'}`, { recursive: true });
    let filename = path.basename(stream.filename).split('.');
    const name = `public/images/${stream.fields.type || 'other'}/${filename[0]}-${new Date().getTime()}.${ filename[filename.length-1] }`;

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
          title: path.basename(stream.filename),
          ...stream.fields
        },
        success: true,
        code: 10015
      }
    } catch (err) {
      ("catch error")
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      return {
        success: false,
        code: 10016
      }
    }




  }

  async getUploadImages(dir, path) {
    var filesList = {
      path: path,
      children: [],
      images: []
    };
    this.readFileList(dir, path, filesList)
    return {
      dir,
      ...filesList
    };
  }
  readFileList(dir, path, filesList) {
    var files = fs.readdirSync(`${dir}${path}`);
    if(files[0] == '.DS_Store'){
      files.splice(0,1)
    }

    files.forEach( (item, index) => {
      var stat = fs.statSync(`${dir}${path}${item}`);

      if (stat.isDirectory()) {
        filesList.children.push({
          path: `${item}/`,
          children: [],
          images: []
        })
        this.readFileList(`${dir}`, `${path}${item}/`, filesList.children[filesList.children.length-1])
      } else {
        filesList.images.push({
          path: `${item}`,
          size: `${Math.round(stat.size/1024)} KB`,
          date: this.dateFormat("YYYY-mm-dd HH:MM", new Date(stat.ctime))
        });
      }

  })
  }

  dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

  async uploadImagesDelete(path) {
    fs.unlinkSync(path);
    return {
      success: true,
      code: 10005
    }
  }

}
