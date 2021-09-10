import { Module } from '@nestjs/common';
import { OshiService } from './oshi.service';

@Module({
  providers: [OshiService]
})
export class OshiModule {}
