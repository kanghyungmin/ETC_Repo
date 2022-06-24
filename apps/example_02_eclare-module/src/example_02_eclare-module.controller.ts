import { Controller, Get } from '@nestjs/common';
import { Example02EclareModuleService } from './example_02_eclare-module.service';

@Controller()
export class Example02EclareModuleController {
  constructor(private readonly example02EclareModuleService: Example02EclareModuleService) {}

  @Get()
  getHello(): string {
    return this.example02EclareModuleService.getHello();
  }
}
