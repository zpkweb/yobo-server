import { Body, Controller, Inject, Post, Provide, ALL } from "@midwayjs/decorator";
import Message from 'src/service/message'

@Provide()
@Controller('/api/message', {tagName:'消息'})
export class MessageController {

  @Inject()
  message: Message;

  @Post('/',{summary:'发送消息'})
  async postBanner(@Body(ALL) body) {
    const data = await this.message.create(body);
    return data;
  }



}
