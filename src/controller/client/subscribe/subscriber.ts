import { ALL, Body, Query, Controller, Get, Inject, Post, Provide, Del } from "@midwayjs/decorator";
import { Context } from 'egg';
import { SubscriberServer } from "src/service/subscribe/subscriber";

@Provide()
@Controller('/api/subscriber', { tagName: '订阅' })

export class SubscriberController {

  @Inject()
  subscriberServer: SubscriberServer;

  @Inject()
  ctx: Context;

  @Post()
  async create(@Body(ALL) createBody) {
    const result = await this.subscriberServer.create({
      email: createBody.email,
      userId: createBody.userId
    })
    return result;
  }

  @Get()
  async find(@Query(ALL) findQuery) {
    const result = await this.subscriberServer.retrieve({
      email: findQuery.email,
      userId: findQuery.userId
    })
    return result;
  }

  @Del()
  async delete(@Body(ALL) deleteBody) {
    const result = await this.subscriberServer.delete({
      email: deleteBody.email,
      userId: deleteBody.userId
    })
    return result;
  }


}
