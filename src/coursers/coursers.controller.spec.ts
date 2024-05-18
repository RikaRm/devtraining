import { Test, TestingModule } from '@nestjs/testing';
import { CoursersController } from './coursers.controller';

describe('CoursersController', () => {
  let controller: CoursersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursersController],
    }).compile();

    controller = module.get<CoursersController>(CoursersController);
  });

  describe('should be defined', () => {
    const result = controller.findAll();
    expect(typeof result === 'object').toBeTruthy();
  });
});
