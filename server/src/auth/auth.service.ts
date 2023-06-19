import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findByEmail(email);

        const saltCnt = 10;
        const salt = await bcrypt.genSalt(saltCnt);

        const hashPass = await bcrypt.hash(pass, salt);

        if(user && bcrypt.compare(user.password, hashPass)) {
            const {password, ...results} = user;
            return results;
        }

        return null;
    }

    

}
