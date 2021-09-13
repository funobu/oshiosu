import { Injectable, Req, Request } from '@nestjs/common';
import { SessionService } from './session/session.service';

@Injectable()
export class AppService {
  constructor(
    private readonly sessionService: SessionService,
  ) {}
    
  getHello(): string {
    return 'Hello World!';
  }

  getLogined(@Req() req: Request): string {
    const user = this.sessionService.readSession(req)
    return `ようこそ ${user}さん。`;
  }
}
