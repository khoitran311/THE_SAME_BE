import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { DatabaseModule } from '../database/database.module';
import { rolesProviders } from './roles.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [...rolesProviders, RolesService],
  exports: [RolesService],
})
export class RolesModule {}
