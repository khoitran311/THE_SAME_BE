/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from 'src/users/users.service';

@ValidatorConstraint({ name: 'name', async: true })
@Injectable()
export class CustomEmailValidation implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  async validate(value: string, _args: ValidationArguments): Promise<boolean> {
    const user = await this.usersService.findByEmail(value);
    if (user) return false;
    return true;
  }
  defaultMessage(_args: ValidationArguments) {
    return `Email already exist`;
  }
}
