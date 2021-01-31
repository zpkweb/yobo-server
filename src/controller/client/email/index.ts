import { Inject, Controller, Provide, Post, Body, ALL, Config, Plugin } from '@midwayjs/decorator';
import EmailService from 'src/service/email';

@Provide()
@Controller('/api/email')
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
   * 出价
   * @param retrievePasswordBody
   */
  @Post('/send')
  async send(@Body(ALL) body) {
    return await this.emailService.send(body)
  }

  /**
   * 出价
   * @param retrievePasswordBody
   */
  @Post('/bid')
  async bid(@Body(ALL) body) {
    return await this.emailService.bid(body)
  }
}
