import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
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

        return {
        message: 'Success',
        user: req.user
        }
    }
}
