import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.useGlobalPipes(new ValidationPipe()); // Classvalidator
  await app.setGlobalPrefix('api/v1/');

  await app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Clinica de Agendamentos')
    .setDescription(
      'O sistema de agendamentos é essencial para a gestão eficiente de compromissos, proporcionando organização e otimização de recursos. Automatizando o processo, ele facilita a marcação, evita conflitos de horários e melhora a experiência do cliente',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .addServer('http://localhost:3000', 'Desenvolvimento')
    .addServer('http://localhost:3001', 'Producão')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORTA_SERVIDOR);
}
bootstrap();
