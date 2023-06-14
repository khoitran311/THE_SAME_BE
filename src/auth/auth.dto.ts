import { IsEmail, IsEnum, IsNotEmpty, IsString, Validate } from 'class-validator';
import { genderUser } from 'src/app/enum/common';
import { CustomEmailValidation } from './class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  @Validate(CustomEmailValidation)
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
