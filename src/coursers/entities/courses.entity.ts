import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './Tags.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToMany(() => Tag, (tags) => tags.courses, {
    cascade: true,
  })
  @JoinTable()
  tags: Tag[];
}
