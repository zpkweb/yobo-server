import { Inject, Provide } from "@midwayjs/decorator";
import { MessageServer } from './message';

@Provide()
export default class Message {
  @Inject()
  messageServer: MessageServer;

  async create(payload) {
    return await this.messageServer.create(payload)
  }

  async findAll(payload) {
    return await this.messageServer.retrieveAll(payload)
  }

  async search(payload) {
    return await this.messageServer.search(payload)
  }

  async delete(messageId) {
    return await this.messageServer.delete(messageId)
  }
}
