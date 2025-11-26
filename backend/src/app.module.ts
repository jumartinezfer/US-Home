import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importar ConfigModule
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    // 1. Cargar variables de entorno (Debe ir primero)
    ConfigModule.forRoot(),

    // 2. Usar las variables en la conexión
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5433'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
