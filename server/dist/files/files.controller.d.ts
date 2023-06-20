/// <reference types="multer" />
import { FilesService } from './files.service';
import { FilesType } from './entities/file.entity';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(id: number, fileType: FilesType): Promise<import("./entities/file.entity").FileEntity[]>;
    create(file: Express.Multer.File, id: number): Promise<{
        filename: string;
        original_filename: string;
        size: number;
        mime_type: string;
        user: {
            id: number;
        };
    } & import("./entities/file.entity").FileEntity>;
    delete(id: number, del: string): Promise<import("typeorm").UpdateResult>;
}
