import { Body, Controller, NotFoundException, Post, UseInterceptors } from '@nestjs/common';
import { RegisterService } from './register.service';
import { FormDataRequest } from 'nestjs-form-data';
import { TransformInterceptor } from 'src/transform.interceptor';
import { RegisterDto } from './register.dto';
import { ResponseMessage } from 'src/response.decorator';
import { REGISTER } from 'src/response.constants';
import { Users } from 'src/users/users.entity';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @FormDataRequest()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage(REGISTER)
  async register(@Body() register: RegisterDto): Promise<Users> {
    if (register.confirm_password !== register.password) {
      throw new NotFoundException('Password incorrect');
    }
    return this.registerService.register(register);
  }
}
