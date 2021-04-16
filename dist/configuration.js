"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerConfiguration = void 0;
const decorator_1 = require("@midwayjs/decorator");
const swagger = require("@midwayjs/swagger");
const orm = require("@midwayjs/orm");
let ContainerConfiguration = class ContainerConfiguration {
    async onReady(container) {
    }
};
ContainerConfiguration = __decorate([
    decorator_1.Configuration({
        imports: [
            orm,
            swagger
        ]
    })
], ContainerConfiguration);
exports.ContainerConfiguration = ContainerConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWFuc2h1by9Eb2N1bWVudHMvenBrL2dpdGh1Yi95b2JvLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLG1EQUFvRDtBQUVwRCw2Q0FBNkM7QUFDN0MscUNBQXFDO0FBU3JDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBS2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBMkI7SUEyRHpDLENBQUM7Q0FDRixDQUFBO0FBakVZLHNCQUFzQjtJQVBsQyx5QkFBYSxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsR0FBRztZQUNILE9BQU87U0FDUjtLQUNGLENBQUM7R0FFVyxzQkFBc0IsQ0FpRWxDO0FBakVZLHdEQUFzQiJ9