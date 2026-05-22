import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // keeps only those fields which are there in DTO
    forbidNonWhitelisted: true, // Throws exception if extra fields are passed
    transform: true, // body should be of DTO's type
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
