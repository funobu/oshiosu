import { Injectable, Req, ExecutionContext } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SessionService } from 'src/session/session.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private sessionService: SessionService,
        private userService: UsersService
      ) {}

    async canActivate(context: ExecutionContext): Promise<any> {
        const [req,res,next] = context.getArgs();
        return this.validateRequest(req);
    }

    async validateRequest(req: any): Promise<boolean> {
        const isLogined = await this.sessionService.readSession(req)
        if (!isLogined) {
            console.log('error')
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
    
    googleLogin(req: any) {
        
        if (!req.user) {
            return { message: 'Failed' }
        }
        
        this.sessionService.createSession(req, req.user.email)
        return {
        message: 'Success',
        user: req.user
        }
    }
}
