import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'hello session!',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(parseInt(process.env.PORT, 3000) || 3000);
}
bootstrap();
