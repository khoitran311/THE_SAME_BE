import { IsDefined, IsEmail, IsEnum, IsString, Validate } from 'class-validator';
import { genderUser } from 'src/app/enum/common';
import { CustomEmailValidation } from './class-validator';

export class RegisterDto {
  @IsDefined()
  @IsEmail()
  @Validate(CustomEmailValidation)
  email: string;

  @IsDefined()
  @IsString()
  last_name: string;

  @IsDefined()
  @IsString()
  first_name: string;

  @IsDefined()
  @IsString()
  password: string;

  @IsDefined()
  @IsString()
  confirm_password: string;

  @IsEnum(genderUser)
  @IsDefined()
  gender: genderUser;
}
