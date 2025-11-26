import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Importar esto
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('US Home Construction API')
    .setDescription('API para gestionar proyectos de construcción y electricidad')
    .setVersion('1.0')
    .addTag('projects')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // La ruta será /api

  await app.listen(3000);
}
bootstrap();
