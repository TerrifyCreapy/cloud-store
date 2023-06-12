import { Controller, Post, UploadedFile, UseInterceptors, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import {FileInterceptor} from "@nestjs/platform-express"
import { diskStorageFile } from './storage';

import {ApiConsumes, ApiBody} from "@nestjs/swagger";

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  
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
  create(@UploadedFile(new ParseFilePipe({validators: [new MaxFileSizeValidator({maxSize: 1024 * 1024 * 5})]})) file: Express.Multer.File) {
    return this.filesService.create(file);
  }

}
