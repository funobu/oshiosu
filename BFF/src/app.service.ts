import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLogined(): string {
    return 'ログイン成功';
  }
}
