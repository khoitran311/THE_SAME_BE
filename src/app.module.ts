import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatchsModule } from './matchs/matchs.module';
import { RolesModule } from './roles/roles.module';
import { RecommendsModule } from './recommends/recommends.module';
import { FirmsModule } from './firms/firms.module';
import { InterestModule } from './interest/interest.module';
import { CategorysModule } from './categorys/categorys.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    MatchsModule,
    RolesModule,
    RecommendsModule,
    FirmsModule,
    InterestModule,
    CategorysModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
