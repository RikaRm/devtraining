import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1716555269167 } from 'src/migrations/1716555269167-CreateCoursesTable';
import { CreateTagsTable1716556487220 } from 'src/migrations/1716556487220-CreateTagsTable';
import { CreateCoursesTagsTable1716559936994 } from 'src/migrations/1716559936994-CreateCoursesTagsTable';
import { AddCoursersIdToCoursersTagsTable1716561489713 } from 'src/migrations/1716561489713-addCoursersIdToCoursersTagsTable';
import { AddTagsIdToCoursersTagsTable1716580063029 } from 'src/migrations/1716580063029-addTagsIdToCoursersTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  // synchronize: false,
  migrations: [
    CreateCoursesTable1716555269167,
    CreateTagsTable1716556487220,
    CreateCoursesTagsTable1716559936994,
    AddCoursersIdToCoursersTagsTable1716561489713,
    AddTagsIdToCoursersTagsTable1716580063029,
  ],
});
