import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    createUser(dto: CreateUserDto): Promise<{
        token: string;
        email: string;
        id: number;
    }>;
    login(user: UserEntity): {
        token: string;
        email: string;
        id: number;
    };
}
