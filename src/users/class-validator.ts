/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from 'src/users/users.service';

@ValidatorConstraint({ name: 'email', async: true })
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
