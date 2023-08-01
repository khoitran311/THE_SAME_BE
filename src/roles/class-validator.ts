/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { RolesService } from './roles.service';

@ValidatorConstraint({ name: 'email', async: true })
@Injectable()
export class CustomNameRoleValidation implements ValidatorConstraintInterface {
  constructor(private readonly rolesService: RolesService) {}

  async validate(value: string, _args: ValidationArguments): Promise<boolean> {
    const role = await this.rolesService.findByName(value);

    if (role) return false;
    return true;
  }
  defaultMessage(_args: ValidationArguments) {
    return `Name already exist`;
  }
}
