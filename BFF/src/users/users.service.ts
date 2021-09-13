import { Injectable, Req, Request } from '@nestjs/common';
import { SessionService } from 'src/session/session.service';

export type User = any;

@Injectable()
export class UsersService {
    constructor(
        private sessionService: SessionService,
    ) {}

    private readonly users = [
        {
          id: "1",
          username: '犬寄しのぶ',
          email: 'fukids34@gmail.com',
          icon: 'https://pbs.twimg.com/media/Enk1ojwUUAExAFo.jpg',
        },
        {
          id: "2",
          username: '大鳴門むに',
          email: 'test@example.com',
          icon: 'https://pbs.twimg.com/media/D8IDOlrVsAEMzIi.png',
        },
        {
          id: "3",
          username: '山手響子',
          email: 'test2@example.com',
          icon: 'https://d4dj.bushimo.jp/wordpress/wp-content/uploads/EP_KkdCUcAEJ-iG.png',
        },
    ];

    async findAll(): Promise<User | undefined> {
        return this.users;
    }

    async findOneByEmail(@Req() req?: Request): Promise<User | undefined> {
        const email = this.sessionService.readSession(req)
        return this.users.find(user => user.email === email);
    }
}
