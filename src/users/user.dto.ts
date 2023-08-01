import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { genderUser } from 'src/app/enum/common';
import { CustomEmailValidation } from './class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  last_name: string;

  @IsDefined()
  @IsString()
  first_name: string;

  @IsDefined()
  @IsEmail()
  @Validate(CustomEmailValidation)
  email: string;

  @IsArray() // Nếu có dữ liệu phải là dạng array
  @ArrayMinSize(1)
  role: number[];

  @IsEnum(genderUser)
  @IsDefined()
  gender: genderUser;

  @IsDefined()
  @IsString()
  password: string;

  @IsArray() // Nếu có dữ liệu phải là dạng array
  interest: number[];

  @IsOptional()
  @IsString()
  public address?: string;

  @IsOptional()
  @IsString()
  public avatar?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  public last_name?: string;

  @IsOptional()
  @IsString()
  public first_name?: string;

  @IsOptional()
  @IsEmail()
  @Validate(CustomEmailValidation)
  public email?: string;

  @IsOptional()
  @IsArray() // Nếu có dữ liệu phải là dạng array
  public role?: number[];

  @IsOptional()
  @IsEnum(genderUser)
  public gender?: genderUser;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsArray() // Nếu có dữ liệu phải là dạng array
  public interest?: number[];

  @IsOptional()
  @IsString()
  public address: string;

  @IsOptional()
  @IsString()
  public avatar: string;
}
