import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InfraModule } from './infra/infra.module';
import { OshiModule } from './oshi/oshi.module';

@Module({
  imports: [AuthModule, UsersModule, InfraModule, OshiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
