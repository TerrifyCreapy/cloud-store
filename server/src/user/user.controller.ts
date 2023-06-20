import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { UserId } from 'src/decorators/user-id.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';


@Controller('user')
@ApiTags('users')
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  me(@UserId() id: number | null) {
    try {
      if(!id) throw new Error("No id of user!");
      const user = this.userService.findById(id);
      if(!user) throw new Error("No user with such id!");
      return user;
    }
    catch(e) {
      if(e) throw new Error(e);
      else throw new ForbiddenException("Error with getting me!")
    }
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
