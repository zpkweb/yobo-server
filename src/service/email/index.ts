import { Provide, Config } from "@midwayjs/decorator";
import * as nodemailer from 'nodemailer';

@Provide()
export default class EmailService {

  @Config('email')
  email;

  async send(payload) {

    let transporter = nodemailer.createTransport({
      service: this.email.service,
      port: this.email.port,
      // secureConnection: true,
      secure: true,
      auth: {
        user: this.email.user,
        pass: this.email.pass
      },
    });
  //   let transporter = nodemailer.createTransport({
  //     service: "hotmail",
  //     auth: {
  //       user: "kenny8084@hotmail.com",
  //       pass: "Yoboart306",
  //     },
  //     // service: "hotmail", auth: {
  //     //     user: "kenny8084@hotmail.com", pass: "Yoboart306"
  //     // }
  // });

    // send mail with defined transport object
    const data =  await transporter.sendMail({
      from: this.email.user,
      // to: payload.email,
      to: this.email.user,
      subject: 'yobo-直接联系',
      // html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p><p style="font-size: 14px;color:#666;">`+ payload.sendMail.codeTimeText +`</p>`
      html: `
        <p>邮箱：${payload.email}</p>
        <p>链接：${payload.href}</p>
        <p>内容：${payload.msg}</p>
      `
    });

    if(data.messageId){
      return {
        success: true,
        code : 10405
      }
    }else{
      return {
        success: false,
        code : 10406
      }
    }
  }

  /**
   * 发送找回密码验证码的邮件
   * @param payload
   */
  async bid(payload) {

    let transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      service: this.email.service,
      port: this.email.port,
      secureConnection: true,
      auth: {
        user: this.email.user,
        pass: this.email.pass
      },
    });

    // send mail with defined transport object
    const data =  await transporter.sendMail({
      from: this.email.user,
      to: payload.email,
      subject: 'yobo-出价',
      // html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p><p style="font-size: 14px;color:#666;">`+ payload.sendMail.codeTimeText +`</p>`
      html: `<p>出价：<span style="font-size: 18px; color: red">${payload.currency} ${payload.price}</span></p><p>${payload.msg}</p>`
    });

    if(data.messageId){
      return {
        success: true,
        code : 10405
      }
    }else{
      return {
        success: false,
        code : 10406
      }
    }
  }
}
