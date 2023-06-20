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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const platform_express_1 = require("@nestjs/platform-express");
const storage_1 = require("./storage");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const common_2 = require("@nestjs/common");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const file_entity_1 = require("./entities/file.entity");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    findAll(id, fileType) {
        return this.filesService.findAll(id, fileType);
    }
    create(file, id) {
        return this.filesService.create(file, id);
    }
    delete(id, del) {
        return this.filesService.remove(id, del);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: storage_1.diskStorageFile
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({ validators: [new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })] }))),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Query)('delete_arr')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "delete", null);
FilesController = __decorate([
    (0, common_1.Controller)('files'),
    (0, decorators_1.ApiTags)('files'),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, decorators_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map