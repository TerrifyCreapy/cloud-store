import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    me(id: number | null): Promise<import("./entities/user.entity").UserEntity>;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").UserEntity>;
}
