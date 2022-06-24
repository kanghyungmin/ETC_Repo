import { Module } from '@nestjs/common';
import { Example02EclareModuleController } from './example_02_eclare-module.controller';
import { Example02EclareModuleService } from './example_02_eclare-module.service';

@Module({
  imports: [],
  controllers: [Example02EclareModuleController],
  providers: [Example02EclareModuleService],
})
export class Example02EclareModuleModule {}
