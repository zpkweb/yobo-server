import { Inject, Controller, Provide, Post, Body, ALL, Config, Plugin } from '@midwayjs/decorator';
import EmailService from 'src/service/email';

@Provide()
@Controller('/api/email', {tagName: '前端-发送邮件'})
export class EmailController {

  @Config('email')
  email;

  @Inject()
  emailService: EmailService;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  /**
   * 直接联系
   * @param retrievePasswordBody
   */
  @Post('/send', {summary: '直接联系'})
  async send(@Body(ALL) body) {
    return await this.emailService.send(body)
  }

  /**
   * 出价
   * @param retrievePasswordBody
   */
  @Post('/bid', {summary: '出价'})
  async bid(@Body(ALL) body) {
    return await this.emailService.bid(body)
  }
}
