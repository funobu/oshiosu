import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InfraModule } from './infra/infra.module';
import { OshiModule } from './oshi/oshi.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    InfraModule,
    OshiModule,
    ConfigModule.forRoot(),
    SessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
