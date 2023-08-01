import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './roles.entity';
import { CustomNameRoleValidation } from './class-validator';

@Module({
  imports: [TypeOrmModule.forFeature([Roles]), NestjsFormDataModule],
  controllers: [RolesController],
  providers: [RolesService, CustomNameRoleValidation],
  exports: [RolesService],
})
export class RolesModule {}
