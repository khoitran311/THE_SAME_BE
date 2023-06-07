import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { genderUser } from 'src/app/enum/common';
import { CustomEmailValidation } from './class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsEmail()
  @Validate(CustomEmailValidation)
  email: string;

  @IsArray() // Nếu có dữ liệu phải là dạng array
  @ArrayMinSize(1)
  role: number[];

  @IsEnum(genderUser)
  @IsNotEmpty()
  gender: genderUser;

  @IsNotEmpty()
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
