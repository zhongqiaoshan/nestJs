import { Test, TestingModule } from '@nestjs/testing';
import { ArticeController } from './artice.controller';

describe('ArticeController', () => {
  let controller: ArticeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticeController],
    }).compile();

    controller = module.get<ArticeController>(ArticeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
