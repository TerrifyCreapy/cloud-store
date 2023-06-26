import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        token: string;
        email: string;
        id: number;
    }>;
    register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
