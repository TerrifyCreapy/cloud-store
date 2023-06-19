import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").UserEntity>;
    findAll(): number;
    findOne(id: string): number;
    update(id: string, updateUserDto: UpdateUserDto): number;
    remove(id: string): number;
}
