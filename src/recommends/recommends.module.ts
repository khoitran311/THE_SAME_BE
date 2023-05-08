import { Module } from '@nestjs/common';
import { RecommendsController } from './recommends.controller';
import { RecommendsService } from './recommends.service';

@Module({
  controllers: [RecommendsController],
  providers: [RecommendsService]
})
export class RecommendsModule {}
