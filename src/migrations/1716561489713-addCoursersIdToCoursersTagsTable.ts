import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { table_relation_name } from './1716559936994-CreateCoursesTagsTable';

export class AddCoursersIdToCoursersTagsTable1716561489713
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      table_relation_name,
      new TableColumn({
        name: 'coursesId',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createIndex(
      table_relation_name,
      new TableIndex({
        name: 'IDX_coursesId',
        columnNames: ['coursesId'],
      }),
    );

    await queryRunner.createForeignKey(
      table_relation_name,
      new TableForeignKey({
        name: 'FK_coursesId',
        columnNames: ['coursesId'],
        referencedTableName: 'courses',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(table_relation_name, 'FK_coursesId');
    await queryRunner.dropColumn(table_relation_name, 'coursesId');
  }
}
