import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
  this is entry point for application
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
