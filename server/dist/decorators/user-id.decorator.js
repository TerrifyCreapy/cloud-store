"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
exports.UserId = (0, common_1.createParamDecorator)((_, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    return ((_a = request.user) === null || _a === void 0 ? void 0 : _a.id) ? Number(request.user.id) : null;
});
//# sourceMappingURL=user-id.decorator.js.map