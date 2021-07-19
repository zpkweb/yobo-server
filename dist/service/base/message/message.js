"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMessageService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const message_1 = require("../../../entity/message/message");
const typeorm_1 = require("typeorm");
let BaseMessageService = class BaseMessageService {
    async BaseCreate(payload) {
        return this.messageEntity
            .createQueryBuilder()
            .insert()
            .into(message_1.MessageEntity)
            .values({
            ...payload,
            isDelete: false
        })
            .execute();
    }
    async BaseRetrieveMessageId(messageId) {
        return this.messageEntity
            .createQueryBuilder()
            .where('messageId = :messageId', { messageId: messageId })
            .getOne();
    }
    async BaseRetrieveAll(payload) {
        return this.messageEntity
            .createQueryBuilder('message')
            .where('message.isDelete = :isDelete', { isDelete: false })
            .addSelect('message.createdDate')
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseSearch(payload) {
        let where = {
            isDelete: false
        };
        if (payload.type) {
            where.type = payload.type;
        }
        if (payload.owner) {
            where.owner = payload.owner;
        }
        if (payload.title) {
            where.title = typeorm_1.Like(`%${payload.title}%`);
        }
        if (payload.content) {
            where.content = typeorm_1.Like(`%${payload.content}%`);
        }
        return this.messageEntity
            .createQueryBuilder('message')
            .where(where)
            .addSelect('message.createdDate')
            .orderBy("message.id", payload.news ? "DESC" : "ASC")
            .skip((payload.currentPage - 1) * payload.pageSize)
            .take(payload.pageSize)
            .getManyAndCount();
    }
    async BaseDelete(messageId) {
        return this.messageEntity
            .createQueryBuilder('message')
            .update(message_1.MessageEntity)
            .set({
            isDelete: true
        })
            .where('message.messageId = :messageId', { messageId: messageId })
            .execute();
    }
};
__decorate([
    orm_1.InjectEntityModel(message_1.MessageEntity),
    __metadata("design:type", typeorm_1.Repository)
], BaseMessageService.prototype, "messageEntity", void 0);
BaseMessageService = __decorate([
    decorator_1.Provide()
], BaseMessageService);
exports.BaseMessageService = BaseMessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2Jhc2UvbWVzc2FnZS9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQsNkRBQTJEO0FBQzNELHFDQUEyQztBQUczQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUs3QixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYTthQUN0QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQUMsdUJBQWEsQ0FBQzthQUNuQixNQUFNLENBQUM7WUFDTixHQUFHLE9BQU87WUFDVixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFNBQVM7UUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYTthQUN0QixrQkFBa0IsRUFBRTthQUNwQixLQUFLLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxTQUFTLEVBQUcsU0FBUyxFQUFFLENBQUM7YUFDMUQsTUFBTSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDdEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQzdCLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMxRCxTQUFTLENBQUMscUJBQXFCLENBQUM7YUFDaEMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ3RCLGVBQWUsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdEIsSUFBSSxLQUFLLEdBQU87WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBQ0YsSUFBRyxPQUFPLENBQUMsSUFBSSxFQUFDO1lBQ2QsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFDO1lBQ2YsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzdCO1FBQ0QsSUFBRyxPQUFPLENBQUMsS0FBSyxFQUFDO1lBQ2YsS0FBSyxDQUFDLEtBQUssR0FBRSxjQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUV6QztRQUNELElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztZQUNqQixLQUFLLENBQUMsT0FBTyxHQUFFLGNBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO1FBSUQsT0FBTyxJQUFJLENBQUMsYUFBYTthQUN0QixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQzthQUNoQyxPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsS0FBSyxDQUFDO2FBQ3RELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUN0QixlQUFlLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDdEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQzdCLE1BQU0sQ0FBQyx1QkFBYSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQztZQUNILFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQzthQUNELEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLFNBQVMsRUFBRyxTQUFTLEVBQUUsQ0FBQzthQUNsRSxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FJRixDQUFBO0FBMUVDO0lBREMsdUJBQWlCLENBQUMsdUJBQWEsQ0FBQzs4QkFDbEIsb0JBQVU7eURBQWdCO0FBSDlCLGtCQUFrQjtJQUQ5QixtQkFBTyxFQUFFO0dBQ0csa0JBQWtCLENBNkU5QjtBQTdFWSxnREFBa0IifQ==