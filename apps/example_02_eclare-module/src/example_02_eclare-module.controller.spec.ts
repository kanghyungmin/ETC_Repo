import { Test, TestingModule } from '@nestjs/testing';
import { Example02EclareModuleController } from './example_02_eclare-module.controller';
import { Example02EclareModuleService } from './example_02_eclare-module.service';

describe('Example02EclareModuleController', () => {
  let example02EclareModuleController: Example02EclareModuleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Example02EclareModuleController],
      providers: [Example02EclareModuleService],
    }).compile();

    example02EclareModuleController = app.get<Example02EclareModuleController>(Example02EclareModuleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(example02EclareModuleController.getHello()).toBe('Hello World!');
    });
  });
});
