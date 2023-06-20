/// <reference types="multer" />
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity, FilesType } from './entities/file.entity';
import { Repository } from "typeorm";
export declare class FilesService {
    private repository;
    constructor(repository: Repository<FileEntity>);
    create(file: Express.Multer.File, userId: number): Promise<{
        filename: string;
        original_filename: string;
        size: number;
        mime_type: string;
        user: {
            id: number;
        };
    } & FileEntity>;
    findAll(id: number, fileType: FilesType): Promise<FileEntity[]>;
    findOne(id: number): Promise<FileEntity>;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(id: number, del: string): Promise<import("typeorm").UpdateResult>;
}
