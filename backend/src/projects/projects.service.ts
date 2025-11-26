import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  // Crear un nuevo proyecto
  create(projectData: Partial<Project>) {
    const newProject = this.projectsRepository.create(projectData);
    return this.projectsRepository.save(newProject);
  }

  // Obtener todos los proyectos
  findAll() {
    return this.projectsRepository.find();
  }

  // Obtener por categoría (Construction o Electrical)
  findByCategory(category: string) {
    return this.projectsRepository.find({ where: { category } });
  }
}
