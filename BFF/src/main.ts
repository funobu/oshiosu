import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // redis接続
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    host: process.env.REDIS,
    port: 6379
  })
  redisClient.unref()
  redisClient.on('error', console.log)
  const store = new RedisStore({ client: redisClient });

  // cookieAge: 7日有効 = 1s(1000ms) * 60 -> 1m(60s) * 60 -> 1h(60m) * 24 -> 1d(24h) * 7
  const cookieAge = 10 * 60 * 1000
  app.use(
    cookieParser(),
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: store,
      cookie: {
        path: '/',
        maxAge: cookieAge,
        httpOnly: true,
      }
    }),
    passport.initialize(),
    passport.session()
  );
  await app.listen(3000);
}
bootstrap();
