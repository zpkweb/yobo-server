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
exports.CommentService = void 0;
const decorator_1 = require("@midwayjs/decorator");
let CommentService = class CommentService {
    async home(payload) {
        return {
            success: true,
            code: 10009,
            data: [{
                    id: 1,
                    src: `${this.host.origin}/images/commodity/1.png`,
                    star: 5,
                    title: '1 The staircase. Vaynor Park',
                    desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
                }, {
                    id: 2,
                    src: `${this.host.origin}/images/commodity/2.png`,
                    star: 4,
                    title: '2 The staircase. Vaynor Park',
                    desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
                }, {
                    id: 3,
                    src: `${this.host.origin}/images/commodity/3.png`,
                    star: 3,
                    title: '3 The staircase. Vaynor Park',
                    desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
                }, {
                    id: 4,
                    src: `${this.host.origin}/images/commodity/4.png`,
                    star: 2,
                    title: '4 The staircase. Vaynor Park',
                    desc: '今天我们收到了我们的艺术品。我们很满意！你们对于装框的建议非常实用，感谢你们的帮助！'
                }]
        };
    }
};
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], CommentService.prototype, "host", void 0);
CommentService = __decorate([
    decorator_1.Provide()
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL2NvbW1vZGl0eS9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFzRDtBQUd0RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBS3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztRQUNoQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxDQUFDO29CQUNMLEVBQUUsRUFBRSxDQUFDO29CQUNMLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFBeUI7b0JBQ2pELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSw4QkFBOEI7b0JBQ3JDLElBQUksRUFBRSw0Q0FBNEM7aUJBQ25ELEVBQUM7b0JBQ0EsRUFBRSxFQUFFLENBQUM7b0JBQ0wsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLHlCQUF5QjtvQkFDakQsSUFBSSxFQUFFLENBQUM7b0JBQ1AsS0FBSyxFQUFFLDhCQUE4QjtvQkFDckMsSUFBSSxFQUFFLDRDQUE0QztpQkFDbkQsRUFBQztvQkFDQSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0seUJBQXlCO29CQUNqRCxJQUFJLEVBQUUsQ0FBQztvQkFDUCxLQUFLLEVBQUUsOEJBQThCO29CQUNyQyxJQUFJLEVBQUUsNENBQTRDO2lCQUNuRCxFQUFDO29CQUNBLEVBQUUsRUFBRSxDQUFDO29CQUNMLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFBeUI7b0JBQ2pELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSw4QkFBOEI7b0JBQ3JDLElBQUksRUFBRSw0Q0FBNEM7aUJBQ25ELENBQUM7U0FDSCxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFqQ0M7SUFEQyxrQkFBTSxDQUFDLE1BQU0sQ0FBQzs7NENBQ1Y7QUFITSxjQUFjO0lBRDFCLG1CQUFPLEVBQUU7R0FDRyxjQUFjLENBb0MxQjtBQXBDWSx3Q0FBYyJ9