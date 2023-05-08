import { Test, TestingModule } from '@nestjs/testing';
import { RecommendsController } from './recommends.controller';

describe('RecommendsController', () => {
  let controller: RecommendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendsController],
    }).compile();

    controller = module.get<RecommendsController>(RecommendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
