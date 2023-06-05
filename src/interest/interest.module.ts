import { Module } from '@nestjs/common';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Interest } from './interest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interest]), NestjsFormDataModule],
  controllers: [InterestController],
  providers: [InterestService],
  exports: [InterestService],
})
export class InterestModule {}
