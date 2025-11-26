import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title_en: string; // Título en inglés

  @Column()
  title_es: string; // Título en español

  @Column('text')
  description_en: string;

  @Column('text')
  description_es: string;

  @Column()
  beforeImage: string; // URL de la foto "Antes"

  @Column()
  afterImage: string; // URL de la foto "Después"

  @Column()
  category: string; // 'electrical' o 'construction'
}
