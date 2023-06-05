import {
  Allow,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { genderUser } from 'src/app/enum/common';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
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
  address: string;

  @IsOptional()
  @IsString()
  avatar: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  public username?: string;

  @IsOptional()
  @IsEmail()
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
