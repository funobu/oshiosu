import { Module } from '@nestjs/common';
import { InfraService } from './infra.service';

@Module({
  providers: [InfraService]
})
export class InfraModule {}
