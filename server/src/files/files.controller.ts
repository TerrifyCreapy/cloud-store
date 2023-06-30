import { Controller, Post, UploadedFile, UseInterceptors, MaxFileSizeValidator, ParseFilePipe, Get, Query, Delete, Param } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist/decorators';
import {FileInterceptor} from "@nestjs/platform-express"
import { diskStorageFile } from './storage';

import {ApiConsumes, ApiBody} from "@nestjs/swagger";
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserId } from 'src/decorators/user-id.decorator';
import { FilesType } from './entities/file.entity';


@Controller('files')
@ApiTags('files')

@ApiBearerAuth()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@UserId() id: number, @Query('type') fileType: FilesType) {
    return this.filesService.findAll(id, fileType);
  }

  @Get(":name")
  async findById(@Param("name") name: string) {
    return await this.filesService.findOne(name);
  }

  @Post(":name")
  @UseGuards(JwtAuthGuard)
  makeAnPublic(@Param("name") name: string) {
    return this.filesService
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorageFile
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  create(@UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({maxSize: 1024 * 1024 * 500})]})) file: Express.Multer.File, @UserId() id: number) {
    return this.filesService.create(file, id);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  delete(@UserId() id: number, @Query('delete_arr') del: string) {
    return this.filesService.remove(id, del)
  }
 

}
