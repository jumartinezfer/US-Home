import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger'; // Importar
import { ProjectsService } from './projects.service';

@ApiTags('projects') // Agrupa en Swagger
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proyecto' }) // Descripción
  create(@Body() body: any) {
    return this.projectsService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proyectos' }) // Descripción
  findAll(@Query('category') category?: string) {
    if (category) {
      return this.projectsService.findByCategory(category);
    }
    return this.projectsService.findAll();
  }
}
