import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    credentials: true,
    origin: (process.env.ALLOW_ORIGINS || '').split(','),
  });

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
