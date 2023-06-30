import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity, FilesType } from './entities/file.entity';
import { Repository } from "typeorm"; 
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FilesService {

  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>) {
    
  }

  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({
        filename: file.filename,
        original_filename: file.originalname,
        size: file.size,
        mime_type: file.mimetype,
        user: {id: userId},
    });
  }

  findAll(id: number, fileType: FilesType) {
    const dbq = this.repository.createQueryBuilder("files");
    dbq.where("files.userId = :userId", {userId: id});
    if(fileType === "images") {
      dbq.andWhere("files.mime_type ILIKE :type", {type: "%image%"});
    }
    if(fileType === "trash") {
      dbq.withDeleted().andWhere("files.deletedAt IS NOT NULL");
    }
    return dbq.getMany();
  }

  async findOne(name: string) {
    try {
      const dbq = this.repository.createQueryBuilder("files");
      dbq.where("filename = :filename", {filename: name});
      const file = await dbq.getOne();
      if(file?.private) throw new Error("File is private");
      if(!file) throw new Error("No file")
      return file;
    }
    catch(e: unknown) {
      console.error((e as Error).message);
      throw new ForbiddenException((e as Error).message)
    }
    

    

    
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number, del: string) {
    try {
      let delArray = del.split(",");
      const dbq = this.repository.createQueryBuilder("files");
      dbq.where("id IN (:...ids) AND userId = :userId", {
        ids: delArray,
        userId: id
      });

      return dbq.softDelete().execute();
    }
    catch(e) {
      console.error(e);
    }
  }
}
