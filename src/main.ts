import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes any properties that are not in the DTO
      forbidNonWhitelisted: true, // throws an error if any properties are not in the DTO
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
