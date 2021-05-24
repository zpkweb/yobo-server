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
const decorator_1 = require("@midwayjs/decorator");
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    async send(payload) {
        let transporter = nodemailer.createTransport({
            service: this.email.service,
            port: this.email.port,
            secure: true,
            auth: {
                user: this.email.user,
                pass: this.email.pass
            },
        });
        const data = await transporter.sendMail({
            from: this.email.user,
            to: this.email.user,
            subject: 'yobo-直接联系',
            html: `
        <p>邮箱：${payload.email}</p>
        <p>链接：${payload.href}</p>
        <p>内容：${payload.msg}</p>
      `
        });
        if (data.messageId) {
            return {
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
    async bid(payload) {
        let transporter = nodemailer.createTransport({
            service: this.email.service,
            port: this.email.port,
            secureConnection: true,
            auth: {
                user: this.email.user,
                pass: this.email.pass
            },
        });
        const data = await transporter.sendMail({
            from: this.email.user,
            to: payload.email,
            subject: 'yobo-出价',
            html: `<p>出价：<span style="font-size: 18px; color: red">${payload.currency} ${payload.price}</span></p><p>${payload.msg}</p>`
        });
        if (data.messageId) {
            return {
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
};
__decorate([
    decorator_1.Config('email'),
    __metadata("design:type", Object)
], EmailService.prototype, "email", void 0);
EmailService = __decorate([
    decorator_1.Provide()
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9lbWFpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx5Q0FBeUM7QUFHekMsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBSy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztRQUVoQixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBQzNDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUVyQixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO1FBYUgsTUFBTSxJQUFJLEdBQUksTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFFckIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNuQixPQUFPLEVBQUUsV0FBVztZQUVwQixJQUFJLEVBQUU7aUJBQ0ssT0FBTyxDQUFDLEtBQUs7Z0JBQ2QsT0FBTyxDQUFDLElBQUk7Z0JBQ1osT0FBTyxDQUFDLEdBQUc7T0FDcEI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDaEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNILENBQUM7SUFNRCxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU87UUFFZixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBRTNDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNyQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsTUFBTSxJQUFJLEdBQUksTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDckIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxTQUFTO1lBRWxCLElBQUksRUFBRSxtREFBbUQsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxpQkFBaUIsT0FBTyxDQUFDLEdBQUcsTUFBTTtTQUM3SCxDQUFDLENBQUM7UUFFSCxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDaEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjthQUFJO1lBQ0gsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUcsS0FBSzthQUNiLENBQUE7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUZDO0lBREMsa0JBQU0sQ0FBQyxPQUFPLENBQUM7OzJDQUNWO0FBSGEsWUFBWTtJQURoQyxtQkFBTyxFQUFFO0dBQ1csWUFBWSxDQTZGaEM7a0JBN0ZvQixZQUFZIn0=