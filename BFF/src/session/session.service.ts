import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
    createSession(req: any, value: string) {
        req.session.user = value
        console.log(req.session.user)
    }

    readSession(req: any): string {
        console.log(req.session.user)
        if (!req.session.user) {
            console.log('passeed')
            return undefined;
        }
        return req.session.user
    }
}
