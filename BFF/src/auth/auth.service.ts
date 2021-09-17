import { Injectable, Req, ExecutionContext } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SessionService } from 'src/session/session.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private sessionService: SessionService,
        private userService: UsersService
    ) { }

    async canActivate(context: ExecutionContext): Promise<any> {
        const [req, res, next] = context.getArgs();
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

    async passwordLogin(req: Request, email: string, password: string) {
        console.log(email)
        console.log(password)
        const user = this.userService.findOnLogin(email, password)
        console.log(await user + 'desu')
        if (user == undefined) {
            console.log('失敗')
            return { message: 'failed' }
        }

        this.sessionService.createSession(req, email)
        return {
            message: 'Success'
        }
    }
}
