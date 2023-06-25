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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const file_entity_1 = require("./entities/file.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let FilesService = class FilesService {
    constructor(repository) {
        this.repository = repository;
    }
    create(file, userId) {
        return this.repository.save({
            filename: file.filename,
            original_filename: file.originalname,
            size: file.size,
            mime_type: file.mimetype,
            user: { id: userId },
        });
    }
    findAll(id, fileType) {
        const dbq = this.repository.createQueryBuilder("files");
        dbq.where("files.userId = :userId", { userId: id });
        if (fileType === "photos") {
            dbq.andWhere("files.mime_type ILIKE :type", { type: "%image%" });
        }
        if (fileType === "trash") {
            dbq.withDeleted().andWhere("files.deletedAt IS NOT NULL");
        }
        return dbq.getMany();
    }
    async findOne(name) {
        try {
            const dbq = this.repository.createQueryBuilder("files");
            dbq.where("filename = :filename", { filename: name });
            const file = await dbq.getOne();
            if (file === null || file === void 0 ? void 0 : file.private)
                throw new Error("File is private");
            if (!file)
                throw new Error("No file");
            return file;
        }
        catch (e) {
            console.error(e.message);
            throw new common_1.ForbiddenException(e.message);
        }
    }
    update(id, updateFileDto) {
        return `This action updates a #${id} file`;
    }
    remove(id, del) {
        try {
            let delArray = del.split(",");
            const dbq = this.repository.createQueryBuilder("files");
            dbq.where("id IN (:...ids) AND userId = :userId", {
                ids: delArray,
                userId: id
            });
            return dbq.softDelete().execute();
        }
        catch (e) {
            console.error(e);
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map