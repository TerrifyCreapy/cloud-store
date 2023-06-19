/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(): Promise<import("./entities/file.entity").FileEntity[]>;
    create(file: Express.Multer.File): import("./entities/file.entity").FileEntity;
}
