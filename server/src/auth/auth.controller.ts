import { Controller, Request, Post, UseGuards, Body, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({type: CreateUserDto})
  async login(@Request() req) {
    return this.authService.login(req.user as UserEntity);
  }

  @Post('/register')
  register(@Body() dto: CreateUserDto) {
    try {
        const user = this.authService.createUser(dto);
        if(!user) throw new ForbiddenException("Error");
        return user;
    }
    catch(err) {
        console.error(err);
        throw new ForbiddenException(err);
    }
  }
}
