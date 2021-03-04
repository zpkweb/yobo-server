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
        console.log("send", payload);
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
            subject: 'yobo-直接联系',
            html: `<p>${payload.msg}</p>`
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
        console.log("bid", payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9lbWFpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUN0RCx5Q0FBeUM7QUFHekMsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFZO0lBSy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUU1QixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBRTNDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDM0IsSUFBSSxFQUFFLEdBQUc7WUFDVCxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsTUFBTSxJQUFJLEdBQUksTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDckIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxXQUFXO1lBRXBCLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLE1BQU07U0FDOUIsQ0FBQyxDQUFDO1FBRUgsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0lBTUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFM0IsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUUzQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzNCLElBQUksRUFBRSxHQUFHO1lBQ1QsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTthQUN0QjtTQUNGLENBQUMsQ0FBQztRQUdILE1BQU0sSUFBSSxHQUFJLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsU0FBUztZQUVsQixJQUFJLEVBQUUsbURBQW1ELE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssaUJBQWlCLE9BQU8sQ0FBQyxHQUFHLE1BQU07U0FDN0gsQ0FBQyxDQUFDO1FBRUgsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7YUFBSTtZQUNILE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFHLEtBQUs7YUFDYixDQUFBO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTdFQztJQURDLGtCQUFNLENBQUMsT0FBTyxDQUFDOzsyQ0FDVjtBQUhhLFlBQVk7SUFEaEMsbUJBQU8sRUFBRTtHQUNXLFlBQVksQ0FnRmhDO2tCQWhGb0IsWUFBWSJ9