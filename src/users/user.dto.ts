import { ArrayMinSize, IsArray, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { genderUser } from 'src/app/enum/common';
import { Unique } from 'typeorm';

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
}

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsArray() // Nếu có dữ liệu phải là dạng array
  role: number[];

  @IsEnum(genderUser)
  gender: genderUser;

  @IsString()
  password: string;

  @IsArray() // Nếu có dữ liệu phải là dạng array
  interest: number[];
}
