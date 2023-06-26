import { FileEntity } from 'src/files/entities/file.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    files: FileEntity[];
}
