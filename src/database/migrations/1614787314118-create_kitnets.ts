import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createKitnets1614787314118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // realizar as alterações: criar nova tabela, criar ou apagar campo
        await queryRunner.createTable(new Table({
          name: 'kitnets',
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
            name: "latitude",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "endereco",
            type: 'varchar'
          },
          {
            name: "metragem",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "aluguel",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "condominio",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "iptu",
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "portaria",
            type: 'boolean',
            default: false,
          },
          {
            name: "elevador",
            type: 'boolean',
            default: false,
          },
          {
            name: "mobiliado",
            type: 'boolean',
            default: false,
          },
          {
            name: "pet",
            type: 'boolean',
            default: false,
          },
          {
            name: "vaga",
            type: 'boolean',
            default: false,
          },
          {
            name: "descricao",
            type: 'text',
          },
          {
            name: "whatsapp",
            type: 'text',
          },
          ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // desfazer o que foi feito pelo método up
        await queryRunner.dropTable('kitnets');
    }

}
