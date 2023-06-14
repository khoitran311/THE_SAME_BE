import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FormDataRequest } from 'nestjs-form-data';
import { TransformInterceptor } from 'src/transform.interceptor';
import { ResponseMessage } from 'src/response.decorator';
import { REGISTER } from 'src/response.constants';
import { RegisterDto } from './auth.dto';
import { Users } from 'src/users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(REGISTER)
  async register(@Body() register: RegisterDto): Promise<Users> {
    if (register.confirm_password !== register.password) {
      throw new NotFoundException('Password incorrect');
    }
    return this.authService.register(register);
  }
}
