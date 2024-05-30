import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 5006;

  app.setGlobalPrefix('/api');

/*   // CORS ayarları
  app.enableCors({
    origin: '*', // Tüm kaynaklara izin verir. Güvenlik açısından uygun şekilde yapılandırın.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
 */
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
