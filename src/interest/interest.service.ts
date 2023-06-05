import { Injectable } from '@nestjs/common';
import { Interest } from './interest.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InterestService {
  constructor(
    @InjectRepository(Interest)
    private interestRepository: Repository<Interest>,
  ) {}

  async findListInterest(interest: number[]): Promise<Partial<Interest[]>> {
    return await Promise.all(
      interest.map(
        async (uuidRole) =>
          await this.interestRepository.findOne({
            where: { id: uuidRole },
          }),
      ),
    );
  }
}
