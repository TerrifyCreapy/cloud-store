import { UserEntity } from "src/user/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum FilesType {
  PHOTOS = "photos",
  TRASH = "trash"
}

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  filename: string;
  @Column()
  original_filename: string;
  @Column()
  size: number;
  @Column()
  mime_type: string;
  @DeleteDateColumn()
  deletedAt?: Date;
  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity;
}
