import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
<<<<<<< HEAD
  providers: [UsersService],
=======
  providers: [...usersProviders, UsersService],
>>>>>>> f7de24c21787caaa42d5243c8e4f8a4bf2b52582
  exports: [UsersService],
})
export class UsersModule {}
