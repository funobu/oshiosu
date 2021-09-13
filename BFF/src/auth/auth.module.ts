import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.starategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, GoogleStrategy],
  exports: [GoogleStrategy, AuthService]
})
export class AuthModule {}
