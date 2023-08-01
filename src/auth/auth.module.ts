import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { RolesModule } from 'src/roles/roles.module';
import { CustomEmailValidation } from 'src/auth/class-validator';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [NestjsFormDataModule, UsersModule, RolesModule],
  controllers: [AuthController],
  providers: [AuthService, CustomEmailValidation],
  exports: [AuthService],
})
export class AuthModule {}
