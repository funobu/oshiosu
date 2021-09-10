import { Injectable, Req, ExecutionContext } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SessionService } from 'src/session/session.service';

@Injectable()
export class AuthService {
    constructor(
        private sessionService: SessionService
      ) {}

    async canActivate(context: ExecutionContext,): Promise<any> {
        const [req,res,next] = context.getArgs();
        console.log(req)
        return this.validateRequest(req);
    }

    async validateRequest(req: any): Promise<boolean> {
        if (this.sessionService.readSession(req) == null) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
    
    googleLogin(req: any) {
        if (req.email) {
        return {
            message: 'Signup',
            user: req.email
        }
        }

        if (!req.user) {
        return { message: 'Failed' }
        }
        
        this.sessionService.createSession(req, req.user)
        return {
        message: 'Success',
        user: req.user
        }
    }
}
