import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
}
