import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import { Repository } from "typeorm";
export declare class FilesService {
    private repository;
    constructor(repository: Repository<FileEntity>);
    create(createFileDto: CreateFileDto): FileEntity;
    findAll(): Promise<FileEntity[]>;
    findOne(id: number): Promise<FileEntity>;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(id: number): string;
}
