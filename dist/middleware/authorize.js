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
exports.AuthorizeMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
let AuthorizeMiddleware = class AuthorizeMiddleware {
    resolve() {
        return async (ctx, next) => {
            const bearerHeader = ctx.req.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];
                try {
                    const decoded = await this.jwt.verify(bearerToken, this.jwtConfig.secret);
                    if ((ctx.request.body && ctx.request.body.userId) || (ctx.request.query && ctx.request.query.userId)) {
                        if (ctx.request.body.userId === decoded.userId || ctx.request.query.userId === decoded.userId) {
                            ctx.state.user = decoded.data;
                        }
                        else {
                            const invalidToken = () => {
                                ctx.body = {
                                    code: '10106',
                                    msg: ctx.__('10106')
                                };
                                ctx.status = 403;
                            };
                            return await invalidToken();
                        }
                    }
                    else {
                        if (decoded.userId) {
                            ctx.state.user = decoded;
                        }
                        else {
                            const invalidToken = () => {
                                ctx.body = {
                                    code: '10106',
                                    msg: ctx.__('10106')
                                };
                                ctx.status = 403;
                            };
                            return await invalidToken();
                        }
                    }
                    return await next();
                }
                catch (err) {
                    const noAccess = () => {
                        ctx.body = {
                            code: '10104',
                            msg: ctx.__('10104')
                        };
                        ctx.status = 403;
                    };
                    return await noAccess();
                }
            }
            else {
                const noToken = () => {
                    ctx.body = {
                        code: '10103',
                        msg: ctx.__('10103')
                    };
                    ctx.status = 403;
                };
                return noToken();
            }
        };
    }
};
__decorate([
    decorator_1.Plugin(),
    __metadata("design:type", Object)
], AuthorizeMiddleware.prototype, "jwt", void 0);
__decorate([
    decorator_1.Config('jwt'),
    __metadata("design:type", Object)
], AuthorizeMiddleware.prototype, "jwtConfig", void 0);
AuthorizeMiddleware = __decorate([
    decorator_1.Provide()
], AuthorizeMiddleware);
exports.AuthorizeMiddleware = AuthorizeMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvYXV0aG9yaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUs5RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQU85QixPQUFPO1FBQ0wsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQW9CLEVBQUUsRUFBRTtZQUNsRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RCxJQUFHLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTtnQkFDdEMsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFHO29CQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBRXpFLElBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDO3dCQUNsRyxJQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFDOzRCQUMzRixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO3lCQUUvQjs2QkFBSTs0QkFDSCxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7Z0NBQ3hCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7b0NBQ1QsSUFBSSxFQUFFLE9BQU87b0NBQ2IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lDQUNyQixDQUFBO2dDQUNELEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUNuQixDQUFDLENBQUE7NEJBQ0QsT0FBTyxNQUFNLFlBQVksRUFBRSxDQUFDO3lCQUM3QjtxQkFDRjt5QkFBSTt3QkFDSCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7NEJBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzt5QkFFMUI7NkJBQUk7NEJBQ0gsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO2dDQUN4QixHQUFHLENBQUMsSUFBSSxHQUFHO29DQUNULElBQUksRUFBRSxPQUFPO29DQUNiLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpQ0FDckIsQ0FBQTtnQ0FDRCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFBOzRCQUNELE9BQU8sTUFBTSxZQUFZLEVBQUUsQ0FBQzt5QkFDN0I7cUJBQ0Y7b0JBQ0QsT0FBTyxNQUFNLElBQUksRUFBRSxDQUFDO2lCQUNyQjtnQkFBQSxPQUFNLEdBQUcsRUFBQztvQkFDVCxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7d0JBQ3BCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7NEJBQ1QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lCQUNyQixDQUFBO3dCQUNELEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNuQixDQUFDLENBQUE7b0JBQ0QsT0FBTyxNQUFNLFFBQVEsRUFBRSxDQUFDO2lCQUN6QjthQUVGO2lCQUFNO2dCQUNMLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtvQkFDbkIsR0FBRyxDQUFDLElBQUksR0FBRzt3QkFDVCxJQUFJLEVBQUUsT0FBTzt3QkFDYixHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7cUJBQ3JCLENBQUE7b0JBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ25CLENBQUMsQ0FBQTtnQkFDRCxPQUFPLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7QUFwRUM7SUFEQyxrQkFBTSxFQUFFOztnREFDTDtBQUdKO0lBREMsa0JBQU0sQ0FBQyxLQUFLLENBQUM7O3NEQUNKO0FBTEMsbUJBQW1CO0lBRC9CLG1CQUFPLEVBQUU7R0FDRyxtQkFBbUIsQ0FzRS9CO0FBdEVZLGtEQUFtQiJ9