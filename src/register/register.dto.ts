import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { genderUser } from 'src/app/enum/common';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirm_password: string;

  @IsEnum(genderUser)
  @IsNotEmpty()
  gender: genderUser;
}
