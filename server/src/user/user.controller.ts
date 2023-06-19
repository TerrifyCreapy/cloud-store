import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger/dist';
import * as bcrypt from "bcryptjs";


@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const saltCount = 10;
    const salt = bcrypt.genSalt(saltCount)
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return 1
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 1
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return 1
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 1
  }
}
