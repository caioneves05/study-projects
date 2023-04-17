import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      // Ignora as propriedades que não estão no DTO
      whitelist: true
    })
  )

    useContainer(app.select(AppModule), { fallbackOnErrors: true })

  await app.listen(3045);
}
bootstrap();

