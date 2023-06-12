import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import { Repository } from "typeorm"; 
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FilesService {

  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>) {
    
  }

  create(createFileDto: CreateFileDto) {
    return this.repository.create(createFileDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {id}});
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
