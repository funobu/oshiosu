import { Controller, Get, Post, Req, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { User, UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  @UseGuards(AuthService)
  getLogined(@Req() req): User {
    return this.usersService.findOneByEmail(req);
  }

  @Get('auth')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('auth/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

  @Post('login')
  passwordLogin(
    @Req() req,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.passwordLogin(req, email, password)
  }


}
