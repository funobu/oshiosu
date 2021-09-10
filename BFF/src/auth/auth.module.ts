import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.starategy';

@Module({
  providers: [AuthService, GoogleStrategy],
  exports: [GoogleStrategy, AuthService]
})
export class AuthModule {}
