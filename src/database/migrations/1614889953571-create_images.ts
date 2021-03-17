import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1614889953571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name:'id',
          type:'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'kitnet_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageKitnet',
          columnNames: ['kitnet_id'],
          referencedTableName: 'kitnets',
          referencedColumnNames: ['id'],
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }
}
