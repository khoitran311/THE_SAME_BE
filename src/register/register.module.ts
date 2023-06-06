import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [NestjsFormDataModule, RolesModule, UsersModule],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService],
})
export class RegisterModule {}
