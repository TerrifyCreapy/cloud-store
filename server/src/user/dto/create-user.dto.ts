import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: "test@test.ru"
    })
    email: string;
    @ApiProperty({
        default: "Grigoriy"
    })
    fullname: string;
    @ApiProperty({
        default: "123"
    })
    password: string;
}
