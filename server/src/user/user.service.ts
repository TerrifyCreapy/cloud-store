import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>) {
  }

  async findByEmail(email: string) {
    const user = this.repository.findOne({where: {email}});
    return user;
  }

  async findById(id: number) {
    const user = this.repository.findOne({where: {id}});
    return user;
  }

  async create(dto: CreateUserDto) {
    const saltCount = 10;
    const salt = await genSalt(saltCount);
    dto.password = await hash(dto.password, salt);
    const user = this.repository.save(dto);
    return user;
  }
}
