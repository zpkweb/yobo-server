import { Inject, Provide } from "@midwayjs/decorator";
import { MessageService } from './message';

@Provide()
export default class Message {
  @Inject()
  messageService: MessageService;

  async create(payload) {
    return await this.messageService.create(payload)
  }

  async findAll(payload) {
    return await this.messageService.retrieveAll(payload)
  }

  async search(payload) {
    return await this.messageService.search(payload)
  }

  async delete(messageId) {
    return await this.messageService.delete(messageId)
  }
}
