import { IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator';
import { CustomNameRoleValidation } from './class-validator';

export class CreateRolesDto {
  @IsNotEmpty()
  @IsString()
  @Validate(CustomNameRoleValidation)
  public name: string;

  @IsOptional()
  @IsString()
  public description?: string;
}

export class UpdateRolesDto {
  @IsNotEmpty()
  @IsString()
  @Validate(CustomNameRoleValidation)
  public name?: string;

  @IsOptional()
  @IsString()
  public description?: string;
}
