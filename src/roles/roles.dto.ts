import { IsDefined, IsOptional, IsString, Validate } from 'class-validator';
import { CustomNameRoleValidation } from './class-validator';

export class CreateRolesDto {
  @IsDefined()
  @IsString()
  @Validate(CustomNameRoleValidation)
  public name: string;

  @IsOptional()
  @IsString()
  public description?: string;
}

export class UpdateRolesDto {
  @IsDefined()
  @IsString()
  @Validate(CustomNameRoleValidation)
  public name?: string;

  @IsOptional()
  @IsString()
  public description?: string;
}
