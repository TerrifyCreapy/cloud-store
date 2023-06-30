import { UserEntity } from "src/user/entities/user.entity";
export declare enum FilesType {
    PHOTOS = "images",
    TRASH = "trash"
}
export declare class FileEntity {
    id: number;
    filename: string;
    original_filename: string;
    size: number;
    mime_type: string;
    private: boolean;
    deletedAt?: Date;
    user: UserEntity;
}
