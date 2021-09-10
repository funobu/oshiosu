import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: 'http://localhost:8000/auth/redirect',
            scope: ['email', 'profile'],
        });

        passport.use(this)
        passport.serializeUser((user, done) => {
            done(null, user);
        });
      
        passport.deserializeUser((user, done) => {
            done(null, user);
        });
      
    }

    async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        
        if (!profile) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        const user = {
            name: profile.displayName,
            email: profile.emails[0].value
        }
        done(null, user);
    }
    
    
    

}