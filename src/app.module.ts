import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({
      type: process.env.POSTGRES_TYPE as any,
      host: process.env.PG_CONTAINER_NAME,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MatchsModule,
    RolesModule,
    RecommendsModule,
    FirmsModule,
    InterestModule,
    CategorysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
