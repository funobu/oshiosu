import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
    async createSession(req: any, value: string): Promise<any> {
        req.session.user = value
        req.session.save()
        console.log(req.session.user)
    }

    async readSession(req: any): Promise<any> {
        console.log(req.session)
        if (req.session.user == undefined) {
            return null;
        }
        return req.session.user
    }
}
