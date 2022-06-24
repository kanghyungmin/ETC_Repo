import { Injectable } from '@nestjs/common';

@Injectable()
export class Example02EclareModuleService {
  getHello(): string {
    return 'Hello World!';
  }
}
