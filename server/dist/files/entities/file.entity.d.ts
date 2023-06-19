import { UserEntity } from "src/user/entities/user.entity";
export declare class FileEntity {
    id: number;
    filename: string;
    original_filename: string;
    size: number;
    mime_type: string;
    deletedAt?: Date;
    user: UserEntity;
}
