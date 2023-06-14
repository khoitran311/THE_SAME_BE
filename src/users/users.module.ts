import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { InterestModule } from 'src/interest/interest.module';
import { RolesModule } from 'src/roles/roles.module';
import { CustomEmailValidation } from './class-validator';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), NestjsFormDataModule, RolesModule, InterestModule],
  controllers: [UsersController],
  providers: [UsersService, CustomEmailValidation],
  exports: [UsersService],
})
export class UsersModule {}
