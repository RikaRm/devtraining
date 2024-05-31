import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { table_relation_name } from './1716559936994-CreateCoursesTagsTable';

export class AddTagsIdToCoursersTagsTable1716580063029
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      table_relation_name,
      new TableColumn({
        name: 'tagsId',
        type: 'uuid',
        isNullable: true,
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      table_relation_name,
      new TableIndex({
        name: 'IDX_tagsId',
        columnNames: ['tagsId'],
      }),
    );

    await queryRunner.createForeignKey(
      table_relation_name,
      new TableForeignKey({
        name: 'FK_tagsId',
        columnNames: ['tagsId'],
        referencedTableName: 'tags',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(table_relation_name, 'FK_tagsId');
    await queryRunner.dropColumn(table_relation_name, 'tagsId');
  }
}
