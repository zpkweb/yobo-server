import { Body, Controller, Get, Inject, Post, Provide, Query, ALL } from "@midwayjs/decorator";
import Message from 'src/service/message'

@Provide()
@Controller('/api/admin/message', {tagName:'后台-消息'})
export class AdminMessageController {

  @Inject()
  message: Message;

  @Get('/', {summary:'获取所有消息'})
  async findAll(@Query(ALL) queryAll) {
    const data = await this.message.findAll(queryAll);
    return data;
  }

  @Get('/search', {summary:'获取所有消息'})
  async search(@Query(ALL) queryAll) {
    const data = await this.message.search(queryAll);
    return data;
  }




  @Post('/delete',{summary:'删除消息'})
  async delete(@Body() messageId) {
    const data = await this.message.delete(messageId);
    return data;
  }

}
