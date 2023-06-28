import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs";
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        ) {}

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

    async createUser(dto: CreateUserDto) {
        try {
            const user = await this.userService.create(dto);
            console.log(user);
            if(!user) return null;
            return {token: this.jwtService.sign({id: user.id, email: user.email}), email: user.email, id: user.id};
        }
        catch(e) {
            console.error(e);
            throw new ForbiddenException("Error with register!")
        }
    }

    login(user: UserEntity) {
        return {token: this.jwtService.sign({id: user.id, email: user.email}), email: user.email, id: user.id};
    }



}
