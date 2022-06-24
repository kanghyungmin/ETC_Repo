import { NestFactory } from '@nestjs/core';
import { Example02EclareModuleModule } from './example_02_eclare-module.module';

async function bootstrap() {
  const app = await NestFactory.create(Example02EclareModuleModule);
  await app.listen(3000);
}
bootstrap();
