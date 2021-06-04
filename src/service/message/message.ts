import { Inject, Provide } from "@midwayjs/decorator";
import { BaseMessageServer } from "src/service/base/message/message"

@Provide()
export class MessageServer {

  @Inject()
  baseMessageServer: BaseMessageServer;

  async create(payload) {
    const data = await this.baseMessageServer.BaseCreate({
      href: payload.href,
      type: payload.type,
      owner: payload.owner,
      title: payload.title,
      content: payload.content,
      contentHtml: payload.contentHtml,
    });
    if(data) {
      return {
        success: true,
        code: 10003
      }
    }else{
      return {
        success: false,
        code: 10004
      }
    }
  }

  async retrieveMessageId(messageId) {
    const data = await this.baseMessageServer.BaseRetrieveMessageId(messageId);
    if(data) {
      return {
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async retrieveAll(payload){
    const result = await this.baseMessageServer.BaseRetrieveAll({
      currentPage: payload.currentPage,
      pageSize: payload.pageSize
    });

    if(result) {
      return {
        data: {
          list: result[0],
          total: result[1]
        },
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async search(payload) {
    const result = await this.baseMessageServer.BaseSearch(payload);
    if(result) {
      return {
        data: {
          list: result[0],
          total: result[1]
        },
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  async delete(messageId) {
    const data = await this.baseMessageServer.BaseDelete(messageId);
    if(data) {
      return {
        success: true,
        code: 10005
      }
    }else{
      return {
        success: false,
        code: 10006
      }
    }
  }

}
