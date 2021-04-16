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
exports.UploadImagesService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const fs = require('fs');
const path = require("path");
const sendToWormhole = require('stream-wormhole');
let UploadImagesService = class UploadImagesService {
    async uploadImages(payload) {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        fs.mkdirSync(`public/images/${stream.fields.type || 'other'}`, { recursive: true });
        let filename = path.basename(stream.filename).split('.');
        const name = `public/images/${stream.fields.type || 'other'}/${filename[0]}-${new Date().getTime()}.${filename[filename.length - 1]}`;
        try {
            const writeStream = fs.createWriteStream(name);
            await stream.pipe(writeStream);
            stream.on('error', () => {
                return {
                    success: false,
                    code: 10016
                };
            });
            return {
                data: {
                    src: `${this.host.origin}/${name.substr(7)}`,
                    title: path.basename(stream.filename),
                    ...stream.fields
                },
                success: true,
                code: 10015
            };
        }
        catch (err) {
            ("catch error");
            await sendToWormhole(stream);
            return {
                success: false,
                code: 10016
            };
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], UploadImagesService.prototype, "ctx", void 0);
__decorate([
    decorator_1.Config('host'),
    __metadata("design:type", Object)
], UploadImagesService.prototype, "host", void 0);
UploadImagesService = __decorate([
    decorator_1.Provide()
], UploadImagesService);
exports.UploadImagesService = UploadImagesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW5zaHVvL0RvY3VtZW50cy96cGsvZ2l0aHViL3lvYm8tc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdXBsb2FkL2ltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFHOUQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLDZCQUE2QjtBQUM3QixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUlsRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVE5QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU87UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxNQUFNLElBQUksR0FBRyxpQkFBaUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBRSxFQUFFLENBQUM7UUFFdEksSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzVDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBQ3JDLEdBQUcsTUFBTSxDQUFDLE1BQU07aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQTtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBRWYsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUE7U0FDRjtJQUtILENBQUM7Q0FDRixDQUFBO0FBOUNDO0lBREMsa0JBQU0sRUFBRTs7Z0RBQ0k7QUFHYjtJQURDLGtCQUFNLENBQUMsTUFBTSxDQUFDOztpREFDVjtBQU5NLG1CQUFtQjtJQUYvQixtQkFBTyxFQUFFO0dBRUcsbUJBQW1CLENBaUQvQjtBQWpEWSxrREFBbUIifQ==