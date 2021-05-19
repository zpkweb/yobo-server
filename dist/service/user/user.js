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
exports.UserService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
const user_1 = require("../../entity/user/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const user_2 = require("../base/user/user");
let UserService = class UserService {
    async getUser() {
        return 123;
    }
    async search(payload) {
        let user;
        if (payload && Object.keys(payload).length) {
            let isParams = false;
            Object.keys(payload).forEach((item) => {
                if (payload[item]) {
                    isParams = true;
                }
            });
            if (isParams) {
                let result = await this.baseUserServer.baseSearchUser(payload);
                let data = result[0];
                let total = result[1];
                if (data) {
                    return {
                        data: {
                            list: data,
                            total
                        },
                        success: true,
                        code: 10009
                    };
                }
                else {
                    return {
                        success: false,
                        code: 10010
                    };
                }
            }
            else {
                user = await this.baseUserServer.baseRetrieveUserAll();
            }
        }
        else {
            user = await this.baseUserServer.baseRetrieveUserAll();
        }
        if (user) {
            return {
                data: user,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async find(payload) {
        let user;
        if (payload && Object.keys(payload).length) {
            user = await this.baseUserServer.baseRetrieveUserId(payload.userId);
        }
        else {
            user = await this.baseUserServer.baseRetrieveUserAll();
        }
        if (user) {
            return {
                data: user,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async retrieveUserId(userId) {
        const user = await this.baseUserServer.baseRetrieveUserId(userId);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async edit(userId) {
        const user = await this.baseUserServer.baseRetrieveUserId(userId);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async remove(userId) {
        const user = await this.baseUserServer.baseDeleteUser(userId);
        if (user.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
    async findInfo(userId) {
        let user;
        const base = await this.baseUserServer.baseRetrieveUserId(userId);
        if (base) {
            user = base;
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
        const identitys = await this.baseUserServer.baseRetrieveUserId(userId);
        if (identitys) {
            user = identitys;
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
        if (user) {
            return {
                data: user,
                success: true,
                code: 10009
            };
        }
        else {
            return {
                success: false,
                code: 10010
            };
        }
    }
    async hasUser(userId) {
        const user = await this.baseUserServer.BaseHas(userId);
        if (user) {
            return {
                data: user,
                success: true,
                code: 10201
            };
        }
        else {
            return {
                success: false,
                code: 10202
            };
        }
    }
    async changePassword(payload) {
        const user = await this.baseUserServer.baseRetrieveUser(payload);
        if (!user) {
            return {
                success: false,
                code: 10202
            };
        }
        const passwordMd5 = crypto.createHash('md5').update(payload.passwordOld).digest('hex');
        if (passwordMd5 !== user.password) {
            return {
                success: false,
                code: 10204
            };
        }
        const changeUser = await this.baseUserServer.baseUpdateUser({
            userId: user.userId,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: crypto.createHash('md5').update(payload.passwordNew).digest('hex')
        });
        if (changeUser.affected) {
            return {
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async passwordRetrieveCodeSend(payload) {
        const user = await this.baseUserServer.baseRetrieveUser(payload);
        if (!user) {
            return {
                success: false,
                code: 10413
            };
        }
        let transporter = nodemailer.createTransport({
            service: this.email.service,
            port: 465,
            secureConnection: true,
            auth: {
                user: this.email.user,
                pass: this.email.pass
            },
        });
        const data = await transporter.sendMail({
            from: this.email.user,
            to: payload.email,
            subject: payload.sendMail.title,
            html: `<p>` + payload.sendMail.title + `：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p>`
        });
        if (data.messageId) {
            global[`emailCode-${user.userId}`] = payload.sendMail.code;
            return {
                data: user,
                success: true,
                code: 10405
            };
        }
        else {
            return {
                success: false,
                code: 10406
            };
        }
    }
    async passwordRetrieveCodeVerify(payload) {
        const emailCode = global[`emailCode-${payload.userId}`];
        if (emailCode && emailCode === payload.code) {
            return {
                success: true,
                code: 10407
            };
        }
        else {
            return {
                success: false,
                code: 10408
            };
        }
    }
    async update(payload) {
        const user = await this.baseUserServer.baseRetrieveUserPass(payload);
        if (!user) {
            return {
                success: false,
                code: 10202
            };
        }
        let password = '';
        if (payload.password) {
            password = crypto.createHash('md5').update(payload.password).digest('hex');
        }
        else {
            password = user.password;
        }
        const userUpdate = await this.baseUserServer.baseUpdateUser({
            userId: user.userId,
            avatar: payload.avatar || user.avatar,
            name: payload.name || user.name,
            email: payload.email || user.email,
            phone: payload.phone || user.phone,
            password: password
        });
        if (userUpdate.affected) {
            const user = await this.baseUserServer.baseRetrieveUser(payload);
            return {
                data: user,
                success: true,
                code: 10007
            };
        }
        else {
            return {
                success: false,
                code: 10008
            };
        }
    }
    async deleteUserIdentity(payload) {
        const userIdentity = await this.baseUserServer.baseDeleteUserIdentity(payload);
        if (userIdentity.affected) {
            return {
                success: true,
                code: 10005
            };
        }
        else {
            return {
                success: false,
                code: 10006
            };
        }
    }
};
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], UserService.prototype, "email", void 0);
__decorate([
    orm_1.InjectEntityModel(user_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserService.prototype, "userEntity", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_2.BaseUserServer)
], UserService.prototype, "baseUserServer", void 0);
UserService = __decorate([
    decorator_1.Provide()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3VzZXIvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFDOUQsdUNBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxpREFBa0Q7QUFDbEQsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6Qyw0Q0FBbUQ7QUFHbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQVd0QixLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQU1ELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNsQixJQUFJLElBQStCLENBQUM7UUFFcEMsSUFBRyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDeEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO29CQUNmLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ2pCO1lBRUgsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFHLFFBQVEsRUFBQztnQkFDVixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTzt3QkFDTCxJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLElBQUk7NEJBQ1YsS0FBSzt5QkFDTjt3QkFDRCxPQUFPLEVBQUUsSUFBSTt3QkFDYixJQUFJLEVBQUUsS0FBSztxQkFDWixDQUFBO2lCQUNGO3FCQUFNO29CQUNMLE9BQU87d0JBQ0wsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsSUFBSSxFQUFFLEtBQUs7cUJBQ1osQ0FBQTtpQkFDRjthQUVKO2lCQUFJO2dCQUNILElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTthQUN2RDtTQUVGO2FBQUk7WUFDSCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUE7U0FDdkQ7UUFDRCxJQUFHLElBQUksRUFBQztZQUNOLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBT0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ2hCLElBQUksSUFBK0IsQ0FBQztRQUNwQyxJQUFHLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBQztZQUN4QyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNwRTthQUFJO1lBQ0gsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1NBQ3ZEO1FBQ0QsSUFBRyxJQUFJLEVBQUM7WUFDTixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTTtRQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBRyxJQUFJLEVBQUM7WUFDTixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUNmLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRSxJQUFHLElBQUksRUFBQztZQUNOLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBR0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFRN0QsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2YsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNILENBQUM7SUFPRCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDbkIsSUFBSSxJQUFRLENBQUM7UUFFYixNQUFNLElBQUksR0FBSSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbEUsSUFBRyxJQUFJLEVBQUM7WUFDTixJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2I7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7UUFFRCxNQUFNLFNBQVMsR0FBSSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkUsSUFBRyxTQUFTLEVBQUM7WUFDWCxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ2xCO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO1FBS0QsSUFBRyxJQUFJLEVBQUM7WUFDTixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBQ0gsQ0FBQztJQXNCRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDbEIsTUFBTSxJQUFJLEdBQUksTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyRCxJQUFHLElBQUksRUFBQztZQUNOLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDTCxDQUFDO0lBTUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRSxJQUFHLENBQUMsSUFBSSxFQUFDO1lBRVAsT0FBTTtnQkFDSixPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtRQUNELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkYsSUFBRyxXQUFXLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBQztZQUUvQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO1FBQ0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzdFLENBQUMsQ0FBQTtRQUdGLElBQUcsVUFBVSxDQUFDLFFBQVEsRUFBQztZQUNyQixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBRUgsQ0FBQztJQU1ELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPO1FBRXBDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1IsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtRQUVELElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFFM0MsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMzQixJQUFJLEVBQUUsR0FBRztZQUNULGdCQUFnQixFQUFFLElBQUk7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDdEI7U0FDRixDQUFDLENBQUM7UUFHSCxNQUFNLElBQUksR0FBSSxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNyQixFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSztZQUUvQixJQUFJLEVBQUUsS0FBSyxHQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFDLDZDQUE2QyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWE7U0FDekgsQ0FBQyxDQUFDO1FBRUgsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBRWhCLE1BQU0sQ0FBQyxhQUFhLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO1lBTTFELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBTUQsS0FBSyxDQUFDLDBCQUEwQixDQUFDLE9BQU87UUFFdEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBRyxTQUFTLElBQUksU0FBUyxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUM7WUFFekMsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBRUgsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNILENBQUM7SUFPRCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFFbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUcsQ0FBQyxJQUFJLEVBQUM7WUFDUCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBQ0QsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztZQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUMzRTthQUFJO1lBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7U0FDekI7UUFDRCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1lBQzFELE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtZQUNyQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSTtZQUMvQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSztZQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUM7WUFFckIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9ELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBRUo7YUFBSTtZQUVILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFFSCxDQUFDO0lBU0QsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU87UUFDOUIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUcsWUFBWSxDQUFDLFFBQVEsRUFBQztZQUN2QixPQUFPO2dCQUNMLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO2FBQUk7WUFDSCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRyxLQUFLO2FBQ2IsQ0FBQTtTQUNGO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUF2YUM7SUFEQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQzs7MENBQ1Y7QUFHTjtJQURDLHVCQUFpQixDQUFDLGlCQUFVLENBQUM7OEJBQ2xCLG9CQUFVOytDQUFhO0FBR25DO0lBREMsa0JBQU0sRUFBRTs4QkFDTyxxQkFBYzttREFBQztBQVRwQixXQUFXO0lBRHZCLG1CQUFPLEVBQUU7R0FDRyxXQUFXLENBMGF2QjtBQTFhWSxrQ0FBVyJ9